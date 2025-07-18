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
];

const HomeServices = () => {
  return (
    <section className="home-services">
      <div className="container">
        <div className="services_grid">
          {services.map((service) => {
            const { id, name, description } = service;
            return (
              <div className="service" key={id}>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
