import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

import airsprintGrab from '../assets/images/Airsprint-Grab.png';
import yatesGrab from '../assets/images/Yates-Grab.png';
import bxbGrab from '../assets/images/BXB-Grab.png';
import marosGrab from '../assets/images/Maros-Grab.png';

const projects = [
  {
    id: 'airsprint',
    name: 'Airsprint',
    subheading: 'Web Development for Breeze Digital',
    paragraph: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
        placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis
        architecto asperiores necessitatibus dolorum sapiente laborum dolores.
      </p>
    ),
    img: airsprintGrab,
    reverse: true,
  },
  {
    id: 'yates-outdoor',
    name: 'Yates Outdoor Sales',
    subheading: 'Web Design & Development',
    paragraph: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
        placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis
        architecto asperiores necessitatibus dolorum sapiente laborum dolores.
      </p>
    ),
    img: yatesGrab,
    reverse: false,
  },
  {
    id: 'bxb-bins',
    name: 'BXB Disposal',
    subheading: 'Web Design & Development, Branding',
    paragraph: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
        placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis
        architecto asperiores necessitatibus dolorum sapiente laborum dolores.
      </p>
    ),
    img: bxbGrab,
    reverse: true,
  },
  {
    id: 'maros-bistro',
    name: "Maro's Bistro",
    subheading: 'Web Development for Valiant Creative',
    paragraph: (
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
        placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis
        architecto asperiores necessitatibus dolorum sapiente laborum dolores.
      </p>
    ),
    img: marosGrab,
    reverse: false,
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-medium'}
        heading={'Projects'}
        imgActive={false}
        btnActive={false}
      />
      <div className="page-container">
        {projects.map((project) => {
          const { id, name, subheading, paragraph, img, reverse } = project;
          return (
            <Block2Col
              key={id}
              reverse={reverse}
              heading2={name}
              subheading={subheading}
              text2={paragraph}
              button={true}
              btnClass={'btn-secondary'}
              btnTitle={'View Project'}
              link={`/projects/${id}`}
              img={true}
              imgURL={img}
              imgAlt={name}
              imgWidth={600}
              imgHeight={400}
            />
          );
        })}
      </div>
    </PageTransition>
  );
};

export default Projects;
