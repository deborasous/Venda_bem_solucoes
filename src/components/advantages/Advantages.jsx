import React from "react";

//import icons
import { BsBarChart, BsTruck, BsPeople } from "react-icons/bs";

//import sass
import "./Advantages.sass";

const Advantages = () => {
  return (
    <div id='advantages'>
      <div className='advantage'>
        <BsTruck className="icons"/>
        <div className='text'>
          <h4>Logistíca</h4>
          <p>Entregas rápidas e facilitadas</p>
        </div>
      </div>
      <div className='advantage'>
        <BsPeople className="icons"/>
        <div className='text'>
          <h4>Carteira de clientes</h4>
          <p>Clientes ativos e lucrativos</p>
        </div>
      </div>
      <div className='advantage'>
        <BsBarChart className="icons"/>
        <div className='text'>
          <h4>Vendas</h4>
          <p>Mix de produtos com altas taxas de vendas</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
