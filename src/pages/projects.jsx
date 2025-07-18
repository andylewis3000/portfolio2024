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
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: airsprintGrab,
    // link: '/projects/${id}',
    // link: '/projects/yates-outdoor',
    reverse: true,
  },
  {
    id: 'yates-outdoor',
    name: 'Yates Outdoor Sales',
    subheading: 'Web Design & Development',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: yatesGrab,
    // link: '/projects/${id}',
    // link: '/projects/yates-outdoor',
    reverse: false,
  },
  {
    id: 'bxb-bins',
    name: 'BXB Disposal',
    subheading: 'Web Design & Development, Branding',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: bxbGrab,
    // link: '/projects/${id}',
    // link: '/projects/bxb-bins',
    reverse: true,
  },
  {
    id: 'maros-bistro',
    name: "Maro's Bistro",
    subheading: 'Web Development for Valiant Creative',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: marosGrab,
    // link: '/projects/${id}',
    // link: '/projects/maros-bistro',
    reverse: false,
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-small'}
        heading={'Projects'}
        imgActive={false}
        btnActive={false}
        glowPulse={true}
        gpPosition={'left'}
        gpSize={'large'}
      />
      <div className="page-container">
        {projects.map((project) => {
          // const { id, name, subheading, paragraph, img, link, reverse } =
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
              title={'View Project'}
              link={`/projects/${id}`}
              // link={link}
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
