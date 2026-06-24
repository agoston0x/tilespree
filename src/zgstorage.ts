// 0G Storage adapter — store private research results on-chain-backed storage.
// Private runs upload their result JSON here and we keep only the returned root hash;
// opening a private result downloads it back by hash. Paid for with ZG_PRIVATE_KEY.
import { ethers } from "ethers";
import { createRequire } from "module";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { ZG_PRIVATE_KEY, ZG_RPC_URL, ZG_INDEXER_RPC } from "./config.js";

// CJS interop (mirrors src/zg.ts) — load the SDK's CommonJS build.
const require = createRequire(import.meta.url);
const { Indexer, MemData } = require("@0glabs/0g-ts-sdk");

export function zgStorageConfigured(): boolean {
  return Boolean(ZG_PRIVATE_KEY);
}

function signer(): ethers.Wallet {
  if (!ZG_PRIVATE_KEY) throw new Error("0G Storage: missing ZG_PRIVATE_KEY");
  return new ethers.Wallet(ZG_PRIVATE_KEY, new ethers.JsonRpcProvider(ZG_RPC_URL));
}

let _indexer: any = null;
const indexer = () => (_indexer ??= new Indexer(ZG_INDEXER_RPC));

// Upload an object as JSON; returns the 0G Storage root hash (our content id).
export async function uploadJson(obj: unknown): Promise<{ rootHash: string; txHash: string }> {
  const bytes = new Uint8Array(Buffer.from(JSON.stringify(obj), "utf8"));
  const file = new MemData(bytes);
  const [res, err] = await indexer().upload(file, ZG_RPC_URL, signer());
  if (err) throw new Error(`0G Storage upload failed: ${err.message || err}`);
  return { rootHash: res.rootHash, txHash: res.txHash };
}

// Download a previously stored object by root hash.
export async function downloadJson<T = any>(rootHash: string): Promise<T> {
  const tmp = path.join(os.tmpdir(), `zg-${randomUUID()}.json`);
  try {
    const err = await indexer().download(rootHash, tmp, true);
    if (err) throw new Error(`0G Storage download failed: ${err.message || err}`);
    return JSON.parse(fs.readFileSync(tmp, "utf8")) as T;
  } finally {
    try { fs.unlinkSync(tmp); } catch { /* ignore */ }
  }
}
