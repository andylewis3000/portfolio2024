import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

import Header from './layout/header';
import HireCTA from './layout/hireCTA';
import Footer from './layout/footer';
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Projects from './pages/projects';
import Project from './pages/project';
import Contact from './pages/contact';
import SEOMetaTags from './scripts/SEOMetaTags';

const App = () => {
  const location = useLocation();

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
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects/yates-outdoor" element={<YatesOutdoor />} />
          <Route path="/projects/maros-bistro" element={<MarosBistro />} />
          <Route path="/projects/bxb-bins" element={<BxB />} /> */}
          {/* <Route path="*" element={<404 />} /> */}
        </Routes>
      </AnimatePresence>
      {location.pathname === '/contact' ? (
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
