import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

const About = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-small'}
        heroLocation={'about-hero'}
        heading={'About Me'}
        imgActive={false}
        imgClass={'about-hero-img'}
      />
      <div className="page-container">
        <Block2Col
          reverse={false}
          heading={'This is a 2-Column Block'}
          text={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img={false}
          text2={
            'This is some more sample paragraph text. This text will only be visible if the imgActive prop flag is disabled. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img2={false}
        />
        <Block2Col
          reverse={false}
          heading={'This is a 2-Column Block'}
          text={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img={true}
          text2={
            'This is some more sample paragraph text. This text will only be visible if the imgActive prop flag is disabled. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img2={false}
        />
        <Block2Col
          reverse={true}
          heading={'This is a 2-Column Block'}
          text={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img={true}
          text2={
            'This is some more sample paragraph text. This text will only be visible if the imgActive prop flag is disabled. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img2={false}
        />
        <Block2Col
          reverse={false}
          heading={'This is a 2-Column Block'}
          text={
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img={true}
          text2={
            'This is some more sample paragraph text. This text will only be visible if the imgActive prop flag is disabled. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil doloribus veniam repudiandae, accusamus aut, quas magni illum blanditiis at doloremque suscipit laboriosam eum beatae asperiores ut iure distinctio facilis inventore animi omnis possimus enim.'
          }
          img2={true}
        />
      </div>
    </PageTransition>
  );
};

export default About;
