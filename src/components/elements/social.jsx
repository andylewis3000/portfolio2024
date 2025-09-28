import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { FaPaperPlane } from 'react-icons/fa6';

// const email_address = 'andy.c.lewis@gmail.com';
const email_address = 'info@andylewis.ca';

const SocialLinks = () => {
  return (
    <>
      <div className="social-links">
        <a
          href="https://github.com/andylewis3000"
          aria-label="Check out my github profile"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/andyclewis/"
          aria-label="Look me up on LinkedIn"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href={'mailto:' + ' ' + email_address}
          aria-label="Email me"
          target="_blank"
        >
          <FaPaperPlane />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
