import DevSkills from './skills-dev';
import DesignSkills from './skills-design';
import PlatformSkills from './skills-platform-tools';
import GlowPulse from './glow-pulse';
// import TwinkleStars from './twinkle-stars';
// import { FaBolt } from 'react-icons/fa6';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <GlowPulse position="left small" />
        <h2>Languages & Tools</h2>
        <div className="skills-content container">
          {/* <div className="skills-content__group">
            <TwinkleStars />
          </div> */}
          <DevSkills />
          <DesignSkills />
          <PlatformSkills />
          {/* <div className="skills-content__group">
            <FaBolt />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
