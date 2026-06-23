// Passkey-derived, self-custody wallet — runs on the user's phone only.
// Primary: WebAuthn PRF extension deterministically derives a seed from the
// passkey -> secp256k1 key -> address. The private key never leaves the device
// and is re-derived from the passkey on every visit (nothing secret is stored).
// Fallback (PRF unsupported): a random key persisted in this device's storage.
(() => {
  const RP_NAME = "TileSpree";
  const PRF_SALT = new TextEncoder().encode("tilespree-wallet-v1");
  const rnd = (n) => crypto.getRandomValues(new Uint8Array(n));
  const b64u = {
    enc: (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
    dec: (s) => { s = s.replace(/-/g, "+").replace(/_/g, "/"); const b = atob(s); return Uint8Array.from(b, (c) => c.charCodeAt(0)); },
  };

  async function createCredential() {
    const cred = await navigator.credentials.create({
      publicKey: {
        challenge: rnd(32),
        rp: { name: RP_NAME, id: location.hostname },
        user: { id: rnd(16), name: "tilespree", displayName: "TileSpree user" },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
        authenticatorSelection: { residentKey: "required", userVerification: "required" },
        extensions: { prf: {} },
      },
    });
    localStorage.setItem("tilespree.credId", b64u.enc(cred.rawId));
    return cred.rawId;
  }

  // Assert with the PRF extension; returns the 32-byte secret or null if unsupported.
  async function prfSecret(rawId) {
    const assertion = await navigator.credentials.get({
      publicKey: {
        challenge: rnd(32),
        rpId: location.hostname,
        allowCredentials: rawId ? [{ type: "public-key", id: rawId }] : [],
        userVerification: "required",
        extensions: { prf: { eval: { first: PRF_SALT } } },
      },
    });
    const res = assertion.getClientExtensionResults?.()?.prf?.results?.first;
    return res ? new Uint8Array(res) : null;
  }

  async function deriveWallet() {
    try {
      let stored = localStorage.getItem("tilespree.credId");
      let rawId = stored ? b64u.dec(stored) : null;
      let secret = null;
      try { secret = await prfSecret(rawId); }
      catch (e) { if (!rawId) throw e; secret = null; }       // stored cred gone/invalid
      if (!secret && !rawId) { rawId = await createCredential(); secret = await prfSecret(rawId); }
      if (!secret) { rawId = await createCredential(); secret = await prfSecret(rawId); }
      if (secret) {
        const pk = window.ethers.keccak256(secret);           // deterministic 32-byte private key
        return { wallet: new window.ethers.Wallet(pk), mode: "passkey-prf" };
      }
    } catch (e) { console.warn("[wallet] PRF path failed, using device key:", e?.message || e); }
    // Fallback: random key kept on this device only.
    let pk = localStorage.getItem("tilespree.deviceKey");
    if (!pk) { pk = window.ethers.Wallet.createRandom().privateKey; localStorage.setItem("tilespree.deviceKey", pk); }
    return { wallet: new window.ethers.Wallet(pk), mode: "device-key" };
  }

  window.PasskeyWallet = {
    // Derive the wallet and sign a session-bound proof of control.
    async connect(sid) {
      const { wallet, mode } = await deriveWallet();
      const message = `TileSpree login\nsession: ${sid}\naddress: ${wallet.address}`;
      const sig = await wallet.signMessage(message);
      return { address: wallet.address, sig, message, mode };
    },
    // Sign an arbitrary message (e.g. an approve authorization payload) on the phone.
    async sign(message) {
      const { wallet } = await deriveWallet();
      return { address: wallet.address, sig: await wallet.signMessage(message) };
    },
  };
})();
