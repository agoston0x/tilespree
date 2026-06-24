// Bundle ethers for the browser (passkey wallet page) -> public/ethers.js (global `ethers`).
import esbuild from "esbuild";
await esbuild.build({
  entryPoints: ["scripts/web/ethers-entry.js"],
  bundle: true, format: "iife", outfile: "public/ethers.js",
  target: "es2020", logLevel: "error",
  define: { global: "globalThis", "process.env.NODE_ENV": '"production"' },
});
console.log("bundled public/ethers.js");
