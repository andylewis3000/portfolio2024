import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

import coolGuyAndy from '../assets/images/cool-guy-posterize.png';

const About = () => {
  return (
    <PageTransition>
      <HeroNew heroSize={'hero-small'} heading={'About Me'} />
      <div className="page-container">
        <Block2Col
          reveal={true}
          reverse={false}
          heading={'Hey there...'}
          text={
            <>
              <p>
                I&apos;m Andy, a passionate web designer and front-end developer
                based in Cranbrook, BC, with over eight years of experience
                crafting visually striking and highly functional websites.
              </p>
              <p>
                Throughout my career, I&apos;ve had the privilege of working
                with a wide range of clients and companies, from small
                businesses to large-scale enterprises. Whether collaborating
                with real estate firms, e-commerce brands, or digital agencies,
                I&apos;ve helped businesses establish their online presence
                through clean, user-friendly, and strategically designed
                websites.
              </p>
              <p>
                I specialize in UI/UX design, front-end development,
                accessibility, and SEO, combining creativity with technical
                expertise to deliver seamless digital experiences. My toolkit
                includes HTML5, CSS3, JavaScript, jQuery, Liquid, and PHP,
                alongside design tools like Photoshop, Illustrator, XD, and
                Figma. I thrive in remote work environments, where my strong
                communication and problem-solving skills ensure smooth
                collaboration with teams and clients alike.
              </p>
              <p>
                From designing and coding custom themes to optimizing websites
                for performance and accessibility, I take pride in turning ideas
                into engaging, high-performing digital experiences. If
                you&apos;re looking for a creative, detail-oriented, and
                strategic thinker to elevate your online presence, let&apos;s
                connect!
              </p>
            </>
          }
          img2={true}
          img2URL={coolGuyAndy}
          img2Width={'500px'}
          img2Height={'500px'}
        />
        <Block2Col
          reverse={true}
          reveal={true}
          heading={'Also...'}
          text={
            <p>
              Outside of designing and coding, I&apos;m also a musician.
              I&apos;ve been playing music in varying capacities for over 30
              years, focusing mainly on playing drums and guitar. As an
              accomplished songwriter I&apos;ve written, and helped to write,
              many records and been lucky enough to travel the world performing.
              Currently, I play drums for{' '}
              {
                <a href="http://thefullblastrip.com" target="_blank">
                  The Fullblast
                </a>
              }{' '}
              and{' '}
              {
                <a href="http://dulcetlives.bandcamp.com" target="_blank">
                  Dulcet Lives
                </a>
              }
            </p>
          }
          img2={true}
          img2URL={coolGuyAndy}
          img2Width={'500px'}
          img2Height={'500px'}
        />
        <Block2Col
          reverse={false}
          reveal={true}
          heading={'Also, Also...'}
          text={
            <p>
              Living in the mountains, getting outside to nature is almost a
              prerequisite. I like to take advantage of my location by
              snowboarding, mountain biking, rock climbing, and hiking. Although
              he can&apos;t come with me anymore, I also love hanging out with
              my dog, Jasper.
            </p>
          }
          img2={true}
          img2URL={coolGuyAndy}
          img2Width={'500px'}
          img2Height={'500px'}
        />
      </div>
    </PageTransition>
  );
};

export default About;
