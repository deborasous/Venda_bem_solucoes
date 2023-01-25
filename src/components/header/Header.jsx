import React, { useState, useEffect } from "react";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination } from "swiper";

//import swiperData
import { slideHeaderData } from "../../data/slideHeaderData";

//import sass
import "./Header.sass";

//import components
import ButtonLarge from "../buttons/buttonLarge/ButtonLarge";
import Navbar from "..//navbar/Navbar";

const Header = () => {
  const size = useWindowSize();

  return (
    <>
      <header id="header-swiper">
        <div className="title">
          <h1>
            Você Produz, <br />
            <span> Nós vendemos</span>
          </h1>
          <ButtonLarge className="btn-call" />
        </div>
        <Swiper
          className="header-swiper"
          spaceBetween={30}
          centeredSlides={true}
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >
          {slideHeaderData.map((slide, index) => {
            return (
              <SwiperSlide className="slide" key={index}>
                <div className="text">
                  <p>{slide.desc}</p>
                </div>
                <div className="image">
                  {size.width > 800 ? (
                    <img src={slide.banner} alt={slide.brand} />
                  ) : (
                    <img src={slide.bannerSmall} alt={slide.brand} />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </header>
    </>
  );
};

//HOOK
//Função para alterar a imagem do banner
function useWindowSize() {
  //inicializa o estado com a largura e altura definida como indefinida
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    //|Manipulador(handle), para chamar o dimencionamento da janela
    function handleResize() {
      //definir largura e altura
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    //adiciona o evento que verifica quando a window mudar
    window.addEventListener("resize", handleResize);

    //chama o manipulador para que o estado seja atualizado com o tamanho da tela
    handleResize();

    //limpa o evento
    return () => window.removeEventListener("resize", handleResize);
  }, []); //A matriz vazia garante que o efeito seja executado apenas na montagem

  return windowSize;
}

export default Header;
