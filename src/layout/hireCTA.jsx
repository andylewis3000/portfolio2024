// import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HireCTA = ({ heading, btnClass, btnTitle, link }) => {
  return (
    <section className="hireCTA">
      <div className="container">
        <div className="hireCTA__content">
          <h2>{heading}</h2>
          <Link to={link}>
            <button className={`btn ${btnClass}`}>{btnTitle}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HireCTA;
