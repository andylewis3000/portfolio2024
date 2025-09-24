import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

const projects = [
  {
    id: 'airsprint',
    name: 'Airsprint',
    subheading: 'Web Development for Breeze Digital',
    paragraph: (
      <p>
        A sleek redesign for a private jet company, complete with custom
        components and a smoother-than-first-class user experience.
      </p>
    ),
    img: '../images/airsprint/Airsprint-Grab.webp',
    reverse: true,
  },
  {
    id: 'yates-outdoor',
    name: 'Yates Outdoor Sales',
    subheading: 'Web Design & Development',
    paragraph: (
      <p>
        A fresh new digital look for an outdoor brand, designed to match their
        rebrand and built to handle both gear and adventure.
      </p>
    ),
    img: '../images/yates-outdoor/Yates-Grab.webp',
    reverse: false,
  },
  {
    id: 'bxb-bins',
    name: 'BXB Disposal',
    subheading: 'Branding, Web Design & Development',
    paragraph: (
      <p>
        From logo to launch—helping a disposal bin company establish their brand
        and build a strong digital foundation.
      </p>
    ),
    img: '../images/bxb/BXB-Grab.webp',
    reverse: true,
  },
  {
    id: 'maros-bistro',
    name: "Maro's Bistro",
    subheading: 'Web Development for Valiant Creative',
    paragraph: (
      <p>
        A modernized web presence for a Mediterranean-Middle Eastern bistro,
        blending flavor, function, and a little extra polish.
      </p>
    ),
    img: '../images/maros/Maros-Grab.webp',
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
