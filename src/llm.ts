// Inference adapter — OpenAI-compatible. Nebius TokenFactory (or any compatible) via env.
import OpenAI from "openai";
import { LLM_BASE_URL, LLM_API_KEY, LLM_MODEL } from "./config.js";

const client = new OpenAI({ baseURL: LLM_BASE_URL, apiKey: LLM_API_KEY });

export async function answer(query: string, context?: string): Promise<{ text: string; model: string; usage: any }> {
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
  };
}
