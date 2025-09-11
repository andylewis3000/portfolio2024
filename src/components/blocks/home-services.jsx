import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease-in;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const services = [
  {
    id: 1,
    name: 'Web Development',
    description:
      'I turn your designs into fast, functional, and future-proof websites. Think of me as your site’s mechanic—minus the greasy hands.',
  },
  {
    id: 2,
    name: 'Web Design',
    description:
      'Good design isn’t just pretty—it’s persuasive. I design websites that look sharp and convert clicks into clients.',
  },
  {
    id: 3,
    name: 'Seo & Accessibility',
    description:
      'If people can’t find you—or worse, can’t use your site—you’re leaving money on the table. Let’s fix that.',
  },
  {
    id: 4,
    name: 'Graphic Design',
    description:
      'Logos, social graphics, marketing materials—if it lives online (or in print), I can make it look good.',
  },
  {
    id: 5,
    name: 'Content Planning',
    description:
      'No more staring at a blank page. I’ll help you plan content that speaks to your audience and sells your story.',
  },
  {
    id: 6,
    name: 'Consulting',
    description:
      'Need a second set of eyes on your website? I’ll give you the no-fluff feedback and practical steps to improve it.',
  },
];

const HomeServices = () => {
  return (
    <section className="home-services">
      <div className="container">
        <div className="services_content">
          <Reveal
            cascade
            damping={0.2}
            fraction={0.75}
            keyframes={customAnimation}
            triggerOnce
          >
            <h2>Things I do...</h2>
          </Reveal>
          <div className="services_grid">
            <Reveal
              cascade
              damping={0.2}
              fraction={0.75}
              keyframes={customAnimation}
              triggerOnce
            >
              {services.map((service) => {
                const { id, name, description } = service;
                return (
                  <div className="service" key={id}>
                    <h3 className="h4">{name}</h3>
                    <p>{description}</p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
