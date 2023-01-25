import React from "react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper";

//import data
import { imageBrandData } from "../../data/ImageBrandData";

//import sass
import "./Brands.sass";

const Brands = () => {
  return (
    <>
      <section id="brands">
        <Swiper
          className="containerSwiper"
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          loop={true}
          loopedSlides={7}
          slidesPerView={6}
          breakpoints={{
            570: {
              width: 570,
              loopedSlides: 4,
              slidesPerView: 2,
            },
          }}
        >
          {imageBrandData.map((item, index) => {
            return (
              <SwiperSlide className="card" key={index}>
                <img src={item.image} alt={item.title} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Brands;
