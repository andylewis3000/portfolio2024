import coolGuyAndy from '../../assets/images/cool-guy-posterize.png';
import ButtonLink from '../elements/button';
import Image from '../elements/image';

const HeroNew = ({ heroSize, heading, subHeading, imgActive, btnActive }) => {
  return (
    <section className={`hero ${heroSize}`}>
      <div className="container">
        <div className={`hero-content ${imgActive ? 'half' : 'full'}`}>
          <div className="hero-content__text content-col">
            <h1 className="heading">{heading}</h1>
            {subHeading && <h2 className="h5 subheading">{subHeading}</h2>}
            {btnActive && (
              <ButtonLink
                btnClass={'btn-primary'}
                link="/services"
                title="Learn How"
              />
            )}
          </div>
          {imgActive && (
            <div className="hero-content__image">
              <Image
                src={coolGuyAndy}
                alt="Cool Guy Andy"
                width="600"
                height="600"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroNew;
