import coolGuyAndy from '../assets/images/cool-guy-posterize.png';
import PageTransition from '../scripts/transitions';

const Contact = () => {
  return (
    <PageTransition>
      <section className="hero hero-small contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Contact</h1>
            <img
              className="contact-hero-image"
              src={coolGuyAndy}
              alt="Cool Guy Andy"
              width="600"
              height="600"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div style={{ width: '50%' }}>
            <h2>Content title</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus quaerat earum quia molestiae expedita dignissimos
              provident doloremque excepturi esse hic eos placeat sunt ea,
              magnam veniam, aut, est eum? Quis modi molestiae dolorum amet
              quasi ad rem voluptatum reiciendis, deserunt, nobis hic obcaecati
              commodi voluptatem vitae aliquam repellat animi eveniet.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              molestias mollitia earum consectetur perspiciatis officiis
              corrupti eveniet? Nulla quia neque error minima sequi non, nostrum
              hic! Nobis veritatis suscipit repellat voluptas ipsa eaque,
              accusamus, nulla alias architecto omnis corrupti minus minima,
              delectus impedit deleniti incidunt voluptatem dolores id laborum
              animi!
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
