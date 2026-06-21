// Spike: Circle User-Controlled Wallets (passkey/PIN) — server-side reachability.
// Flow: createUser -> createUserToken -> initialize (SCA wallets) -> get a challengeId.
// The challengeId is what the browser SDK executes (passkey). Here we just prove the API works.
import "dotenv/config";
import circleSdk from "@circle-fin/user-controlled-wallets";
const { initiateUserControlledWalletsClient } = circleSdk as any;

const API_KEY = process.env.CIRCLE_API_KEY!;
if (!API_KEY) throw new Error("Set CIRCLE_API_KEY");

const client = initiateUserControlledWalletsClient({ apiKey: API_KEY });
const userId = "spike-user-" + Math.floor(Date.now() / 1000);

async function main() {
  console.log("userId:", userId);
  await client.createUser({ userId });
  console.log("1) createUser ✓");

  const tok = await client.createUserToken({ userId });
  const userToken = tok.data?.userToken;
  console.log("2) createUserToken ✓  token?", !!userToken, "encKey?", !!tok.data?.encryptionKey);

  // Initialize: create SCA wallets on testnet chains; returns a challengeId for the browser.
  const init = await client.createUserPinWithWallets({
    userId,
    blockchains: ["ARB-SEPOLIA", "BASE-SEPOLIA", "ETH-SEPOLIA"],
    accountType: "SCA",
  });
  console.log("3) init challengeId:", init.data?.challengeId);
  console.log("\nSCA + multi-chain init works. Browser SDK executes the challengeId (passkey/PIN).");
}
main().catch((e) => { console.error("SPIKE FAIL:", e.response?.data || e.message); process.exit(1); });
