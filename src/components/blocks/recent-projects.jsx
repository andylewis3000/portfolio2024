import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import yatesGrab from '../../assets/images/Yates-Grab.png';
import bxbGrab from '../../assets/images/BXB-Grab.png';
import marosGrab from '../../assets/images/Maros-Grab.png';
import airsprintGrab from '../../assets/images/Airsprint-Grab.png';

import { Link } from 'react-router-dom';
import ContentColumn from '../elements/content-col';

import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

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
    img: airsprintGrab,
    link: '/projects/airsprint',
  },
  {
    id: 2,
    name: 'Yates Outdoor Sales',
    type: 'Web Design & Development',
    img: yatesGrab,
    link: '/projects/yates-outdoor',
  },
  {
    id: 3,
    name: 'BXB Disposal',
    type: 'Web Design & Development',
    img: bxbGrab,
    link: '/projects/bxb-bins',
  },
  {
    id: 4,
    name: "Maro's Bistro",
    type: 'Web Development',
    img: marosGrab,
    link: '/projects/maros-bistro',
  },
];

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="container">
        <div className="recent-projects__content">
          <Reveal
            cascade
            // duration={300}
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
            />
            {/* </Reveal>
          <Reveal
            cascade
            // duration={300}
            damping={0.2}
            fraction={0.75}
            keyframes={customAnimation}
            triggerOnce
          > */}
            <div className="slider">
              <Swiper
                spaceBetween={24}
                slidesPerView={'auto'}
                centeredSlides={false}
                loop={true}
                grabCursor={true}
                speed={2000}
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
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
                            />
                          </div>
                          <div className="project-card__content">
                            <h4>{name}</h4>
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
