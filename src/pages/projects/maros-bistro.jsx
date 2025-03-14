import HeroNew from '../../components/blocks/hero-new';
import PageTransition from '../../scripts/transitions';

const MarosBistro = () => {
  return (
    <PageTransition>
      <HeroNew heroSize={'small'} heading={"Maro's Bistro"} />;
      <div className="page-container"></div>
    </PageTransition>
  );
};

export default MarosBistro;
