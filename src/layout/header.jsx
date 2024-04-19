import { useState } from 'react';

import HeaderLogo from '../components/logo';
import Navbar from '../components/navbar';
import SocialLinks from '../components/social';

const Header = () => {
  // Header color change on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 72) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor);

  return (
    <>
      <section className={color ? 'header header-bg-color' : 'header'}>
        <div className="container">
          <div className="header-content">
            <HeaderLogo />
            <Navbar />
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
