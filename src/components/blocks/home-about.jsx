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
          I&apos;ve spent over a decade in web design and ecommerce, long enough
          to know what actually makes a store sell.
          These days I&apos;ve traded the buzz of the city for mountain air, and
          dress shoes for hiking boots - but my mission has stayed the same:
          helping Shopify brands turn more of their visitors into customers,
          with the polish of a big agency.
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
