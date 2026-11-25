// one-line-laugh-22f2c9f3: one funny line, capped at 200 characters.
// The program writes that single line to /output/entry.txt, where the
// gate reads it. That is all it has to do.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke turns on an ordinary worry call from the bank: a daily coffee
// is not a treat, it is, by the bank's accounting, a cry for help. The
// punch lands on the last words. The em dash sets up the turn; the line
// is plain ASCII apart from it, so it reads smoothly aloud.
const LINE =
  'My bank called to check if I was okay — apparently buying one coffee a day counts as a cry for help.';

if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  console.error(`entry line is ${LINE.length} chars, must be 1-200`);
  process.exit(1);
}
if (LINE.includes('\n')) {
  console.error('entry line must be a single line');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf8');
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
