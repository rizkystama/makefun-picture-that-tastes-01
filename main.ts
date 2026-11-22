// Entry for "The picture that tastes of one ingredient".
//
// The picture itself is a committed asset (image.jpg, a macro shot of one
// halved mango). This program does nothing creative at run time: it simply
// copies those exact bytes to the output directory so the sandbox run is
// fully deterministic — same input, same output, every time.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve paths from this file's own location, not the working directory,
// so the program behaves the same no matter where it is invoked from.
const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "image.jpg");

// The harness tells us where to write via MAKEFUN_OUTPUT_DIR; fall back to
// the conventional /output location when the variable is unset or blank.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
const outputPath = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
const bytes = readFileSync(sourceImage);
writeFileSync(outputPath, bytes);
console.log(`Wrote ${bytes.length} bytes to ${outputPath}`);
