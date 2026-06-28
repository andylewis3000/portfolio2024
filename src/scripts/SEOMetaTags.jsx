import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOData } from '../seo/seoData';

const SEOMetaTags = () => {
  const location = useLocation();

  useEffect(() => {
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
      setMetaTag('og:image:secure_url', data.ogImage, true); // HTTPS version
      setMetaTag('og:image:alt', data.ogImageAlt, true); // Alt text for accessibility
      setMetaTag('og:image:width', '1200', true); // Facebook recommends 1200x630
      setMetaTag('og:image:height', '630', true);
      setMetaTag('og:site_name', 'Andy Lewis - Web Designer & Developer', true);
      setMetaTag('og:locale', 'en_US', true);

      // Twitter Card meta tags
      setMetaTag('twitter:card', 'summary_large_image');
      setMetaTag('twitter:title', data.title);
      setMetaTag('twitter:description', data.description);
      setMetaTag('twitter:image', data.ogImage);
      setMetaTag('twitter:image:alt', data.ogImageAlt);

      // Canonical URL
      setLinkTag('canonical', data.canonicalUrl);

      // Additional SEO improvements
      setMetaTag('theme-color', '#292f36');
      setMetaTag('msapplication-TileColor', '#292f36');
    };

    updateMetaTags(getSEOData(location.pathname));
  }, [location.pathname]);

  return null;
};

export default SEOMetaTags;
