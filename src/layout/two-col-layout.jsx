// import { Reveal } from 'react-awesome-reveal';
// import { defaultRevealProps } from '../utils/revealAnimation';

// const TwoColumnLayout = ({
//   children,
//   reverse = false,
//   extraClass = '',
//   withReveal = false,
//   revealProps = {},
// }) => {
//   const sectionClasses = `block-2col${extraClass ? ` ${extraClass}` : ''}`;
//   const contentClasses = `content-2col${reverse ? ' reverse' : ''}`;

//   const finalRevealProps = { ...defaultRevealProps, ...revealProps };

//   const content = (
//     <section className={sectionClasses}>
//       <div className="container">
//         <div className={contentClasses}>{children}</div>
//       </div>
//     </section>
//   );

//   return withReveal ? (
//     <Reveal {...finalRevealProps}>{content}</Reveal>
//   ) : (
//     content
//   );
// };

// export default TwoColumnLayout;

import { Reveal } from 'react-awesome-reveal';
import { defaultRevealProps } from '../utils/revealAnimation';

const TwoColumnLayout = ({
  children,
  reverse = false,
  extraClass = '',
  withReveal = false,
  revealProps = {},
}) => {
  const sectionClasses = `block-2col${extraClass ? ` ${extraClass}` : ''}`;
  const contentClasses = `content-2col${reverse ? ' reverse' : ''}`;

  const finalRevealProps = { ...defaultRevealProps, ...revealProps };

  return (
    <>
      <section className={sectionClasses}>
        <div className="container">
          {withReveal ? (
            <Reveal {...finalRevealProps}>
              <div className={contentClasses}>{children}</div>
            </Reveal>
          ) : (
            <div className={contentClasses}>{children}</div>
          )}
        </div>
      </section>
    </>
  );
};

export default TwoColumnLayout;
