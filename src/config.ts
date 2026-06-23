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
