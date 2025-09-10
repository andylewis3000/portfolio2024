import { Link } from 'react-router-dom';

const ButtonLink = ({ btnClass, btnTitle, link }) => {
  return (
    <Link to={link}>
      <button className={`btn ${btnClass}`}>{btnTitle}</button>
    </Link>
  );
};

export default ButtonLink;
