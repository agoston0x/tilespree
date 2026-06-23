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

  let _wallet = null; // cache so we don't re-prompt the passkey for follow-up signing
  async function deriveWallet() {
    if (_wallet) return { wallet: _wallet, mode: _wallet._mode };
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
        _wallet = new window.ethers.Wallet(pk); _wallet._mode = "passkey-prf";
        return { wallet: _wallet, mode: "passkey-prf" };
      }
    } catch (e) { console.warn("[wallet] PRF path failed, using device key:", e?.message || e); }
    // Fallback: random key kept on this device only.
    let pk = localStorage.getItem("tilespree.deviceKey");
    if (!pk) { pk = window.ethers.Wallet.createRandom().privateKey; localStorage.setItem("tilespree.deviceKey", pk); }
    _wallet = new window.ethers.Wallet(pk); _wallet._mode = "device-key";
    return { wallet: _wallet, mode: "device-key" };
  }

  const ERC20_ABI = ["function approve(address spender, uint256 amount) returns (bool)", "function allowance(address owner, address spender) view returns (uint256)"];

  window.PasskeyWallet = {
    // Derive the wallet and sign a session-bound proof of control.
    async connect(sid) {
      const { wallet, mode } = await deriveWallet();
      const message = `TileSpree login\nsession: ${sid}\naddress: ${wallet.address}`;
      const sig = await wallet.signMessage(message);
      return { address: wallet.address, sig, message, mode };
    },
    // Sign an arbitrary message on the phone.
    async sign(message) {
      const { wallet } = await deriveWallet();
      return { address: wallet.address, sig: await wallet.signMessage(message) };
    },
    // Authorize the app's operator to spend USDC (one-time approve; funds many searches).
    async approveSpend(cfg) {
      const { wallet } = await deriveWallet();
      const provider = new window.ethers.JsonRpcProvider(cfg.rpcUrl, cfg.chainId);
      const signer = wallet.connect(provider);
      const usdc = new window.ethers.Contract(cfg.usdc, ERC20_ABI, signer);
      const current = await usdc.allowance(wallet.address, cfg.operator);
      if (current >= window.ethers.parseUnits("1000000", 6)) return { txHash: "", already: true };
      const tx = await usdc.approve(cfg.operator, window.ethers.MaxUint256);
      await tx.wait(1);
      return { txHash: tx.hash, already: false };
    },
  };
})();
