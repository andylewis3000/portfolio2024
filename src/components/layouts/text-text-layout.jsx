// import TwoColumnLayout from '../../layout/two-col-layout';
// import TextColumn from '../columns/text-col';
// import ButtonLink from '../elements/button';

// const TextTextLayout = ({
//   reverse = false,
//   extraClass = '',
//   // Layout reveal props
//   withReveal = false,
//   revealProps = {},
//   // First column
//   heading1,
//   subheading1,
//   text1,
//   btnTitle1,
//   link1,
//   btnClass1,
//   text1Reveal = false,
//   text1RevealProps = {},
//   button1Reveal = false,
//   button1RevealProps = {},
//   // Second column
//   heading2,
//   subheading2,
//   text2,
//   btnTitle2,
//   link2,
//   btnClass2,
//   text2Reveal = false,
//   text2RevealProps = {},
//   button2Reveal = false,
//   button2RevealProps = {},
// }) => {
//   const button1 =
//     btnTitle1 && link1 ? (
//       <ButtonLink
//         btnClass={btnClass1}
//         btnTitle={btnTitle1}
//         link={link1}
//         withReveal={button1Reveal}
//         revealProps={button1RevealProps}
//       />
//     ) : null;

//   const button2 =
//     btnTitle2 && link2 ? (
//       <ButtonLink
//         btnClass={btnClass2}
//         btnTitle={btnTitle2}
//         link={link2}
//         withReveal={button2Reveal}
//         revealProps={button2RevealProps}
//       />
//     ) : null;

//   return (
//     <TwoColumnLayout
//       reverse={reverse}
//       extraClass={extraClass}
//       withReveal={withReveal}
//       revealProps={revealProps}
//     >
//       <TextColumn
//         heading={heading1}
//         subheading={subheading1}
//         button={button1}
//         withReveal={text1Reveal}
//         revealProps={text1RevealProps}
//       >
//         {text1}
//       </TextColumn>
//       <TextColumn
//         heading={heading2}
//         subheading={subheading2}
//         button={button2}
//         withReveal={text2Reveal}
//         revealProps={text2RevealProps}
//       >
//         {text2}
//       </TextColumn>
//     </TwoColumnLayout>
//   );
// };

// export default TextTextLayout;

import TwoColumnLayout from '../../layout/two-col-layout';
import TextColumn from '../columns/text-col';
import ButtonLink from '../elements/button';

const TextTextLayout = ({
  reverse = false,
  extraClass = '',
  // Layout reveal props
  withReveal = false,
  revealProps = {},
  // First column
  heading1,
  subheading1,
  text1,
  btnTitle1,
  link1,
  srText1,
  btnClass1,
  text1Reveal = false,
  text1RevealProps = {},
  button1Reveal = false,
  button1RevealProps = {},
  // Second column
  heading2,
  subheading2,
  text2,
  btnTitle2,
  link2,
  srText2,
  btnClass2,
  text2Reveal = false,
  text2RevealProps = {},
  button2Reveal = false,
  button2RevealProps = {},
}) => {
  const button1 =
    btnTitle1 && link1 ? (
      <ButtonLink
        btnClass={btnClass1}
        btnTitle={btnTitle1}
        link={link1}
        srText={srText1}
        withReveal={button1Reveal}
        revealProps={button1RevealProps}
      />
    ) : null;

  const button2 =
    btnTitle2 && link2 ? (
      <ButtonLink
        btnClass={btnClass2}
        btnTitle={btnTitle2}
        link={link2}
        srText={srText2}
        withReveal={button2Reveal}
        revealProps={button2RevealProps}
      />
    ) : null;

  return (
    <TwoColumnLayout
      reverse={reverse}
      extraClass={extraClass}
      withReveal={withReveal}
      revealProps={revealProps}
    >
      <TextColumn
        heading={heading1}
        subheading={subheading1}
        withReveal={text1Reveal}
        revealProps={text1RevealProps}
        button={button1}
      >
        {text1}
      </TextColumn>
      <TextColumn
        heading={heading2}
        subheading={subheading2}
        withReveal={text2Reveal}
        revealProps={text2RevealProps}
        button={button2}
      >
        {text2}
      </TextColumn>
    </TwoColumnLayout>
  );
};

export default TextTextLayout;
