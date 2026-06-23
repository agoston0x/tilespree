// Create + fund the 0G Compute ledger and list available TEE inference providers.
// Usage: npx tsx scripts/zg-setup.ts   (needs ZG_PRIVATE_KEY funded from the 0G faucet)
import { ethers } from "ethers";
import { createZGComputeNetworkBroker } from "@0gfoundation/0g-compute-ts-sdk";
import { ZG_PRIVATE_KEY, ZG_RPC_URL, ZG_LEDGER_FUND } from "../src/config.js";

async function main() {
  if (!ZG_PRIVATE_KEY) throw new Error("set ZG_PRIVATE_KEY in .env (fund it at https://faucet.0g.ai)");

  const provider = new ethers.JsonRpcProvider(ZG_RPC_URL);
  const wallet = new ethers.Wallet(ZG_PRIVATE_KEY, provider);
  const bal = await provider.getBalance(wallet.address);
  console.log(`wallet  ${wallet.address}`);
  console.log(`balance ${ethers.formatEther(bal)} 0G`);
  if (bal === 0n) throw new Error("wallet has 0 0G — fund it at https://faucet.0g.ai then re-run");

  const broker = await createZGComputeNetworkBroker(wallet);

  try {
    const led = await broker.ledger.getLedger();
    console.log("ledger already exists:", led?.toString?.() ?? led);
  } catch {
    console.log(`creating ledger funded with ${ZG_LEDGER_FUND} 0G …`);
    await broker.ledger.addLedger(ZG_LEDGER_FUND);
    console.log("ledger created ✓");
  }

  const services = await broker.inference.listService();
  console.log(`\n${services.length} inference provider(s):`);
  for (const s of services) {
    console.log(`  ${s.provider || s.providerAddress}  model=${s.model ?? "?"}  type=${s.serviceType ?? "?"}`);
  }
  console.log("\nReady. Set INFERENCE_PROVIDER=0g (or just leave ZG_PRIVATE_KEY set) and run `npm run dev`.");
}

main().catch((e) => { console.error(e?.message || e); process.exit(1); });
