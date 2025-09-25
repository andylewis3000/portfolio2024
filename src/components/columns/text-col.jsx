// import { Reveal } from 'react-awesome-reveal';
// import { defaultRevealProps } from '../../utils/revealAnimation';

// const TextColumn = ({
//   heading,
//   subheading,
//   children,
//   button,
//   withReveal = false,
//   revealProps = {},
// }) => {
//   const finalRevealProps = { ...defaultRevealProps, ...revealProps };

//   return (
//     <div className="content-2col__text">
//       {withReveal ? (
//         <Reveal {...finalRevealProps}>
//           {heading && <h2>{heading}</h2>}
//           {subheading && <h4>{subheading}</h4>}
//           {children && <div>{children}</div>}
//           {button}
//         </Reveal>
//       ) : (
//         <>
//           {heading && <h2>{heading}</h2>}
//           {subheading && <h4>{subheading}</h4>}
//           {children && <div>{children}</div>}
//           {button}
//         </>
//       )}
//     </div>
//   );
// };

// export default TextColumn;

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
