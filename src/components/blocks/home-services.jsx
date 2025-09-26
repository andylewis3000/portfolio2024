import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

import {
  FaCubes,
  FaObjectGroup,
  FaEye,
  FaDroplet,
  FaBrain,
  FaLightbulb,
  FaArrowRight,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

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
      'Turn your designs into fast, functional, and future-proof websites. Built clean, built smart, built to last.',
    icon: FaCubes,
    link: '/services#dev',
  },
  {
    id: 2,
    name: 'Web Design',
    description:
      'Good design isn’t just pretty — it’s persuasive. I design websites that look sharp and convert clicks into clients.',
    icon: FaObjectGroup,
    link: '/services#webdesign',
  },
  {
    id: 3,
    name: 'Seo & Accessibility',
    description:
      'If people can’t find you — or worse, can’t use your site — you’re leaving money on the table. Let’s fix that.',
    icon: FaEye,
    link: '/services#seo',
  },
  {
    id: 4,
    name: 'Graphic Design',
    description:
      'Logos, social graphics, marketing materials — if it lives online (or in print), I can make it look good.',
    icon: FaDroplet,
    link: '/services#graphicdesign',
  },
  {
    id: 5,
    name: 'Content Planning',
    description:
      'No more staring at a blank page. I’ll help you plan content that speaks to your audience and sells your story.',
    icon: FaBrain,
    link: '/services#planning',
  },
  {
    id: 6,
    name: 'Consulting',
    description:
      'Need a second set of eyes on your website? I’ll give you the no-fluff feedback and practical steps to improve it.',
    icon: FaLightbulb,
    link: '/services#consulting',
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
            <h2>From strategy to success, streamline your journey</h2>
            <p>
              Let&apos;s design and develop a website that works as hard as you
              do, optimize it so people can actually find you, and make sure
              everyone can use it. From strategic planning to polished product,
              I&apos;m your Swiss Army knife for your digital presence.
            </p>
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
                // const { id, icon, name, description } = service;
                return (
                  <div className="service" key={service.id}>
                    <service.icon />
                    <h3 className="h4">{service.name}</h3>
                    <p>{service.description}</p>
                    <Link to={service.link}>
                      Learn More{' '}
                      <span className="sr-only">About {service.name}</span>
                      <FaArrowRight className="arrow" />
                    </Link>
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
