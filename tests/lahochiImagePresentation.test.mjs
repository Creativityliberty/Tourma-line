import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('new Lahochi offer images are larger and kept visually clean', async () => {
  const consultationsUi = await readFile('src/components/sections/Consultations.tsx', 'utf8');

  assert.match(
    consultationsUi,
    /highlightImage\s*\?\s*"md:w-\[52%\][^"]*aspect-square[^"]*"/,
    'new Lahochi cards should give their square artwork a larger dedicated media area',
  );
  assert.doesNotMatch(
    consultationsUi,
    /contrast-125|saturate-125|brightness-95|scale-\[1\.02\]/,
    'new Lahochi artwork should not be distorted by aggressive image filters or zoom',
  );
});
