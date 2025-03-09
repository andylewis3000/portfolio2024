// import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
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

const ContentColumn = ({
  extraClass,
  heading,
  paragraph,
  link,
  btnClass,
  btnText,
}) => {
  return (
    <div className={`content-col ${extraClass}`}>
      <Reveal
        cascade
        // duration={300}
        damping={0.2}
        fraction={0.75}
        keyframes={customAnimation}
      >
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <Link to={link}>
          <button className={`btn btn-${btnClass}`}>{btnText}</button>
        </Link>
      </Reveal>
    </div>
  );
};

export default ContentColumn;
