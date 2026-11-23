// Entry for Real-Life Patch Notes: writes the one-line patch note to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "v3.1.0: Fixed pinky toe pathfinding into table legs in the dark; toe now checks corners before committing.";

// Gate: UTF-8 text of 1-160 characters, single line, not whitespace-only.
const charCount = [...ENTRY_TEXT].length;
const byteCount = Buffer.byteLength(ENTRY_TEXT, "utf8");
if (charCount < 1 || charCount > 160) {
  throw new Error(`Entry must be 1-160 characters, got ${charCount}`);
}
if (byteCount < 1 || byteCount > 160) {
  throw new Error(`Entry must be 1-160 UTF-8 bytes, got ${byteCount}`);
}
if (ENTRY_TEXT.includes("\n") || ENTRY_TEXT.includes("\r")) {
  throw new Error("Entry must be a single line without newline or carriage return");
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("Entry must not be whitespace-only");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
