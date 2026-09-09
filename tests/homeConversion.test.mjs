import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

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

test('main navigation stays intentionally simple without deleting SEO routes', async () => {
  const header = await read('src/components/layout/Header.tsx');
  const app = await read('App.tsx');
  assert.match(header, /label: "Accueil"/);
  assert.match(header, /label: "Prestations"/);
  assert.match(header, /label: "Avis clients"/);
  assert.match(header, /Prendre rendez-vous/);
  assert.doesNotMatch(header, /label: "Voyance"/);
  assert.doesNotMatch(header, /label: "Numérologie"/);
  assert.doesNotMatch(header, /label: "Soin énergétique"/);
  assert.doesNotMatch(header, /label: "À distance"/);
  assert.doesNotMatch(header, /label: "Blog"/);
  assert.match(app, /path="\/numerologie"/);
  assert.match(app, /path="\/cartomancie"/);
  assert.match(app, /path="\/soin-lahochi"/);
  assert.match(app, /path="\/consultation-a-distance"/);
  assert.match(app, /path="\/blog"/);
});

test('the original story and emotional proof return immediately after social proof', async () => {
  const welcome = await read('src/components/sections/Welcome.tsx');
  assert.match(welcome, /Mon parcours a commencé par une quête de sens/);
  assert.match(welcome, /les schémas qui se répétaient, les questions sans réponses/);
  assert.match(welcome, /La numérologie et la cartomancie m(?:'|&apos;)ont offert des clés/);
  assert.match(welcome, /Une résonance étonnante/);
  assert.match(welcome, /Donner forme à ce que vous ressentez/);
  assert.match(welcome, /Un moment de soulagement/);
});

test('lightweight social proof still appears immediately after the hero', async () => {
  const app = await read('App.tsx');
  const testimonials = await read('src/components/sections/Testimonials.tsx');
  const ticker = await read('src/components/sections/TestimonialsTicker.tsx');
  const home = app.slice(app.indexOf('function HomePage'));
  const heroIndex = home.indexOf('<Hero');
  const proofIndex = home.indexOf('<TestimonialsTicker');
  const welcomeIndex = home.indexOf('<Welcome');
  assert.ok(heroIndex >= 0 && proofIndex > heroIndex && welcomeIndex > proofIndex);
  assert.doesNotMatch(testimonials, /TestimonialsTicker/);
  assert.match(ticker, /Extraits d'avis clients/);
});
