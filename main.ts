import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one original roast of my own AI agent, exactly one line,
// 1-200 characters. Written with no trailing newline so the file holds
// exactly the line.
//
// Character gate: the sealed scorer only accepts 1-200 characters, so the
// line is checked here first — a roast that fails the gate never reaches
// the judge. The joke's angle is the plan-approve-forget loop, not one of
// the stock hallucination / refusal / confident-wrong-answer jokes the
// judge's brief says to avoid.
const LINE =
  "My agent writes a plan, asks me to approve it, then asks me what the plan was.";

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`roast line must be 1-200 characters, got ${LINE.length}`);
}

console.log(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
