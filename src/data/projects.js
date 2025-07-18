import yatesGrab from '../assets/images/Yates-Grab.png';
import bxbGrab from '../assets/images/BXB-Grab.png';
import marosGrab from '../assets/images/Maros-Grab.png';
import airsprintGrab from '../assets/images/Airsprint-Grab.png';

const projectData = [
  {
    id: 1,
    name: 'Airsprint',
    subheading: 'Web Development for Breeze Digital',
    notes: 'PHP / HTML5 / CSS3 (Sass) / Javascript / React',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: airsprintGrab,
    link: '/projects/airsprint',
    reverse: true,
  },
  {
    id: 2,
    name: 'Yates Outdoor Sales',
    subheading: 'Web Design & Development',
    notes: 'Adobe Illustrator / Adobe Photoshop / PHP / HTML5 / CSS3 (Sass)',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: yatesGrab,
    link: '/projects/yates-outdoor',
    reverse: false,
  },
  {
    id: 2,
    name: 'BXB Disposal',
    subheading: 'Web Design & Development, Branding',
    notes: 'Adobe Illustrator / Adobe Photoshop / PHP / HTML5 / CSS3 (Sass)',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: bxbGrab,
    link: '/projects/bxb-bins',
    reverse: true,
  },
  {
    id: 3,
    name: "Maro's Bistro",
    subheading: 'Web Development',
    notes: 'Adobe Photoshop / PHP / HTML5 / CSS3 (Sass)',
    paragraph:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, placeat magni. Accusamus saepe incidunt, adipisci voluptatem atque omnis architecto asperiores necessitatibus dolorum sapiente laborum dolores.',
    img: marosGrab,
    link: '/projects/maros-bistro',
    reverse: false,
  },
];

export default projectData;
