import PageTransition from '../scripts/transitions';
import HeroNew from '../components/blocks/hero-new';
import ImageTextLayout from '../components/layouts/image-text-layout';

const About = () => {
  return (
    <PageTransition>
      <HeroNew heroSize={'hero-medium'} heading={'About Me'} />
      <div className="page-container">
        <ImageTextLayout
          reverse={true}
          withReveal={false} // Remove layout-level reveal
          heading={'Hey there...'}
          text={
            <>
              <p>
                I&apos;m Andy, a web designer and front-end developer based in
                Cranbrook, BC, who helps Shopify stores turn more of their
                visitors into customers. I&apos;ve spent over ten years crafting
                visually striking and highly functional websites, and much of
                that time in ecommerce.
              </p>
              <p>
                Throughout my career, I&apos;ve had the privilege of working
                with a wide range of clients and companies, from small
                businesses to large-scale enterprises. I spent three years at
                Shopify Plus as a Merchant Success Manager, advising a portfolio
                of 50+ merchants on acquisition, conversion, and retention.
                Today I manage delivery for Shopify retainer clients at an
                agency, across redesigns, integrations, and CRO work. Whether
                collaborating with real estate firms, e-commerce brands, or
                digital agencies, I&apos;ve helped businesses grow online
                through clean, user-friendly, and strategically designed
                websites.
              </p>
              <p>
                I specialize in Shopify CRO, UI/UX design, front-end
                development, accessibility, and SEO, combining creativity with
                technical expertise to deliver seamless digital experiences. My toolkit
                includes HTML5, CSS3, JavaScript, jQuery, Liquid, and PHP,
                alongside design tools like Photoshop, Illustrator, XD, and
                Figma, plus Shopify, Shopify Plus, and Google Analytics. I thrive in remote work environments, where my strong
                communication and problem-solving skills ensure smooth
                collaboration with teams and clients alike.
              </p>
              <p>
                From finding where a store is losing sales to designing and
                coding the fix, I take pride in turning ideas into engaging,
                high-performing digital experiences. If you&apos;re looking for
                a creative, detail-oriented, and strategic thinker to help your
                store sell more, let&apos;s connect!
              </p>
            </>
          }
          imageSrc={'/images/AL-Portrait.webp'}
          imageAlt="Andy Lewis Portrait"
          imageWidth={600}
          imageHeight={600}
          // Individual element reveals with staggered timing
          imageReveal={true}
          imageRevealProps={{ fraction: 0.25, delay: 0 }}
          textReveal={true}
          textRevealProps={{
            fraction: 0.25,
            cascade: true,
            damping: 0.3,
            delay: 200,
          }}
        />
        <ImageTextLayout
          reverse={false}
          withReveal={false}
          heading="Wait, there's more..."
          text={
            <>
              <p>
                Outside of designing and coding, I&apos;m also a musician.
                I&apos;ve been playing music in varying capacities for over 30
                years, focusing mainly on playing drums and guitar. As an
                accomplished songwriter I&apos;ve written, and helped to write,
                many records and been lucky enough to travel the world
                performing. Currently, I play drums for{' '}
                <a
                  href="http://thefullblastrip.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Fullblast
                </a>{' '}
                and{' '}
                <a
                  href="http://dulcetlives.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dulcet Lives
                </a>
              </p>
              <p>
                Beyond that, I take advantage of living in the mountains and
                love to snowboard, mountain bike, rock climb, and hike. I&apos;m
                also a father, husband, and dog dad to the best/weirdest
                assistant ever: Jasper.
              </p>
            </>
          }
          imageSrc={'/images/Jman-snooze.webp'}
          imageAlt="Jasper the snoozy doggo"
          imageWidth={600}
          imageHeight={600}
          // Individual element reveals with staggered timing
          imageReveal={true}
          imageRevealProps={{ fraction: 0.25, delay: 0 }}
          textReveal={true}
          textRevealProps={{
            fraction: 0.25,
            cascade: true,
            damping: 0.3,
            delay: 200,
          }}
        />
      </div>
    </PageTransition>
  );
};

export default About;
