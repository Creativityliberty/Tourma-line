import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(path, 'utf8');

test('home hero text matches approved copy', async () => {
  const hero = await read('src/components/sections/Hero.tsx');
  assert.match(hero, /Line — Cartomancienne, numérologue & praticienne en soins énergétiques/);
  assert.match(hero, /Vous traversez une période de questionnement \?/);
  assert.match(hero, /Relation compliquée, choix professionnel à faire, ou épreuve qui vous pèse \?/);
  assert.match(hero, /La numérologie et la cartomancie vous aident à y voir clair/);
  assert.match(hero, /Consultations au cabinet à Gerponville ou à distance, selon la prestation/);
});
