import ContentColumn from '../elements/content-col';

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__content content-col">
          <ContentColumn
            heading="A little bit about me..."
            paragraph={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                exercitationem! Quae cupiditate voluptas nobis ipsa possimus
                suscipit eaque commodi quam. Molestias nemo nostrum excepturi
                natus?
              </p>
            }
            link={'/about'}
            btnClass={'secondary'}
            btnText={'Learn More'}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
