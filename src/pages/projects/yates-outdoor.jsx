import HeroNew from '../../components/blocks/hero-new';
import PageTransition from '../../scripts/transitions';

const YatesOutdoor = () => {
  return (
    <PageTransition>
      <HeroNew heroSize={'small'} heading={'Yates Outdoor Sales'} />;
      <div className="page-container"></div>
    </PageTransition>
  );
};

export default YatesOutdoor;
