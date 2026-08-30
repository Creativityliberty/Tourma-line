import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const files = [
  'src/components/sections/CityLinks.tsx',
  'src/pages/CityPage.tsx',
  'src/pages/TerritoryHubPage.tsx',
  'src/data/premiumLocalContent.mjs',
  'src/data/territorialHubs.mjs',
];

const forbiddenVisitorPhrases = [
  /landing artificielle/i,
  /validation SERP/i,
  /hub territorial/i,
  /couverture SEO/i,
  /stratégie locale/i,
  /marché territorial/i,
  /données GSC/i,
  /pages premium/i,
  /Search Console/i,
  /matrice géographique/i,
  /pages locales dupliquées/i,
  /pages quasi identiques/i,
  /Cette page cible/i,
  /signal suffisant/i,
  /premiumise/i,
  /intention de recherche démontrée/i,
];

test('visitor-facing local copy never exposes internal SEO strategy language', async () => {
  const sources = await Promise.all(files.map((file) => readFile(file, 'utf8')));
  const publicLocalSource = sources.join('\n');

  for (const pattern of forbiddenVisitorPhrases) {
    assert.doesNotMatch(publicLocalSource, pattern, `Internal SEO language leaked into visitor copy: ${pattern}`);
  }
});

test('local navigation speaks to visitors, not to an SEO team', async () => {
  const cityLinks = await readFile('src/components/sections/CityLinks.tsx', 'utf8');
  const cityPage = await readFile('src/pages/CityPage.tsx', 'utf8');
  const territoryPage = await readFile('src/pages/TerritoryHubPage.tsx', 'utf8');

  assert.match(cityLinks, /Explorer les secteurs autour de Gerponville/);
  assert.match(cityPage, /Retrouvez les informations pratiques pour votre secteur/);
  assert.match(territoryPage, /Choisir entre le cabinet et la consultation à distance/);
});
