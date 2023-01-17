import React from "react";

// import routes and route
import { NavLink } from "react-router-dom";

import {
  GiChickenOven,
  GiMeat,
  GiFlatfish,
  GiShrimp,
  GiCannedFish,
  GiCheeseWedge,
  GiHotMeal,
  GiWineBottle,
  GiSittingDog,
} from "react-icons/gi";

import { FaCarrot } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, navigation]);

//import images
// import Image from "../../assets/imageicon/Chicken.svg";

//import sass
import "./MenuIcon.sass";

const MenuIcon = () => {
  return (
    <>
      <div id="menuIcon">
        <Swiper
          className="containerSwiper"
          spaceBetween={20}
          navigation={true}
          loop={true}
          loopedSlides={9}
          slidesPerView={7}
          breakpoints={{
            800: {
              width: 800,
              slidesPerView: 5,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
            },
            // when window width is >= 640px
            360: {
              width: 360,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiChickenOven className="icon" />
              <h5>Aves</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiMeat className="icon" />
              <h5>Carnes</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiFlatfish className="icon" />

              <h5>Peixes</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiShrimp className="icon" />
              <h5>Frutos do Mar</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiCannedFish className="icon" />
              <h5>Enlatados</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiHotMeal className="icon" />
              <h5>Pratos prontos</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiHotMeal className="icon" />
              <h5>Congelados</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiCheeseWedge className="icon" />
              <h5>Laticínios</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <FaCarrot className="icon" />
              <h5>Vegetais</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiWineBottle className="icon" />
              <h5>Bebidas</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <GiSittingDog className="icon" />
              <h5>Pets</h5>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="card">
            <NavLink to="/produtos">
              <RiComputerFill className="icon" />
              <h5>Tecnologias</h5>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MenuIcon;
