import React from "react";
import { useNavigate } from "react-router-dom";

//import image Error
import ImageError from "../../assets/general/ImageError.svg";

//import sass
import "../erro/error.sass";

const Erro = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <section id="Error" className="containerBlock">
      <div className="text">
        <h1>Error 404</h1>
        <img
          src={ImageError}
          alt="Página não encontrada, retorne para a home"
        />
        <p>
          Desculpe, não sei como chegou aqui, mas está página não existe. <br />
          Volte para a página Home
        </p>
      </div>
      <div>
        <a href="#home" className="back" onClick={backHome}>
          Voltar
        </a>
      </div>
    </section>
  );
};

export default Erro;
