// Agent runtime — on-chain USDC escrow (0G testnet) + Tavily research + inference.
// Free runs: app pays, no chain. Paid runs: pay(user→escrow) → research →
// inference (public=TokenFactory, private=0G TEE) → settle(fee→agent) → refund.
import { answer } from "./llm.js";
import { zgConfigured } from "./zg.js";
import { research, tavilyConfigured, type Source } from "./tavily.js";
import {
  chainConfigured, payToEscrow, settleToAgent, refundToUser, usdcBalance,
} from "./chain.js";

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
  mode: "public" | "private";
  verified: boolean | null;
  economics: { deposited: number; spent: number; refunded: number; remaining: number; before: number; paid: boolean };
};

export type RunOpts = { userAddress?: string; paid?: boolean; mode?: "public" | "private" };

// Live balance snapshot for the sticky bar.
export type Balance = { remaining: number; locked: number; spent: number };

export const PRICE = Number(process.env.PRICE_USDC || "1.00");          // escrow deposit (max)
export const FEE_PUBLIC = Number(process.env.FEE_PUBLIC_USDC || "0.10"); // public research cost
export const FEE_PRIVATE = Number(process.env.FEE_PRIVATE_USDC || "0.50"); // private (0G) cost

export async function runFlow(
  query: string,
  opts: RunOpts = {},
  emit: (s: Step) => void = () => {},
  onBalance: (b: Balance) => void = () => {},
): Promise<RunResult> {
  const mode = opts.mode === "private" ? "private" : "public";
  const paid = Boolean(opts.paid);
  const userAddress = opts.userAddress || "";
  const FEE = mode === "private" ? FEE_PRIVATE : FEE_PUBLIC;
  const REFUND = Math.max(0, PRICE - FEE);

  const steps: Step[] = [];
  const push = (s: Step) => { steps.push(s); emit(s); return s; };
  const onChain = paid && chainConfigured() && !!userAddress;

  let before = 0;
  if (onChain) { try { before = await usdcBalance(userAddress); } catch {} }
  const bal = (locked: number, spent: number) =>
    onBalance({ remaining: Math.max(0, before - locked - spent), locked, spent });
  bal(0, 0);

  // 1. Payment: user -> escrow (skipped for free runs).
  push(await safe("pay", "Payment (user → escrow)", async () => {
    if (!paid) return { status: "skip", detail: "Free search — app pays" };
    if (!onChain) return { status: "skip", detail: "On-chain payments not configured" };
    const r = await payToEscrow(userAddress, PRICE);
    return { detail: `Escrowed ${PRICE} USDC`, artifact: txArt(r, `${PRICE} USDC`) };
  }));
  if (onChain) bal(PRICE, 0);

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

  // 3. Inference — private = 0G TEE (verifiable), public = TokenFactory.
  let result = "";
  let verified: boolean | null = null;
  const wants0g = mode === "private";
  const inferLabel = wants0g && zgConfigured()
    ? "0G Compute · private inference (TEE)"
    : wants0g ? "Private inference (0G — fallback)" : "TokenFactory inference";
  push(await safe("inference", inferLabel, async () => {
    const a = await answer(query, context || undefined, { provider: wants0g ? "0g" : "nebius" });
    result = a.text;
    verified = a.verified ?? null;
    const art: Record<string, string | number> = {
      model: a.model,
      tokens: a.usage ? `${a.usage.prompt_tokens}+${a.usage.completion_tokens}` : "n/a",
    };
    let detail = `Model: ${a.model}`;
    if (a.provider === "0g") {
      detail = `0G TEE · ${a.model}`;
      art.network = "0G testnet";
      art.tee = a.verified === true ? "verified ✓"
        : a.verified === false ? "verification failed ✗"
        : "attested (TEE)";
      if (a.verifyUrl) art.provider = a.verifyUrl;
    }
    return { detail, artifact: art };
  }));

  // 4. Settle flat fee: escrow -> agent.
  push(await safe("settle", "Settle (fee → agent)", async () => {
    if (!paid) return { status: "skip", detail: "Free search" };
    if (!onChain) return { status: "skip", detail: "On-chain payments not configured" };
    const r = await settleToAgent(FEE);
    return { detail: `Fee ${FEE} USDC → agent`, artifact: txArt(r, `${FEE} USDC`) };
  }));
  if (onChain) bal(REFUND, FEE);

  // 5. Refund remainder: escrow -> user.
  push(await safe("refund", "Refund (remainder → user)", async () => {
    if (!paid) return { status: "skip", detail: "Free search" };
    if (!onChain) return { status: "skip", detail: "On-chain payments not configured" };
    const r = await refundToUser(userAddress, REFUND);
    return { detail: `Refunded ${REFUND} USDC`, artifact: txArt(r, `${REFUND} USDC`) };
  }));
  if (onChain) bal(0, FEE);

  const spent = onChain ? FEE : 0;
  const remaining = onChain ? Math.max(0, before - spent) : 0;
  return {
    steps, result, sources, images, query, mode, verified,
    economics: { deposited: paid ? PRICE : 0, spent, refunded: onChain ? REFUND : 0, remaining, before, paid },
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
