import TwoColumnLayout from '../layout/TwoColumnLayout';
import ImageColumn from '../columns/ImageColumn';

const ImageImageLayout = ({
  reverse = false,
  extraClass = '',
  // First image
  image1Src,
  image1Alt = '',
  image1Width,
  image1Height,
  // Second image
  image2Src,
  image2Alt = '',
  image2Width,
  image2Height,
}) => {
  return (
    <TwoColumnLayout reverse={reverse} extraClass={extraClass}>
      <ImageColumn
        src={image1Src}
        alt={image1Alt}
        width={image1Width}
        height={image1Height}
      />
      <ImageColumn
        src={image2Src}
        alt={image2Alt}
        width={image2Width}
        height={image2Height}
      />
    </TwoColumnLayout>
  );
};

export default ImageImageLayout;
