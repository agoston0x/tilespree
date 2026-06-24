# TileSpree

**Pay-per-query research, with a private option that runs on 0G.**

Browse a wall of past research as **tiles**, or run your own. The agent gathers sources (Tavily) and
reasons over them with an LLM. You choose how it runs:

- **Public** — fast and cheap; the result is published as a browsable tile.
- **Private** — your reasoning runs inside a **0G TEE** (trusted execution enclave) and the result is
  stored on **0G Storage**, referenced only by a content hash. It is **never published**.

Live: **https://tilespree.xyz**

---

## Why 0G

Private research has two hard requirements: the model must not leak your prompt, and the result must
live somewhere you control — not on our servers. TileSpree gets both from 0G:

- **0G Compute (TEE inference)** — private runs go through the **0G Compute Router**
  (`router-api.0g.ai`, OpenAI-compatible). Inference executes in a trusted enclave, billed on-chain
  from 0G you deposit — no prompt logging on our side, no API middleman.
- **0G Storage** — the private result (answer + sources) is uploaded to 0G Storage; we keep **only the
  root hash** in our DB. Re-opening fetches it back by hash. Nothing private is stored by us.

Public research uses an ordinary OpenAI-compatible endpoint and is saved as a tile, so the wall stays
full and browsable.

## Self-custody wallet (passkey, no seed phrase)

Sign-in is a **passkey-derived, self-custody wallet** — no PIN, no backup questions, no seed phrase:

1. Desktop shows a QR; you scan it with your phone (open it directly on a phone and it skips the QR).
2. On the phone, a **WebAuthn passkey** (Face ID / fingerprint) deterministically derives a secp256k1
   key via the **PRF extension**. The private key is generated **on the device and never leaves it**.
3. The app only ever learns your **address**. The same passkey re-derives the same wallet on return.

## Payments — real testnet USDC escrow

The first **3 searches are free** (the app pays). After that, paid runs use **real testnet USDC on
Arbitrum Sepolia**:

- You fund your in-app wallet with USDC (Circle faucet) and **approve** the app's operator once.
- Per run the operator escrows the price, settles the actual fee, and refunds the remainder — shown
  live inside the research modal. 0G inference/storage are paid by the app on the 0G chain.

## Stack

| Layer | Tech |
|---|---|
| Private inference | **0G Compute Router** (TEE, OpenAI-compatible) |
| Private storage | **0G Storage** (`@0glabs/0g-ts-sdk`), hash-only |
| Wallet | **WebAuthn passkey + PRF** → on-device secp256k1 (ethers v6) |
| Payments | **USDC escrow on Arbitrum Sepolia** (operator `approve`/`transferFrom`) |
| Research | **Tavily** (sources + images) |
| Public inference | OpenAI-compatible endpoint (Nebius TokenFactory) |
| App | Node + TypeScript + Express, SSE-driven vanilla UI, better-sqlite3 |

## Run locally

1. `npm install`
2. `cp .env.example .env` and fill in:
   - `TAVILY_API_KEY`
   - **0G inference**: `ZG_API_KEY` (from pc.0g.ai — deposit 0G into the Router account), `ZG_ENDPOINT`
     defaults to the Router, pick `ZG_MODEL` from `GET https://router-api.0g.ai/v1/models`
   - **0G Storage**: `ZG_PRIVATE_KEY` = a throwaway wallet funded with a little Galileo 0G
   - **Payments**: `USDC_ADDRESS` defaults to Circle's Arbitrum Sepolia USDC; `OPERATOR_PRIVATE_KEY`
     defaults to `ZG_PRIVATE_KEY` (needs a little Arbitrum Sepolia ETH for gas)
   - Public fallback: `LLM_BASE_URL` / `LLM_API_KEY` / `LLM_MODEL`
3. `npm run build:wallet` — bundles ethers for the phone wallet page
4. `npm run dev` → http://localhost:5173  (`npm run seed` for sample tiles)
5. For phone sign-in, serve over HTTPS (passkeys require a secure context) and set `PUBLIC_BASE_URL`.

Graceful by design: with no `ZG_API_KEY` inference falls back to the public endpoint; with no
`ZG_PRIVATE_KEY`/`USDC_ADDRESS` the private/paid path is disabled and the free public flow still works.
