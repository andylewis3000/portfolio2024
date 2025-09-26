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
                <img src="/ALDC-Logo-Light.svg" alt="Andy Lewis Logo" />
                <h2 className="h6">
                  Andy Lewis
                  <br />
                  Digital Creative
                </h2>
              </div>
            </div>
            <div className="footer-content__block">
              {/* <h6>Navigation</h6> */}
              <FooterMenu />
            </div>
            <div className="footer-content__block">
              {/* <h6>Social</h6> */}
              <SocialLinks />
            </div>
          </div>
          <p className="copyright">
            <small>&copy; {year}. All rights reserved.</small>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
