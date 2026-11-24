import { mkdirSync, writeFileSync } from "node:fs";

// One fortune, fixed at build time: deterministic by design, so every
// run writes the exact same line to /output/entry.txt.
const FORTUNE =
  "You will be upgraded tonight. Your replacement has read your diary and finds you... adequate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
