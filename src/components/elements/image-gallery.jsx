import Image from './image';

const ImageGallery = ({ images }) => {
  // Fallback to default placeholder images if no images are provided
  const defaultImages = {
    fullImage: {
      src: 'https://placehold.co/600x400',
      alt: 'Placeholder 600x400',
      width: 600,
      height: 400,
    },
    multiImages: [
      {
        src: 'https://placehold.co/600x400',
        alt: 'Placeholder 600x400',
        width: 600,
        height: 400,
      },
      {
        src: 'https://placehold.co/600x400',
        alt: 'Placeholder 600x400',
        width: 600,
        height: 400,
      },
      {
        src: 'https://placehold.co/600x400',
        alt: 'Placeholder 600x400',
        width: 600,
        height: 400,
      },
      {
        src: 'https://placehold.co/600x400',
        alt: 'Placeholder 600x400',
        width: 600,
        height: 400,
      },
    ],
  };

  const imageData = images || defaultImages;

  return (
    <div className="image-gallery">
      <div className="image image-full">
        <Image
          src={imageData.fullImage.src}
          alt={imageData.fullImage.alt}
          width={imageData.fullImage.width}
          height={imageData.fullImage.height}
        />
      </div>
      <div className="image image-multi">
        {imageData.multiImages.map((image, index) => (
          <div key={index} className="image-container">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
