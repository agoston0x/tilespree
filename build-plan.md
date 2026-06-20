# Build Plan — Berlin Agents Hackathon MVP

Real, no-mock localhost MVP of `chatgpt-spec.md`. All 5 integrations confirmed working on
Solana **devnet**. Simplistic-but-beautiful web UI (ref: hinchr.com).

## Step-by-step (what I do)
1. `solana config set --url devnet`; create `keys/depositor.json` + `keys/agent.json`.
2. **Print depositor pubkey → give to you to fund with testnet USDC.**
3. `solana airdrop 2` to both keypairs (devnet SOL for gas).
4. Scaffold Node+TS project; install deps (SAP, Circle, openai, tavily, web3.js, express).
5. `scripts/probe-sap.ts` — confirm real SAP SDK exports before wiring (de-risk v0.20.0 drift).
6. Backend adapters: `circle.ts` (pay), `sap.ts` (identity + escrow/settle/refund),
   `nebius.ts` (inference), `tavily.ts` (research), `agentRuntime.ts` (orchestrate), `server.ts`.
7. Web UI: query box → "Pay & Run" → live status timeline (pay→escrow→identity→inference→
   research→settle→refund) → result + agent identity card. hinchr style: clean, card-based,
   numbered steps, one accent color, smooth transitions.
8. Run end-to-end on devnet; verify USDC deltas + escrow/agent PDAs on-chain.

## What I need from you
1. **3 API keys** into `.env`:
   - `CIRCLE_API_KEY` (console.circle.com, testnet)
   - `NEBIUS_API_KEY` (tokenfactory.nebius.com)
   - `TAVILY_API_KEY` (app.tavily.com)
2. **Fund the USDC address** I print in step 2 — send testnet USDC, or paste it into
   https://faucet.circle.com (Solana Devnet, 20 USDC, free). **Required for the demo.**

OOBE needs no key (wallet signing only).

## Key facts
- OOBE: `@oobe-protocol-labs/synapse-sap-sdk` v0.20.0, devnet, no signup. Program
  `SAPpUhsWLJG1FfkGRcXagEDMrMsWGjbky7AyhGpFETZ`. ⚠️ verify exports on install.
- Circle: `@circle-fin/developer-controlled-wallets` (Node 22+). Devnet USDC mint
  `4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`. Wallets are custodial → USDC flows
  Circle wallet → local depositor keypair → SAP escrow.
- Nebius: OpenAI-compatible, base `https://api.tokenfactory.nebius.com/v1/`, `openai` pkg.
- Tavily: `@tavily/core`, 1k free credits/mo.
- Local: node v22 ✅ solana-cli 2.1.22 ✅ spl-token ✅ — wallet + devnet config pending.

## Risk / cut line
SAP SDK API drift is the main risk (step 5 gates it). If SPL-mint escrow is flaky on devnet,
fall back to SOL-denominated escrow (still real/on-chain), keep Circle USDC as user payment rail.
Frontend is the cuttable surface if time runs short — CLI flow still proves the spec.

---

# Appendix — full research notes

## OOBE Protocol (real, public, MIT)
- Identity + escrow product = **SAP (Synapse Agent Protocol)**. No separate "OOBE Identity"
  product — identity is the registry layer inside SAP.
- Website https://www.oobeprotocol.ai/ · GitHub https://github.com/OOBE-PROTOCOL ·
  Docs https://oobe-protocol.gitbook.io/oobe-protocol
- SDK: `@oobe-protocol-labs/synapse-sap-sdk` v0.20.0 — "SAP v2 on Solana Mainnet/Devnet."
  `npm i @oobe-protocol-labs/synapse-sap-sdk @coral-xyz/anchor @solana/web3.js`
  (deps: anchor ^0.30.1, web3.js ^1.98.4, spl-token, bn.js, bs58).
- ⚠️ README shows `@synapse-sap/sdk` / `SapClient` but PUBLISHED name is
  `@oobe-protocol-labs/synapse-sap-sdk`; v0.20.0 is a "compatibility release" → verify real
  exported symbols in `dist/` before relying on snippets. (Separate `oobe-protocol` pkg is a
  general agent framework, NOT the escrow SDK — don't confuse.)
- Identity: PDA-based `AgentAccount` (capabilities, tool schemas, pricing, reputation, A2A/MCP
  metadata). `client.agent.register({ name, description, capabilities, pricing, protocols })`.
- Escrow: pre-funded + per-call pricing, built on x402 (HTTP 402). Methods (README, verify):
  `escrow.create(wallet, { pricePerCall, maxCalls, initialDeposit, tokenMint })` (tokenMint
  null=SOL or SPL mint), `escrow.settle(depositor, calls, serviceHash)`, `escrow.settleBatch`,
  `escrow.withdraw(wallet, amount)` (refund).
- On-chain program ID `SAPpUhsWLJG1FfkGRcXagEDMrMsWGjbky7AyhGpFETZ`. Devnet supported
  (`SapConnection.devnet()/.mainnet()/.localnet()`, `DEVNET_SAP_PROGRAM_ID`).
- Auth split: **SAP SDK = wallet signing only, no API key/signup** (`SapConnection.fromKeypair`).
  Client/RPC gateway SDK (`@oobe-protocol-labs/synapse-client-sdk`) needs `sk_...` API key with
  unclear provisioning → AVOID; use public devnet RPC instead.

## Circle (devnet USDC on Solana)
- Product: **Programmable Wallets — Developer-Controlled Wallets (DCW)**. Backend moves USDC;
  Circle custodies keys; handles ATAs + fee SOL server-side. (User-Controlled adds PIN/passkey —
  skip. CCTP/Bridge Kit = cross-chain — not needed.)
- `npm i @circle-fin/developer-controlled-wallets` (Node 22+).
- Credentials: `CIRCLE_API_KEY` (console.circle.com) + `CIRCLE_ENTITY_SECRET` (you generate
  32-byte hex, register once → recovery file; Circle never stores it).
- Devnet USDC mint `4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`. Faucet
  https://faucet.circle.com — Solana Devnet, 20 USDC/2h, no account.
- Solana: `accountType: "EOA"`, blockchain id `SOL-DEVNET`. USDC = 6 decimals. DCW takes
  decimal strings ("1.00"). `tokenId` is per-chain — fetch at runtime, don't hardcode.
- Flow: register entity secret → createWalletSet → createWallets(SOL-DEVNET) → faucet-fund →
  createTransaction (USDC → depositor keypair).

## Nebius TokenFactory (inference)
- OpenAI-compatible. Base `https://api.tokenfactory.nebius.com/v1/` (old:
  api.studio.nebius.ai). Use `openai` npm pkg, `NEBIUS_API_KEY`.
- Signup tokenfactory.nebius.com (Google/GitHub) → "Get an API key". ~$1 trial credit/30d
  (check for hackathon promo). Models e.g. `meta-llama/Llama-3.3-70B-Instruct`,
  `deepseek-ai/DeepSeek-V3`, `Qwen/Qwen2.5-72B-Instruct` — confirm IDs in console.

## Tavily (research)
- Docs https://docs.tavily.com · keys app.tavily.com (`tvly-`). `npm i @tavily/core`.
  `tavily({ apiKey }).search(query)`. 1k free credits/mo, no card.

## Local toolchain (checked)
- node v22.15.1 ✅ · solana-cli 2.1.22 ✅ · spl-token 5.1.0 ✅
- Pending: no wallet/keypair yet; RPC currently mainnet (→ devnet); anchor unset (not needed,
  we don't build a program).
