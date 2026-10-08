import HeroNew from '../components/blocks/hero-new';
import ButtonLink from '../components/elements/button';
import HomeAbout from '../components/blocks/home-about';
import HomeServices from '../components/blocks/home-services';
import RecentProjects from '../components/blocks/recent-projects';
import Testimonials from '../components/blocks/testimonials';
import SkillsNew from '../components/skills/skills-new';
import PageTransition from '../scripts/transitions';

const Home = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-large'}
        heading={'Your Shopify store should be selling more.'}
        subHeading={
          "I find what's costing you sales, then fix it. Shopify CRO backed by 10+ years of design and development."
        }
        imgActive={true}
        actions={
          <ButtonLink
            btnClass={'btn-secondary'}
            link="/audit"
            btnTitle="Get a CRO audit"
          />
        }
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
