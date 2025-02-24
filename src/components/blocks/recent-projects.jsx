import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import 'swiper/css';

import yatesGrab from '../../assets/images/Yates-Grab.png';
import bxbGrab from '../../assets/images/BXB-Grab.png';
import marosGrab from '../../assets/images/Maros-Grab.png';

import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Yates Outdoor Sales',
    type: 'Web design & development',
    img: yatesGrab,
    link: '/projects/yates',
  },
  {
    id: 2,
    name: 'BXB Disposal',
    type: 'Web design & development',
    img: bxbGrab,
    link: '/projects/bxb',
  },
  {
    id: 3,
    name: "Maro's Bistro",
    type: 'Web development',
    img: marosGrab,
    link: '/projects/maros',
  },
];

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="container">
        <div className="recent-projects__content">
          <div className="slider-nav content-col">
            <h2>Recent Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              exercitationem! Quae cupiditate voluptas nobis ipsa possimus
              suscipit eaque commodi quam. Molestias nemo nostrum excepturi
              natus?
            </p>
            <Link to="/work">
              <button className="btn btn-secondary">View All Work</button>
            </Link>
          </div>
          <div className="slider">
            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              centeredSlides={false}
              loop={true}
              grabCursor={true}
              mousewheel={true}
              modules={[Mousewheel]}

              // breakpoints={{
              //   768: {
              //     slidesPerView: 1,
              //   },
              // }}
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
