import { Link } from 'react-router-dom';

const HeaderLogo = () => {
  return (
    <>
      <div className="header-logo">
        <Link to={'/'}>
          <h3 className="h6">
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
