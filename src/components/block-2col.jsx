const Block2Col = ({ reverse, heading, text, img, img2, text2 }) => {
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
              <h2>{heading}</h2>
              <p>{text}</p>
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
              <p>{text2}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Block2Col;
