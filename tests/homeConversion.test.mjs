import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const read = (path) => readFile(path, 'utf8');

test('home hero uses the approved first-person positioning and conversion CTAs', async () => {
  const hero = await read('src/components/sections/Hero.tsx');

  assert.match(hero, /Line — Numérologue, cartomancienne & praticienne Lahochi/);
  assert.match(hero, /Vous traversez une période de questionnement \?/);
  assert.match(hero, /Relation compliquée, choix professionnel à faire, ou épreuve qui vous pèse \?/);
  assert.match(hero, /La numérologie et la cartomancie vous aident à y voir clair/);
  assert.match(hero, /Je vous accompagne pour mieux comprendre ce que vous traversez/);
  assert.match(hero, /Consultations au cabinet à Gerponville ou à distance, selon la prestation/);
  assert.match(hero, /kind="booking"\s+placement="hero"/);
  assert.match(hero, />\s*Prendre rendez-vous\s*</);
  assert.match(hero, /kind="phone"\s+placement="hero-phone"/);
  assert.doesNotMatch(hero, /voyante|médium|Line Simon/i);
});

test('main navigation remains exactly the simple approved menu', async () => {
  const header = await read('src/components/layout/Header.tsx');

  assert.match(header, /label: "Accueil"/);
  assert.match(header, /label: "Prestations"/);
  assert.match(header, /label: "Avis clients"/);
  assert.match(header, /href="\/rendezvous"/);
  assert.match(header, /Prendre rendez-vous/);
  assert.doesNotMatch(header, /label: "Voyance"|label: "Numérologie"|label: "Soin énergétique"|label: "À distance"|label: "Blog"/);
});

test('the approved fixed review excerpts remain immediately after the hero', async () => {
  const app = await read('App.tsx');
  const ticker = await read('src/components/sections/TestimonialsTicker.tsx');
  const home = app.slice(app.indexOf('function HomePage'));

  const heroIndex = home.indexOf('<Hero');
  const proofIndex = home.indexOf('<TestimonialsTicker');
  const welcomeIndex = home.indexOf('<Welcome');
  assert.ok(heroIndex >= 0 && proofIndex > heroIndex && welcomeIndex > proofIndex);

  assert.match(ticker, /Extraits d'avis clients/);
  assert.match(ticker, /Des retours qui parlent de justesse, de bienveillance et de clarté/);
  assert.match(ticker, /Vous avez su me décrire avec une grande justesse/);
  assert.match(ticker, /Guidance d’une justesse et d’une pertinence surprenante|Guidance d'une justesse et d'une pertinence surprenante/);
  assert.match(ticker, /Le tirage était très clair, le passé vu était juste/);
  assert.match(ticker, /★★★★★ 5,0\/5 Google · 26 avis/);
  assert.match(ticker, /Voir tous les avis/);
});

test('story, tools and benefits restore the approved human-first language', async () => {
  const welcome = await read('src/components/sections/Welcome.tsx');
  const services = await read('src/components/sections/Services.tsx');
  const serviceData = await read('src/data/services.ts');
  const benefits = await read('src/components/sections/Benefits.tsx');

  assert.match(welcome, /Mon parcours a commencé par une quête de sens/);
  assert.match(welcome, /Une résonance étonnante/);
  assert.match(welcome, /Donner forme à ce que vous ressentez/);
  assert.match(services, /Mes outils pour vous guider/);
  assert.match(services, /La numérologie et la cartomancie peuvent être associées/);
  assert.match(serviceData, /Comprendre votre chemin de vie et la période que vous traversez/);
  assert.match(serviceData, /Éclairer les questions qui vous préoccupent/);
  assert.match(serviceData, /Un temps de détente et de recentrage/);
  assert.match(benefits, /Ce que mes pratiques peuvent vous apporter/);
  assert.match(benefits, /Comprendre certains schémas qui se répètent/);
});

test('existing and new offers preserve the approved commercial positioning', async () => {
  const consultations = await read('src/data/consultations.ts');
  const formules = await read('src/data/formules.ts');

  assert.match(consultations, /obtenir des réponses claires à vos questions/);
  assert.match(consultations, /Cette séance permet d'ajuster votre direction et de mieux comprendre les événements en cours/);
  assert.match(consultations, /Ce format vous permet d'obtenir une réponse personnalisée/);
  assert.match(consultations, /Lahochi Compagnon/);
  assert.match(consultations, /45 € à distance/);
  assert.match(consultations, /55 € à domicile/);
  assert.match(consultations, /Pack Compagnon Sérénité/);
  assert.match(consultations, /115 €/);
  assert.match(consultations, /Harmonisation d’objets|Harmonisation d'objets/);
  assert.match(consultations, /À partir de 25 €/);
  assert.match(formules, /Formule « Harmonie Intérieure »/);
  assert.match(formules, /Formule « Renaissance »/);
  assert.match(formules, /Formule « Soin Lahochi »/);
});

test('new Lahochi offer images and dedicated visitor pages remain committed', async () => {
  await Promise.all([
    access('public/images/services/lahochi-compagnon.jpg'),
    access('public/images/services/pack-compagnon-serenite.jpg'),
    access('public/images/services/harmonisation-objets.jpg'),
    access('src/pages/AvisPage.tsx'),
    access('src/pages/RendezVousPage.tsx'),
  ]);
});

test('public identity and SEO surfaces do not claim voyance, mediumship, or the old surname', async () => {
  const files = [
    'index.html',
    'src/components/sections/Hero.tsx',
    'src/components/layout/Footer.tsx',
    'src/data/services.ts',
    'src/pages/CartomancePage.tsx',
    'src/pages/NumerologiePage.tsx',
    'src/pages/LahochiPage.tsx',
    'src/pages/CityPage.tsx',
    'src/pages/TerritoryHubPage.tsx',
    'src/data/premiumLocalContent.mjs',
    'src/data/territorialHubs.mjs',
    'scripts/generate-llms.mjs',
  ];
  const source = (await Promise.all(files.map(read))).join('\n');

  assert.doesNotMatch(source, /\bvoyance\b|\bvoyante\b|\bmédium\b|\bmedium\b|Line Simon/i);
});

test('home metadata targets truthful services instead of false job titles', async () => {
  const html = await read('index.html');

  assert.match(html, /<title>Numérologue & Cartomancienne à Gerponville \| Tourma-Line<\/title>/);
  assert.match(html, /numérologie, cartomancie et Lahochi/);
  assert.doesNotMatch(html, /Voyante|Voyance|Line Simon/i);
});
