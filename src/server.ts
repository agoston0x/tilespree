// Backend: serves the UI + streams the agent flow as SSE.
import express from "express";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { runFlow, PRICE, FEE_PUBLIC, FEE_PRIVATE } from "./runtime.js";
import {
  chainConfigured, usdcBalance, allowanceOf, mintUsdc, operatorAddress,
} from "./chain.js";
import { verifyLogin } from "./wallet.js";
import {
  saveSearch, listSearches, getSearch, clearSearches,
  toggleLike, likedIds, getAccount, bumpFreeUsed,
} from "./db.js";
import {
  ZG_CHAIN_ID, ZG_RPC_URL, ZG_EXPLORER, USDC_ADDRESS, AGENT_ADDRESS,
} from "./config.js";

const app = express();
app.use(express.json());
app.use(express.static(path.resolve("public")));

const FREE_LIMIT = Number(process.env.FREE_LIMIT || "3");
const FAUCET_USDC = Number(process.env.FAUCET_USDC || "10");
const FAUCET_GAS = process.env.FAUCET_GAS || "0.02"; // 0G sent for the user's approve gas

// --- QR cross-device login: session pairing ---
// Desktop opens a session + shows a QR to PUBLIC_BASE_URL/mobile.html?sid=...
// Phone derives a passkey wallet, signs a proof, then claims the session; desktop polls.
const sessions = new Map<string, { status: "pending" | "authed"; address: string | null; ts: number }>();
const PUBLIC_BASE_URL = process.env.PUBLIC_BASE_URL || "";

app.post("/api/session/new", (_req, res) => {
  const sid = randomUUID();
  sessions.set(sid, { status: "pending", address: null, ts: Date.now() });
  const base = PUBLIC_BASE_URL.replace(/\/$/, "");
  res.json({ sid, mobileUrl: base ? `${base}/mobile.html?sid=${sid}` : `/mobile.html?sid=${sid}`, hasBase: !!base });
});
app.get("/api/session/:sid", (req, res) => {
  const s = sessions.get(req.params.sid);
  res.json(s ? { status: s.status, address: s.address } : { status: "expired", address: null });
});
app.post("/api/session/:sid/claim", (req, res) => {
  const s = sessions.get(req.params.sid);
  if (!s) return res.status(404).json({ error: "session expired" });
  const { address, sig, message } = req.body || {};
  const ok = verifyLogin(req.params.sid, String(address || ""), String(sig || ""), message);
  if (!ok) return res.status(400).json({ error: "invalid signature" });
  s.status = "authed"; s.address = ok;
  res.json({ ok: true, address: ok });
});

// --- chain config (public) — phone uses this to build the approve tx; desktop to render ---
app.get("/api/chain/config", (_req, res) => {
  res.json({
    configured: chainConfigured(),
    chainId: ZG_CHAIN_ID, rpcUrl: ZG_RPC_URL, explorer: ZG_EXPLORER,
    usdc: USDC_ADDRESS, operator: chainConfigured() ? operatorAddress() : "",
    agent: AGENT_ADDRESS, price: PRICE, feePublic: FEE_PUBLIC, feePrivate: FEE_PRIVATE,
    freeLimit: FREE_LIMIT,
  });
});

// --- account state: free searches left, on-chain USDC balance + allowance ---
app.get("/api/account/:address", async (req, res) => {
  const address = String(req.params.address);
  try {
    const acct = getAccount(address);
    const freeLeft = Math.max(0, FREE_LIMIT - acct.freeUsed);
    let usdc = 0, allowance = 0;
    if (chainConfigured()) {
      try { usdc = await usdcBalance(address); } catch {}
      try { allowance = await allowanceOf(address); } catch {}
    }
    res.json({ address, freeUsed: acct.freeUsed, freeLeft, usdc, allowance, likes: likedIds(address) });
  } catch (e: any) { res.status(500).json({ error: e.message }); }
});

// --- faucet: mint test USDC (+ a little 0G for gas) to the user's address ---
app.post("/api/faucet", async (req, res) => {
  if (!chainConfigured()) return res.status(400).json({ error: "chain not configured" });
  const address = String(req.body?.address || "");
  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) return res.status(400).json({ error: "bad address" });
  try {
    const mint = await mintUsdc(address, FAUCET_USDC);
    // Send a little 0G so the user can pay gas for their one-time approve.
    let gasTx = "";
    try {
      const { operator, provider } = await import("./chain.js");
      const bal = await provider().getBalance(address);
      if (bal === 0n) {
        const { ethers } = await import("ethers");
        const tx = await operator().sendTransaction({ to: address, value: ethers.parseEther(FAUCET_GAS) });
        await tx.wait(1); gasTx = tx.hash;
      }
    } catch (e) { /* gas top-up best-effort */ }
    res.json({ ok: true, minted: FAUCET_USDC, mintTx: mint.explorer, gasTx, usdc: await usdcBalance(address) });
  } catch (e: any) { res.status(500).json({ error: e.message }); }
});

// --- tiles (public searches) ---
app.get("/api/searches", (req, res) => {
  const sort = req.query.sort === "liked" ? "liked" : "recent";
  res.json(listSearches(sort));
});
app.get("/api/searches/:id", (req, res) => {
  const r = getSearch(req.params.id);
  return r ? res.json(r) : res.status(404).json({ error: "not found" });
});
app.delete("/api/searches", (_req, res) => { clearSearches(); res.json({ ok: true }); });
app.post("/api/searches/:id/like", (req, res) => {
  const address = String(req.body?.address || "");
  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) return res.status(401).json({ error: "sign in to like" });
  if (!getSearch(req.params.id)) return res.status(404).json({ error: "not found" });
  res.json(toggleLike(address, req.params.id));
});

// --- run a query (SSE) ---
app.get("/api/run", async (req, res) => {
  const query = String(req.query.q || "").trim();
  if (!query) return res.status(400).json({ error: "missing q" });
  const address = String(req.query.address || "");
  const reqMode = req.query.mode === "private" ? "private" : "public";

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  const send = (event: string, data: any) => res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

  try {
    if (!/^0x[0-9a-fA-F]{40}$/.test(address)) { send("fatal", { error: "sign in required" }); return res.end(); }

    // Free tier: first FREE_LIMIT runs are app-paid (public inference); after that, paid.
    const acct = getAccount(address);
    const freeLeft = Math.max(0, FREE_LIMIT - acct.freeUsed);
    const paid = freeLeft <= 0;
    const mode: "public" | "private" = paid ? reqMode : "public";

    if (paid && chainConfigured()) {
      // Pre-flight: enough balance + allowance to cover the escrow deposit?
      const [bal, allow] = await Promise.all([usdcBalance(address), allowanceOf(address)]);
      if (bal < PRICE) { send("fatal", { error: `insufficient USDC (have ${bal}, need ${PRICE}) — use the faucet` }); return res.end(); }
      if (allow < PRICE) { send("fatal", { error: "approve the app to spend your USDC first", needApprove: true }); return res.end(); }
    }

    const r = await runFlow(query, { userAddress: address, paid, mode },
      (s) => send("step", s), (b) => send("balance", b));

    if (!paid) bumpFreeUsed(address);

    // Public results become tiles; private results stay with the user only.
    let id = "";
    if (r.result && mode === "public") {
      id = saveSearch({
        query: r.query, result: r.result, sources: r.sources, images: r.images,
        economics: r.economics, visibility: "public", owner: address.toLowerCase(),
      }).id;
    }
    send("done", {
      id, result: r.result, sources: r.sources, images: r.images, query: r.query,
      mode: r.mode, verified: r.verified, economics: r.economics,
      freeLeft: Math.max(0, FREE_LIMIT - getAccount(address).freeUsed),
    });
  } catch (e: any) {
    send("fatal", { error: e.message });
  }
  res.end();
});

// Demo video page (drop the file at public/demo.mp4)
app.get("/video", (_req, res) => res.sendFile(path.resolve("public/video.html")));

const PORT = Number(process.env.PORT || 5173);
app.listen(PORT, () => console.log(`▸ http://localhost:${PORT}`));
