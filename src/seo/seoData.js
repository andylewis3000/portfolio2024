// Single source of truth for per-route SEO metadata.
// Imported by both the client (SEOMetaTags.jsx) and the build-time
// prerender script (scripts/prerender.js) so they never drift apart.

export const baseUrl = 'https://andylewis.ca';

const defaultImage = `${baseUrl}/images/og-default.jpg`;

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
    title: 'Andy Lewis - Professional Web Development & Design Services',
    description:
      'Leading web development company specializing in custom websites, web applications, and digital solutions. Get professional, responsive websites that drive results.',
    keywords:
      'web development, web design, custom websites, responsive design, professional web services',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Andy Lewis Web Development Services',
    canonicalUrl: `${baseUrl}`,
  },
  '/about': {
    title:
      'About Us - Andy Lewis - Web Designer & Developer | Experienced Web Development Team',
    description:
      'Learn about our experienced team of web developers and designers. Discover our mission, values, and commitment to delivering exceptional digital solutions.',
    keywords:
      'about us, web development team, company history, web design expertise, professional developers',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'About Andy Lewis Web Development Team',
    canonicalUrl: `${baseUrl}/about`,
  },
  '/services': {
    title:
      'Web Development Services - Custom Solutions | Andy Lewis - Web Designer & Developer',
    description:
      'Comprehensive web development services including custom website development, e-commerce solutions, web applications, and digital marketing. Contact us today!',
    keywords:
      'web development services, custom websites, e-commerce development, web applications, digital solutions',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Andy Lewis Web Development Services',
    canonicalUrl: `${baseUrl}/services`,
  },
  '/projects': {
    title:
      'Our Portfolio - Web Development Projects | Andy Lewis - Web Designer & Developer',
    description:
      "View our portfolio of successful web development projects. See examples of custom websites, web applications, and digital solutions we've created for clients.",
    keywords:
      'web development portfolio, project showcase, website examples, client work, case studies',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Andy Lewis Web Development Portfolio',
    canonicalUrl: `${baseUrl}/projects`,
  },
  '/contact': {
    title:
      'Contact Us - Get Your Free Web Development Quote | Andy Lewis - Web Designer & Developer',
    description:
      "Ready to start your web development project? Contact our team for a free consultation and quote. We're here to bring your digital vision to life.",
    keywords:
      'contact web developers, free quote, web development consultation, hire developers, project inquiry',
    ogType: 'website',
    ogImage: defaultImage,
    ogImageAlt: 'Contact Andy Lewis for Web Development',
    canonicalUrl: `${baseUrl}/contact`,
  },
};

const fallbackSeo = {
  title:
    'Andy Lewis - Web Designer & Developer - Professional Web Development Services',
  description:
    'Professional web development and design services. Custom solutions for your digital needs.',
  keywords: 'web development, web design, professional services',
  ogType: 'website',
  ogImage: defaultImage,
  ogImageAlt: 'Andy Lewis Web Development',
  canonicalUrl: baseUrl,
};

// Resolve SEO data for any pathname, including dynamic /projects/:id routes.
export function getSEOData(pathname) {
  if (pathname.startsWith('/projects/') && pathname !== '/projects') {
    const projectId = pathname.split('/')[2];
    const projectName = projectId
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return {
      title: `${projectName} - Project Case Study | Andy Lewis - Web Designer & Developer`,
      description: `Detailed case study of ${projectName} web development project. See how we delivered custom solutions and exceptional results for our client.`,
      keywords: `${projectName}, web development case study, project details, client success story`,
      ogType: 'article',
      ogImage: defaultImage,
      ogImageAlt: `${projectName} Project Case Study`,
      canonicalUrl: `${baseUrl}/projects/${projectId}`,
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
