import DevSkills from './skills-dev';
import DesignSkills from './skills-design';
import PlatformSkills from './skills-platform-tools';
import ToolsSkills from './skills-tools';
import GlowPulse from '../elements/glow-pulse';

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

const Skills = () => {
  return (
    <section className="skills">
      <GlowPulse position="left large" />
      <div className="container">
        <div className="skills-content">
          <Reveal
            cascade
            // duration={300}
            damping={0.2}
            fraction={0.75}
            keyframes={customAnimation}
          >
            <h2>Languages & Tools</h2>
          </Reveal>
          <div className="skills-content__grid">
            <Reveal
              cascade
              // duration={300}
              damping={0.2}
              fraction={0.75}
              keyframes={customAnimation}
            >
              <DevSkills />
              <DesignSkills />
              <PlatformSkills />
              <ToolsSkills />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
