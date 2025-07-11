import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';

import yatesGrab from '../../assets/images/Yates-Grab.png';
import bxbGrab from '../../assets/images/BXB-Grab.png';
import marosGrab from '../../assets/images/Maros-Grab.png';

import { Link } from 'react-router-dom';
import ContentColumn from '../elements/content-col';

const projects = [
  {
    id: 1,
    name: 'Yates Outdoor Sales',
    type: 'Web design & development',
    img: yatesGrab,
    link: '/projects/yates-outdoor',
  },
  {
    id: 2,
    name: 'BXB Disposal',
    type: 'Web design & development',
    img: bxbGrab,
    link: '/projects/bxb-bins',
  },
  {
    id: 3,
    name: "Maro's Bistro",
    type: 'Web development',
    img: marosGrab,
    link: '/projects/maros-bistro',
  },
];

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="container">
        <div className="recent-projects__content">
          <ContentColumn
            extraClass={'slider-nav'}
            heading={'Recent Projects'}
            paragraph={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                exercitationem! Quae cupiditate voluptas nobis ipsa possimus
                suscipit eaque commodi quam. Molestias nemo nostrum excepturi
                natus?
              </p>
            }
            link={'/projects'}
            btnClass={'primary'}
            btnText={'View All Work'}
          />
          <div className="slider">
            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              // slidesPerView={1}
              centeredSlides={false}
              loop={true}
              grabCursor={true}
              speed={1000}
              modules={[Mousewheel, Autoplay]}
              autoplay={{ delay: 3000 }}
              mousewheel={true}
            >
              {projects.map((project) => {
                const { id, name, type, img, link } = project;
                return (
                  <SwiperSlide key={id}>
                    <Link to={link}>
                      <div className="project-card">
                        <div className="project-card__image">
                          <img src={img} alt={name} width="300" height="300" />
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
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
