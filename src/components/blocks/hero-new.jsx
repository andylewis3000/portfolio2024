import logoDark from '../../assets/images/ALDC-Logo-Dark.svg';
import ButtonLink from '../elements/button';
import Image from '../elements/image';
import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease-in;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// `actions` replaces the default "Learn How" button when a page needs its own
// calls to action (e.g. the audit page's booking + anchor links).
const HeroNew = ({
  heroSize,
  heading,
  subHeading,
  imgActive,
  btnActive,
  actions,
}) => {
  return (
    <section className={`hero ${heroSize}`}>
      <div className="container">
        <div className={`hero-content ${imgActive ? 'half' : 'full'}`}>
          <div className="hero-content__text content-col">
            <Reveal
              cascade
              damping={0.2}
              fraction={0.75}
              keyframes={customAnimation}
              triggerOnce
            >
              <h1 className="heading">{heading}</h1>

              {subHeading && <h2 className="h5 subheading">{subHeading}</h2>}

              {actions}

              {btnActive && !actions && (
                <ButtonLink
                  btnClass={'btn-secondary'}
                  link="/services"
                  btnTitle="Learn How"
                />
              )}
            </Reveal>
          </div>
          {imgActive && (
            <div className="hero-content__image">
              <Image
                src={logoDark}
                alt="Andy Lewis Digital Creative"
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
