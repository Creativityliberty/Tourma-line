import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(path, 'utf8');

test('hero keeps the approved positioning copy without editorial drift', async () => {
  const hero = await read('src/components/sections/Hero.tsx');

  assert.match(hero, /Line — Cartomancienne, numérologue & praticienne en soins énergétiques/);
  assert.match(hero, /Vous traversez une période de questionnement \?/);
  assert.match(hero, /Relation compliquée, choix professionnel à faire, ou épreuve qui vous pèse \?/);
  assert.match(hero, /La numérologie et la cartomancie vous aident à y voir clair — avec la justesse et la bienveillance que mes clients soulignent\./);
  assert.match(hero, /Consultations au cabinet à Gerponville ou à distance, selon la prestation\./);
  assert.doesNotMatch(hero, /Je vous accompagne pour mieux comprendre ce que vous traversez/);
});

test('the protected Lahochi service copy remains word-for-word', async () => {
  const consultations = await read('src/data/consultations.ts');

  assert.match(consultations, /Un soin énergétique puissant par apposition des mains, permettant de stimuler les mécanismes d'auto-guérison du corps et d'apaiser le mental\./);
  assert.match(consultations, /Rééquilibre les énergies du corps/);
  assert.match(consultations, /Apaise le stress et l'anxiété/);
  assert.match(consultations, /Favorise la guérison émotionnelle et physique/);
  assert.match(consultations, /Procure une profonde relaxation/);
  assert.match(consultations, /Idéal pour retrouver vitalité et sérénité\./);
});

test('the three protected accompaniment formulas remain word-for-word', async () => {
  const formules = await read('src/data/formules.ts');

  assert.match(formules, /2 Séances sur 1 mois/);
  assert.match(formules, /Apaiser les émotions, comprendre les schémas répétitifs et rééquilibrer les énergies pour restaurer l\\?'harmonie globale\./);
  assert.match(formules, /1 séance combinée de numérologie et de cartomancie\./);
  assert.match(formules, /1 soin Lahochi \(à une autre date\)\./);

  assert.match(formules, /Guérir en profondeur, libérer les mémoires émotionnelles et retrouver une stabilité intérieure durable \(traumatismes, deuils, ruptures\)\./);
  assert.match(formules, /1 séance de cartomancie \+ numérologie \(démarrage\)\./);
  assert.match(formules, /3 soins Lahochi \(1 par mois\)\./);
  assert.match(formules, /Suivi énergétique et guidance entre les séances\./);
  assert.match(formules, /1 séance de cartomancie de clôture\./);

  assert.match(formules, /Un travail énergétique profond et suivi pour ancrer le bien-être, libérer les blocages persistants et maintenir une vibration élevée\./);
  assert.match(formules, /3 séances de soin Lahochi complètes\./);
  assert.match(formules, /Suivi de l\\?'évolution énergétique entre chaque séance\./);
  assert.match(formules, /Idéal pour un travail de fond ou une période de transition\./);
  assert.match(formules, /À définir selon besoins/);
});
