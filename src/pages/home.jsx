import HeroNew from '../components/blocks/hero-new';
import HomeAbout from '../components/blocks/home-about';
import HomeServices from '../components/blocks/home-services';
import RecentProjects from '../components/blocks/recent-projects';
import Testimonials from '../components/blocks/testimonials';
// import Skills from '../components/skills/skills';
import SkillsNew from '../components/skills/skills-new';
import PageTransition from '../scripts/transitions';

const Home = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-large'}
        heading={'Your website probably needs help.'}
        subHeading={
          "I'm a web designer and developer based out of British Columbia, and I can help your website not suck."
        }
        imgActive={true}
        btnActive={true}
      />
      <div className="page-container">
        <HomeServices />
        <RecentProjects />
        <Testimonials />
        <SkillsNew />
        {/* <Skills /> */}
        <HomeAbout />
      </div>
    </PageTransition>
  );
};

export default Home;
