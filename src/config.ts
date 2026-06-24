import "dotenv/config";

// Inference (OpenAI-compatible fallback) — Nebius TokenFactory.
export const LLM_BASE_URL = process.env.LLM_BASE_URL!;
export const LLM_API_KEY = process.env.LLM_API_KEY!;
export const LLM_MODEL = process.env.LLM_MODEL || "gemini-2.5-flash";

// 0G Compute Network — private (TEE) inference, billed on-chain in 0G testnet tokens.
// INFERENCE_PROVIDER: "0g" (prefer 0G, fall back to Nebius on error) | "nebius" (force Nebius).
// Defaults to "0g" whenever ZG_PRIVATE_KEY is present.
export const ZG_PRIVATE_KEY = process.env.ZG_PRIVATE_KEY || "";
// Preferred inference path: 0G provider API-key proxy (no private key, fund via dashboard).
export const ZG_ENDPOINT = process.env.ZG_ENDPOINT || "";   // e.g. https://compute-network-6.integratenetwork.work
export const ZG_API_KEY = process.env.ZG_API_KEY || "";     // app-sk-… from the 0G compute dashboard
export const ZG_MODEL = process.env.ZG_MODEL || "qwen/qwen-2.5-7b-instruct";
export const ZG_RPC_URL = process.env.ZG_RPC_URL || "https://evmrpc-testnet.0g.ai";
export const ZG_EXPLORER = process.env.ZG_EXPLORER || "https://chainscan-galileo.0g.ai";
export const ZG_PROVIDER_ADDRESS = process.env.ZG_PROVIDER_ADDRESS || ""; // pin a provider; else first listed
export const ZG_LEDGER_FUND = Number(process.env.ZG_LEDGER_FUND || "0.1"); // 0G to fund a fresh ledger
export const INFERENCE_PROVIDER =
  (process.env.INFERENCE_PROVIDER || ((ZG_API_KEY || ZG_PRIVATE_KEY) ? "0g" : "nebius")).toLowerCase();

export const ZG_CHAIN_ID = Number(process.env.ZG_CHAIN_ID || "16602"); // 0G testnet Galileo

// On-chain payments — escrow in REAL testnet USDC on a payment chain (default Arbitrum Sepolia).
// Separate from the 0G chain: USDC + escrow live here; 0G inference/storage stay on 0G.
// Operator = backend wallet that runs escrow on the user's behalf (needs the chain's gas token).
// Multi-chain later = just change these env vars / add more.
export const PAYMENT_CHAIN_ID = Number(process.env.PAYMENT_CHAIN_ID || "421614"); // Arbitrum Sepolia
export const PAYMENT_RPC = process.env.PAYMENT_RPC || "https://sepolia-rollup.arbitrum.io/rpc";
export const PAYMENT_EXPLORER = process.env.PAYMENT_EXPLORER || "https://sepolia.arbiscan.io";
export const USDC_ADDRESS = process.env.USDC_ADDRESS || "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d"; // Arbitrum Sepolia USDC (Circle)
export const USDC_FAUCET_URL = process.env.USDC_FAUCET_URL || "https://faucet.circle.com";
export const OPERATOR_PRIVATE_KEY = process.env.OPERATOR_PRIVATE_KEY || ZG_PRIVATE_KEY;
export const AGENT_ADDRESS = process.env.AGENT_ADDRESS || ""; // fee recipient; defaults to operator addr

// 0G Storage — private research results are stored here (hash kept in DB). Same ZG_PRIVATE_KEY pays.
export const ZG_INDEXER_RPC = process.env.ZG_INDEXER_RPC || "https://indexer-storage-testnet-turbo.0g.ai";
