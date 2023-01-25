import React from "react";

//import icons
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import FormContact from "../form/Form";

//import sass
import "./Footer.sass";

const Footer = () => {
  return (
    <footer id="footer" className="containerBlock containerInline">
      <div className="container">
        <div className="contacts">
          <div className="title">
            <h3>Representantes</h3>
            <div className="dividerLg"></div>
          </div>
          <div>
            <div className="agent">
              <h4>Giovani Smolski</h4>
              <div className="contact">
                <a
                  href="https://wa.me/5548991131700"
                  className="phone"
                  target="_blank"
                >
                  <BsWhatsapp className="icon" />
                  (48) 99113 - 1700
                </a>

                <p href="">representa.sc@vendabemsolucoes.com.br</p>
              </div>
            </div>
            <div className="dividerSmall"></div>
            <div className="agent">
              <h4>David Duarte</h4>
              <div className="contact">
                <a
                  href="https://wa.me/5548999797434"
                  className="phone"
                  target="_blank"
                >
                  <BsWhatsapp className="icon" />
                  (48) 99979 - 7434
                </a>
                <p href="">dd.representacoes@hotmail.com</p>
              </div>
            </div>
            <div className="dividerSmall"></div>
            <div className="agent">
              <h4>Felipe Duarte</h4>
              <div className="contact">
                <a
                  href="https://wa.me/5548992092164"
                  className="phone"
                  target="_blank"
                >
                  <BsWhatsapp className="icon" />
                  (48) 99209 - 2164
                </a>
                <p href="">felipeduarterepresentacoes@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="address">
          <div className="localization">
            <div className="title">
              <h3>Endereço</h3>
              <div className="dividerLg"></div>
            </div>
            <div>
              <p>Rua da Praça, 241 - Sala 1119 Pedra Branca, Palhoça - SC</p>
            </div>
          </div>
          <div className="socialMedia">
            <div className="title">
              <h3>Representantes</h3>
              <div className="dividerLg"></div>
            </div>
            <a
              href="https://www.instagram.com/vendabem.solucoes/"
              className="bgIcon"
              target="_blank"
            >
              <BsInstagram />
            </a>
          </div>
        </div>

        <div id="customer" className="contentForm">
          <div className="title">
            <h3>Representantes</h3>
            <div className="dividerLg"></div>
          </div>
          <FormContact />
        </div>
      </div>
      <div className="rights">
        <p>
          Copyright &copy; 2023. Todos os direitos reservados - Venda Bem
          Soluções
        </p>
        <p>Desenvolvidor: Debora Sousa (48) 98484 7948</p>
      </div>
    </footer>
  );
};

export default Footer;
