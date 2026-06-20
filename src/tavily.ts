// Tavily research adapter — fetch live web data + images for the agent to reason over.
import { tavily } from "@tavily/core";

const API_KEY = process.env.TAVILY_API_KEY || "";

export type Source = { title: string; url: string; content: string; score: number };

export function tavilyConfigured(): boolean {
  return Boolean(API_KEY);
}

export async function research(query: string): Promise<{
  answer: string | null;
  sources: Source[];
  images: { url: string; description?: string }[];
  context: string;
}> {
  const client = tavily({ apiKey: API_KEY });
  const res: any = await client.search(query, {
    searchDepth: "advanced",
    maxResults: 6,
    includeAnswer: true,
    includeImages: true,
    includeImageDescriptions: true,
  });
  const sources: Source[] = (res.results || []).map((r: any) => ({
    title: r.title, url: r.url, content: r.content || "", score: r.score ?? 0,
  }));
  const images = (res.images || []).map((im: any) =>
    typeof im === "string" ? { url: im } : { url: im.url, description: im.description });
  const context = sources.map((r, i) => `[${i + 1}] ${r.title}\n${r.content}`).join("\n\n");
  return { answer: res.answer ?? null, sources, images, context };
}
