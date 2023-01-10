import React from "react";
import { Link } from "react-router-dom";

//import image Error
import ImageError from "../../assets/ImageError.svg";

//import sass
import "../erro/error.sass";

const Erro = () => {
  return (
    <section id='Error'>
      <div className='text'>
        <h1>Error 404</h1>
        <img
          src={ImageError}
          alt='Página não encontrada, retorne para a home'
        />
        <p>
          Desculpe, não sei como chegou aqui, mas está página não existe. <br />
          Volte para a página Home
        </p>
      </div>
      <div>
        <div className='back'>
          <Link to='/'>Voltar</Link>
        </div>
      </div>
    </section>
  );
};

export default Erro;
