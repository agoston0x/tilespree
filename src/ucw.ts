// Circle User-Controlled Wallets — passkey-signed per-user SCA wallet.
// Server issues challenges; the browser W3S SDK executes them (passkey).
import circleSdk from "@circle-fin/user-controlled-wallets";
const { initiateUserControlledWalletsClient } = circleSdk as any;

const API_KEY = process.env.CIRCLE_API_KEY || "";
export const W3S_APP_ID = process.env.W3S_APP_ID || "";
// Start single-chain; fan out later.
export const UCW_CHAINS = (process.env.UCW_CHAINS || "ARB-SEPOLIA").split(",");

export function ucwConfigured(): boolean {
  return Boolean(API_KEY && W3S_APP_ID);
}

function client() {
  if (!API_KEY) throw new Error("UCW: missing CIRCLE_API_KEY");
  return initiateUserControlledWalletsClient({ apiKey: API_KEY });
}

// Fresh user token (expires ~60min) — minted per request, paired with encryptionKey.
async function userToken(userId: string): Promise<{ userToken: string; encryptionKey: string }> {
  const { data } = await client().createUserToken({ userId });
  return { userToken: data.userToken, encryptionKey: data.encryptionKey };
}

// Sign in / sign up. Returns a challengeId only when the user still needs to
// provision their PIN + wallet; returning users with a wallet get challengeId=null.
export async function initUser(userId: string) {
  const c = client();
  try { await c.createUser({ userId }); } catch { /* already exists → fine */ }
  const tok = await userToken(userId);

  // Already provisioned? Return their wallets, no challenge needed.
  let wallets: any[] = [];
  try { const { data } = await c.listWallets({ userToken: tok.userToken }); wallets = data?.wallets || []; } catch { /* none yet */ }
  if (wallets.length) {
    return { appId: W3S_APP_ID, ...tok, challengeId: null, wallets };
  }

  // First time: create PIN + SCA wallets → challenge for the browser to execute.
  const { data } = await c.createUserPinWithWallets({
    userId, blockchains: UCW_CHAINS, accountType: "SCA",
  });
  return { appId: W3S_APP_ID, ...tok, challengeId: data.challengeId, wallets: [] };
}

// List the user's wallets (address per chain) after the challenge completes.
export async function listWallets(userId: string) {
  const tok = await userToken(userId);
  const { data } = await client().listWallets({ userToken: tok.userToken } as any);
  return (data?.wallets || []).map((w: any) => ({
    id: w.id, address: w.address, blockchain: w.blockchain, state: w.state,
  }));
}

// Issue a transaction-signing challenge: user wallet -> destination (escrow).
export async function transferChallenge(userId: string, walletId: string, tokenId: string, destinationAddress: string, amount: number) {
  const tok = await userToken(userId);
  const { data } = await client().createTransaction({
    userToken: tok.userToken,
    walletId, tokenId, destinationAddress,
    amounts: [amount.toFixed(2)],
    fee: { type: "level", config: { feeLevel: "MEDIUM" } },
  } as any);
  return { ...tok, challengeId: data.challengeId, txId: data.id };
}
