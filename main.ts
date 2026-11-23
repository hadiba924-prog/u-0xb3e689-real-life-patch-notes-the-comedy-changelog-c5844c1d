// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note for a bug in real life to entry.txt.
//
// The line: a sneeze that charges up for ten seconds and then cancels
// itself without warning. Everyone knows this bug. Nobody asked for it,
// and nobody has ever filed it — until now.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "v2.1.0: fixed a bug where a sneeze charged up for ten seconds, then cancelled itself without warning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
