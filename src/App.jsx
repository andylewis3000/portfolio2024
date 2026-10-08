import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import ReactGA from 'react-ga4';

// Eagerly load critical components (above the fold)
import Header from './layout/header';
import HireCTA from './layout/hireCTA';
import Footer from './layout/footer';
import SEOMetaTags from './scripts/SEOMetaTags';
import { normalizePath } from './seo/seoData';

// Lazy load page components (code-splitting by route)
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Projects = lazy(() => import('./pages/projects'));
const Project = lazy(() => import('./pages/project'));
const Contact = lazy(() => import('./pages/contact'));
const Audit = lazy(() => import('./pages/audit'));

const GA_MEASUREMENT_ID = 'G-211F5WWT6Q';

// Loading fallback component - reserves space to prevent layout shift
const PageLoader = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.6,
    }}
  >
    <div>Loading...</div>
  </div>
);

const App = () => {
  const location = useLocation();
  // '/contact/' and '/contact' are the same page (see normalizePath).
  const pathname = normalizePath(location.pathname);

  // Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  // Track page views
  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  // Scroll to top after route content has loaded
  useEffect(() => {
    // Double RAF ensures it happens after Suspense resolves and the DOM updates
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
  }, [pathname]);

  // Update body class when location changes. The document title is set by
  // SEOMetaTags from the shared SEO data.
  useEffect(() => {
    // Function to get page class based on current path
    const getPageClass = (pathname) => {
      // Handle home route
      if (pathname === '/') {
        return 'home';
      }

      // Handle dynamic project routes (/projects/:id)
      if (pathname.startsWith('/projects/')) {
        return 'project-detail';
      }

      // Handle regular routes - remove leading slash and replace any remaining slashes with dashes
      return pathname.slice(1).replace(/\//g, '-');
    };

    const pageClass = getPageClass(pathname);

    // Remove any existing page classes
    document.body.className = document.body.className
      .replace(/\b(home|about|services|projects|project-detail|contact|audit)\b/g, '')
      .trim();

    // Add new page class
    document.body.classList.add(pageClass);

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [pathname]);

  return (
    <>
      <SEOMetaTags />
      <Header />
      {/* Routes are keyed by pathname so each page remounts and the CSS
          page-fade transition (see PageTransition) re-runs on navigation. */}
      <Suspense fallback={<PageLoader />}>
        <Routes key={pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/audit" element={<Audit />} />
        </Routes>
      </Suspense>

      {/* The audit page renders its own booking CTA. */}
      {pathname === '/audit' ? null : pathname === '/contact' ? (
        <HireCTA
          heading={'Check out my work'}
          btnClass={'btn-secondary'}
          btnTitle={'View Work'}
          link={'/projects'}
        />
      ) : (
        <HireCTA
          heading={'Ready to get started?'}
          btnClass={'btn-primary'}
          btnTitle={"Let's work together"}
          link={'/contact'}
        />
      )}

      <Footer />
    </>
  );
};

export default App;
