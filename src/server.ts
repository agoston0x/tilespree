// Backend: serves the UI + streams the agent flow as SSE.
import express from "express";
import path from "node:path";
import { runFlow, PRICE, FEE } from "./runtime.js";
import { circleConfigured, usdcBalance, WALLETS } from "./circle.js";
import { saveSearch, listSearches, getSearch, clearSearches } from "./db.js";
import { ucwConfigured, initUser, listWallets, transferChallenge, W3S_APP_ID } from "./ucw.js";

const app = express();
app.use(express.json());
app.use(express.static(path.resolve("public")));

// --- User-Controlled Wallets (passkey) ---
app.get("/api/ucw/config", (_req, res) => res.json({ configured: ucwConfigured(), appId: W3S_APP_ID }));
app.post("/api/ucw/init", async (req, res) => {
  try { res.json(await initUser(String(req.body.userId))); }
  catch (e: any) { res.status(500).json({ error: e.response?.data?.message || e.message }); }
});
app.get("/api/ucw/wallets/:userId", async (req, res) => {
  try { res.json(await listWallets(req.params.userId)); }
  catch (e: any) { res.status(500).json({ error: e.response?.data?.message || e.message }); }
});
app.post("/api/ucw/pay-challenge", async (req, res) => {
  try {
    const { userId, walletId, tokenId, destinationAddress, amount } = req.body;
    res.json(await transferChallenge(userId, walletId, tokenId, destinationAddress, Number(amount)));
  } catch (e: any) { res.status(500).json({ error: e.response?.data?.message || e.message }); }
});

// Past searches (tiles) — persisted in SQLite.
app.get("/api/searches", (_req, res) => res.json(listSearches()));
app.get("/api/searches/:id", (req, res) => {
  const r = getSearch(req.params.id);
  return r ? res.json(r) : res.status(404).json({ error: "not found" });
});
app.delete("/api/searches", (_req, res) => { clearSearches(); res.json({ ok: true }); });

// Current wallet balance for the sticky bar on page load.
app.get("/api/balance", async (_req, res) => {
  try {
    const remaining = circleConfigured() ? await usdcBalance(WALLETS.user) : 0;
    res.json({ configured: circleConfigured(), remaining, locked: 0, spent: 0, price: PRICE, fee: FEE });
  } catch (e: any) {
    res.json({ configured: false, error: e.message, remaining: 0, locked: 0, spent: 0, price: PRICE, fee: FEE });
  }
});

app.get("/api/run", async (req, res) => {
  const query = String(req.query.q || "").trim();
  if (!query) return res.status(400).json({ error: "missing q" });

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  const send = (event: string, data: any) => res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

  try {
    const r = await runFlow(query, (s) => send("step", s), (b) => send("balance", b));
    let id = "";
    if (r.result) { id = saveSearch({ query: r.query, result: r.result, sources: r.sources, images: r.images, economics: r.economics }).id; }
    send("done", { id, result: r.result, sources: r.sources, images: r.images, query: r.query, economics: r.economics });
  } catch (e: any) {
    send("fatal", { error: e.message });
  }
  res.end();
});

const PORT = Number(process.env.PORT || 5173);
app.listen(PORT, () => console.log(`▸ http://localhost:${PORT}`));
