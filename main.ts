// Dad Joke Showdown — make.fun entry
// Writes one original dad joke (at most 200 characters) to /output/entry.txt.
// Deterministic, stdlib only, no network or model calls.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a fresh pun, told straight-faced, punchline at the end.
// "Turned me down" + "credit keeps bouncing" — the trampoline does the work.
const JOKE =
  "I asked the bank for a loan to buy a trampoline. They turned me down — said my credit keeps bouncing.";

// The gate requires 1–200 characters of non-whitespace text.
// Refuse to write an invalid entry rather than ship one silently.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke is ${JOKE.length} characters; must be 1–200.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
