import { Link } from 'react-router-dom';
// import { AiFillThunderbolt } from 'react-icons/ai';

const HeaderLogo = () => {
  return (
    <>
      <div className="header-logo">
        <Link to={'/'}>
          <h3 className="h6" rel="preload" fetchPriority="high">
            Andy Lewis
            <br />
            Digital Creative
          </h3>
        </Link>
      </div>
    </>
  );
};

export default HeaderLogo;
