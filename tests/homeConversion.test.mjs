import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const read = (path) => readFile(path, 'utf8');

test('home hero restores the original human copy while keeping direct conversion CTAs', async () => {
  const hero = await read('src/components/sections/Hero.tsx');

  assert.match(hero, /Line — Cartomancienne, numérologue & praticienne en soins énergétiques/);
  assert.match(hero, /Vous traversez une période de questionnement \?/);
  assert.match(hero, /Relation compliquée, choix professionnel à faire, ou épreuve qui vous pèse \?/);
  assert.match(hero, /La numérologie et la cartomancie vous aident à y voir clair/);
  assert.match(hero, /Consultations au cabinet à Gerponville ou à distance, selon la prestation/);
  assert.match(hero, /kind="booking"\s+placement="hero"/);
  assert.match(hero, />\s*Prendre rendez-vous\s*</);
  assert.match(hero, /kind="phone"\s+placement="hero-phone"/);
  assert.doesNotMatch(hero, /Voyante & cartomancienne près de Fécamp en Seine-Maritime/);
});

test('main navigation stays intentionally simple and booking opens its dedicated page', async () => {
  const header = await read('src/components/layout/Header.tsx');
  const app = await read('App.tsx');

  assert.match(header, /label: "Accueil"/);
  assert.match(header, /label: "Prestations"/);
  assert.match(header, /label: "Avis clients"/);
  assert.match(header, /href="\/rendezvous"/);
  assert.match(header, /Prendre rendez-vous/);
  assert.doesNotMatch(header, /label: "Voyance"/);
  assert.doesNotMatch(header, /label: "Numérologie"/);
  assert.doesNotMatch(header, /label: "Soin énergétique"/);
  assert.doesNotMatch(header, /label: "À distance"/);
  assert.doesNotMatch(header, /label: "Blog"/);

  for (const route of ['/numerologie', '/cartomancie', '/soin-lahochi', '/consultation-a-distance', '/blog']) {
    assert.match(app, new RegExp(`path="${route.replaceAll('/', '\\/')}"`));
  }
});

test('the original story and emotional proof return without medical promises', async () => {
  const welcome = await read('src/components/sections/Welcome.tsx');

  assert.match(welcome, /Mon parcours a commencé par une quête de sens/);
  assert.match(welcome, /les schémas qui se répétaient, les questions sans réponses/);
  assert.match(welcome, /La numérologie et la cartomancie m(?:'|&apos;)ont offert des clés/);
  assert.match(welcome, /Une résonance étonnante/);
  assert.match(welcome, /Donner forme à ce que vous ressentez/);
  assert.doesNotMatch(welcome, /soulagé de mon angoisse/i);
  assert.doesNotMatch(welcome, /sommeil plus réparateur/i);
});

test('three fixed Google review excerpts appear immediately after the hero', async () => {
  const app = await read('App.tsx');
  const ticker = await read('src/components/sections/TestimonialsTicker.tsx');
  const home = app.slice(app.indexOf('function HomePage'));

  const heroIndex = home.indexOf('<Hero');
  const proofIndex = home.indexOf('<TestimonialsTicker');
  const welcomeIndex = home.indexOf('<Welcome');

  assert.ok(heroIndex >= 0 && proofIndex > heroIndex && welcomeIndex > proofIndex);
  assert.match(ticker, /Vous avez su me décrire avec une grande justesse/);
  assert.match(ticker, /Guidance d’une justesse et d’une pertinence surprenante|Guidance d'une justesse et d'une pertinence surprenante/);
  assert.match(ticker, /Le tirage était très clair, le passé vu était juste/);
  assert.match(ticker, /5,0\/5 Google/);
  assert.match(ticker, /26 avis/);
  assert.doesNotMatch(ticker, /setInterval/);
  assert.doesNotMatch(ticker, /useState/);
});

test('home stays focused and leaves local SEO discovery to internal links outside the main journey', async () => {
  const app = await read('App.tsx');
  const home = app.slice(app.indexOf('function HomePage'), app.indexOf('function App'));

  assert.doesNotMatch(home, /<CityLinks\s*\/>/);
  assert.doesNotMatch(home, /<BlogOverview\s*\/>/);
  assert.match(home, /<LocalZone\s*\/>/);
  assert.match(home, /<Testimonials\s*\/>/);
  assert.match(home, /<FAQ\s*\/>/);
  assert.match(home, /<Contact\s*\/>/);
});

test('existing guidance offers keep the approved commercial copy while Lahochi stays wellness-only', async () => {
  const consultations = await read('src/data/consultations.ts');
  const formules = await read('src/data/formules.ts');

  assert.match(consultations, /obtenir des réponses claires à vos questions/);
  assert.match(consultations, /Cette séance permet d'ajuster votre direction et de mieux comprendre les événements en cours/);
  assert.match(consultations, /Ce format vous permet d'obtenir une réponse personnalisée/);
  assert.match(consultations, /temps de détente, de recentrage et de bien-être/);
  assert.match(consultations, /ne remplace pas un diagnostic, un traitement ou un suivi par un professionnel de santé/);
  assert.doesNotMatch(consultations, /auto-guérison/i);
  assert.doesNotMatch(consultations, /guérison émotionnelle et physique/i);
  assert.doesNotMatch(consultations, /Apaise le stress et l'anxiété/i);

  assert.match(formules, /Formule « Harmonie Intérieure »/);
  assert.match(formules, /Formule « Renaissance »/);
  assert.match(formules, /Formule « Soin Lahochi »/);
  assert.doesNotMatch(formules, /Guérir en profondeur/i);
  assert.doesNotMatch(formules, /traumatismes/i);
  assert.doesNotMatch(formules, /libérer les blocages persistants/i);
});

test('new Lahochi offers are present with their approved positioning, prices and image paths', async () => {
  const consultations = await read('src/data/consultations.ts');
  const consultationCards = await read('src/components/sections/Consultations.tsx');

  assert.match(consultations, /Lahochi Compagnon/);
  assert.match(consultations, /45 € à distance/);
  assert.match(consultations, /55 € à domicile/);
  assert.match(consultations, /20 km autour de Gerponville/);
  assert.match(consultations, /Pack Compagnon Sérénité/);
  assert.match(consultations, /115 €/);
  assert.match(consultations, /Harmonisation d’objets|Harmonisation d'objets/);
  assert.match(consultations, /À partir de 25 €/);
  assert.match(consultations, /à partir d’une photographie|à partir d'une photographie/);
  assert.match(consultations, /contactOnly: true/);
  assert.match(consultationCards, /consultation\.contactOnly/);
  assert.match(consultations, /\/images\/services\/lahochi-compagnon\.jpg/);
  assert.match(consultations, /\/images\/services\/pack-compagnon-serenite\.jpg/);
  assert.match(consultations, /\/images\/services\/harmonisation-objets\.jpg/);
});

test('new Lahochi offer images and dedicated visitor pages are committed', async () => {
  await Promise.all([
    access('public/images/services/lahochi-compagnon.jpg'),
    access('public/images/services/pack-compagnon-serenite.jpg'),
    access('public/images/services/harmonisation-objets.jpg'),
    access('src/pages/AvisPage.tsx'),
    access('src/pages/RendezVousPage.tsx'),
  ]);

  const app = await read('App.tsx');
  assert.match(app, /path="\/avis" element={<AvisPage\s*\/>}/);
  assert.match(app, /path="\/rendezvous" element={<RendezVousPage\s*\/>}/);
});

test('visible footer uses Line without relying on the current surname', async () => {
  const footer = await read('src/components/layout/Footer.tsx');
  assert.match(footer, /Line —/);
  assert.doesNotMatch(footer, /Line Simon —/);
});

test('home search metadata keeps the current local SEO targeting', async () => {
  const html = await read('index.html');

  assert.match(html, /<title>Voyante & Cartomancienne près de Fécamp \| Tourma-Line<\/title>/);
  assert.match(html, /Line Simon vous reçoit à Gerponville, près de Fécamp et Valmont/);
  assert.match(html, /cartomancie, numérologie et Lahochi/);
  assert.match(html, /og:title" content="Voyante & Cartomancienne près de Fécamp \| Tourma-Line"/);
  assert.match(html, /twitter:title" content="Voyante & Cartomancienne près de Fécamp \| Tourma-Line"/);
});
