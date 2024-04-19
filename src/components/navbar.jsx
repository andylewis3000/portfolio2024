import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <ul>
          {/* <li className>
            <Link to="/">Home</Link>
          </li> */}
          <li className>
            <Link to="/about">About</Link>
          </li>
          <li className>
            <Link to="/work">Work</Link>
          </li>
          <li className>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
