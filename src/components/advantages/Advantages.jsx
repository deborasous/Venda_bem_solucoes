import React from "react";

//import icons
import { BsBarChart, BsTruck, BsPeople } from "react-icons/bs";

//import sass
import "./Advantages.sass";

const Advantages = () => {
  return (
    <section id='advantages'>
      <div className='advantage'>
        <BsTruck className='icons' />
        <div className='text'>
          <h5>Logistíca</h5>
          <p>Entregas rápidas e facilitadas</p>
        </div>
      </div>
      <div className='advantage'>
        <BsPeople className='icons' />
        <div className='text'>
          <h5>Carteira de clientes</h5>
          <p>Clientes ativos e lucrativos</p>
        </div>
      </div>
      <div className='advantage'>
        <BsBarChart className='icons' />
        <div className='text'>
          <h5>Vendas</h5>
          <p>Mix de produtos com altas taxas de vendas</p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
