// import TwoColumnLayout from '../../layout/two-col-layout';
// import ImageColumn from '../columns/image-col';

// const ImageImageLayout = ({
//   reverse = false,
//   extraClass = '',
//   // Layout reveal props
//   withReveal = false,
//   revealProps = {},
//   // First image
//   image1Src,
//   image1Alt = '',
//   image1Width,
//   image1Height,
//   image1Reveal = false,
//   image1RevealProps = {},
//   // Second image
//   image2Src,
//   image2Alt = '',
//   image2Width,
//   image2Height,
//   image2Reveal = false,
//   image2RevealProps = {},
// }) => {
//   return (
//     <TwoColumnLayout
//       reverse={reverse}
//       extraClass={extraClass}
//       withReveal={withReveal}
//       revealProps={revealProps}
//     >
//       <ImageColumn
//         src={image1Src}
//         alt={image1Alt}
//         width={image1Width}
//         height={image1Height}
//         withReveal={image1Reveal}
//         revealProps={image1RevealProps}
//       />
//       <ImageColumn
//         src={image2Src}
//         alt={image2Alt}
//         width={image2Width}
//         height={image2Height}
//         withReveal={image2Reveal}
//         revealProps={image2RevealProps}
//       />
//     </TwoColumnLayout>
//   );
// };

// export default ImageImageLayout;

import TwoColumnLayout from '../../layout/two-col-layout';
import ImageColumn from '../columns/image-col';

const ImageImageLayout = ({
  reverse = false,
  extraClass = '',
  // Layout reveal props
  withReveal = false,
  revealProps = {},
  // First image
  image1Src,
  image1Alt = '',
  image1Width,
  image1Height,
  image1Reveal = false,
  image1RevealProps = {},
  // Second image
  image2Src,
  image2Alt = '',
  image2Width,
  image2Height,
  image2Reveal = false,
  image2RevealProps = {},
}) => {
  return (
    <TwoColumnLayout
      reverse={reverse}
      extraClass={extraClass}
      withReveal={withReveal}
      revealProps={revealProps}
    >
      <ImageColumn
        src={image1Src}
        alt={image1Alt}
        width={image1Width}
        height={image1Height}
        withReveal={image1Reveal}
        revealProps={image1RevealProps}
      />
      <ImageColumn
        src={image2Src}
        alt={image2Alt}
        width={image2Width}
        height={image2Height}
        withReveal={image2Reveal}
        revealProps={image2RevealProps}
      />
    </TwoColumnLayout>
  );
};

export default ImageImageLayout;
