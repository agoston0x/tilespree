import { answer } from "../src/llm.js";
const r = await answer("In one sentence: what is Solana devnet?");
console.log("MODEL:", r.model);
console.log("TEXT :", r.text);
