# Final Build Plan — Agent Commerce MVP

## What it does
User asks a question and pays USDC. An OOBE agent escrows the funds, researches via Tavily,
reasons via Nebius, returns an answer, takes a flat fee, refunds the rest. All on Solana devnet.

## Flow (user / funds / data)
1. User enters query in web UI.
2. **Circle SDK**: user wallet pays USDC → app (real on-chain tx).
3. **OOBE SAP**: app deposits USDC into escrow for the registered agent.
4. Agent runtime runs: **Tavily** (research) → **Nebius TokenFactory** (reason) → answer.
5. **SAP settle**: flat fee → agent; remainder refunded to user.
6. UI shows answer + agent identity + logged artifacts (Circle tx, escrow PDA, model, URLs, refund).

```
Query → Circle pay → SAP escrow → [Tavily + Nebius] → SAP settle(fee)+refund → Answer
```

## Setup & install (in order)
1. `solana config set --url devnet`
2. `solana-keygen new` → `keys/depositor.json` + `keys/agent.json`; **print depositor pubkey**.
3. `solana airdrop 2` to both (devnet SOL for gas).
4. `npm init` + install: `@oobe-protocol-labs/synapse-sap-sdk @coral-xyz/anchor`
   `@solana/web3.js @solana/spl-token @circle-fin/developer-controlled-wallets`
   `openai @tavily/core express tsx typescript` (~250 MB node_modules).
5. `.env`: your `CIRCLE_API_KEY`, `NEBIUS_API_KEY`, `TAVILY_API_KEY`.
6. `scripts/register-entity-secret.ts` → Circle entity secret + recovery file.

## Build order
1. `scripts/probe-sap.ts` — confirm SAP SDK exports (gate).
2. CLI E2E: register agent → escrow deposit → run Tavily+Nebius → settle(flat fee) → refund.
3. Backend: `circle.ts`, `sap.ts`, `nebius.ts`, `tavily.ts`, `agentRuntime.ts`, `server.ts`.
4. Web UI: query box → live status timeline → answer + identity card (hinchr style, clean/minimal).
5. Verify on-chain USDC deltas + escrow/agent PDAs end-to-end.

## I need from you
- 3 API keys (above) in `.env`.
- Fund the printed depositor address with testnet USDC (faucet.circle.com, Solana Devnet).

## Notes
- Fee model: flat USDC fee per query; usage logged but not priced. Escrow over-funds to always cover.
- Identity = SAP agent registry (no separate product). OOBE needs no API key (wallet signing).
- Main risk: SAP SDK README drift → step 1 probe gates it; SOL-escrow fallback if SPL flaky.
