import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('all consultation card images share harmonized media sizing and clean presentation', async () => {
  const consultationsUi = await readFile('src/components/sections/Consultations.tsx', 'utf8');

  assert.match(
    consultationsUi,
    /"md:w-2\/5 h-64 md:h-auto relative overflow-hidden"/,
    'consultation cards should use the harmonized media sizing',
  );
  assert.doesNotMatch(
    consultationsUi,
    /contrast-125|saturate-125|brightness-95|scale-\[1\.02\]/,
    'card artwork should not be distorted by aggressive image filters or zoom',
  );
});
