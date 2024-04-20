import { FaShopify, FaSquarespace, FaWix, FaWordpress } from 'react-icons/fa6';
import { SiAsana, SiJira, SiSlack } from 'react-icons/si';

const PlatformSkills = () => {
  return (
    <div className="skills-content__group">
      <h3>Platforms & Tools</h3>
      <ul>
        <li>
          <FaShopify />
        </li>
        <li>
          <FaWordpress />
        </li>
        <li>
          <FaSquarespace />
        </li>
        <li>
          <FaWix />
        </li>
        <li>
          <SiAsana />
        </li>
        <li>
          <SiJira />
        </li>
        <li>
          <SiSlack />
        </li>
      </ul>
    </div>
  );
};

export default PlatformSkills;
