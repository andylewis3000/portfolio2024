import DevSkills from './skills-dev';
import DesignSkills from './skills-design';
import PlatformSkills from './skills-platform-tools';
import GlowPulse from '../elements/glow-pulse';

const Skills = () => {
  return (
    <section className="skills">
      <GlowPulse position="left large" />
      <div className="container">
        <h2>Languages & Tools</h2>
        <div className="skills-content container">
          <DevSkills />
          <DesignSkills />
          <PlatformSkills />
        </div>
      </div>
    </section>
  );
};

export default Skills;
