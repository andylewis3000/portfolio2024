import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import ReactGA from 'react-ga4';

// Eagerly load critical components (above the fold)
import Header from './layout/header';
import HireCTA from './layout/hireCTA';
import Footer from './layout/footer';
import SEOMetaTags from './scripts/SEOMetaTags';

// Lazy load page components (code-splitting by route)
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Services = lazy(() => import('./pages/services'));
const Projects = lazy(() => import('./pages/projects'));
const Project = lazy(() => import('./pages/project'));
const Contact = lazy(() => import('./pages/contact'));

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
  const [displayLocation, setDisplayLocation] = useState(location.pathname);

  // Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  // Track page views
  useEffect(() => {
    // Send a pageview event for the new URL
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  // Update display location with a small delay to prevent CTA flashing
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayLocation(location.pathname);
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // Update document title and body class when location changes
  useEffect(() => {
    // Define page titles for each route
    const pageTitles = {
      '/': 'Home - Andy Lewis - Web Designer & Developer',
      '/about': 'About Us - Andy Lewis - Web Designer & Developer',
      '/services': 'Services - Andy Lewis - Web Designer & Developer',
      '/projects': 'Projects - Andy Lewis - Web Designer & Developer',
      '/contact': 'Contact Us - Andy Lewis - Web Designer & Developer',
    };

    // Function to get page class based on current path
    const getPageClass = (pathname) => {
      // Handle home route
      if (pathname === '/') {
        return 'home';
      }

      // Handle dynamic project routes (/projects/:id)
      if (pathname.startsWith('/projects/') && pathname !== '/projects') {
        return 'project-detail';
      }

      // Handle regular routes - remove leading slash and replace any remaining slashes with dashes
      return pathname.slice(1).replace(/\//g, '-');
    };

    // Function to get page title based on current path
    const getPageTitle = (pathname) => {
      // Handle dynamic project routes (/projects/:id)
      if (pathname.startsWith('/projects/') && pathname !== '/projects') {
        const projectId = pathname.split('/')[2];
        return `${projectId
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (l) =>
            l.toUpperCase()
          )} - Andy Lewis - Web Designer & Developer`;
      }

      // Return specific title or default
      return pageTitles[pathname] || 'Andy Lewis - Web Designer & Developer';
    };

    // Update document title
    const newTitle = getPageTitle(location.pathname);
    document.title = newTitle;

    // Update body class
    const pageClass = getPageClass(location.pathname);

    // Remove any existing page classes
    document.body.className = document.body.className
      .replace(/\b(home|about|services|projects|project-detail|contact)\b/g, '')
      .trim();

    // Add new page class
    document.body.classList.add(pageClass);

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [location.pathname]);

  return (
    <>
      <SEOMetaTags />
      <Header />
      <AnimatePresence
        initial={false}
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'instant' });
          }
        }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      {/* HireCTA outside AnimatePresence to prevent layout shift, using delayed location */}
      {displayLocation === '/contact' ? (
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
