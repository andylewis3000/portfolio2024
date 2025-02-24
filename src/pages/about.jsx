// import coolGuyAndy from '../assets/images/cool-guy-posterize.png';
import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

const About = () => {
  return (
    <PageTransition>
      {/* <section className="hero hero-small about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>About Me</h1>
          </div>
          <div className="about-hero-image">
            <img
              src={coolGuyAndy}
              alt="Cool Guy Andy"
              width="600"
              height="600"
            />
          </div>
        </div>
      </section> */}
      <HeroNew
        heroSize={'hero-small'}
        heroLocation={'about-hero'}
        heading={'About Me'}
        imgActive={false}
        imgClass={'about-hero-img'}
      />
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
    </PageTransition>
  );
};

export default About;
