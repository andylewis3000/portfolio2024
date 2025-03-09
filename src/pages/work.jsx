import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

import yatesGrab from '../assets/images/Yates-Grab.png';
import bxbGrab from '../assets/images/BXB-Grab.png';
import marosGrab from '../assets/images/Maros-Grab.png';

const projects = [
  {
    id: 1,
    name: 'Yates Outdoor Sales',
    subheading: 'Web design & development',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: yatesGrab,
    link: '/projects/yates',
    reverse: true,
  },
  {
    id: 2,
    name: 'BXB Disposal',
    subheading: 'Web design & development',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: bxbGrab,
    link: '/projects/bxb',
    reverse: false,
  },
  {
    id: 3,
    name: "Maro's Bistro",
    subheading: 'Web development',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: marosGrab,
    link: '/projects/maros',
    reverse: true,
  },
];

const Work = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-small'}
        heading={'Work'}
        imgActive={false}
        btnActive={false}
        glowPulse={true}
        gpPosition={'left'}
        gpSize={'large'}
      />
      {projects.map((project) => {
        const { id, name, subheading, paragraph, img, link, reverse } = project;
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
            link={link}
            img={true}
            imgURL={img}
            imgAlt={name}
            imgWidth={600}
            imgHeight={400}
          />
        );
      })}
    </PageTransition>
  );
};

export default Work;
