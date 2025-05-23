import coolGuyAndy from '../../assets/images/cool-guy-posterize.png';
import ButtonLink from '../elements/button';
import GlowPulse from '../elements/glow-pulse';
import Image from '../elements/image';

const HeroNew = ({
  heroSize,
  heading,
  subHeading,
  imgActive,
  btnActive,
  glowPulse,
  gpSize,
  gpPosition,
}) => {
  return (
    <section className={`hero ${heroSize}`}>
      {glowPulse ? <GlowPulse position={gpPosition} size={gpSize} /> : ''}
      <div className="container">
        <div className={`hero-content ${imgActive ? 'half' : 'full'}`}>
          <div className="hero-content__text content-col">
            <h1 className="heading">{heading}</h1>
            {subHeading && <h4 className="subheading">{subHeading}</h4>}
            {btnActive && (
              <ButtonLink
                btnClass={'btn-primary'}
                link="/work"
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
