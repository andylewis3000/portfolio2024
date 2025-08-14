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

  // Update document title when location changes
  useEffect(() => {
    // Define page titles for each route
    const pageTitles = {
      '/': 'Home - Andy Lewis - Web Designer & Developer',
      '/about': 'About Us - Andy Lewis - Web Designer & Developer',
      '/services': 'Services - Andy Lewis - Web Designer & Developer',
      '/projects': 'Projects - Andy Lewis - Web Designer & Developer',
      '/contact': 'Contact Us - Andy Lewis - Web Designer & Developer',
      // Dynamic project pages will be handled separately
      // '/projects/yates-outdoor': 'Yates Outdoor - Your Company Name',
      // '/projects/maros-bistro': 'Maros Bistro - Your Company Name',
      // '/projects/bxb-bins': 'BxB Bins - Your Company Name',
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

    const newTitle = getPageTitle(location.pathname);
    document.title = newTitle;
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
      <HireCTA />
      <Footer />
    </>
  );
};

export default App;
