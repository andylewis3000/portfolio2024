import coolGuyAndy from '../assets/images/cool-guy-posterize.png';
import PageTransition from '../scripts/transitions';

const Home = () => {
  return (
    <PageTransition>
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
      <section className="style-guide">
        <div className="container">
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A corporis
            unde facilis maxime dolores dicta quae laboriosam corrupti hic
            aliquam, earum sunt? Eos, ad veritatis?
          </p>
          <button className="btn btn-primary">Button</button>
          <button className="btn btn-secondary">Button</button>
          <ul>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
