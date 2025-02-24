import { useState, useEffect } from 'react';
import SocialLinks from '../components/elements/social';
import GlowPulse from '../components/elements/glow-pulse';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <SocialLinks />
            <p className="copyright">
              <small>&copy; {year}. All rights reserved.</small>
            </p>
          </div>
          <GlowPulse position="right large" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
