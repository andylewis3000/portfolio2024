import { Link } from 'react-router-dom';
import { Reveal } from 'react-awesome-reveal';
import { defaultRevealProps } from '../../utils/revealAnimation';

const ButtonLink = ({
  btnClass,
  btnTitle,
  link,
  srText,
  target,
  withReveal = false,
  revealProps = {},
}) => {
  if (!btnTitle || !link) return null;

  const finalRevealProps = { ...defaultRevealProps, ...revealProps };

  const buttonContent = (
    <Link to={link} target={target}>
      <button className={`btn ${btnClass}`}>
        {btnTitle} <span className="sr-only">{srText}</span>
      </button>
    </Link>
  );

  return withReveal ? (
    <Reveal {...finalRevealProps}>{buttonContent}</Reveal>
  ) : (
    buttonContent
  );
};

export default ButtonLink;
