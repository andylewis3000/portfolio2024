// Post-build prerender step.
//
// Vite ships a single client-rendered index.html, so crawlers and social
// scrapers only see generic head tags until JS executes. This script writes a
// static HTML file per route (dist/about/index.html, dist/projects/airsprint/
// index.html, ...) with that route's title, description, canonical and Open
// Graph / Twitter tags baked into the <head>, and the route's fully rendered
// React markup inside #root. The client hydrates that markup in main.jsx.
//
// No headless browser required: page markup comes from the SSR bundle built
// from src/entry-server.jsx (`vite build --ssr`), head tags from the shared
// SEO data in src/seo/seoData.js.

import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { getSEOData, getPrerenderRoutes } from '../src/seo/seoData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const baseHtmlPath = path.join(distDir, 'index.html');
// Empty-#root shell for URLs that aren't prerendered (.htaccess fallback).
const shellHtmlPath = path.join(distDir, 'spa.html');
const ssrEntryPath = path.resolve(__dirname, '../dist-ssr/entry-server.js');
const emptyRoot = '<div id="root"></div>';

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
    ['name', 'author', 'Andy Lewis - Shopify CRO, Design & Development'],
    ['property', 'og:title', data.title],
    ['property', 'og:description', data.description],
    ['property', 'og:type', data.ogType],
    ['property', 'og:url', data.canonicalUrl],
    ['property', 'og:image', data.ogImage],
    ['property', 'og:image:secure_url', data.ogImage],
    ['property', 'og:image:alt', data.ogImageAlt],
    ['property', 'og:image:width', '1200'],
    ['property', 'og:image:height', '630'],
    ['property', 'og:site_name', 'Andy Lewis - Shopify CRO, Design & Development'],
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

async function renderRouteHtml(baseHtml, render, route) {
  const data = getSEOData(route);
  const stripped = stripManagedTags(baseHtml);
  const fragment = buildHeadFragment(data);
  const appHtml = await render(route);
  // Copy placeholders are written as "[TODO: ...]"; never ship one.
  // PRERENDER_ALLOW_TODO=1 downgrades this to a warning for local previews.
  const todo = appHtml.match(/\[TODO[^\]]*\]?/);
  if (todo) {
    const message = `Unfilled placeholder on ${route}: ${todo[0]}`;
    if (!process.env.PRERENDER_ALLOW_TODO) throw new Error(message);
    console.warn(`⚠ ${message}`);
  }
  return stripped
    .replace(/<\/head>/i, `${fragment}  </head>`)
    .replace(emptyRoot, () => `<div id="root">${appHtml}</div>`);
}

async function writeRoute(baseHtml, render, route) {
  const html = await renderRouteHtml(baseHtml, render, route);

  if (route === '/') {
    fs.writeFileSync(baseHtmlPath, html);
  } else {
    const outDir = path.join(distDir, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
  }
}

async function prerender() {
  if (!fs.existsSync(baseHtmlPath)) {
    console.error('✗ dist/index.html not found — run `vite build` first.');
    process.exit(1);
  }
  if (!fs.existsSync(ssrEntryPath)) {
    console.error('✗ dist-ssr/entry-server.js not found — run the SSR build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');
  if (!baseHtml.includes(emptyRoot)) {
    console.error(`✗ ${emptyRoot} not found in dist/index.html.`);
    process.exit(1);
  }
  fs.writeFileSync(shellHtmlPath, baseHtml);

  const { render } = await import(pathToFileURL(ssrEntryPath).href);
  const routes = getPrerenderRoutes();

  for (const route of routes) {
    await writeRoute(baseHtml, render, route);
  }

  console.log(`✅ Prerendered ${routes.length} routes:`);
  routes.forEach((route) => console.log(`   ${route}`));
}

prerender().catch((err) => {
  console.error('✗ Prerender failed:', err);
  process.exit(1);
});
