// import coolGuyAndy from '../../assets/images/cool-guy-posterize.png';
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

const HeroNew = ({ heroSize, heading, subHeading, imgActive, btnActive }) => {
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

              {subHeading && <h2 className="h4 subheading">{subHeading}</h2>}

              {btnActive && (
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
