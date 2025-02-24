import { Link } from 'react-router-dom';
import GlowPulse from '../elements/glow-pulse';

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container">
        <GlowPulse position="right large" />
        <div className="home-about__content">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            sapiente ea tenetur expedita modi natus neque ipsa rerum facere ad!
            Iure amet aperiam totam aliquam recusandae eveniet obcaecati dolorem
            inventore illo soluta aut dolorum, exercitationem sed. Possimus
            voluptates, repellat laboriosam excepturi sunt autem! Fugit atque
            ipsam quas exercitationem ullam expedita?
          </p>
          <Link to="/about">
            <button className="btn btn-secondary">Read More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
