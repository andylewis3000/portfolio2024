import HeroNew from '../components/hero-new';
import HomeAbout from '../components/home-about';
import RecentProjects from '../components/recent-projects';
import Skills from '../components/skills';
import PageTransition from '../scripts/transitions';

const Home = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-large'}
        heading={'Your website probably needs help.'}
        subHeading={
          "I'm a web developer based out of British Columbia, and I can help your website not suck."
        }
        imgActive={true}
        btnActive={true}
      />
      <HomeAbout />
      <RecentProjects />
      <Skills />
    </PageTransition>
  );
};

export default Home;
