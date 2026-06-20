// Seed a few sample public tiles so the lander has previewable research.
// Run: npx tsx scripts/seed.ts
import { saveSearch, listSearches } from "../src/db.js";

const samples = [
  {
    query: "How are stablecoins reshaping cross-border payments in 2026?",
    result: "Stablecoins are cutting settlement from days to seconds [1], with USDC volumes in remittance corridors up sharply [2]. Regulatory clarity in the EU and US is accelerating enterprise adoption [3].",
    images: [{ url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800" }],
    sources: [
      { title: "Stablecoin settlement speed", url: "https://www.circle.com/", content: "USDC settles near-instantly across chains." },
      { title: "Remittance corridors 2026", url: "https://www.thunes.com/", content: "Digital-dollar rails reduce cross-border friction." },
      { title: "Regulatory clarity", url: "https://www.circle.com/", content: "MiCA and US frameworks boost adoption." },
    ],
  },
  {
    query: "What is the history of autonomous AI agents?",
    result: "From rule-based bots to LLM-driven agents [1], the field shifted toward tool-use and planning [2]. Agent commerce — paying per task in stablecoins — is the 2026 frontier [3].",
    images: [{ url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800" }],
    sources: [
      { title: "From bots to agents", url: "https://en.wikipedia.org/wiki/Intelligent_agent", content: "Evolution of agent architectures." },
      { title: "Tool-use & planning", url: "https://en.wikipedia.org/wiki/Large_language_model", content: "LLMs gain tool-calling abilities." },
      { title: "Agent commerce", url: "https://www.circle.com/", content: "Agents transact in USDC." },
    ],
  },
  {
    query: "Compare Arbitrum, Base, and Optimism for payments",
    result: "All three are low-fee L2s [1]. Base leads consumer reach [2]; Arbitrum has deep DeFi liquidity [3]; Optimism's Superchain emphasizes interop.",
    images: [{ url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800" }],
    sources: [
      { title: "L2 fee comparison", url: "https://l2beat.com/", content: "Rollup costs and throughput." },
      { title: "Base ecosystem", url: "https://base.org/", content: "Consumer-focused L2." },
      { title: "Arbitrum DeFi", url: "https://arbitrum.io/", content: "Largest L2 by TVL." },
    ],
  },
];

for (const s of samples) {
  saveSearch({ query: s.query, result: s.result, sources: s.sources as any, images: s.images, economics: { deposited: 1, spent: 0.25, refunded: 0.75, remaining: 0, before: 0 } });
}
console.log("seeded", listSearches().length, "tiles");
