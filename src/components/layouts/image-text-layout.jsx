import TwoColumnLayout from '../../layout/two-col-layout';
import ImageColumn from '../columns/image-col';
import TextColumn from '../columns/text-col';
import Button from '../elements/button';

const ImageTextLayout = ({
  reverse = false,
  extraClass = '',
  // Image props
  imageSrc,
  imageAlt = '',
  imageWidth,
  imageHeight,
  // Text props
  heading,
  subheading,
  text,
  buttonTitle,
  buttonLink,
  btnClass,
  withReveal = false,
}) => {
  const button = (
    <Button btnClass={btnClass} title={buttonTitle} link={buttonLink} />
  );

  return (
    <TwoColumnLayout reverse={reverse} extraClass={extraClass}>
      <ImageColumn
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <TextColumn
        heading={heading}
        subheading={subheading}
        button={button}
        withReveal={withReveal}
      >
        {text}
      </TextColumn>
    </TwoColumnLayout>
  );
};

export default ImageTextLayout;
