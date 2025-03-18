import { yatesGrab } from '.../assets/images/Yates-Grab.png';
import { bxbGrab } from '.../assets/images/BXB-Grab.png';
import { marosGrab } from '.../assets/images/Maros-Grab.png';

import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Yates Outdoor Sales',
    type: 'Web design & development',
    img: { yatesGrab },
    link: '/projects/yates-outdoor',
  },
  {
    id: 2,
    name: 'BXB Disposal',
    type: 'Web design & development',
    img: { bxbGrab },
    link: '/projects/bxb-bins',
  },
  {
    id: 3,
    name: "Maro's Bistro",
    type: 'Web development',
    img: { marosGrab },
    link: '/maros-bistro',
  },
];

const ProjectCard = () => {
  {
    projects.map((project) => {
      const { id, name, type, img, link } = project;
      return (
        <div key={id} className="project-card">
          <div className="project-card__image">
            <img src={img} alt={name} width="300" height="300" />
          </div>
          <div className="project-card__content">
            <h3>{name}</h3>
            <h4>{type}</h4>
            <Link to={link}>
              <button className="btn btn-primary">View Project</button>
            </Link>
          </div>
        </div>
      );
    });
  }
};

export default ProjectCard;
