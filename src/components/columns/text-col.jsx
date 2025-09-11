import { Reveal } from 'react-awesome-reveal';
import { defaultRevealProps } from '../../utils/revealAnimation';

const TextColumn = ({
  heading,
  subheading,
  children,
  button,
  withReveal = false,
  revealProps = {},
}) => {
  const finalRevealProps = { ...defaultRevealProps, ...revealProps };

  const textContent = (
    <>
      {heading && <h2>{heading}</h2>}
      {subheading && <h4>{subheading}</h4>}
      {children && <div>{children}</div>}
      {button}
    </>
  );

  const wrappedContent = withReveal ? (
    <Reveal {...finalRevealProps}>{textContent}</Reveal>
  ) : (
    textContent
  );

  return <div className="content-2col__text">{wrappedContent}</div>;
};

export default TextColumn;
