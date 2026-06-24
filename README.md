# TileSpree — pay-per-query research with private 0G inference

Browse a wall of past research **tiles**, or run your own: the agent researches (Tavily),
reasons (AI inference), and you pay per query in **real testnet USDC (Arbitrum Sepolia)** — funds
escrowed, a fee settled, the rest refunded. Choose **public** research (cheap, shared as a
tile) or **private** research on **0G Compute**: your reasoning runs inside a **TEE** and the
response is **cryptographically verifiable**, and the result is never published.

## What's built
- **Lander**: browse past public-research tiles freely (2/row mobile, 4/row desktop), sorted by
  most-recent or most-liked.
- **Passkey wallet (self-custody)**: scan a QR with your phone → a WebAuthn passkey **derives an
  on-device wallet key** (PRF extension); the private key never leaves the phone and the app only
  learns your address. Fund it with test USDC + authorize spending in one tap.
- **Free tier**: first 3 searches are app-paid (Tavily + TokenFactory), gated behind sign-in.
- **Pricing after free**: pick **Public** (Tavily + TokenFactory → public tile) or **Private**
  (Tavily + **0G TEE inference**, verifiable, never published).
- **On-chain flow** (0G testnet): pay (user→escrow) → research → inference → settle (fee→agent) →
  refund (remainder→user). Live SSE timeline with 0G-explorer-linked tx hashes and a **0G TEE
  `verified ✓`** badge on private runs.
- **Likes & rankings**: signed-in users like tiles; browse most-liked / most-recent.
- **Presentation deck**: inline slideshow per result (takeaways, one slide per source, search tree),
  expandable, image lightbox.
- **Persistence**: SQLite (tiles, accounts/free-counter, likes).

## Stack
- **0G Compute** — private (TEE) inference via the provider API-key proxy (OpenAI-compatible)
- **0G Storage** — private results stored on-chain-backed storage; only the hash is kept (`@0glabs/0g-ts-sdk`)
- **Arbitrum Sepolia** — real testnet **USDC** escrow (ethers v6), operator runs pay/settle/refund
- **Tavily** — web research (sources + images)
- **Nebius TokenFactory** — OpenAI-compatible fallback / public-tier inference
- **WebAuthn (PRF)** — passkey-derived self-custody wallet, no PIN/no backup
- Node + TypeScript + Express, vanilla SSE-driven UI, better-sqlite3

## Run
1. `npm install`
2. `cp .env.example .env`; fill in `TAVILY_API_KEY`, Nebius `LLM_*`.
3. **0G inference**: at the 0G compute dashboard, fund the main account + create an API key; set
   `ZG_ENDPOINT` + `ZG_API_KEY` (no private key needed for inference).
4. **0G Storage + USDC escrow**: set `ZG_PRIVATE_KEY` to a throwaway server wallet funded with
   Galileo **0G** (storage) and a little **Arbitrum Sepolia ETH** (escrow gas). `USDC_ADDRESS`
   defaults to Circle's Arbitrum Sepolia USDC.
5. `node scripts/web/build-wallet.mjs` — bundles ethers for the phone wallet page (`public/ethers.js`).
6. (Phone sign-in) set `PUBLIC_BASE_URL` to a public HTTPS origin so the QR is reachable.
7. `npm run dev` → http://localhost:5173 (`npx tsx scripts/seed.ts` for sample tiles).

Graceful fallback: without `ZG_PRIVATE_KEY` inference uses Nebius; without `USDC_ADDRESS` the
escrow steps are skipped — the free tier and the rest of the app still work, so it always demos.

Quick demo without a phone: visit `/?demo` to sign in with a throwaway address (free searches work).

## Roadmap
Arweave-hosted immutable phone frontend (pin the passkey RP to a permaweb domain), EIP-2612 gasless
approve, multi-provider 0G selection, real token-cost metering.
