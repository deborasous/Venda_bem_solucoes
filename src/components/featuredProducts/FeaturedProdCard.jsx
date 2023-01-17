import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

//import Firebase Firestore
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

//import components
import ButtonSmall from "../buttons/buttonSmall/ButtonSmall";

//import sass
import "./FeaturedProdCard.sass";

import image from "../../assets/products/aves/Coxinhas_das_Asas_IQF_6kgs_Congeladas_Cancao_Alimentos 1.svg";

const FeaturedProdCard = () => {
  const [files, setFiles] = useState([]);

  //ler em tempo real alterações no firebase
  useEffect(() => {
    const dbRef = query(collection(db, "produtos", "Aves", "peito"));
    onSnapshot(dbRef, (docsSnap) => {
      setFiles(
        docsSnap.docs.map((doc) => ({
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <div id="producCard">
        <Swiper
          className="containerSwiper"
          spaceBetween={20}
          navigation={true}
          loopedSlides={7}
          slidesPerView={5}
          loop={true}
          breakpoints={{
            800: {
              width: 800,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            // when window width is >= 640px
            360: {
              width: 360,
              slidesPerView: 1,
            },
          }}
        >
          {files.map((e, index) => {
            return (
              <SwiperSlide className="card" key={index}>
                <NavLink to="/produtos">
                  <div className="imageCard">
                    <img src={image} alt={e?.data?.description} />
                  </div>
                  <div className="textCard">
                    <p>{e?.data?.description}</p>
                    <h5>{e?.data?.title}</h5>
                    <ButtonSmall />
                  </div>
                </NavLink>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedProdCard;
