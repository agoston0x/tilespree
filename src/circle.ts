// Circle Developer-Controlled Wallets — real testnet USDC payment + escrow.
// Escrow model: 3 app-controlled wallets (user, escrow/treasury, agent).
//   pay:    user   -> escrow   (deposit)
//   settle: escrow -> agent    (flat fee)
//   refund: escrow -> user     (remainder)
import circleSdk from "@circle-fin/developer-controlled-wallets";
const { initiateDeveloperControlledWalletsClient } = circleSdk as any;

const API_KEY = process.env.CIRCLE_API_KEY || "";
const ENTITY_SECRET = process.env.CIRCLE_ENTITY_SECRET || "";

export const WALLETS = {
  user: process.env.CIRCLE_USER_WALLET_ID || "",
  escrow: process.env.CIRCLE_ESCROW_WALLET_ID || "",
  agent: process.env.CIRCLE_AGENT_WALLET_ID || "",
};

export function circleConfigured(): boolean {
  return Boolean(API_KEY && ENTITY_SECRET && WALLETS.user && WALLETS.escrow && WALLETS.agent);
}

export function circleClient() {
  if (!API_KEY || !ENTITY_SECRET) throw new Error("Circle: missing CIRCLE_API_KEY / CIRCLE_ENTITY_SECRET");
  return initiateDeveloperControlledWalletsClient({ apiKey: API_KEY, entitySecret: ENTITY_SECRET });
}

async function walletAddress(client: any, walletId: string): Promise<string> {
  const { data } = await client.getWallet({ id: walletId });
  return data.wallet.address;
}

// USDC tokenId held by a wallet (per-chain, fetched at runtime).
async function usdcTokenId(client: any, walletId: string): Promise<string> {
  const { data } = await client.getWalletTokenBalance({ id: walletId });
  const bal = (data?.tokenBalances || []).find(
    (t: any) => (t.token?.symbol || "").toUpperCase() === "USDC",
  );
  if (!bal) throw new Error("Circle: source wallet holds no USDC — fund it at https://faucet.circle.com (Solana Devnet)");
  return bal.token.id;
}

export async function usdcBalance(walletId: string): Promise<number> {
  const client = circleClient();
  const { data } = await client.getWalletTokenBalance({ id: walletId });
  const bal = (data?.tokenBalances || []).find((t: any) => (t.token?.symbol || "").toUpperCase() === "USDC");
  return bal ? Number(bal.amount) : 0;
}

export const ARBISCAN_TX = (hash: string) => `https://sepolia.arbiscan.io/tx/${hash}`;

export type TransferResult = { txId: string; state: string; txHash: string; explorer: string };

// Transfer USDC between two app wallets; poll until the on-chain tx hash appears.
async function transfer(fromWalletId: string, toWalletId: string, amount: number): Promise<TransferResult> {
  const client = circleClient();
  const tokenId = await usdcTokenId(client, fromWalletId);
  const dest = await walletAddress(client, toWalletId);
  const { data } = await client.createTransaction({
    walletId: fromWalletId,
    tokenId,
    destinationAddress: dest,
    amount: [amount.toFixed(2)],
    fee: { type: "level", config: { feeLevel: "MEDIUM" } },
  });
  const txId = data?.id ?? "";
  let state = data?.state ?? "INITIATED";
  let txHash = "";
  // Poll until we have an on-chain hash (or the tx reaches a terminal state).
  for (let i = 0; i < 12; i++) {
    const { data: tx } = await client.getTransaction({ id: txId });
    state = tx?.transaction?.state ?? state;
    txHash = tx?.transaction?.txHash ?? "";
    if (txHash || ["COMPLETE", "CONFIRMED", "FAILED", "CANCELLED"].includes(state)) break;
    await new Promise((r) => setTimeout(r, 2000));
  }
  return { txId, state, txHash, explorer: txHash ? ARBISCAN_TX(txHash) : "" };
}

export const payToEscrow = (amount: number) => transfer(WALLETS.user, WALLETS.escrow, amount);
export const settleToAgent = (fee: number) => transfer(WALLETS.escrow, WALLETS.agent, fee);
export const refundToUser = (amount: number) => transfer(WALLETS.escrow, WALLETS.user, amount);
