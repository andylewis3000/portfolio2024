// import { Reveal } from 'react-awesome-reveal';
// import Image from '../elements/image';
// import { defaultRevealProps } from '../../utils/revealAnimation';

// const ImageColumn = ({
//   src,
//   alt = '',
//   width,
//   height,
//   withReveal = false,
//   revealProps = {},
// }) => {
//   if (!src) return null;

//   const finalRevealProps = { ...defaultRevealProps, ...revealProps };

//   const imageContent = (
//     <div className="content-2col__img">
//       <Image src={src} alt={alt} width={width} height={height} />
//     </div>
//   );

//   return withReveal ? (
//     <Reveal {...finalRevealProps}>{imageContent}</Reveal>
//   ) : (
//     imageContent
//   );
// };

// export default ImageColumn;

import { Reveal } from 'react-awesome-reveal';
import Image from '../elements/image';
import { defaultRevealProps } from '../../utils/revealAnimation';

const ImageColumn = ({
  src,
  alt = '',
  width,
  height,
  withReveal = false,
  revealProps = {},
}) => {
  if (!src) return null;

  const finalRevealProps = { ...defaultRevealProps, ...revealProps };

  const imageContent = (
    <div className="content-2col__img">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );

  return withReveal ? (
    <Reveal {...finalRevealProps}>{imageContent}</Reveal>
  ) : (
    imageContent
  );
};

export default ImageColumn;
