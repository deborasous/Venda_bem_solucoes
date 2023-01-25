import React from "react";

import infoImage from "../../assets/general/info.svg";

//import sasss
import "./InfoHome.sass";

const InfoHome = () => {
  return (
    <section id="infoHome" className="containerBlock">
      <div className="infoImage">
        <img src={infoImage} alt="" />
        <div className="infoBgSquare"></div>
      </div>
      <div className="infoText">
        <h1>Venda Bem!</h1>
        <p>
          Vender mais é algo que toda indústria e comércio quer e precisa.
          Vender Bem é poder contar com uma equipe qualificada, capaz de
          valorizar e aumentar as vendas dos seus produtos.
        </p>
        <p>
          Com mais de 10 anos de mercado, nossos representantes comerciais
          possuem as ferramentas de prospecção e fechamento de negócios que
          nossos clientes precisam.
        </p>
      </div>
    </section>
  );
};

export default InfoHome;
