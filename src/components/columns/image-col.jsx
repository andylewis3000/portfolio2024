import Image from '../../elements/image';

const ImageColumn = ({ src, alt = '', width, height }) => {
  if (!src) return null;

  return (
    <div className="content-2col__img">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default ImageColumn;
