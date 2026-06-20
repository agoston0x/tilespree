import "dotenv/config";

export const LLM_BASE_URL = process.env.LLM_BASE_URL!;
export const LLM_API_KEY = process.env.LLM_API_KEY!;
export const LLM_MODEL = process.env.LLM_MODEL || "gemini-2.5-flash";
