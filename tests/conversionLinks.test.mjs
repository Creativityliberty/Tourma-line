import test from 'node:test';
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const roots = ['src/components', 'src/pages'];
const conversionHrefPattern = /(?:https:\/\/cal\.com\/tourma-line|https:\/\/wa\.me\/33649653186|tel:\+33649653186)/;

async function sourceFiles(root) {
  const entries = await readdir(root, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(root, entry.name);
    if (entry.isDirectory()) return sourceFiles(fullPath);
    return /\.(?:tsx|ts)$/.test(entry.name) ? [fullPath] : [];
  }));
  return nested.flat();
}

test('all user-facing conversion anchors go through ConversionLink', async () => {
  const offenders = [];
  const files = (await Promise.all(roots.map(sourceFiles))).flat();

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const anchorBlocks = source.match(/<a\b[\s\S]*?<\/a>/g) ?? [];
    for (const block of anchorBlocks) {
      if (conversionHrefPattern.test(block)) offenders.push(file);
    }
  }

  assert.deepEqual([...new Set(offenders)], []);
});

test('blog markdown conversion links are rendered through ConversionLink', async () => {
  const source = await readFile('src/pages/BlogPostPage.tsx', 'utf8');
  assert.match(source, /components=\{\{/);
  assert.match(source, /ConversionLink\s+kind="booking"\s+placement="article-body"/);
});
