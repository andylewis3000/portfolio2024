import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HireCTA = () => {
  return (
    <section className="hireCTA">
      <div className="container">
        <div className="hireCTA__content">
          <h2>
            {"Let's get started"} <FaArrowRight />
          </h2>
          <Link to="/contact">
            <button className="btn btn-secondary">Hire Me!</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HireCTA;
