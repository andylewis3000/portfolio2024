import { Link } from 'react-router-dom';
// import { AiFillThunderbolt } from 'react-icons/ai';

const HeaderLogo = () => {
  return (
    <>
      <div className="header-logo">
        <Link to={'/'}>
          <h3>ALDC</h3>
        </Link>
      </div>
    </>
  );
};

export default HeaderLogo;
