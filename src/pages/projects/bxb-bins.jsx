import HeroNew from '../../components/blocks/hero-new';
import PageTransition from '../../scripts/transitions';

const BxB = () => {
  return (
    <PageTransition>
      <HeroNew heroSize={'small'} heading={'BxB Bins'} />;
      <div className="page-container"></div>
    </PageTransition>
  );
};

export default BxB;
