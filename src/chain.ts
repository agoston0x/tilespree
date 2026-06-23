// On-chain USDC payments on the 0G testnet — replaces Circle.
// Self-custody user wallets (passkey-derived). The backend OPERATOR wallet runs
// escrow on the user's behalf after a one-time ERC-20 approve:
//   pay:    user   -> escrow(operator)  via transferFrom
//   settle: escrow -> agent             flat fee
//   refund: escrow -> user              remainder
import { ethers } from "ethers";
import {
  ZG_RPC_URL, ZG_EXPLORER, ZG_CHAIN_ID, OPERATOR_PRIVATE_KEY, USDC_ADDRESS, AGENT_ADDRESS,
} from "./config.js";

export const USDC_DECIMALS = 6;
export const USDC_ABI = [
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint256)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function mint(address to, uint256 amount)",
];

export function chainConfigured(): boolean {
  return Boolean(OPERATOR_PRIVATE_KEY && USDC_ADDRESS);
}

let _provider: ethers.JsonRpcProvider | null = null;
export function provider(): ethers.JsonRpcProvider {
  if (!_provider) _provider = new ethers.JsonRpcProvider(ZG_RPC_URL, ZG_CHAIN_ID);
  return _provider;
}

let _operator: ethers.Wallet | null = null;
export function operator(): ethers.Wallet {
  if (!OPERATOR_PRIVATE_KEY) throw new Error("chain: missing OPERATOR_PRIVATE_KEY / ZG_PRIVATE_KEY");
  if (!_operator) _operator = new ethers.Wallet(OPERATOR_PRIVATE_KEY, provider());
  return _operator;
}

export const operatorAddress = (): string => operator().address;
export const escrowAddress = (): string => operator().address;      // operator custodies escrow
export const agentAddress = (): string => AGENT_ADDRESS || operator().address;

function usdc(signerOrProvider: ethers.Signer | ethers.Provider): ethers.Contract {
  if (!USDC_ADDRESS) throw new Error("chain: missing USDC_ADDRESS (run scripts/deploy-usdc.ts)");
  return new ethers.Contract(USDC_ADDRESS, USDC_ABI, signerOrProvider);
}

export const toUnits = (amount: number): bigint => ethers.parseUnits(amount.toFixed(USDC_DECIMALS), USDC_DECIMALS);
export const fromUnits = (units: bigint): number => Number(ethers.formatUnits(units, USDC_DECIMALS));

export const EXPLORER_TX = (hash: string) => `${ZG_EXPLORER}/tx/${hash}`;
export const EXPLORER_ADDR = (addr: string) => `${ZG_EXPLORER}/address/${addr}`;

export type TransferResult = { txHash: string; state: string; explorer: string };

// USDC balance (human units) for any address.
export async function usdcBalance(address: string): Promise<number> {
  if (!address) return 0;
  return fromUnits(await usdc(provider()).balanceOf(address));
}

// How much the user has approved the operator to spend.
export async function allowanceOf(userAddress: string): Promise<number> {
  if (!userAddress) return 0;
  return fromUnits(await usdc(provider()).allowance(userAddress, operatorAddress()));
}

async function send(txPromise: Promise<ethers.TransactionResponse>): Promise<TransferResult> {
  const tx = await txPromise;
  const receipt = await tx.wait(1);
  return {
    txHash: tx.hash,
    state: receipt?.status === 1 ? "CONFIRMED" : "FAILED",
    explorer: EXPLORER_TX(tx.hash),
  };
}

// pay: pull `amount` from the user into escrow (operator), using the user's approval.
export function payToEscrow(userAddress: string, amount: number): Promise<TransferResult> {
  return send(usdc(operator()).transferFrom(userAddress, escrowAddress(), toUnits(amount)));
}

// settle: flat fee escrow -> agent.
export function settleToAgent(amount: number): Promise<TransferResult> {
  return send(usdc(operator()).transfer(agentAddress(), toUnits(amount)));
}

// refund: remainder escrow -> user.
export function refundToUser(userAddress: string, amount: number): Promise<TransferResult> {
  return send(usdc(operator()).transfer(userAddress, toUnits(amount)));
}

// faucet: mint test USDC to an address (open mint on MockUSDC).
export function mintUsdc(toAddress: string, amount: number): Promise<TransferResult> {
  return send(usdc(operator()).mint(toAddress, toUnits(amount)));
}
