// Round 2 rebuild under a fresh recording — re-recorded mango entry.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, 'image.jpg'), join(outDir, 'entry.png'));
