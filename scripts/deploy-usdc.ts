// Compile + deploy MockUSDC to the 0G testnet. Prints the address to put in .env (USDC_ADDRESS).
// Usage: npx tsx scripts/deploy-usdc.ts   (needs OPERATOR_PRIVATE_KEY/ZG_PRIVATE_KEY funded with 0G)
import { ethers } from "ethers";
import { createRequire } from "module";
import fs from "node:fs";
import path from "node:path";
import { ZG_RPC_URL, ZG_CHAIN_ID, ZG_EXPLORER, OPERATOR_PRIVATE_KEY } from "../src/config.js";

const require = createRequire(import.meta.url);
const solc = require("solc");

function compile(): { abi: any; bytecode: string } {
  const file = "MockUSDC.sol";
  const source = fs.readFileSync(path.resolve("contracts", file), "utf8");
  const input = {
    language: "Solidity",
    sources: { [file]: { content: source } },
    settings: { optimizer: { enabled: true, runs: 200 }, outputSelection: { "*": { "*": ["abi", "evm.bytecode.object"] } } },
  };
  const out = JSON.parse(solc.compile(JSON.stringify(input)));
  const errors = (out.errors || []).filter((e: any) => e.severity === "error");
  if (errors.length) throw new Error(errors.map((e: any) => e.formattedMessage).join("\n"));
  const c = out.contracts[file]["MockUSDC"];
  return { abi: c.abi, bytecode: "0x" + c.evm.bytecode.object };
}

async function main() {
  if (!OPERATOR_PRIVATE_KEY) throw new Error("set OPERATOR_PRIVATE_KEY (or ZG_PRIVATE_KEY) in .env, funded with 0G from https://faucet.0g.ai");
  const provider = new ethers.JsonRpcProvider(ZG_RPC_URL, ZG_CHAIN_ID);
  const wallet = new ethers.Wallet(OPERATOR_PRIVATE_KEY, provider);
  console.log(`deployer ${wallet.address}`);
  console.log(`balance  ${ethers.formatEther(await provider.getBalance(wallet.address))} 0G`);

  console.log("compiling MockUSDC.sol …");
  const { abi, bytecode } = compile();

  console.log("deploying …");
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);
  const c = await factory.deploy();
  await c.waitForDeployment();
  const addr = await c.getAddress();

  console.log("\n✓ MockUSDC deployed");
  console.log(`  address:  ${addr}`);
  console.log(`  explorer: ${ZG_EXPLORER}/address/${addr}`);
  console.log(`\nAdd to .env:\n  USDC_ADDRESS=${addr}`);
}

main().catch((e) => { console.error(e?.message || e); process.exit(1); });
