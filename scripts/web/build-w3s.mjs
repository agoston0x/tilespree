import esbuild from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const forceCjs = {
  name: "force-cjs-polyfills",
  setup(build) {
    build.onResolve({ filter: /^stream$/ }, () => ({ path: require.resolve("stream-browserify") }));
    build.onResolve({ filter: /^util$/ },   () => ({ path: require.resolve("util/") }));
  },
};
await esbuild.build({
  entryPoints: ["scripts/web/w3s-entry.js"],
  bundle: true, format: "iife", outfile: "public/w3s.js",
  target: "es2020", logLevel: "error",
  define: { global: "globalThis", "process.env.NODE_ENV": '"production"' },
  inject: ["scripts/web/node-shim.js"],
  plugins: [forceCjs, polyfillNode()],
});
console.log("bundled");
