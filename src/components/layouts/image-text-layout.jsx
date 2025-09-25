// // import TwoColumnLayout from '../../layout/two-col-layout';
// // import ImageColumn from '../columns/image-col';
// // import TextColumn from '../columns/text-col';
// // import ButtonLink from '../elements/button';

// // const ImageTextLayout = ({
// //   reverse = false,
// //   extraClass = '',
// //   // Layout reveal props
// //   withReveal = false,
// //   revealProps = {},
// //   // Image props
// //   imageSrc,
// //   imageAlt = '',
// //   imageWidth,
// //   imageHeight,
// //   imageReveal = false,
// //   imageRevealProps = {},
// //   // Text props
// //   heading,
// //   subheading,
// //   text,
// //   textReveal = false,
// //   textRevealProps = {},
// //   // Button props
// //   btnTitle,
// //   link,
// //   btnClass,
// //   buttonReveal = false,
// //   buttonRevealProps = {},
// // }) => {
// //   const button =
// //     btnTitle && link ? (
// //       <ButtonLink
// //         withReveal={buttonReveal}
// //         revealProps={buttonRevealProps}
// //         btnClass={btnClass}
// //         btnTitle={btnTitle}
// //         link={link}
// //       />
// //     ) : null;

// //   return (
// //     <TwoColumnLayout
// //       reverse={reverse}
// //       extraClass={extraClass}
// //       withReveal={withReveal}
// //       revealProps={revealProps}
// //     >
// //       <ImageColumn
// //         src={imageSrc}
// //         alt={imageAlt}
// //         width={imageWidth}
// //         height={imageHeight}
// //         withReveal={imageReveal}
// //         revealProps={imageRevealProps}
// //       />
// //       <TextColumn
// //         heading={heading}
// //         subheading={subheading}
// //         withReveal={textReveal}
// //         revealProps={textRevealProps}
// //         button={button}
// //       >
// //         {text}
// //       </TextColumn>
// //     </TwoColumnLayout>
// //   );
// // };

// // export default ImageTextLayout;

// import TwoColumnLayout from '../../layout/two-col-layout';
// import ImageColumn from '../columns/image-col';
// import TextColumn from '../columns/text-col';
// import ButtonLink from '../elements/button';

// const ImageTextLayout = ({
//   reverse = false,
//   extraClass = '',
//   // Layout reveal props
//   withReveal = false,
//   revealProps = {},
//   // Image props
//   imageSrc,
//   imageAlt = '',
//   imageWidth,
//   imageHeight,
//   imageReveal = false,
//   imageRevealProps = {},
//   // Text props
//   heading,
//   subheading,
//   text,
//   textReveal = false,
//   textRevealProps = {},
//   // Button props
//   btnTitle,
//   link,
//   btnClass,
//   buttonReveal = false,
//   buttonRevealProps = {},
// }) => {
//   const button =
//     btnTitle && link ? (
//       <ButtonLink
//         btnClass={btnClass}
//         btnTitle={btnTitle}
//         link={link}
//         withReveal={buttonReveal}
//         revealProps={buttonRevealProps}
//       />
//     ) : null;

//   return (
//     <TwoColumnLayout
//       reverse={reverse}
//       extraClass={extraClass}
//       withReveal={withReveal}
//       revealProps={revealProps}
//     >
//       <ImageColumn
//         src={imageSrc}
//         alt={imageAlt}
//         width={imageWidth}
//         height={imageHeight}
//         withReveal={imageReveal}
//         revealProps={imageRevealProps}
//       />
//       <TextColumn
//         heading={heading}
//         subheading={subheading}
//         withReveal={textReveal}
//         revealProps={textRevealProps}
//         button={button}
//       >
//         {text}
//       </TextColumn>
//     </TwoColumnLayout>
//   );
// };

// export default ImageTextLayout;

import TwoColumnLayout from '../../layout/two-col-layout';
import ImageColumn from '../columns/image-col';
import TextColumn from '../columns/text-col';
import ButtonLink from '../elements/button';

const ImageTextLayout = ({
  reverse = false,
  extraClass = '',
  // Layout reveal props
  withReveal = false,
  revealProps = {},
  // Image props
  imageSrc,
  imageAlt = '',
  imageWidth,
  imageHeight,
  imageReveal = false,
  imageRevealProps = {},
  // Text props
  heading,
  subheading,
  text,
  textReveal = false,
  textRevealProps = {},
  // Button props
  btnTitle,
  link,
  srText,
  btnClass,
  buttonReveal = false,
  buttonRevealProps = {},
}) => {
  const button =
    btnTitle && link ? (
      <ButtonLink
        btnClass={btnClass}
        btnTitle={btnTitle}
        link={link}
        srText={srText}
        withReveal={buttonReveal}
        revealProps={buttonRevealProps}
      />
    ) : null;

  return (
    <TwoColumnLayout
      reverse={reverse}
      extraClass={extraClass}
      withReveal={withReveal}
      revealProps={revealProps}
    >
      <ImageColumn
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        withReveal={imageReveal}
        revealProps={imageRevealProps}
      />
      <TextColumn
        heading={heading}
        subheading={subheading}
        withReveal={textReveal}
        revealProps={textRevealProps}
        button={button}
      >
        {text}
      </TextColumn>
    </TwoColumnLayout>
  );
};

export default ImageTextLayout;
