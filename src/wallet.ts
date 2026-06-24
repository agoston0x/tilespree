// Server-side verification for the passkey-derived wallet.
// The phone signs `TileSpree login\nsession: <sid>\naddress: <addr>` with its
// self-custody key; we recover the signer and confirm it matches + binds the sid
// (prevents replaying a signature against a different session).
import { ethers } from "ethers";

export function loginMessage(sid: string, address: string): string {
  return `TileSpree login\nsession: ${sid}\naddress: ${address}`;
}

// Returns the lowercased address if the signature is valid for this sid, else null.
export function verifyLogin(sid: string, address: string, sig: string, message?: string): string | null {
  try {
    const msg = message ?? loginMessage(sid, address);
    if (!msg.includes(`session: ${sid}`)) return null;
    const recovered = ethers.verifyMessage(msg, sig);
    if (recovered.toLowerCase() !== String(address).toLowerCase()) return null;
    return recovered.toLowerCase();
  } catch {
    return null;
  }
}
