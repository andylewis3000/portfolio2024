import Image from '../elements/image';
import ButtonLink from '../elements/button';
import Reveal from 'react-awesome-reveal';

const Block2Col = ({
  extraClass,
  reverse,
  heading,
  heading2,
  subheading,
  text,
  img,
  imgURL,
  imgAlt,
  imgWidth,
  imgHeight,
  img2,
  img2URL,
  img2Alt,
  img2Width,
  img2Height,
  text2,
  button,
  btnClass,
  title,
  link,
  reveal,
}) => {
  return (
    <section className={`block-2col` + (extraClass ? `${extraClass}` : '')}>
      <div className="container">
        <div className={`content-2col ${reverse ? 'reverse' : ''}`}>
          {img ? (
            <div className="content-2col__img">
              <Image
                src={imgURL}
                alt={imgAlt}
                width={imgWidth}
                height={imgHeight}
              />
            </div>
          ) : (
            <div className="content-2col__text">
              {reveal ? <Reveal /> : ''}
              {heading ? <h2>{heading}</h2> : ''}
              {subheading ? <h4>{subheading}</h4> : ''}
              {text ? text : ''}
              {button ? (
                <ButtonLink btnClass={btnClass} title={title} link={link} />
              ) : (
                ''
              )}
            </div>
          )}
          {img2 ? (
            <div className="content-2col__img">
              <Image
                src={img2URL}
                alt={img2Alt}
                width={img2Width}
                height={img2Height}
              />
            </div>
          ) : (
            <div className="content-2col__text">
              {heading2 ? <h2>{heading2}</h2> : ''}
              {subheading ? <h4>{subheading}</h4> : ''}
              {text2 ? text2 : ''}
              {button ? (
                <ButtonLink btnClass={btnClass} title={title} link={link} />
              ) : (
                ''
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Block2Col;
