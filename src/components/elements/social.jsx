import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaEnvelope } from 'react-icons/fa6';

const email_address = 'andy.c.lewis@gmail.com';

const SocialLinks = () => {
  return (
    <>
      <div className="social-links">
        <a href="https://github.com/andylewis3000" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/andyclewis/" target="_blank">
          <FaLinkedin />
        </a>
        <a href={'mailto:' + ' ' + email_address} target="_blank">
          <FaEnvelope />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
