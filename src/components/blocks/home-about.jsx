// import ContentColumn from '../elements/content-col';
// import ButtonLink from '../elements/button';
import ImageTextLayout from '../layouts/image-text-layout';

const HomeAbout = () => {
  return (
    // <section className="home-about">
    //   <div className="container">
    //     <div className="home-about__content content-col">
    //       <ContentColumn
    //         heading="A little bit about me..."
    //         paragraph={
    //           'I’ve been in the web design game long enough to know what works. These days I’ve traded the buzz of the city for mountain air, and dress shoes for hiking boots - but my mission has stayed the same: helping small businesses build powerful online presences with the polish of big agencies.'
    //         }
    //         link={'/about'}
    //         btnClass={'secondary'}
    //         btnText={'Learn More'}
    //       />
    //     </div>
    //   </div>
    // </section>
    <ImageTextLayout
      reverse={true}
      extraClass="home-about"
      // withReveal={true}
      // revealProps={{ cascade: true, damping: 0.1 }}
      imageSrc={'/AL-Portrait.webp'}
      imageAlt="Hi, I'm Andy"
      imageReveal={true}
      imageRevealProps={{ damping: 3 }}
      textReveal={true}
      textRevealProps={{ cascade: true, damping: 1 }}
      heading={"Hey, I'm Andy"}
      text={
        "I've been in the web design game long enough to know what works. These days I've traded the buzz of the city for mountain air, and dress shoes for hiking boots - but my mission has stayed the same: helping small businesses build powerful online presences with the polish of big agencies."
      }
      btnTitle="Learn More"
      btnClass={'btn-primary'}
      link={'/about'}
      srText={'about me'}
      buttonReveal={true}
      buttonRevealProps={{ damping: 2 }}
    />
  );
};

export default HomeAbout;
