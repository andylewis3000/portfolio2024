import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
} from 'react-icons/si';

const DesignSkills = () => {
  return (
    <div className="skills-content__group">
      <h3>Design</h3>
      <ul>
        <li>
          <SiAdobephotoshop />
        </li>
        <li>
          <SiAdobeillustrator />
        </li>
        <li>
          <SiAdobeindesign />
        </li>
        <li>
          <SiAdobexd />
        </li>
        <li>
          <SiFigma />
        </li>
      </ul>
    </div>
  );
};

export default DesignSkills;
