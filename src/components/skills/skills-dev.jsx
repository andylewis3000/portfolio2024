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
import { FaShopify } from 'react-icons/fa6';
import { VscJson } from 'react-icons/vsc';

const icons = [
  {
    key: 1,
    icon: DiHtml5,
    title: 'HTML5',
  },
  {
    key: 2,
    icon: DiCss3,
    title: 'CSS3',
  },
  {
    key: 3,
    icon: DiSass,
    title: 'Sass',
  },
  {
    key: 4,
    icon: DiLess,
    title: 'Less',
  },
  {
    key: 5,
    icon: DiJavascript1,
    title: 'Javascript',
  },
  {
    key: 6,
    icon: DiReact,
    title: 'React',
  },
  {
    key: 7,
    icon: DiJqueryLogo,
    title: 'jQuery',
  },
  {
    key: 8,
    icon: VscJson,
    title: 'JSON',
  },
  {
    key: 9,
    icon: DiPhp,
    title: 'PHP',
  },
  {
    key: 10,
    icon: DiBootstrap,
    title: 'Bootstrap',
  },
  {
    key: 11,
    icon: FaShopify,
    title: 'Liquid',
  },
  {
    key: 12,
    icon: DiGit,
    title: 'Git',
  },
];

const DevSkills = () => {
  return (
    <div className="skills-content__group">
      <h4>Dev</h4>
      <ul>
        {icons.map((item) => {
          return (
            <li key={item.key} title={item.title}>
              <item.icon />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DevSkills;
