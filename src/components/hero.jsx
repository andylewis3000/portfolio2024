import { coolGuyAndy } from '../assets/images/cool-guy-posterize.png';

const Hero = () => {
  return (
    <section className="hero hero-large home-hero">
      <div className="container">
        <div className="hero-content">
          <h1>{"Hey, I'm Andy and I make things."}</h1>
          <h4>
            {
              "I'm a web and graphic designer who also codes and does e-commerce stuff."
            }
          </h4>
          <img
            className="home-hero-image"
            src={coolGuyAndy}
            alt="Cool Guy Andy"
            width="600"
            height="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
