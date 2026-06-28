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
  // Disable cascade by default for TextColumn to preserve order
  const finalRevealProps = {
    ...defaultRevealProps,
    cascade: false, // Override cascade to preserve DOM order
    ...revealProps,
  };

  const content = (
    <>
      {heading && <h2>{heading}</h2>}
      {subheading && <h4>{subheading}</h4>}
      {children && children}
      {button}
    </>
  );

  return (
    <>
      {withReveal ? (
        <Reveal {...finalRevealProps}>
          <div className="content-2col__text">{content}</div>
        </Reveal>
      ) : (
        content
      )}
    </>
  );
};

export default TextColumn;
