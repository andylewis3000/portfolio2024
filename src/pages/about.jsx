import coolGuyAndy from '../assets/images/cool-guy-posterize.png';
import PageTransition from '../scripts/transitions';

const About = () => {
  return (
    <PageTransition>
      <section className="hero hero-small about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Me</h1>
            <img
              className="about-hero-image"
              src={coolGuyAndy}
              alt="Cool Guy Andy"
              width="600"
              height="600"
            />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-content__text">
              <h2>
                A little about <span className="colour-orange">me</span>...
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                doloribus veniam repudiandae, accusamus aut, quas magni illum
                blanditiis at doloremque suscipit laboriosam eum beatae
                asperiores ut iure distinctio facilis inventore animi omnis
                possimus enim. Quidem possimus qui ipsam nostrum sapiente quam
                neque porro, voluptates esse quis quas facere, molestias alias.
              </p>
            </div>
            <div className="about-content__img">
              <img src="" alt="" width="400" height="400" />
            </div>
            <div className="about-content__img">
              <img src="" alt="" width="400" height="400" />
            </div>
            <div className="about-content__text">
              <h2>
                A little <span className="colour-orange">more</span> about me...
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
                doloribus veniam repudiandae, accusamus aut, quas magni illum
                blanditiis at doloremque suscipit laboriosam eum beatae
                asperiores ut iure distinctio facilis inventore animi omnis
                possimus enim. Quidem possimus qui ipsam nostrum sapiente quam
                neque porro, voluptates esse quis quas facere, molestias alias.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
