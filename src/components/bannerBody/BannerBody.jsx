import React, { useState, useEffect } from "react";

//import sass
import "./BannerBody.sass";

import { slideBody } from "../../data/slideHeaderData";

//import components
import Brands from "../brands/Brands";

const BannerBody = () => {
  const size = useWindowSize();

  return (
    <section id="bannerBody" className="containerBlock">
      {slideBody.map((slide, index) => {
        return (
          <div className="imageBanner" key={index}>
            {size.width > 800 ? (
              <img src={slide.banner} alt="" />
            ) : (
              <img src={slide.bannerSmall} alt="" />
            )}
            <p className="textBanner">
              O caminho mais rápido e fácil <br />
              <span> para as grandes marcas é aqui</span>
            </p>
          </div>
        );
      })}
      <Brands />
    </section>
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

export default BannerBody;
