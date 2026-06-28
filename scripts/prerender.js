// Post-build prerender step.
//
// Vite ships a single client-rendered index.html, so crawlers and social
// scrapers only see generic head tags until JS executes. This script writes a
// static HTML file per route (dist/about/index.html, dist/projects/airsprint/
// index.html, ...) with that route's title, description, canonical and Open
// Graph / Twitter tags baked into the <head>. The SPA still hydrates normally.
//
// No headless browser required — it operates purely on the built HTML string
// using the shared SEO data in src/seo/seoData.js.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getSEOData, getPrerenderRoutes } from '../src/seo/seoData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const baseHtmlPath = path.join(distDir, 'index.html');

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Build the head fragment for a route, mirroring the runtime SEOMetaTags tags.
function buildHeadFragment(data) {
  const meta = [
    ['name', 'description', data.description],
    ['name', 'keywords', data.keywords],
    ['name', 'robots', 'index, follow'],
    ['name', 'author', 'Andy Lewis - Web Designer & Developer'],
    ['property', 'og:title', data.title],
    ['property', 'og:description', data.description],
    ['property', 'og:type', data.ogType],
    ['property', 'og:url', data.canonicalUrl],
    ['property', 'og:image', data.ogImage],
    ['property', 'og:image:secure_url', data.ogImage],
    ['property', 'og:image:alt', data.ogImageAlt],
    ['property', 'og:image:width', '1200'],
    ['property', 'og:image:height', '630'],
    ['property', 'og:site_name', 'Andy Lewis - Web Designer & Developer'],
    ['property', 'og:locale', 'en_US'],
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', data.title],
    ['name', 'twitter:description', data.description],
    ['name', 'twitter:image', data.ogImage],
    ['name', 'twitter:image:alt', data.ogImageAlt],
    ['name', 'theme-color', '#292f36'],
    ['name', 'msapplication-TileColor', '#292f36'],
  ];

  const metaTags = meta
    .map(
      ([attr, key, content]) =>
        `    <meta ${attr}="${key}" content="${escapeAttr(content)}" />`
    )
    .join('\n');

  return (
    `    <title>${escapeAttr(data.title)}</title>\n` +
    `${metaTags}\n` +
    `    <link rel="canonical" href="${escapeAttr(data.canonicalUrl)}" />\n`
  );
}

// Strip the SEO tags we manage from the base HTML so we can re-inject fresh
// ones. Preload, favicon and charset tags are left untouched.
function stripManagedTags(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(
      /\s*<meta\s+(?:name|property)="(?:description|keywords|robots|author|og:[^"]*|twitter:[^"]*|theme-color|msapplication-TileColor)"[^>]*>/gi,
      ''
    )
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '');
}

function renderRouteHtml(baseHtml, route) {
  const data = getSEOData(route);
  const stripped = stripManagedTags(baseHtml);
  const fragment = buildHeadFragment(data);
  return stripped.replace(/<\/head>/i, `${fragment}  </head>`);
}

function writeRoute(baseHtml, route) {
  const html = renderRouteHtml(baseHtml, route);

  if (route === '/') {
    fs.writeFileSync(baseHtmlPath, html);
  } else {
    const outDir = path.join(distDir, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }
}

function prerender() {
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('✗ dist/index.html not found — run `vite build` first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');
  const routes = getPrerenderRoutes();

  routes.forEach((route) => writeRoute(baseHtml, route));

  console.log(`✅ Prerendered ${routes.length} routes:`);
  routes.forEach((route) => console.log(`   ${route}`));
}

prerender();
