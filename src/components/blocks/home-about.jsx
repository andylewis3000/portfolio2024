import ContentColumn from '../elements/content-col';

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__content content-col">
          <ContentColumn
            heading="A little bit about me..."
            paragraph={
              'Meet the guy who builds websites that look sharp, run smoothly, and won’t mysteriously crash on mobile. He blends creativity, code, and strategy to help brands stand out online—minus the jargon and fluff.'
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
