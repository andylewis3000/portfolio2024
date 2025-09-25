import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease-in;
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const testimonialsContent = [
  {
    id: 1,
    content:
      "Andy's service is everything I could ask for!  He's efficient, cost effective and completes jobs in a timely manner. I love that he's able to execute my exact vision into the end product.",
    client: 'Yates Outdoor',
  },
  {
    id: 2,
    content:
      'Andy put together a website for us that really reflects the modern look and design we were hoping for. Thanks for making the process very straight forward - we appreciate the fact that he is so easy to work with too.',
    client: 'KNS Fitness',
  },
  {
    id: 3,
    content:
      "Andy is the best! He consistently provides high-quality work in an extremely timely manner, is easy to get ahold of, and all for a fair price, which is very important to me as a business owner.  Andy's my go-to guy for everything website-related!",
    client: "Maro's Bistro",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <Reveal
          cascade
          damping={0.2}
          fraction={0.75}
          keyframes={customAnimation}
          triggerOnce
        >
          <div className="testimonials__content">
            <Reveal
              cascade
              damping={0.2}
              fraction={0.75}
              keyframes={customAnimation}
              triggerOnce
            >
              <Swiper
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 7000 }}
                effect={'fade'}
                fadeEffect={{
                  crossFade: true,
                }}
              >
                {testimonialsContent.map((testimonial) => {
                  const { id, content, client } = testimonial;
                  return (
                    <SwiperSlide key={id}>
                      <div className="testimonial">
                        <h2 className="h5">&ldquo;{content}&rdquo;</h2>
                        <h3 className="h6">{client}</h3>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
