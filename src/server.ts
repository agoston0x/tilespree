// Backend: serves the UI + streams the agent flow as SSE.
import express from "express";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { runFlow, PRICE, FEE_PUBLIC, FEE_PRIVATE } from "./runtime.js";
import {
  chainConfigured, usdcBalance, allowanceOf, gasBalance, dripGas, operatorAddress,
} from "./chain.js";
import { verifyLogin } from "./wallet.js";
import {
  saveSearch, listSearches, getSearch, clearSearches,
  toggleLike, likedIds, getAccount, bumpFreeUsed, savePrivate,
} from "./db.js";
import { downloadJson } from "./zgstorage.js";
import {
  PAYMENT_CHAIN_ID, PAYMENT_RPC, PAYMENT_EXPLORER, USDC_ADDRESS, AGENT_ADDRESS, USDC_FAUCET_URL,
} from "./config.js";

const app = express();
app.use(express.json());
app.use(express.static(path.resolve("public")));

const FREE_LIMIT = Number(process.env.FREE_LIMIT || "3");
const FAUCET_GAS = process.env.FAUCET_GAS || "0.001"; // payment-chain gas dripped for the user's approve

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
    chainId: PAYMENT_CHAIN_ID, rpcUrl: PAYMENT_RPC, explorer: PAYMENT_EXPLORER,
    usdc: USDC_ADDRESS, operator: chainConfigured() ? operatorAddress() : "",
    agent: AGENT_ADDRESS, price: PRICE, feePublic: FEE_PUBLIC, feePrivate: FEE_PRIVATE,
    freeLimit: FREE_LIMIT, usdcFaucet: USDC_FAUCET_URL,
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

// --- gas drip: send a little payment-chain gas so the user can submit their approve.
// Real USDC is NOT minted — the user gets it from the Circle faucet (usdcFaucet URL). ---
app.post("/api/faucet", async (req, res) => {
  if (!chainConfigured()) return res.status(400).json({ error: "chain not configured" });
  const address = String(req.body?.address || "");
  if (!/^0x[0-9a-fA-F]{40}$/.test(address)) return res.status(400).json({ error: "bad address" });
  try {
    let gasTx = "";
    if (await gasBalance(address) < Number(FAUCET_GAS) / 2) {
      try { gasTx = (await dripGas(address, FAUCET_GAS)).txHash; } catch { /* best-effort */ }
    }
    res.json({ ok: true, gasTx, usdcFaucet: USDC_FAUCET_URL, usdc: await usdcBalance(address) });
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

// --- fetch a private result back from 0G Storage by hash ---
app.get("/api/private/:hash", async (req, res) => {
  try { res.json(await downloadJson(String(req.params.hash))); }
  catch (e: any) { res.status(502).json({ error: e.message }); }
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

    if (paid) {
      // Free searches used up → a paid run REQUIRES a configured + funded + approved wallet.
      if (!chainConfigured()) { send("fatal", { error: "Free searches used up and payments aren't set up on this server." }); return res.end(); }
      const [bal, allow] = await Promise.all([usdcBalance(address), allowanceOf(address)]);
      if (bal < PRICE) { send("fatal", { error: `Insufficient USDC (have ${bal}, need ${PRICE}) — fund your wallet on your phone.`, needFund: true }); return res.end(); }
      if (allow < PRICE) { send("fatal", { error: "Authorize the app to spend your USDC first.", needApprove: true }); return res.end(); }
    }

    const r = await runFlow(query, { userAddress: address, paid, mode },
      (s) => send("step", s), (b) => send("balance", b));

    if (!paid) bumpFreeUsed(address);

    // Public results become public tiles; private results are stored on 0G Storage (hash only).
    let id = "";
    if (r.result && mode === "public") {
      id = saveSearch({
        query: r.query, result: r.result, sources: r.sources, images: r.images,
        economics: r.economics, visibility: "public", owner: address.toLowerCase(),
      }).id;
    } else if (r.result && mode === "private" && r.storageHash) {
      id = savePrivate(address, r.storageHash).id;
    }
    send("done", {
      id, result: r.result, sources: r.sources, images: r.images, query: r.query,
      mode: r.mode, verified: r.verified, storageHash: r.storageHash, economics: r.economics,
      freeLeft: Math.max(0, FREE_LIMIT - getAccount(address).freeUsed),
    });
  } catch (e: any) {
    send("fatal", { error: e.message });
  }
  res.end();
});

// Unlink/reset page (flushes the on-device passkey + wallet client-side; tiles persist).
app.get("/reset", (_req, res) => res.sendFile(path.resolve("public/reset.html")));

// Demo video page (drop the file at public/demo.mp4)
app.get("/video", (_req, res) => res.sendFile(path.resolve("public/video.html")));

const PORT = Number(process.env.PORT || 5173);
app.listen(PORT, () => console.log(`▸ http://localhost:${PORT}`));
