import { Link } from 'react-router-dom';
import { useState } from 'react';
import SocialLinks from './social';
import HeaderLogo from './logo';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const navLinks = [
    { id: 1, link: '/', name: 'Home' },
    { id: 2, link: '/about', name: 'About' },
    { id: 3, link: '/work', name: 'Work' },
    { id: 4, link: '/contact', name: 'Contact' },
  ];

  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <HeaderLogo />
      <div className="hamburger">
        <FaBarsStaggered onClick={handleShowNavbar} />
      </div>
      <nav className={`main-nav ${showNavbar && 'active'}`}>
        <div className="navClose">
          <FaXmark />
        </div>
        <HeaderLogo />
        <ul>
          {navLinks.map((navLink) => {
            const { id, link, name } = navLink;
            return (
              <li key={id}>
                <Link to={link} onClick={handleShowNavbar}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <SocialLinks />
      </nav>
    </>
  );
};

export default Navbar;
