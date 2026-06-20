# qgent — pay-per-query research agent

A localhost demo agent: enter a research topic, pay USDC into escrow, the agent
researches (Tavily) and reasons (Nebius TokenFactory), then settles a fee and refunds
the rest — all with real testnet USDC on **Arbitrum Sepolia** via **Circle** wallets.

## Flow
Query → Circle pay (user → escrow) → Tavily research → Nebius inference →
Circle settle (fee → agent) → Circle refund (remainder → user) → cited answer + presentation.

## Stack
- **Circle** Developer-Controlled Wallets — USDC pay / escrow / settle / refund (Arbitrum Sepolia)
- **Tavily** — web research (sources + images)
- **Nebius TokenFactory** — OpenAI-compatible inference
- Node + TypeScript + Express, vanilla SSE-driven UI

## Run
1. `npm install`
2. `cp .env.example .env` and fill in keys
3. `npx tsx scripts/register-entity-secret.ts` — creates Circle wallets, prints the user wallet to fund
4. Fund the user wallet with USDC at https://faucet.circle.com (Arbitrum Sepolia)
5. `npm run dev` → http://localhost:5173
