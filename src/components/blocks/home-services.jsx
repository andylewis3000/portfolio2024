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
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia aut, sunt odit quibusdam, eos nam distinctio assumenda hic rem sapiente error dolorem et quasi!',
  },
  {
    id: 2,
    name: 'Web Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia aut, sunt odit quibusdam, eos nam distinctio assumenda hic rem sapiente error dolorem et quasi!',
  },
  {
    id: 3,
    name: 'Graphic Design',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia aut, sunt odit quibusdam, eos nam distinctio assumenda hic rem sapiente error dolorem et quasi!',
  },
  {
    id: 4,
    name: 'Web Consulting',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia aut, sunt odit quibusdam, eos nam distinctio assumenda hic rem sapiente error dolorem et quasi!',
  },
  {
    id: 5,
    name: 'Service Five',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia aut, sunt odit quibusdam, eos nam distinctio assumenda hic rem sapiente error dolorem et quasi!',
  },
  {
    id: 6,
    name: 'Service Six',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia aut, sunt odit quibusdam, eos nam distinctio assumenda hic rem sapiente error dolorem et quasi!',
  },
];

const HomeServices = () => {
  return (
    <section className="home-services">
      <div className="container">
        <div className="services_content">
          <Reveal
            cascade
            // duration={300}
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
              // duration={300}
              damping={0.2}
              fraction={0.75}
              keyframes={customAnimation}
              triggerOnce
            >
              {services.map((service) => {
                const { id, name, description } = service;
                return (
                  <div className="service" key={id}>
                    <h3>{name}</h3>
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
