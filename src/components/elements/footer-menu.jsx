import { Link } from 'react-router-dom';

const footerLinks = [
  { id: 1, link: '/', name: 'Home' },
  { id: 2, link: '/services', name: 'Services' },
  { id: 3, link: '/projects', name: 'Projects' },
  { id: 4, link: '/about', name: 'About' },
  { id: 5, link: '/contact', name: 'Contact' },
];

const FooterMenu = () => {
  return (
    <ul>
      {footerLinks.map((footerLink) => {
        const { id, link, name } = footerLink;
        return (
          <li key={id}>
            <Link to={link}>{name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default FooterMenu;
