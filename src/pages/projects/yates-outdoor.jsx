import PageTransition from '../../scripts/transitions';
import HeroNew from '../../components/blocks/hero-new';

const YatesOutdoor = () => {
  return (
    <PageTransition>
      <HeroNew heroSize={'small'} heading={'Yates Outdoor Sales'} />
      <div className="page-container"></div>
    </PageTransition>
  );
};

export default YatesOutdoor;
