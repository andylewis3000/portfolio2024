// import ProjectCard from './project-card';

import yatesGrab from '../assets/images/Yates-Grab.png';
import bxbGrab from '../assets/images/BXB-Grab.png';
import marosGrab from '../assets/images/Maros-Grab.png';

import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Yates Outdoor Sales',
    type: 'Web design & development',
    img: yatesGrab,
    link: '/',
  },
  {
    id: 2,
    name: 'BXB Disposal',
    type: 'Web design & development',
    img: bxbGrab,
    link: '/',
  },
  {
    id: 3,
    name: "Maro's Bistro",
    type: 'Web design & development',
    img: marosGrab,
    link: '/',
  },
];

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <h2>Recent Projects</h2>
      <div className="container">
        <div className="recent-projects__content">
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
          {projects.map((project) => {
            const { id, name, type, img, link } = project;
            return (
              <Link to={link} key={id}>
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
            );
          })}
        </div>
        <button className="btn btn-secondary">View All Work</button>
      </div>
    </section>
  );
};

export default RecentProjects;
