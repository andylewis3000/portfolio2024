import { useParams } from 'react-router-dom';

import PageTransition from '../scripts/transitions';
import HeroNew from '../components/blocks/hero-new';
import ImageGallery from '../components/elements/image-gallery';
import ContentColumn from '../components/elements/content-col';

// import { projectData } from '../data/projects';
const projects = {
  'yates-outdoor': {
    heading: 'Yates Outdoor',
    subheading: 'Web Design & Developement',
    note: 'Adobe Illustrator / Adobe Photoshop / PHP / HTML5 / CSS3 (Sass)',
    paragraph: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio voluptates voluptatum ducimus officia aut itaque laborum
          inventore minus incidunt in dolore nemo, cumque facere voluptatem
          eaque enim magnam error quasi autem obcaecati ad nam. Reprehenderit
          quis hic, labore tenetur incidunt minima maiores aliquid dolores
          facilis necessitatibus consequuntur temporibus alias natus suscipit id
          dolorum! Similique perspiciatis necessitatibus libero reiciendis
          tempora aperiam recusandae voluptate ratione dolorem aut adipisci,
          ipsum quae corrupti dolor! Iste laborum aut reiciendis facere
          similique aliquid qui quibusdam repellat, fugit voluptates quasi nulla
          soluta eveniet temporibus. Dicta, neque eligendi. Quasi nihil
          doloribus qui explicabo, itaque magnam minima molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio voluptates voluptatum ducimus officia aut itaque laborum
          inventore minus incidunt in dolore nemo, cumque facere voluptatem
          eaque enim magnam error quasi autem obcaecati ad nam. Reprehenderit
          quis hic, labore tenetur incidunt minima maiores aliquid dolores
          facilis necessitatibus consequuntur temporibus alias natus suscipit id
          dolorum! Similique perspiciatis necessitatibus libero reiciendis
          tempora aperiam recusandae voluptate ratione dolorem aut adipisci,
          ipsum quae corrupti dolor! Iste laborum aut reiciendis facere
          similique aliquid qui quibusdam repellat, fugit voluptates quasi nulla
          soluta eveniet temporibus. Dicta, neque eligendi. Quasi nihil
          doloribus qui explicabo, itaque magnam minima molestias!
        </p>
      </>
    ),
    link: '#',
  },
  'bxb-bins': {
    heading: 'BXB Bins',
    subheading: 'Web Design & Developement',
    note: 'Adobe Illustrator / Adobe Photoshop / PHP / HTML5 / CSS3 (Sass)',
    paragraph: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio voluptates voluptatum ducimus officia aut itaque laborum
          inventore minus incidunt in dolore nemo, cumque facere voluptatem
          eaque enim magnam error quasi autem obcaecati ad nam. Reprehenderit
          quis hic, labore tenetur incidunt minima maiores aliquid dolores
          facilis necessitatibus consequuntur temporibus alias natus suscipit id
          dolorum! Similique perspiciatis necessitatibus libero reiciendis
          tempora aperiam recusandae voluptate ratione dolorem aut adipisci,
          ipsum quae corrupti dolor! Iste laborum aut reiciendis facere
          similique aliquid qui quibusdam repellat, fugit voluptates quasi nulla
          soluta eveniet temporibus. Dicta, neque eligendi. Quasi nihil
          doloribus qui explicabo, itaque magnam minima molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio voluptates voluptatum ducimus officia aut itaque laborum
          inventore minus incidunt in dolore nemo, cumque facere voluptatem
          eaque enim magnam error quasi autem obcaecati ad nam. Reprehenderit
          quis hic, labore tenetur incidunt minima maiores aliquid dolores
          facilis necessitatibus consequuntur temporibus alias natus suscipit id
          dolorum! Similique perspiciatis necessitatibus libero reiciendis
          tempora aperiam recusandae voluptate ratione dolorem aut adipisci,
          ipsum quae corrupti dolor! Iste laborum aut reiciendis facere
          similique aliquid qui quibusdam repellat, fugit voluptates quasi nulla
          soluta eveniet temporibus. Dicta, neque eligendi. Quasi nihil
          doloribus qui explicabo, itaque magnam minima molestias!
        </p>
      </>
    ),
    link: '#',
  },
  'maros-bistro': {
    heading: "Maro's Bistro",
    subheading: 'Web Developement',
    note: 'Adobe Illustrator / Adobe Photoshop / PHP / HTML5 / CSS3 (Sass)',
    paragraph: (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio voluptates voluptatum ducimus officia aut itaque laborum
          inventore minus incidunt in dolore nemo, cumque facere voluptatem
          eaque enim magnam error quasi autem obcaecati ad nam. Reprehenderit
          quis hic, labore tenetur incidunt minima maiores aliquid dolores
          facilis necessitatibus consequuntur temporibus alias natus suscipit id
          dolorum! Similique perspiciatis necessitatibus libero reiciendis
          tempora aperiam recusandae voluptate ratione dolorem aut adipisci,
          ipsum quae corrupti dolor! Iste laborum aut reiciendis facere
          similique aliquid qui quibusdam repellat, fugit voluptates quasi nulla
          soluta eveniet temporibus. Dicta, neque eligendi. Quasi nihil
          doloribus qui explicabo, itaque magnam minima molestias!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          odio voluptates voluptatum ducimus officia aut itaque laborum
          inventore minus incidunt in dolore nemo, cumque facere voluptatem
          eaque enim magnam error quasi autem obcaecati ad nam. Reprehenderit
          quis hic, labore tenetur incidunt minima maiores aliquid dolores
          facilis necessitatibus consequuntur temporibus alias natus suscipit id
          dolorum! Similique perspiciatis necessitatibus libero reiciendis
          tempora aperiam recusandae voluptate ratione dolorem aut adipisci,
          ipsum quae corrupti dolor! Iste laborum aut reiciendis facere
          similique aliquid qui quibusdam repellat, fugit voluptates quasi nulla
          soluta eveniet temporibus. Dicta, neque eligendi. Quasi nihil
          doloribus qui explicabo, itaque magnam minima molestias!
        </p>
      </>
    ),
    link: '#',
  },
};

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-small'}
        heading={'Projects'}
        glowPulse={true}
        gpPosition={'left'}
        gpSize={'large'}
      />
      <div className="page-container">
        <section className="project">
          <div className="container">
            <div className="project-content">
              <ContentColumn
                heading={project.heading}
                subheading={project.subheading}
                note={
                  <>
                    <span>Tools:</span> {project.note}
                  </>
                }
                paragraph={project.paragraph}
                link={project.link}
                btnClass={'secondary'}
                btnText={'Launch Project'}
              />
              <ImageGallery />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Project;
