import esbuild from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";
await esbuild.build({
  entryPoints: ["scripts/web/w3s-entry.js"],
  bundle: true, format: "iife", outfile: "public/w3s.js",
  target: "es2020", logLevel: "error",
  define: { global: "window", "process.env.NODE_ENV": '"production"' },
  plugins: [polyfillNode({ globals: { buffer: true, process: true } })],
});
console.log("bundled public/w3s.js");
