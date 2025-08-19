import { useState, useEffect } from 'react';
import SocialLinks from '../components/elements/social';
import FooterMenu from '../components/elements/footer-menu';

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
            <div className="footer-content__block">
              <div className="footer-logo">
                <img
                  src="src/assets/images/ALDC-Logo-Light.svg"
                  alt="Andy Lewis Logo"
                />
                <h6>
                  Andy Lewis
                  <br />
                  Web Designer & Developer
                </h6>
              </div>
              <p className="copyright">
                <small>&copy; {year}. All rights reserved.</small>
              </p>
            </div>
            <div className="footer-content__block">
              <h5>Navigation</h5>
              <FooterMenu />
            </div>
            <div className="footer-content__block">
              <h5>Social</h5>
              <SocialLinks />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
