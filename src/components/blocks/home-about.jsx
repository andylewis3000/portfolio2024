import ImageTextLayout from '../layouts/image-text-layout';

const HomeAbout = () => {
  return (
    <ImageTextLayout
      reverse={true}
      extraClass="home-about"
      imageSrc={'/images/AL-Portrait.webp'}
      imageAlt="Hi, I'm Andy"
      imageReveal={true}
      imageRevealProps={{ damping: 3 }}
      textReveal={true}
      textRevealProps={{ cascade: true, damping: 1 }}
      heading={"Hey, I'm Andy"}
      text={
        <p>
          I&apos;ve been in the web design game long enough to know what works.
          These days I&apos;ve traded the buzz of the city for mountain air, and
          dress shoes for hiking boots - but my mission has stayed the same:
          helping small businesses build powerful online presences with the
          polish of big agencies.
        </p>
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
