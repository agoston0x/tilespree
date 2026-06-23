// Inference router. Prefers 0G Compute (private TEE inference, verifiable + on-chain
// billed); falls back to an OpenAI-compatible endpoint (Nebius TokenFactory) so the
// demo keeps working when the 0G ledger isn't funded.
import OpenAI from "openai";
import { LLM_BASE_URL, LLM_API_KEY, LLM_MODEL, INFERENCE_PROVIDER } from "./config.js";
import { zgConfigured, zgAnswer } from "./zg.js";

export type Answer = {
  text: string;
  model: string;
  usage: any;
  provider: "0g" | "nebius";
  providerAddress?: string;
  verified?: boolean | null;
  verifyUrl?: string;
};

const client = new OpenAI({ baseURL: LLM_BASE_URL, apiKey: LLM_API_KEY });

async function nebiusAnswer(query: string, context?: string): Promise<Answer> {
  const system = context
    ? "You are a research agent. Answer the user's question using the provided sources. Cite sources as [n]. Be concise."
    : "You are a concise research agent. Answer clearly in a short paragraph.";
  const user = context ? `Question: ${query}\n\nSources:\n${context}` : query;

  const res = await client.chat.completions.create({
    model: LLM_MODEL,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  });
  return {
    text: res.choices[0]?.message?.content ?? "",
    model: res.model || LLM_MODEL,
    usage: res.usage ?? null,
    provider: "nebius",
  };
}

export async function answer(
  query: string,
  context?: string,
  opts: { provider?: "0g" | "nebius" } = {},
): Promise<Answer> {
  // Explicit request wins; otherwise fall back to the env default.
  const want = opts.provider || (INFERENCE_PROVIDER === "0g" ? "0g" : "nebius");
  if (want === "0g" && zgConfigured()) {
    try {
      return await zgAnswer(query, context);
    } catch (e: any) {
      console.warn("[0g] inference failed, falling back to Nebius:", e?.message || e);
    }
  }
  return nebiusAnswer(query, context);
}
