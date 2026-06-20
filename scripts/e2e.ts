// CLI end-to-end: Circle pay → Tavily → TokenFactory → settle → refund.
// Run: npx tsx scripts/e2e.ts "your question"
import { runFlow } from "../src/runtime.js";

const query = process.argv.slice(2).join(" ") || "What are the latest developments in stablecoin regulation?";

console.log(`\nQUERY: ${query}\n${"─".repeat(60)}`);
const { steps, result, sources } = await runFlow(query, (s) => {
  const icon = s.status === "ok" ? "✅" : s.status === "skip" ? "⏭️ " : "❌";
  console.log(`${icon} ${s.label}${s.detail ? " — " + s.detail : ""}`);
  if (s.artifact) for (const [k, v] of Object.entries(s.artifact)) console.log(`     ${k}: ${v}`);
});

console.log(`${"─".repeat(60)}\nANSWER:\n${result || "(none)"}\n`);
if (sources.length) console.log("SOURCES:\n" + sources.map((s, i) => `  [${i + 1}] ${s.url}`).join("\n"));
process.exit(steps.some((s) => s.status === "error") ? 1 : 0);
