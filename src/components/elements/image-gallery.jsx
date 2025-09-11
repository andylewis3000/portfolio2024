import Image from './image';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="image image-full">
        <Image
          src="https://placehold.co/600x400"
          alt="Placeholder 600x400"
          width={600}
          height={400}
        />
      </div>
      <div className="image image-multi">
        <div className="image-container">
          <Image
            src="https://placehold.co/600x400"
            alt="Placeholder 600x400"
            width={600}
            height={400}
          />
        </div>
        <div className="image-container">
          <Image
            src="https://placehold.co/600x400"
            alt="Placeholder 600x400"
            width={600}
            height={400}
          />
        </div>
        <div className="image-container">
          <Image
            src="https://placehold.co/600x400"
            alt="Placeholder 600x400"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
