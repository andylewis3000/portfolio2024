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
        heading={'Your brand deserves better than a template.'}
        subHeading={
          'I build custom websites designed to stand out, scale with your business, and actually get results.'
        }
        imgActive={true}
        btnActive={true}
      />
      <div className="page-container">
        <HomeAbout />
        <HomeServices />
        <RecentProjects />
        <Testimonials />
        <SkillsNew />
      </div>
    </PageTransition>
  );
};

export default Home;
