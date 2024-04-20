import { BsStars } from 'react-icons/bs';

const TwinkleStars = () => {
  return (
    <div className="twinkle-stars">
      <div className="stars stars-a">
        <BsStars />
      </div>
      <div className="stars stars-b">
        <BsStars />
      </div>
    </div>
  );
};

export default TwinkleStars;
