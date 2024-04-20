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

const DevSkills = () => {
  return (
    <div className="skills-content__group">
      <h3>Dev</h3>
      <ul>
        <li>
          <DiHtml5 />
        </li>
        <li>
          <DiCss3 />
        </li>
        <li>
          <DiJavascript1 />
        </li>
        <li>
          <DiJqueryLogo />
        </li>
        <li>
          <DiReact />
        </li>
        <li>
          <VscJson />
        </li>
        <li>
          <DiPhp />
        </li>
        <li>
          <DiSass />
        </li>
        <li>
          <DiLess />
        </li>
        <li>
          <DiBootstrap />
        </li>
        <li>
          <FaShopify />
        </li>
        <li>
          <DiGit />
        </li>
      </ul>
    </div>
  );
};

export default DevSkills;
