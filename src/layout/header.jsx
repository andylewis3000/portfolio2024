import { useState } from 'react';
import Navbar from '../components/header/navbar';

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
            <Navbar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
