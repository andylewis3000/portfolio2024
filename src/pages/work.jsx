// import coolGuyAndy from '../assets/images/cool-guy-posterize.png';
import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

const Work = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-small'}
        heading={'Work'}
        imgActive={false}
        btnActive={false}
      />
      <Block2Col
        reverse={true}
        heading2={'Project One'}
        text2={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rem? Odit sunt, doloremque similique harum asperiores quia distinctio obcaecati. Omnis cumque modi perferendis dolorum voluptate.'
        }
        img={true}
      />
      <Block2Col
        heading2={'Project Two'}
        text2={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rem? Odit sunt, doloremque similique harum asperiores quia distinctio obcaecati. Omnis cumque modi perferendis dolorum voluptate.'
        }
        img={true}
      />
    </PageTransition>
  );
};

export default Work;
