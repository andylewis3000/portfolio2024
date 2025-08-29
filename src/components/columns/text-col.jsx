import Reveal from 'react-awesome-reveal';

const TextColumn = ({
  heading,
  subheading,
  children,
  button,
  withReveal = false,
}) => {
  return (
    <div className="content-2col__text">
      {withReveal && <Reveal />}
      {heading && <h2>{heading}</h2>}
      {subheading && <h4>{subheading}</h4>}
      {children && <div>{children}</div>}
      {button}
    </div>
  );
};

export default TextColumn;
