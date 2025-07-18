import Block2Col from '../components/blocks/block-2col';
import HeroNew from '../components/blocks/hero-new';
import PageTransition from '../scripts/transitions';

const services = [
  {
    id: 1,
    name: 'Web Development',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius similique itaque ipsa quis laborum! At non laudantium dolorum dolores facere molestiae quisquam cum nisi cupiditate voluptatem! Sit officia ex tempora reprehenderit numquam odit eligendi obcaecati hic excepturi error, earum vel quo facilis quaerat quibusdam delectus necessitatibus similique quod eius ratione asperiores doloribus ducimus! Ipsa beatae praesentium non iste explicabo vitae, aut ipsam. Hic dolore dignissimos, voluptates aliquam natus esse provident excepturi laborum praesentium doloribus. Aliquid ducimus hic provident pariatur libero quibusdam eos, delectus non repellat consequuntur vero perspiciatis ab officiis id voluptates? Laudantium minima ea beatae temporibus iure rerum tempore!',
    img: 'https://placehold.co/600x400',
    reverse: true,
  },
  {
    id: 2,
    name: 'Web Design',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius similique itaque ipsa quis laborum! At non laudantium dolorum dolores facere molestiae quisquam cum nisi cupiditate voluptatem! Sit officia ex tempora reprehenderit numquam odit eligendi obcaecati hic excepturi error, earum vel quo facilis quaerat quibusdam delectus necessitatibus similique quod eius ratione asperiores doloribus ducimus! Ipsa beatae praesentium non iste explicabo vitae, aut ipsam. Hic dolore dignissimos, voluptates aliquam natus esse provident excepturi laborum praesentium doloribus. Aliquid ducimus hic provident pariatur libero quibusdam eos, delectus non repellat consequuntur vero perspiciatis ab officiis id voluptates? Laudantium minima ea beatae temporibus iure rerum tempore!',
    img: 'https://placehold.co/600x400',
    reverse: false,
  },
  {
    id: 3,
    name: 'Graphic Design',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius similique itaque ipsa quis laborum! At non laudantium dolorum dolores facere molestiae quisquam cum nisi cupiditate voluptatem! Sit officia ex tempora reprehenderit numquam odit eligendi obcaecati hic excepturi error, earum vel quo facilis quaerat quibusdam delectus necessitatibus similique quod eius ratione asperiores doloribus ducimus! Ipsa beatae praesentium non iste explicabo vitae, aut ipsam. Hic dolore dignissimos, voluptates aliquam natus esse provident excepturi laborum praesentium doloribus. Aliquid ducimus hic provident pariatur libero quibusdam eos, delectus non repellat consequuntur vero perspiciatis ab officiis id voluptates? Laudantium minima ea beatae temporibus iure rerum tempore!',
    img: 'https://placehold.co/600x400',
    reverse: true,
  },
  {
    id: 4,
    name: 'Web Consulting',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius similique itaque ipsa quis laborum! At non laudantium dolorum dolores facere molestiae quisquam cum nisi cupiditate voluptatem! Sit officia ex tempora reprehenderit numquam odit eligendi obcaecati hic excepturi error, earum vel quo facilis quaerat quibusdam delectus necessitatibus similique quod eius ratione asperiores doloribus ducimus! Ipsa beatae praesentium non iste explicabo vitae, aut ipsam. Hic dolore dignissimos, voluptates aliquam natus esse provident excepturi laborum praesentium doloribus. Aliquid ducimus hic provident pariatur libero quibusdam eos, delectus non repellat consequuntur vero perspiciatis ab officiis id voluptates? Laudantium minima ea beatae temporibus iure rerum tempore!',
    img: 'https://placehold.co/600x400',
    reverse: false,
  },
  {
    id: 5,
    name: 'Service Five',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius similique itaque ipsa quis laborum! At non laudantium dolorum dolores facere molestiae quisquam cum nisi cupiditate voluptatem! Sit officia ex tempora reprehenderit numquam odit eligendi obcaecati hic excepturi error, earum vel quo facilis quaerat quibusdam delectus necessitatibus similique quod eius ratione asperiores doloribus ducimus! Ipsa beatae praesentium non iste explicabo vitae, aut ipsam. Hic dolore dignissimos, voluptates aliquam natus esse provident excepturi laborum praesentium doloribus. Aliquid ducimus hic provident pariatur libero quibusdam eos, delectus non repellat consequuntur vero perspiciatis ab officiis id voluptates? Laudantium minima ea beatae temporibus iure rerum tempore!',
    img: 'https://placehold.co/600x400',
    reverse: true,
  },
  {
    id: 6,
    name: 'Service Six',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius similique itaque ipsa quis laborum! At non laudantium dolorum dolores facere molestiae quisquam cum nisi cupiditate voluptatem! Sit officia ex tempora reprehenderit numquam odit eligendi obcaecati hic excepturi error, earum vel quo facilis quaerat quibusdam delectus necessitatibus similique quod eius ratione asperiores doloribus ducimus! Ipsa beatae praesentium non iste explicabo vitae, aut ipsam. Hic dolore dignissimos, voluptates aliquam natus esse provident excepturi laborum praesentium doloribus. Aliquid ducimus hic provident pariatur libero quibusdam eos, delectus non repellat consequuntur vero perspiciatis ab officiis id voluptates? Laudantium minima ea beatae temporibus iure rerum tempore!',
    img: 'https://placehold.co/600x400',
    reverse: false,
  },
];

const Services = () => {
  return (
    <PageTransition>
      <HeroNew
        heroSize={'hero-small'}
        heading={'Services'}
        imgActive={false}
        btnActive={false}
        glowPulse={false}
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
