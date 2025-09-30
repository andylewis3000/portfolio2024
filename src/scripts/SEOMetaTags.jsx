import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOMetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    // Define SEO data for each route
    const seoData = {
      '/': {
        title: 'Andy Lewis - Professional Web Development & Design Services',
        description:
          'Leading web development company specializing in custom websites, web applications, and digital solutions. Get professional, responsive websites that drive results.',
        keywords:
          'web development, web design, custom websites, responsive design, professional web services',
        ogType: 'website',
        ogImage: '/images/og-default.jpg',
        canonicalUrl: 'https://andylewis.ca',
      },
      '/about': {
        title:
          'About Us - Andy Lewis - Web Designer & Developer | Experienced Web Development Team',
        description:
          'Learn about our experienced team of web developers and designers. Discover our mission, values, and commitment to delivering exceptional digital solutions.',
        keywords:
          'about us, web development team, company history, web design expertise, professional developers',
        ogType: 'website',
        ogImage: '/images/og-default.jpg',
        canonicalUrl: 'https://andylewis.ca/about',
      },
      '/services': {
        title:
          'Web Development Services - Custom Solutions | Andy Lewis - Web Designer & Developer',
        description:
          'Comprehensive web development services including custom website development, e-commerce solutions, web applications, and digital marketing. Contact us today!',
        keywords:
          'web development services, custom websites, e-commerce development, web applications, digital solutions',
        ogType: 'website',
        ogImage: '/images/og-default.jpg',
        canonicalUrl: 'https://andylewis.ca/services',
      },
      '/projects': {
        title:
          'Our Portfolio - Web Development Projects | Andy Lewis - Web Designer & Developer',
        description:
          "View our portfolio of successful web development projects. See examples of custom websites, web applications, and digital solutions we've created for clients.",
        keywords:
          'web development portfolio, project showcase, website examples, client work, case studies',
        ogType: 'website',
        ogImage: '/images/og-default.jpg',
        canonicalUrl: 'https://andylewis.ca/projects',
      },
      '/contact': {
        title:
          'Contact Us - Get Your Free Web Development Quote | Andy Lewis - Web Designer & Developer',
        description:
          "Ready to start your web development project? Contact our team for a free consultation and quote. We're here to bring your digital vision to life.",
        keywords:
          'contact web developers, free quote, web development consultation, hire developers, project inquiry',
        ogType: 'website',
        ogImage: '/images/og-default.jpg',
        canonicalUrl: 'https://andylewis.ca/contact',
      },
    };

    // Function to get SEO data based on current path
    const getSEOData = (pathname) => {
      // Handle dynamic project routes (/projects/:id)
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
          // ogImage: `/images/projects/${projectId}-og.jpg`,
          ogImage: `/images/og-default.jpg`,
          canonicalUrl: `https://andylewis.ca/projects/${projectId}`,
        };
      }

      // Return specific SEO data or default
      return (
        seoData[pathname] || {
          title:
            'Andy Lewis - Web Designer & Developer - Professional Web Development Services',
          description:
            'Professional web development and design services. Custom solutions for your digital needs.',
          keywords: 'web development, web design, professional services',
          ogType: 'website',
          ogImage: '/images/og-default.jpg',
          canonicalUrl: 'https://andylewis.ca',
        }
      );
    };

    // Function to update meta tags
    const updateMetaTags = (data) => {
      // Update title
      document.title = data.title;

      // Helper function to update or create meta tags
      const setMetaTag = (name, content, isProperty = false) => {
        const selector = isProperty
          ? `meta[property="${name}"]`
          : `meta[name="${name}"]`;
        let meta = document.querySelector(selector);

        if (!meta) {
          meta = document.createElement('meta');
          if (isProperty) {
            meta.setAttribute('property', name);
          } else {
            meta.setAttribute('name', name);
          }
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      // Helper function to update or create link tags
      const setLinkTag = (rel, href) => {
        let link = document.querySelector(`link[rel="${rel}"]`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', rel);
          document.head.appendChild(link);
        }
        link.setAttribute('href', href);
      };

      // Basic SEO meta tags
      setMetaTag('description', data.description);
      setMetaTag('keywords', data.keywords);
      setMetaTag('robots', 'index, follow');
      setMetaTag('author', 'Andy Lewis - Web Designer & Developer');
      setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

      // Open Graph meta tags (Facebook, LinkedIn, etc.)
      setMetaTag('og:title', data.title, true);
      setMetaTag('og:description', data.description, true);
      setMetaTag('og:type', data.ogType, true);
      setMetaTag('og:url', data.canonicalUrl, true);
      setMetaTag('og:image', data.ogImage, true);
      setMetaTag('og:site_name', 'Andy Lewis - Web Designer & Developer', true);
      setMetaTag('og:locale', 'en_US', true);

      // Twitter Card meta tags
      setMetaTag('twitter:card', 'summary_large_image');
      setMetaTag('twitter:title', data.title);
      setMetaTag('twitter:description', data.description);
      setMetaTag('twitter:image', data.ogImage);
      setMetaTag('twitter:site', '@yourtwitter'); // Replace with your Twitter handle

      // Canonical URL
      setLinkTag('canonical', data.canonicalUrl);

      // Additional SEO improvements
      setMetaTag('theme-color', '#292f36'); // Replace with your brand color
      setMetaTag('msapplication-TileColor', '#292f36'); // Replace with your brand color
    };

    const currentSEOData = getSEOData(location.pathname);
    updateMetaTags(currentSEOData);
  }, [location.pathname]);

  return null; // This component doesn't render anything visible
};

export default SEOMetaTags;
