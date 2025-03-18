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
        <Image
          src="https://placehold.co/600x400"
          alt="Placeholder 600x400"
          width={600}
          height={400}
        />
        <Image
          src="https://placehold.co/600x400"
          alt="Placeholder 600x400"
          width={600}
          height={400}
        />
        <Image
          src="https://placehold.co/600x400"
          alt="Placeholder 600x400"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default ImageGallery;
