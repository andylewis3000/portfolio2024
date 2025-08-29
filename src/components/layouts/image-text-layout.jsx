import TwoColumnLayout from '../layout/TwoColumnLayout';
import ImageColumn from '../columns/ImageColumn';
import TextColumn from '../columns/TextColumn';
import ActionButton from '../ui/ActionButton';

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
    <ActionButton btnClass={btnClass} title={buttonTitle} link={buttonLink} />
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
