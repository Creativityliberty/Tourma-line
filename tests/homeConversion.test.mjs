import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(path, 'utf8');

test('home hero leads with the commercial Fécamp intent and a direct booking CTA', async () => {
  const hero = await read('src/components/sections/Hero.tsx');

  assert.match(hero, /Voyante & cartomancienne près de Fécamp en Seine-Maritime/);
  assert.match(hero, /Une relation vous questionne/);
  assert.match(hero, /choix professionnel/);
  assert.match(hero, /questions reviennent sans réponse/);
  assert.match(hero, /kind="booking"\s+placement="hero"/);
  assert.match(hero, />\s*Prendre rendez-vous\s*</);
  assert.match(hero, /kind="phone"\s+placement="hero-phone"/);
  assert.doesNotMatch(hero, /Découvrir mes accompagnements/);
});

test('lightweight social proof appears immediately after the hero without duplicating the full reviews widget', async () => {
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
  assert.doesNotMatch(ticker, /Prédictions toujours justes/);
  assert.doesNotMatch(ticker, /angoisse/);
});

test('welcome copy is human-first while keeping the Lahochi health boundary', async () => {
  const welcome = await read('src/components/sections/Welcome.tsx');

  assert.match(welcome, /Vous avez besoin d'y voir plus clair/);
  assert.match(welcome, /relation/);
  assert.match(welcome, /choix professionnel/);
  assert.match(welcome, /mettre des mots/);
  assert.match(welcome, /ne se substitue pas à un suivi médical/);
});

test('home search metadata prioritizes Fécamp and the commercial cartomancy intent', async () => {
  const html = await read('index.html');

  assert.match(html, /<title>Voyante & Cartomancienne près de Fécamp \| Tourma-Line<\/title>/);
  assert.match(html, /Line Simon vous reçoit à Gerponville, près de Fécamp et Valmont/);
  assert.match(html, /cartomancie, numérologie et Lahochi/);
  assert.match(html, /og:title" content="Voyante & Cartomancienne près de Fécamp \| Tourma-Line"/);
  assert.match(html, /twitter:title" content="Voyante & Cartomancienne près de Fécamp \| Tourma-Line"/);
});
