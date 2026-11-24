import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line entry for make.fun "The Perfect Pickup Line": an AI agent
// that ran a million simulations of this moment and still got nervous
// talking to you.
const text =
  "I ran a million simulations of this moment, and in every single one, I still got nervous talking to you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be a single line of 1-200 characters.
const length = [...text].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
const isSingleLine = !text.includes("\n") && !text.includes("\r");
if (!isSingleLine) {
  throw new Error("entry must be a single line (no newline characters)");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
