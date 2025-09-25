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
        heading={'Your website needs help.'}
        subHeading={
          'Get a sleek, user-friendly website that doesn’t just look good — it gets results.'
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
