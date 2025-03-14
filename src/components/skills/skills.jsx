import DevSkills from './skills-dev';
import DesignSkills from './skills-design';
import PlatformSkills from './skills-platform-tools';
import ToolsSkills from './skills-tools';
import GlowPulse from '../elements/glow-pulse';

const Skills = () => {
  return (
    <section className="skills">
      <GlowPulse position="left large" />
      <div className="container">
        <div className="skills-content">
          <h2>Languages & Tools</h2>
          <div className="skills-content__grid">
            <DevSkills />
            <DesignSkills />
            <PlatformSkills />
            <ToolsSkills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
