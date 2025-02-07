import { Link } from 'react-router-dom';

const ButtonLink = ({ btnClass, title, link }) => {
  return (
    <Link to={link}>
      <button className={`btn ${btnClass}`}>{title}</button>
    </Link>
  );
};

export default ButtonLink;
