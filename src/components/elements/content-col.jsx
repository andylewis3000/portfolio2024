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
  subheading,
  designNote,
  devNote,
  paragraph,
  paragraph2,
  paragraph3,
  link,
  btnClass,
  btnText,
  srText,
  target,
}) => {
  return (
    <div className={`content-col` + (extraClass ? ` ${extraClass}` : '')}>
      <Reveal
        cascade
        // duration={300}
        damping={0.2}
        fraction={0.75}
        keyframes={customAnimation}
        triggerOnce
      >
        {heading ? <h2>{heading}</h2> : ''}
        {subheading ? <h3 className="h5">{subheading}</h3> : ''}
        {designNote ? (
          <h4 className="h6">
            Design: <span>{designNote}</span>
          </h4>
        ) : (
          ''
        )}
        {devNote ? (
          <h4 className="h6">
            Dev: <span>{devNote}</span>
          </h4>
        ) : (
          ''
        )}
        {paragraph ? <p>{paragraph}</p> : ''}
        {paragraph2 ? <p>{paragraph2}</p> : ''}
        {paragraph3 ? <p>{paragraph3}</p> : ''}
        {link ? (
          <Link to={link} target={target}>
            <button className={`btn btn-${btnClass}`}>
              {btnText} <span className="sr-only">{srText}</span>
            </button>
          </Link>
        ) : (
          ''
        )}
      </Reveal>
    </div>
  );
};

export default ContentColumn;
