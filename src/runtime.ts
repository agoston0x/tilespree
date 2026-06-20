// Agent runtime — Circle (pay+escrow) + Tavily (research) + TokenFactory (inference).
// Query -> pay(user->escrow) -> Tavily -> inference -> settle(fee) -> refund -> answer.
import { answer } from "./llm.js";
import { research, tavilyConfigured, type Source } from "./tavily.js";
import {
  circleConfigured, payToEscrow, settleToAgent, refundToUser, usdcBalance, WALLETS,
} from "./circle.js";

export type Step = {
  key: string; label: string; status: "ok" | "skip" | "error";
  detail?: string; artifact?: Record<string, string | number>;
};

export type RunResult = {
  steps: Step[];
  result: string;
  sources: Source[];
  images: { url: string; description?: string }[];
  query: string;
  economics: { deposited: number; spent: number; refunded: number; remaining: number; before: number };
};

// Live balance snapshot for the sticky bar: remaining (in user wallet),
// locked (held in escrow), spent (gone to agent).
export type Balance = { remaining: number; locked: number; spent: number };

export const PRICE = Number(process.env.PRICE_USDC || "1.00");      // user pays this into escrow
export const FEE = Number(process.env.AGENT_FEE_USDC || "0.25");    // flat fee to agent
const REFUND = Math.max(0, PRICE - FEE);

export async function runFlow(
  query: string,
  emit: (s: Step) => void = () => {},
  onBalance: (b: Balance) => void = () => {},
): Promise<RunResult> {
  const steps: Step[] = [];
  const push = (s: Step) => { steps.push(s); emit(s); return s; };
  const hasCircle = circleConfigured();

  let before = 0;
  if (hasCircle) { try { before = await usdcBalance(WALLETS.user); } catch {} }
  const bal = (locked: number, spent: number) =>
    onBalance({ remaining: Math.max(0, before - locked - spent), locked, spent });
  bal(0, 0);

  // 1. Circle payment: user -> escrow.
  push(await safe("pay", "Circle payment (user → escrow)", async () => {
    if (!hasCircle) return { status: "skip", detail: "Circle not set up" };
    const r = await payToEscrow(PRICE);
    return { detail: `Escrowed ${PRICE} USDC`, artifact: txArt(r, `${PRICE} USDC`) };
  }));
  if (hasCircle) bal(PRICE, 0); // PRICE now locked in escrow

  // 2. Tavily research.
  let context = "";
  let sources: Source[] = [];
  let images: { url: string; description?: string }[] = [];
  push(await safe("research", "Tavily research", async () => {
    if (!tavilyConfigured()) return { status: "skip", detail: "TAVILY_API_KEY not set" };
    const r = await research(query);
    context = r.context; sources = r.sources; images = r.images;
    return { detail: `${sources.length} sources · ${images.length} images`, artifact: { topResult: sources[0]?.url ?? "—" } };
  }));

  // 3. TokenFactory inference (grounded in research).
  let result = "";
  push(await safe("inference", "TokenFactory inference", async () => {
    const a = await answer(query, context || undefined);
    result = a.text;
    return { detail: `Model: ${a.model}`, artifact: {
      model: a.model,
      tokens: a.usage ? `${a.usage.prompt_tokens}+${a.usage.completion_tokens}` : "n/a",
    } };
  }));

  // 4. Settle flat fee: escrow -> agent.
  push(await safe("settle", "Circle settle (fee → agent)", async () => {
    if (!hasCircle) return { status: "skip", detail: "Circle not set up" };
    const r = await settleToAgent(FEE);
    return { detail: `Fee ${FEE} USDC → agent`, artifact: txArt(r, `${FEE} USDC`) };
  }));
  if (hasCircle) bal(REFUND, FEE); // fee spent; REFUND still locked pending refund

  // 5. Refund remainder: escrow -> user.
  push(await safe("refund", "Circle refund (remainder → user)", async () => {
    if (!hasCircle) return { status: "skip", detail: "Circle not set up" };
    const r = await refundToUser(REFUND);
    return { detail: `Refunded ${REFUND} USDC`, artifact: txArt(r, `${REFUND} USDC`) };
  }));
  if (hasCircle) bal(0, FEE); // escrow released; only the fee is spent

  const spent = hasCircle ? FEE : 0;
  const remaining = hasCircle ? Math.max(0, before - spent) : 0;
  return {
    steps, result, sources, images, query,
    economics: { deposited: PRICE, spent, refunded: REFUND, remaining, before },
  };
}

function txArt(r: { txHash: string; explorer: string; state: string }, amount: string): Record<string, string> {
  return r.explorer ? { amount, tx: r.explorer } : { amount, state: r.state };
}

async function safe(
  key: string, label: string,
  fn: () => Promise<{ status?: "ok" | "skip"; detail?: string; artifact?: Record<string, string | number> }>,
): Promise<Step> {
  try { const r = await fn(); return { key, label, status: r.status ?? "ok", detail: r.detail, artifact: r.artifact }; }
  catch (e: any) { return { key, label, status: "error", detail: e.message?.slice(0, 300) }; }
}
