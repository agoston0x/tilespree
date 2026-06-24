import "dotenv/config";

// Inference (OpenAI-compatible fallback) — Nebius TokenFactory.
export const LLM_BASE_URL = process.env.LLM_BASE_URL!;
export const LLM_API_KEY = process.env.LLM_API_KEY!;
export const LLM_MODEL = process.env.LLM_MODEL || "gemini-2.5-flash";

// 0G Compute Network — private (TEE) inference, billed on-chain in 0G testnet tokens.
// INFERENCE_PROVIDER: "0g" (prefer 0G, fall back to Nebius on error) | "nebius" (force Nebius).
// Defaults to "0g" whenever ZG_PRIVATE_KEY is present.
export const ZG_PRIVATE_KEY = process.env.ZG_PRIVATE_KEY || "";
export const ZG_RPC_URL = process.env.ZG_RPC_URL || "https://evmrpc-testnet.0g.ai";
export const ZG_EXPLORER = process.env.ZG_EXPLORER || "https://chainscan-galileo.0g.ai";
export const ZG_PROVIDER_ADDRESS = process.env.ZG_PROVIDER_ADDRESS || ""; // pin a provider; else first listed
export const ZG_LEDGER_FUND = Number(process.env.ZG_LEDGER_FUND || "0.1"); // 0G to fund a fresh ledger
export const INFERENCE_PROVIDER =
  (process.env.INFERENCE_PROVIDER || (ZG_PRIVATE_KEY ? "0g" : "nebius")).toLowerCase();

// On-chain payments — single chain (0G testnet), self-custody user wallets + mock USDC.
// Operator = backend wallet that runs escrow on the user's behalf (needs 0G for gas).
export const ZG_CHAIN_ID = Number(process.env.ZG_CHAIN_ID || "16602"); // 0G testnet Galileo
export const OPERATOR_PRIVATE_KEY = process.env.OPERATOR_PRIVATE_KEY || ZG_PRIVATE_KEY;
export const USDC_ADDRESS = process.env.USDC_ADDRESS || ""; // deployed MockUSDC (scripts/deploy-usdc.ts)
export const AGENT_ADDRESS = process.env.AGENT_ADDRESS || ""; // fee recipient; defaults to operator addr

// 0G Storage — private research results are stored here (hash kept in DB). Same ZG_PRIVATE_KEY pays.
export const ZG_INDEXER_RPC = process.env.ZG_INDEXER_RPC || "https://indexer-storage-testnet-turbo.0g.ai";
