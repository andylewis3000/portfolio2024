// scripts/generateSitemap.js
import fs from 'fs';
import path from 'path';

// Your project data - update this array when you add new projects
const projects = [
  'airsprint',
  'yates-outdoor',
  'maros-bistro',
  'bxb-bins',
  // Add more project slugs here as you create them
];

const siteConfig = {
  baseUrl: 'https://andylewis.ca',
  staticPages: [
    { path: '/', priority: '1.0', changefreq: 'monthly' },
    { path: '/about', priority: '0.4', changefreq: 'yearly' },
    { path: '/services', priority: '0.8', changefreq: 'monthly' },
    { path: '/projects', priority: '0.8', changefreq: 'monthly' },
    { path: '/contact', priority: '0.2', changefreq: 'yearly' },
  ],
};

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  siteConfig.staticPages.forEach((page) => {
    sitemap += `
  <url>
    <loc>${siteConfig.baseUrl}${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add dynamic project pages
  projects.forEach((project) => {
    sitemap += `
  <url>
    <loc>${siteConfig.baseUrl}/projects/${project}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${siteConfig.baseUrl}/sitemap.xml

# Block common bot paths that don't exist in your SPA
Disallow: /wp-admin/
Disallow: /admin/
Disallow: /.git/
Disallow: /node_modules/`;
}

// Generate files
const siteMapContent = generateSitemap();
const robotsContent = generateRobotsTxt();

// Write sitemap.xml to public folder (Vite will copy to dist during build)
const publicDir = path.resolve('public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), siteMapContent);
console.log('✅ sitemap.xml generated successfully');

// Write robots.txt to public folder
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);
console.log('✅ robots.txt generated successfully');

// ================================================================

// package.json additions (add these scripts to your existing package.json)
/*
{
  "scripts": {
    "sitemap": "node scripts/generateSitemap.js",
    "build": "npm run sitemap && vite build",
    "prebuild": "npm run sitemap"
  }
}
*/

// ================================================================

// vite.config.js - Simplified version without process.env
/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to generate sitemap during build
    {
      name: 'sitemap-generator',
      buildStart() {
        // Only generate during build, not dev
        try {
          import('./scripts/generateSitemap.js');
        } catch (error) {
          console.log('Sitemap generation will run via npm script');
        }
      }
    }
  ],
  publicDir: 'public'
})
*/

// ================================================================

// Alternative: React Hook for Dynamic Sitemap Generation
// hooks/useSitemap.js
/*
import { useEffect } from 'react';

export const useSiteMapGenerator = (projects) => {
  useEffect(() => {
    // This would run client-side - only use if you need dynamic generation
    // Based on data fetched at runtime
    const generateClientSitemap = () => {
      // Client-side sitemap logic here if needed
      console.log('Generating sitemap with projects:', projects);
    };
    
    if (projects && projects.length > 0) {
      generateClientSitemap();
    }
  }, [projects]);
};
*/

// ================================================================

// Project Data Integration
// If you have a projects data file, you can integrate it like this:
/*
// data/projects.js
export const projectsData = [
  {
    id: 'yates-outdoor',
    title: 'Yates Outdoor',
    // other project data...
  },
  {
    id: 'maros-bistro', 
    title: 'Maros Bistro',
    // other project data...
  },
  {
    id: 'bxb-bins',
    title: 'BxB Bins', 
    // other project data...
  }
];

// Then in generateSitemap.js:
// import { projectsData } from '../data/projects.js';
// const projects = projectsData.map(project => project.id);
*/
