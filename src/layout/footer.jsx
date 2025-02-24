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
            <div className="copyright">
              <small>&copy; {year}. All rights reserved.</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
