const Block2Col = ({ reverse, heading, heading2, text, img, img2, text2 }) => {
  return (
    <section className="block-2col">
      <div className="container">
        <div className={`content-2col ${reverse ? 'reverse' : ''}`}>
          {img ? (
            <div className="content-2col__img">
              <img
                src="https://placehold.co/600x400"
                alt="Image"
                width="300"
                height="300"
              />
            </div>
          ) : (
            <div className="content-2col__text">
              {heading ? <h2>{heading}</h2> : ''}
              {text ? <p>{text}</p> : ''}
            </div>
          )}
          {img2 ? (
            <div className="content-2col__img">
              <img
                src="https://placehold.co/600x400"
                alt="Image"
                width="300"
                height="300"
              />
            </div>
          ) : (
            <div className="content-2col__text">
              {heading2 ? <h2>{heading2}</h2> : ''}
              {text2 ? <p>{text2}</p> : ''}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Block2Col;
