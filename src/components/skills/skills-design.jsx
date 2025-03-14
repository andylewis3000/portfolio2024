import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
} from 'react-icons/si';

const icons = [
  {
    key: 1,
    icon: SiFigma,
    title: 'Figma',
  },
  {
    key: 2,
    icon: SiAdobexd,
    title: 'Adobe XD',
  },
  {
    key: 3,
    icon: SiAdobephotoshop,
    title: 'Adobe Photoshop',
  },
  {
    key: 4,
    icon: SiAdobeillustrator,
    title: 'Adobe Illustrator',
  },
  {
    key: 5,
    icon: SiAdobeindesign,
    title: 'Adobe InDesign',
  },
];

const DesignSkills = () => {
  return (
    <div className="skills-content__group">
      <h4>Design</h4>
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

export default DesignSkills;
