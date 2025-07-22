import { useState, useEffect } from 'react';
import SocialLinks from '../components/elements/social';

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
        </div>
      </footer>
    </>
  );
};

export default Footer;
