import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. Lire sitemap.xml pour obtenir toutes les URLs du site
const sitemapPath = path.resolve(__dirname, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error("Erreur : sitemap.xml introuvable à la racine !");
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const urls = [];
const matches = sitemapContent.matchAll(/<loc>https:\/\/www\.tourma-line\.fr([^<]*)<\/loc>/g);
for (const match of matches) {
  urls.push(match[1] || '/');
}

// Nettoyer les doublons et s'assurer que / est présent
const routes = [...new Set(urls)].map(r => r === '' ? '/' : r);
console.log(`Routes trouvées dans le sitemap (${routes.length}) :`, routes);

// 2. Définir les chemins des répertoires de build
const clientBuildDir = path.resolve(__dirname, 'dist');
const serverBuildFile = path.resolve(__dirname, 'dist/server/entry-server.js');
const templatePath = path.resolve(clientBuildDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error("Erreur : Le build client n'a pas généré dist/index.html ! Lancez d'abord vite build.");
  process.exit(1);
}

if (!fs.existsSync(serverBuildFile)) {
  console.error("Erreur : Le build SSR n'a pas généré dist/server/entry-server.js !");
  process.exit(1);
}

// 3. Charger le template HTML de base et le module SSR
const template = fs.readFileSync(templatePath, 'utf-8');
const { render } = await import(serverBuildFile);

console.log("Démarrage du pré-rendu statique (SSG)...");

// 4. Parcourir chaque route et générer son fichier HTML physique
for (const route of routes) {
  try {
    console.log(`Génération du HTML pour la route : ${route}`);
    
    // Obtenir le HTML brut rendu par le serveur (avec React 19 et react-helmet-async)
    const { html } = render(route);
    
    // Extraire les balises SEO (hoistées par React 19 au début du rendu string)
    const titleTag = (html.match(/<title>.*?<\/title>/i) || [''])[0];
    const metaTags = Array.from(html.matchAll(/<meta[^>]*?\/?>/gi)).map(m => m[0]).join('\n');
    const linkTags = Array.from(html.matchAll(/<link[^>]*?\/?>/gi)).map(m => m[0]).join('\n');
    const scriptTags = Array.from(html.matchAll(/<script type="application\/ld\+json">.*?<\/script>/gi)).map(m => m[0]).join('\n');

    // Nettoyer le HTML restant pour la div #root (retirer les balises hoistées du body)
    const cleanHtml = html
      .replace(/<title>.*?<\/title>/i, '')
      .replaceAll(/<meta[^>]*?\/?>/gi, '')
      .replaceAll(/<link[^>]*?\/?>/gi, '')
      .replaceAll(/<script type="application\/ld\+json">.*?<\/script>/gi, '');

    // Supprimer les balises SEO par défaut du template index.html pour éviter les doublons clignotants
    let cleanTemplate = template
      .replace(/<title>[^<]*<\/title>/i, '')
      .replace(/<meta[^>]*name="description"[^>]*>/i, '')
      .replace(/<meta[^>]*name="keywords"[^>]*>/i, '')
      .replace(/<link[^>]*rel="canonical"[^>]*>/i, '');

    // Préparer l'injection dans le <head>
    const headInject = `
      ${titleTag}
      ${metaTags}
      ${linkTags}
      ${scriptTags}
    `;

    // Injecter les balises dans le <head> et le contenu dans la div #root
    const finalHtml = cleanTemplate
      .replace('</head>', `${headInject}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${cleanHtml}</div>`);

    // Déterminer le chemin de sortie physique
    let outputPath;
    if (route === '/') {
      outputPath = path.resolve(clientBuildDir, 'index.html');
    } else {
      // Supprimer le slash de début et s'assurer que c'est un sous-dossier avec index.html
      const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
      const routeDir = path.resolve(clientBuildDir, cleanRoute);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      outputPath = path.resolve(routeDir, 'index.html');
    }

    // Écrire le fichier final
    fs.writeFileSync(outputPath, finalHtml, 'utf-8');
  } catch (err) {
    console.error(`Erreur de pré-rendu pour la route ${route} :`, err);
  }
}

// 5. Supprimer le dossier temporaire dist/server car Vercel n'en a pas besoin pour servir les fichiers statiques
try {
  const serverDir = path.resolve(clientBuildDir, 'server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log("Dossier de build SSR temporaire supprimé.");
  }
} catch (e) {
  console.warn("Impossible de supprimer le dossier de build SSR temporaire :", e.message);
}

console.log("Pré-rendu statique (SSG) terminé avec succès !");
