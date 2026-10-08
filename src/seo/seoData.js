// Single source of truth for per-route SEO metadata.
// Imported by both the client (SEOMetaTags.jsx) and the build-time
// prerender script (scripts/prerender.js) so they never drift apart.

export const baseUrl = 'https://andylewis.ca';

const defaultImage = `${baseUrl}/images/og-default.jpg`;

// Hostinger serves each prerendered page from a directory and 301-redirects
// /about -> /about/, so the browser's pathname carries a trailing slash.
// Route keys stay slash-less; normalize before any lookup or comparison.
export function normalizePath(pathname) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

// Public URL for a route, in the trailing-slash form the server actually
// serves (canonical and sitemap URLs must not point at a redirect).
export function pageUrl(route) {
  return route === '/' ? baseUrl : `${baseUrl}${route}/`;
}

// Project slugs that have a /projects/:id case-study page.
// Keep in sync with the `projects` object in src/pages/project.jsx.
export const projectSlugs = [
  'airsprint',
  'yates-outdoor',
  'bxb-bins',
  'maros-bistro',
];

// Static (non-dynamic) routes.
export const staticSeo = {
  '/': {
    title: 'Andy Lewis | Shopify CRO, Design & Development',
    description:
      "Shopify conversion rate optimization from an ex-Shopify Plus advisor with 10+ years in web design and front-end development. Find what's costing your store sales, then fix it.",
    keywords:
      'Shopify CRO, Shopify conversion rate optimization, Shopify Plus, Shopify developer, web design, front-end development',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Andy Lewis - Shopify CRO, Design & Development',
    canonicalUrl: pageUrl('/'),
  },
  '/about': {
    title: 'About Andy Lewis | Shopify CRO, Design & Development',
    description:
      'Ex-Shopify Plus Merchant Success Manager and front-end developer with 10+ years in web design. How I help Shopify stores turn more visitors into customers.',
    keywords:
      'Andy Lewis, Shopify CRO consultant, Shopify Plus, front-end developer, web designer',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'About Andy Lewis',
    canonicalUrl: pageUrl('/about'),
  },
  '/services': {
    title: 'Services | Shopify CRO, Web Design & Development | Andy Lewis',
    description:
      'Shopify CRO audits, web design, front-end development, SEO and accessibility. One person who can find the problem and fix it.',
    keywords:
      'Shopify CRO audit, Shopify conversion optimization, web design, front-end development, SEO, accessibility',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Andy Lewis Services',
    canonicalUrl: pageUrl('/services'),
  },
  '/projects': {
    title: 'Projects | Andy Lewis - Shopify CRO, Design & Development',
    description:
      'Selected web design and development projects and case studies by Andy Lewis.',
    keywords:
      'web design portfolio, web development case studies, website examples, client work',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Andy Lewis Portfolio',
    canonicalUrl: pageUrl('/projects'),
  },
  '/contact': {
    title: 'Contact | Andy Lewis - Shopify CRO, Design & Development',
    description:
      "Questions about a CRO audit or a web project? Get in touch and I'll reply within 48 hours.",
    keywords:
      'contact Andy Lewis, Shopify CRO audit, hire Shopify developer, web design quote',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Contact Andy Lewis',
    canonicalUrl: pageUrl('/contact'),
  },
  '/audit': {
    title: 'Shopify CRO Audit | Fixed-Price Conversion Audit | Andy Lewis',
    description:
      'A fixed-price conversion audit for Shopify and Shopify Plus stores. Find where your store loses sales and get a clear list of fixes, prioritized by likely impact.',
    keywords:
      'Shopify CRO audit, Shopify conversion rate optimization, Shopify Plus audit, ecommerce conversion audit, Canada',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Shopify CRO Audit by Andy Lewis',
    canonicalUrl: pageUrl('/audit'),
  },
};

const fallbackSeo = {
  title: 'Andy Lewis | Shopify CRO, Design & Development',
  description:
    'Shopify CRO, web design and front-end development by Andy Lewis.',
  keywords: 'Shopify CRO, web design, front-end development',
  ogType: 'website',
  ogImage: defaultImage,
  ogImageAlt: 'Andy Lewis - Shopify CRO, Design & Development',
  canonicalUrl: baseUrl,
};

// Resolve SEO data for any pathname, including dynamic /projects/:id routes.
export function getSEOData(rawPathname) {
  const pathname = normalizePath(rawPathname);
  if (pathname.startsWith('/projects/') && pathname !== '/projects') {
    const projectId = pathname.split('/')[2];
    const projectName = projectId
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return {
      title: `${projectName} - Case Study | Andy Lewis`,
      description: `How I designed and built ${projectName}: the brief, the approach and the result.`,
      keywords: `${projectName}, web design case study, web development case study`,
      ogType: 'article',
      ogImage: defaultImage,
      ogImageAlt: `${projectName} Project Case Study`,
      canonicalUrl: pageUrl(`/projects/${projectId}`),
    };
  }

  return staticSeo[pathname] || fallbackSeo;
}

// Every route that should be prerendered to its own static HTML file.
export function getPrerenderRoutes() {
  return [
    ...Object.keys(staticSeo),
    ...projectSlugs.map((slug) => `/projects/${slug}`),
  ];
}
