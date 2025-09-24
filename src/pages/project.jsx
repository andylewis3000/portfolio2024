import { useParams } from 'react-router-dom';

import PageTransition from '../scripts/transitions';
import HeroNew from '../components/blocks/hero-new';
import ImageGallery from '../components/elements/image-gallery';
import ContentColumn from '../components/elements/content-col';

// import { projectData } from '../data/projects';
const projects = {
  airsprint: {
    heading: 'Airsprint',
    subheading: 'Web Development for Breeze Digital',
    designNote: 'Figma',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript / React',
    paragraph:
      'Airsprint, a private jet fractional ownership company, needed their website to match the premium experience they deliver in the sky. The challenge? Modernize the design to align with their brand and add new functionality that elevated the user experience.',
    paragraph2:
      'As part of the Breeze Digital team, I focused on front-end development and building out custom components like a jet range map and product detail carousels, while providing feedback on design implementation. Working with Silverstripe CMS (PHP/Twig), CSS/SCSS, JavaScript, and a dash of React, I created a flexible, performant front-end that not only looked sharp but worked seamlessly across devices.',
    paragraph3:
      "The result was a faster, more accessible site that boosted SEO rankings, improved UX, and felt perfectly aligned with Airsprint's luxury brand. Basically: digital turbulence eliminated.",
    link: '#',
    images: {
      fullImage: {
        src: '../images/airsprint/Airsprint-Grab.webp',
        alt: 'Airsprint website full view',
        width: 600,
        height: 400,
      },
      multiImages: [
        {
          src: '../images/airsprint/Airsprint-1.webp',
          alt: 'Airsprint homepage design',
          width: 600,
          height: 400,
        },
        {
          src: '../images/airsprint/Airsprint-2.webp',
          alt: 'Airsprint jet range map',
          width: 600,
          height: 400,
        },
        {
          src: '../images/airsprint/Airsprint-3.webp',
          alt: 'Airsprint product carousel',
          width: 600,
          height: 400,
        },
        {
          src: '../images/airsprint/Airsprint-4.webp',
          alt: 'Airsprint product carousel',
          width: 600,
          height: 400,
        },
      ],
    },
  },
  'yates-outdoor': {
    heading: 'Yates Outdoor',
    subheading: 'Web Design & Development',
    designNote: 'Adobe Illustrator / Adobe Photoshop',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript',
    paragraph:
      "Yates Outdoor Sales was refreshing their brand and needed a website to match. Their old site was clunky, slow, and didn't reflect their new direction. The goal was to modernize the design, streamline navigation, and create a digital home that was as functional as it was inviting.",
    paragraph2:
      'I redesigned the website from the ground up, reworking the content structure, improving the flow, and ensuring the site delivered a smooth browsing experience. With careful attention to responsive layouts and performance, I built a site that loads quickly, works beautifully across devices, and matches the look and feel of their updated brand.',
    paragraph3:
      "The outcome? A faster, more accessible, SEO-friendly site that not only aligned with Yates' new identity but also gave customers an easier way to find what they needed. No trail maps required.",
    link: '#',
    images: {
      fullImage: {
        src: '../images/yates-outdoor/Yates-Grab.webp',
        alt: 'Yates Outdoor website overview',
        width: 600,
        height: 400,
      },
      multiImages: [
        {
          src: '../images/yates-outdoor/Yates-Outdoor-1.webp',
          alt: 'Yates Outdoor homepage',
          width: 600,
          height: 400,
        },
        {
          src: '../images/yates-outdoor/Yates-Outdoor-2.webp',
          alt: 'Yates Outdoor products page',
          width: 600,
          height: 400,
        },
        {
          src: '../images/yates-outdoor/Yates-Outdoor-3.webp',
          alt: 'Yates Outdoor mobile design',
          width: 600,
          height: 400,
        },
        {
          src: '../images/yates-outdoor/Yates-Outdoor-4.webp',
          alt: 'Yates Outdoor mobile design',
          width: 600,
          height: 400,
        },
      ],
    },
  },
  'bxb-bins': {
    heading: 'BXB Bins',
    subheading: 'Branding, Web Design & Development',
    designNote: 'Adobe Illustrator / Adobe Photoshop',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript',
    paragraph:
      'BX Bins, a disposal bin rental company, needed more than just a website - they needed a brand identity. The challenge was to create a professional, trustworthy look and feel that would translate across both their branding and their online presence.',
    paragraph2:
      'Working directly with the owner, I provided consultation, branding, and logo design, along with a new website build. I created a brand mark and visual identity that reflected their service, then translated that into a web presence that was clean, functional, and easy for customers to navigate.',
    paragraph3:
      'The outcome was a cohesive brand package: a professional logo, a consistent identity, and a website that clearly communicated their services. BX Bins went from having no digital presence to having a solid foundation that supports both brand recognition and customer engagement. Garbage never looked so good.',
    link: '#',
    images: {
      fullImage: {
        src: '../images/bxb/BXB-Grab.webp',
        alt: 'BXB Bins complete brand package',
        width: 600,
        height: 400,
      },
      multiImages: [
        {
          src: '../images/bxb/BXB-1.webp',
          alt: 'BXB Bins logo design',
          width: 600,
          height: 400,
        },
        {
          src: '../images/bxb/BXB-2.webp',
          alt: 'BXB Bins website homepage',
          width: 600,
          height: 400,
        },
        {
          src: '../images/bxb/BXB-3.webp',
          alt: 'BXB Bins brand identity',
          width: 600,
          height: 400,
        },
        {
          src: '../images/bxb/BXB-4.webp',
          alt: 'BXB Bins brand identity',
          width: 600,
          height: 400,
        },
      ],
    },
  },
  'maros-bistro': {
    heading: "Maro's Bistro",
    subheading: 'Web Development',
    designNote: 'Adobe Illustrator / Adobe Photoshop',
    devNote: 'PHP / HTML5 / CSS3 (Sass) / Javascript',
    paragraph:
      "Maro's Bistro wanted to refresh their website to better represent their vibrant menu and welcoming atmosphere. The challenge was to update the design while improving functionality, accessibility, and user experience.",
    paragraph2:
      "Contracted through Valiant Creative, I provided front-end development services, implementing new layouts, streamlining navigation, and ensuring the design showcased the restaurant's personality. I built flexible components, optimized for responsiveness, and focused on accessibility so all users could explore the menu with ease.",
    paragraph3:
      "The result was a refreshed website that felt true to the bistro's brand: modern, approachable, and easy to use. The improved UX and alignment with their identity ensured Maro's could put their best digital plate forward.",
    link: '#',
    images: {
      fullImage: {
        src: '../images/maros/Maros-Grab.webp',
        alt: "Maro's Bistro website showcase",
        width: 600,
        height: 400,
      },
      multiImages: [
        {
          src: '../images/maros/Maros-1.webp',
          alt: "Maro's Bistro homepage design",
          width: 600,
          height: 400,
        },
        {
          src: '../images/maros/Maros-2.webp',
          alt: "Maro's Bistro menu layout",
          width: 600,
          height: 400,
        },
        {
          src: '../images/maros/Maros-3.webp',
          alt: "Maro's Bistro responsive design",
          width: 600,
          height: 400,
        },
        {
          src: '../images/maros/Maros-4.webp',
          alt: "Maro's Bistro responsive design",
          width: 600,
          height: 400,
        },
      ],
    },
  },
};

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  // Add error handling for invalid project IDs
  if (!project) {
    return (
      <PageTransition>
        <HeroNew heroSize={'hero-medium'} heading={'Project Not Found'} />
        <div className="page-container">
          <section className="project">
            <div className="container">
              <p>The requested project could not be found.</p>
            </div>
          </section>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-medium'}
        heading={`Projects: ${project.heading}`}
      />
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
                paragraph3={project.paragraph3}
                link={project.link}
                btnClass={'secondary'}
                btnText={'Launch Project'}
              />
              <ImageGallery images={project.images} />
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Project;
