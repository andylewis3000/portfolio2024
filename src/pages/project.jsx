import { useParams } from 'react-router-dom';

import PageTransition from '../scripts/transitions';
import HeroNew from '../components/blocks/hero-new';
import ImageGallery from '../components/elements/image-gallery';
import ContentColumn from '../components/elements/content-col';

// import { projectData } from '../data/projects';
const projects = {
  airsprint: {
    heading: 'Airsprint',
    subheading: 'Web Developement for Breeze Digital',
    designNote: 'Figma',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript / React',
    paragraph:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    paragraph2:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    link: '#',
  },
  'yates-outdoor': {
    heading: 'Yates Outdoor',
    subheading: 'Web Design & Developement',
    designNote: 'Adobe Illustrator / Adobe Photoshop',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript',
    paragraph:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    paragraph2:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    link: '#',
  },
  'bxb-bins': {
    heading: 'BXB Bins',
    subheading: 'Web Design & Developement',
    designNote: 'Adobe Illustrator / Adobe Photoshop',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript',
    paragraph:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    paragraph2:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    link: '#',
  },
  'maros-bistro': {
    heading: "Maro's Bistro",
    subheading: 'Web Developement',
    designNote: 'Adobe Illustrator / Adobe Photoshop',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript',
    paragraph:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    paragraph2:
      'Phasellus ac eros at urna condimentum lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa. In hac habitasse platea dictumst. Suspendisse potenti. Vivamus non arcu tincidunt, congue massa at, porttitor velit. Curabitur lacinia nisl ut turpis convallis, at dictum urna aliquet. Nullam non urna eget felis interdum feugiat. Morbi vel neque elit. Nullam a luctus leo. Integer maximus sapien in bibendum scelerisque.',
    link: '#',
  },
};

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <PageTransition>
      <HeroNew heroSize={'hero-medium'} heading={'Projects'} />
      <div className="page-container">
        <section className="project">
          <div className="container">
            <div className="project-content">
              <ContentColumn
                heading={project.heading}
                subheading={project.subheading}
                designNote={project.designNote}
                devNote={project.devNote}
                paragraph={project.paragraph}
                paragraph2={project.paragraph2}
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
