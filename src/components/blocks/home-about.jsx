import ContentColumn from '../elements/content-col';

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about__content content-col">
          <ContentColumn
            heading="A little bit about me..."
            paragraph={
              'I’ve been in the web design game long enough to know what works. These days I’ve traded the buzz of the city for mountain air, and dress shoes for hiking boots - but my mission has stayed the same: helping small businesses build powerful online presences with the polish of big agencies.'
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
