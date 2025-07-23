import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease-in;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiJqueryLogo,
  DiLess,
  DiPhp,
  DiReact,
  DiSass,
} from 'react-icons/di';
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiAsana,
  SiJira,
  SiSlack,
} from 'react-icons/si';
import {
  FaShopify,
  FaSquarespace,
  FaWix,
  FaWordpress,
  FaDrupal,
} from 'react-icons/fa6';
import { VscJson } from 'react-icons/vsc';

const skillsIcons = [
  {
    id: 1,
    icon: DiHtml5,
    title: 'HTML5',
  },
  {
    id: 2,
    icon: DiCss3,
    title: 'CSS3',
  },
  {
    id: 3,
    icon: DiSass,
    title: 'Sass',
  },
  {
    id: 4,
    icon: DiLess,
    title: 'Less',
  },
  {
    id: 5,
    icon: DiJavascript1,
    title: 'Javascript',
  },
  {
    id: 6,
    icon: DiReact,
    title: 'React',
  },
  {
    id: 7,
    icon: DiJqueryLogo,
    title: 'jQuery',
  },
  {
    id: 8,
    icon: VscJson,
    title: 'JSON',
  },
  {
    id: 9,
    icon: DiPhp,
    title: 'PHP',
  },
  {
    id: 10,
    icon: DiBootstrap,
    title: 'Bootstrap',
  },
  {
    id: 11,
    icon: FaShopify,
    title: 'Liquid',
  },
  {
    id: 12,
    icon: DiGit,
    title: 'Git',
  },
  {
    id: 13,
    icon: SiFigma,
    title: 'Figma',
  },
  {
    id: 14,
    icon: SiAdobexd,
    title: 'Adobe XD',
  },
  {
    id: 15,
    icon: SiAdobephotoshop,
    title: 'Adobe Photoshop',
  },
  {
    id: 16,
    icon: SiAdobeillustrator,
    title: 'Adobe Illustrator',
  },
  {
    id: 17,
    icon: SiAdobeindesign,
    title: 'Adobe InDesign',
  },
  {
    id: 18,
    icon: FaShopify,
    title: 'Shopify',
  },
  {
    id: 19,
    icon: FaWordpress,
    title: 'Wordpress',
  },
  {
    id: 20,
    icon: FaDrupal,
    title: 'Drupal',
  },
  {
    id: 21,
    icon: FaSquarespace,
    title: 'Squarespace',
  },
  {
    id: 22,
    icon: FaWix,
    title: 'Wix',
  },
  {
    id: 23,
    icon: SiAsana,
    title: 'Asana',
  },
  {
    id: 24,
    icon: SiJira,
    title: 'Jira',
  },
  {
    id: 25,
    icon: SiSlack,
    title: 'Slack',
  },
];

const SkillsNew = () => {
  return (
    <section className="skills-new">
      <div className="container">
        <div className="skills__content">
          {/* <Reveal
            cascade
            damping={0.2}
            fraction={0.75}
            keyframes={customAnimation}
            triggerOnce
          >
            <h2>Things I use...</h2>
          </Reveal> */}
          <Reveal
            cascade
            damping={0.2}
            fraction={0.75}
            keyframes={customAnimation}
            triggerOnce
          >
            <ul className="skills-icons">
              {skillsIcons.map((item) => {
                return (
                  <li key={item.id} title={item.title}>
                    <Reveal
                      cascade
                      damping={0.2}
                      fraction={0.75}
                      keyframes={customAnimation}
                      triggerOnce
                    >
                      <item.icon />
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;
