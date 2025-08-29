import TwoColumnLayout from '../layout/TwoColumnLayout';
import TextColumn from '../columns/TextColumn';
import ActionButton from '../ui/ActionButton';

const TextTextLayout = ({
  reverse = false,
  extraClass = '',
  // First column
  heading1,
  subheading1,
  text1,
  buttonTitle1,
  buttonLink1,
  btnClass1,
  withReveal = false,
  // Second column
  heading2,
  subheading2,
  text2,
  buttonTitle2,
  buttonLink2,
  btnClass2,
}) => {
  const button1 = (
    <ActionButton
      btnClass={btnClass1}
      title={buttonTitle1}
      link={buttonLink1}
    />
  );
  const button2 = (
    <ActionButton
      btnClass={btnClass2}
      title={buttonTitle2}
      link={buttonLink2}
    />
  );

  return (
    <TwoColumnLayout reverse={reverse} extraClass={extraClass}>
      <TextColumn
        heading={heading1}
        subheading={subheading1}
        button={button1}
        withReveal={withReveal}
      >
        {text1}
      </TextColumn>
      <TextColumn heading={heading2} subheading={subheading2} button={button2}>
        {text2}
      </TextColumn>
    </TwoColumnLayout>
  );
};

export default TextTextLayout;
