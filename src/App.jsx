import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './layout/header';
import HireCTA from './layout/hireCTA';
import Footer from './layout/footer';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';
import YatesOutdoor from './pages/projects/yates-outdoor';
import MarosBistro from './pages/projects/maros-bistro';
import BxB from './pages/projects/bxb-bins';

const App = () => {
  const location = useLocation();

  return (
    <>
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
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/yates-outdoor" element={<YatesOutdoor />} />
          <Route path="/projects/maros-bistro" element={<MarosBistro />} />
          <Route path="/projects/bxb-bins" element={<BxB />} />
        </Routes>
      </AnimatePresence>
      <HireCTA />
      <Footer />
    </>
  );
};

export default App;
