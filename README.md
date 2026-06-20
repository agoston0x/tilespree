# TileSpree — pay-per-query research, as browsable tiles

Browse a wall of past research **tiles**, preview any one, or run your **own** research topic:
the agent researches (Tavily), reasons (Nebius TokenFactory), and you pay per query in **real
testnet USDC** via **Circle** — funds escrowed, a fee settled to the agent, the rest refunded.
Every run is saved as a tile with a generated **presentation deck** (image slides + source map).

## What's built
- **Lander**: orange enamel-sign logo, search box with cycling placeholder, grid of past-research
  tiles (mobile-first: 2/row mobile, 4/row desktop). Browse freely.
- **Run flow** (Circle, Arbitrum Sepolia): pay (user→escrow) → Tavily research → Nebius inference →
  settle (fee→agent) → refund (remainder→user). Live SSE timeline with Arbiscan-linked tx hashes.
- **Findings**: cited answer + clickable sources + Tavily images.
- **Presentation deck**: inline slideshow (title takeaways, one slide per source with hero image,
  Tavily search-tree), expandable to a full modal, horizontally navigable, image lightbox.
- **Persistence**: every run saved in **SQLite**; tiles served from the backend (cross-browser).
- **Accounts (Circle User-Controlled Wallets, passkey)**: sign in with a passkey/PIN to get your
  own SCA wallet; first 3 runs free. Reading full findings / clicking through slides / running a
  search prompts sign-in.

## Stack
- **Circle** — Developer-Controlled Wallets (escrow/settle/refund) + User-Controlled Wallets
  (passkey sign-in) + W3S web SDK (bundled for the browser)
- **Tavily** — web research (sources + images)
- **Nebius TokenFactory** — OpenAI-compatible inference
- Node + TypeScript + Express, vanilla SSE-driven UI, better-sqlite3

## Run
1. `npm install`
2. `cp .env.example .env` and fill in `CIRCLE_API_KEY`, `TAVILY_API_KEY`, Nebius `LLM_*`
3. `npx tsx scripts/register-entity-secret.ts` — creates the app Circle wallets, prints the user
   wallet address to fund
4. Fund it with testnet USDC at https://faucet.circle.com (Arbitrum Sepolia)
5. `node scripts/web/build-w3s.mjs` — bundles the Circle passkey SDK to `public/w3s.js`
6. `npm run dev` → http://localhost:5173  (`npx tsx scripts/seed.ts` for sample tiles)

## Roadmap
Gas Station (gasless), real token-cost metering → USDC, multi-chain funding (Base/Eth Sepolia),
and free-public / paid-private tiers.
