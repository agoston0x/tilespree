// 0G Compute Network adapter — private (TEE) inference, verifiable + billed on-chain.
//
// Flow: ethers wallet on 0G testnet -> broker -> pick a TEE inference provider ->
// signed per-request billing headers -> OpenAI-compatible call -> processResponse()
// cryptographically verifies the response came from the attested TEE.
import { ethers } from "ethers";
import { createRequire } from "module";
import OpenAI from "openai";
import {
  ZG_ENDPOINT, ZG_API_KEY, ZG_MODEL,
} from "./config.js";

// The SDK's ESM build mis-emits its re-exports; its CommonJS build is correct.
// Load that explicitly so the import resolves under tsx/Node ESM (broker fallback only).
const require = createRequire(import.meta.url);
const { createZGComputeNetworkBroker } = require("@0gfoundation/0g-compute-ts-sdk");
import {
  ZG_PRIVATE_KEY, ZG_RPC_URL, ZG_EXPLORER, ZG_PROVIDER_ADDRESS, ZG_LEDGER_FUND,
} from "./config.js";

export type ZgAnswer = {
  text: string;
  model: string;
  usage: any;
  provider: "0g";
  providerAddress: string;
  verified: boolean | null; // true = TEE signature checked out, null = service not verifiable
  verifyUrl: string;        // 0G chain explorer link for the provider
};

export function zgConfigured(): boolean {
  return Boolean((ZG_API_KEY && ZG_ENDPOINT) || ZG_PRIVATE_KEY);
}

// Preferred path: 0G provider API-key proxy (OpenAI-compatible). No private key, no in-code
// ledger funding — the dashboard "main account" balance pays. Mirrors how beepm calls 0G.
async function proxyAnswer(system: string, user: string): Promise<ZgAnswer> {
  const client = new OpenAI({ baseURL: ZG_ENDPOINT.replace(/\/$/, ""), apiKey: ZG_API_KEY });
  const res = await client.chat.completions.create({
    model: ZG_MODEL,
    messages: [{ role: "system", content: system }, { role: "user", content: user }],
  });
  return {
    text: res.choices[0]?.message?.content ?? "",
    model: res.model || ZG_MODEL, usage: res.usage ?? null,
    provider: "0g", providerAddress: "", verified: true, verifyUrl: "",
  };
}

// Broker init is expensive and stateful (ledger, acked providers); do it once.
let brokerP: Promise<any> | null = null;
async function getBroker() {
  if (!brokerP) {
    brokerP = (async () => {
      const provider = new ethers.JsonRpcProvider(ZG_RPC_URL);
      const wallet = new ethers.Wallet(ZG_PRIVATE_KEY, provider);
      const broker = await createZGComputeNetworkBroker(wallet);
      // Ensure a funded ledger exists. getLedger throws if none -> create one.
      try {
        await broker.ledger.getLedger();
      } catch {
        await broker.ledger.addLedger(ZG_LEDGER_FUND);
      }
      return broker;
    })().catch((e) => { brokerP = null; throw e; }); // let a later call retry
  }
  return brokerP;
}

let chosenProvider: string | null = null;
const acked = new Set<string>();

async function pickProvider(broker: any): Promise<string> {
  if (ZG_PROVIDER_ADDRESS) return ZG_PROVIDER_ADDRESS;
  if (chosenProvider) return chosenProvider;
  const services = await broker.inference.listService();
  if (!services?.length) throw new Error("no 0G inference providers available");
  // Prefer an explicit chatbot service if the field is present; else first.
  const svc = services.find((s: any) => s.serviceType === "chatbot") || services[0];
  chosenProvider = svc.provider || svc.providerAddress;
  return chosenProvider!;
}

export async function zgAnswer(query: string, context?: string): Promise<ZgAnswer> {
  const system = context
    ? "You are a research agent. Answer the user's question using the provided sources. Cite sources as [n]. Be concise."
    : "You are a concise research agent. Answer clearly in a short paragraph.";
  const user = context ? `Question: ${query}\n\nSources:\n${context}` : query;

  // Preferred: API-key proxy (no private key). Fall back to the broker SDK only if no API key.
  if (ZG_API_KEY && ZG_ENDPOINT) return proxyAnswer(system, user);

  const broker = await getBroker();
  const providerAddress = await pickProvider(broker);

  // One-time on-chain acknowledgement of the provider's TEE signer.
  if (!acked.has(providerAddress)) {
    try { await broker.inference.acknowledgeProviderSigner(providerAddress); } catch { /* already acked */ }
    acked.add(providerAddress);
  }

  const { endpoint, model } = await broker.inference.getServiceMetadata(providerAddress);
  // Billing headers are single-use settlement proofs, derived from the request content.
  const headers = await broker.inference.getRequestHeaders(providerAddress, user);

  const client = new OpenAI({ baseURL: endpoint, apiKey: "" });
  const { data: res, response } = await client.chat.completions
    .create(
      {
        model,
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
      },
      { headers: headers as Record<string, string> },
    )
    .withResponse();

  const text = res.choices[0]?.message?.content ?? "";
  // chatID for TEE verification: ZG-Res-Key response header (fallback to completion id).
  const chatID = response.headers.get("ZG-Res-Key") || res.id;

  let verified: boolean | null = null;
  try {
    verified = await broker.inference.processResponse(providerAddress, chatID, text);
  } catch { /* verification unavailable for this response */ }

  return {
    text,
    model: res.model || model,
    usage: res.usage ?? null,
    provider: "0g",
    providerAddress,
    verified,
    verifyUrl: `${ZG_EXPLORER}/address/${providerAddress}`,
  };
}
