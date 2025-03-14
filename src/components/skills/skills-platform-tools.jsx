import {
  FaShopify,
  FaSquarespace,
  FaWix,
  FaWordpress,
  FaDrupal,
} from 'react-icons/fa6';
import { SiAsana, SiJira, SiSlack } from 'react-icons/si';

const icons = [
  {
    key: 1,
    icon: FaShopify,
    title: 'Shopify',
  },
  {
    key: 2,
    icon: FaWordpress,
    title: 'Wordpress',
  },
  {
    key: 3,
    icon: FaDrupal,
    title: 'Drupal',
  },
  {
    key: 4,
    icon: FaSquarespace,
    title: 'Squarespace',
  },
  {
    key: 5,
    icon: FaWix,
    title: 'Wix',
  },
  {
    key: 6,
    icon: SiAsana,
    title: 'Asana',
  },
  {
    key: 7,
    icon: SiJira,
    title: 'Jira',
  },
  {
    key: 8,
    icon: SiSlack,
    title: 'Slack',
  },
];

const PlatformSkills = () => {
  return (
    <div className="skills-content__group">
      <h4>Platforms</h4>
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

export default PlatformSkills;
