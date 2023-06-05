import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const App = () => {
  const slideData = [
    <img src="a.png" alt="" />,
    <img src="b.png" alt="" />,
    <img src="ba.png" alt="" />,
    <img src="g.png" alt="" />,
    <img src="r.png" alt="" />,
    <img src="g.png" alt="" />,
    <img src="a.png" alt="" />,
  ];

  const [swiper, setSwiper] = useState(null);

  const handleMouseEnter = () => {
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper.autoplay.start();
    }
  };

  const handleSwiperInit = (swiperInstance) => {
    setSwiper(swiperInstance);
  };

  return (
    <>
      <br />
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={handleSwiperInit}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default App;
