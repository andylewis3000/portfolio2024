import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Link } from 'react-router-dom';
import ContentColumn from '../elements/content-col';

import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

const projects = [
  {
    id: 1,
    name: 'Airsprint',
    type: 'Web Development',
    img: '../images/airsprint/Airsprint-Grab.webp',
    link: '/projects/airsprint',
  },
  {
    id: 2,
    name: 'Yates Outdoor Sales',
    type: 'Web Design & Development',
    img: '../images/yates-outdoor/Yates-Grab.webp',
    link: '/projects/yates-outdoor',
  },
  {
    id: 3,
    name: 'BXB Disposal',
    type: 'Web Design & Development',
    img: '../images/bxb/BXB-Grab.webp',
    link: '/projects/bxb-bins',
  },
  {
    id: 4,
    name: "Maro's Bistro",
    type: 'Web Development',
    img: '../images/maros/Maros-Grab.webp',
    link: '/projects/maros-bistro',
  },
];

const RecentProjects = () => {
  const swiperRef = useRef(null);

  return (
    <section className="recent-projects">
      <div className="container">
        <div className="recent-projects__content">
          <Reveal
            cascade
            damping={0.2}
            fraction={0.75}
            keyframes={customAnimation}
            triggerOnce
          >
            <ContentColumn
              extraClass={'slider-nav'}
              heading={'From Concept to Reality'}
              paragraph={
                "Unique challenges solved with creativity, code, and just the right amount of caffeine. Take a look at how I've helped small businesses and individuals turn their digital dreams into pixel-perfect reality."
              }
              link={'/projects'}
              btnClass={'primary'}
              btnText={'View All Work'}
              srText={"that I've done"}
            />
            <div className="slider">
              <div className="swiper-controls">
                <button className="btn btn-secondary swiper-btn prev-btn">
                  <FaChevronLeft />
                </button>
                <button className="btn btn-secondary swiper-btn next-btn">
                  <FaChevronRight />
                </button>
              </div>
              <Swiper
                ref={swiperRef}
                spaceBetween={0} // No space needed with fade effect
                slidesPerView={1}
                centeredSlides={false} // Remove this for fade effect
                loop={true}
                grabCursor={true}
                speed={800} // Slightly faster for better UX
                modules={[Navigation, EffectFade]}
                navigation={{
                  prevEl: '.prev-btn',
                  nextEl: '.next-btn',
                }}
                effect="fade"
                fadeEffect={{
                  crossFade: true, // Ensures smooth crossfade
                }}
                // Add fallback for older browsers
                breakpoints={{
                  320: {
                    effect: 'slide', // Fallback to slide on very small screens
                  },
                  768: {
                    effect: 'fade',
                  },
                }}
              >
                {projects.map((project) => {
                  const { id, name, type, img, link } = project;
                  return (
                    <SwiperSlide key={id}>
                      <Link to={link}>
                        <div className="project-card">
                          <div className="project-card__image">
                            <img
                              src={img}
                              alt={name}
                              width="300"
                              height="300"
                              loading="lazy" // Performance improvement
                            />
                          </div>
                          <div className="project-card__content">
                            <h3 className="h4">{name}</h3>
                            <p>{type}</p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
