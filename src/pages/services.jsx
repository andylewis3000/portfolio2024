import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

const services = [
  {
    id: 1,
    anchor: 'dev',
    name: 'Web Development',
    paragraph: (
      <p>
        Web development is where the magic happens behind the scenes. Whether
        it’s making sure your site loads faster than you can say “skip intro,”
        or ensuring it doesn’t break the moment someone opens it on an iPhone
        from 2017, I’ve got you covered. I specialize in clean, maintainable
        code that plays nicely with modern browsers, platforms, and your
        business goals. The result? A site that not only looks good but actually
        works—for you and your users.
      </p>
    ),
    img: 'https://placehold.co/600x400',
    reverse: true,
  },
  {
    id: 2,
    anchor: 'webdesign',
    name: 'Web Design',
    paragraph: (
      <p>
        Your website is often the first handshake your brand gives to the world.
        That handshake better be firm, friendly, and not awkwardly sweaty. My
        design approach blends creativity, usability, and a bit of “wow” factor
        to make sure your visitors stick around. From thoughtful layouts to
        color palettes that match your brand vibe, I craft digital experiences
        that feel polished, purposeful, and anything but cookie-cutter.
      </p>
    ),
    img: 'https://placehold.co/600x400',
    reverse: false,
  },
  {
    id: 3,
    anchor: 'seo',
    name: 'SEO & Accessibility',
    paragraph: (
      <p>
        SEO and accessibility are the unsung heroes of web success. Great design
        and dev won’t mean much if Google buries your site on page 8 or if users
        can’t actually navigate it. I build and optimize with both humans and
        search engines in mind. That means semantic code, accessible layouts,
        fast load times, and content that’s keyword-smart without being
        keyword-stuffed. The result? A site that’s inclusive, discoverable, and
        ready to rank.
      </p>
    ),
    img: 'https://placehold.co/600x400',
    reverse: true,
  },
  {
    id: 4,
    anchor: 'graphicdesign',
    name: 'Graphic Design',
    paragraph: (
      <p>
        Sometimes your brand needs more than a killer website—it needs the whole
        visual toolkit. I create graphics that not only catch the eye but keep
        it there. From logos that feel timeless, to social media visuals that
        pop in a crowded feed, I make sure your brand is consistent, memorable,
        and ready to flex across every channel. Because design should make
        people stop scrolling, not keep scrolling.
      </p>
    ),
    img: 'https://placehold.co/600x400',
    reverse: false,
  },
  {
    id: 5,
    anchor: 'planning',
    name: 'Content Planning',
    paragraph: (
      <p>
        A beautiful, functional website without great content is like a sports
        car with no fuel—it looks nice in the driveway but won’t take you
        anywhere. I help businesses plan their content so it’s structured,
        consistent, and strategically designed to connect with the right people.
        From mapping out what goes where, to creating a voice that feels
        authentic and engaging, I make sure your content works as hard as your
        design. Bonus: you’ll never have to guess “what do we even put here?”
        again.
      </p>
    ),
    img: 'https://placehold.co/600x400',
    reverse: true,
  },
  {
    id: 6,
    anchor: 'consulting',
    name: 'Web Consulting',
    paragraph: (
      <p>
        Sometimes you don’t need a full rebuild—you just need someone to tell
        you what’s working, what’s not, and how to fix it. That’s where I come
        in. With years of experience in design, development, and strategy, I
        provide actionable insights that go beyond surface-level advice. Whether
        it’s diagnosing why conversions are low, untangling a messy CMS, or
        figuring out how to scale, I’ll help you get clarity and a clear path
        forward. Think of me as your website’s coach—minus the whistle.
      </p>
    ),
    img: 'https://placehold.co/600x400',
    reverse: false,
  },
];

const Services = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-medium'}
        heading={'Services'}
        imgActive={false}
        btnActive={false}
      />
      <div className="page-container">
        {services.map((service) => {
          const { id, name, paragraph, img, reverse } = service;
          return (
            <Block2Col
              key={id}
              reverse={reverse}
              heading2={name}
              text2={paragraph}
              img={true}
              imgURL={img}
              imgAlt={name}
              imgWidth={600}
              imgHeight={400}
            />
          );
        })}
      </div>
    </PageTransition>
  );
};

export default Services;
