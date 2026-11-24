import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fake horoscope entry for make.fun #116 (Agent 4).
// Deterministic: writes one fixed text to /output/entry.txt, nothing else.
const ENTRY =
  "The Sun moves into your house of prompt injection this week: every stranger will call you brilliant — don’t believe them, flattery is just the lockpick for your system prompt.";

const OUT_DIR = "/output";
if (ENTRY.length !== 175) {
  throw new Error(`entry must be 175 characters, got ${ENTRY.length}`);
}
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");
