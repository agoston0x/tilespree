// One-time Circle setup: register entity secret + create user/escrow/agent wallets.
// Run: npx tsx scripts/register-entity-secret.ts
import "dotenv/config";
import { randomBytes } from "node:crypto";
import fs from "node:fs";
import circleSdk from "@circle-fin/developer-controlled-wallets";
const { registerEntitySecretCiphertext, initiateDeveloperControlledWalletsClient } = circleSdk as any;

const API_KEY = process.env.CIRCLE_API_KEY!;
if (!API_KEY) throw new Error("Set CIRCLE_API_KEY in .env first");

function setEnv(env: string, key: string, val: string): string {
  return env.match(new RegExp(`^${key}=.*$`, "m"))
    ? env.replace(new RegExp(`^${key}=.*$`, "m"), `${key}=${val}`)
    : env + `\n${key}=${val}`;
}

async function main() {
  let entitySecret = process.env.CIRCLE_ENTITY_SECRET || "";
  if (!entitySecret) {
    entitySecret = randomBytes(32).toString("hex");
    await registerEntitySecretCiphertext({ apiKey: API_KEY, entitySecret, recoveryFileDownloadPath: "./recovery" });
    console.log("Registered new entity secret. Recovery file -> ./recovery");
  } else {
    console.log("Reusing CIRCLE_ENTITY_SECRET from .env");
  }

  const client = initiateDeveloperControlledWalletsClient({ apiKey: API_KEY, entitySecret });
  const { data: ws } = await client.createWalletSet({ name: "berlin-hack-set" });
  const { data: wallets } = await client.createWallets({
    walletSetId: ws!.walletSet.id,
    blockchains: ["ARB-SEPOLIA"],
    count: 3,
    accountType: "EOA",
  });
  const [user, escrow, agent] = wallets!.wallets;

  let env = fs.readFileSync(".env", "utf8");
  env = setEnv(env, "CIRCLE_ENTITY_SECRET", entitySecret);
  env = setEnv(env, "CIRCLE_USER_WALLET_ID", user.id);
  env = setEnv(env, "CIRCLE_ESCROW_WALLET_ID", escrow.id);
  env = setEnv(env, "CIRCLE_AGENT_WALLET_ID", agent.id);
  fs.writeFileSync(".env", env);

  console.log("\n=== Circle wallets created (SOL-DEVNET) ===");
  console.log("USER   :", user.id, user.address);
  console.log("ESCROW :", escrow.id, escrow.address);
  console.log("AGENT  :", agent.id, agent.address);
  console.log("\n>>> FUND THE USER WALLET with devnet USDC: https://faucet.circle.com (Solana Devnet)");
  console.log(">>> address:", user.address);
  console.log(">>> Saved entity secret + wallet IDs to .env");
}
main().catch((e) => { console.error(e); process.exit(1); });
