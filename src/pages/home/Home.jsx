import React from "react";

//import

//import components
import Advantages from "../../components/advantages/Advantages";
import FeaturedProdCard from "../../components/featuredProducts/FeaturedProdCard";
import Header from "../../components/header/Header";
import MenuIcon from "../../components/menuIcon/MenuIcon";

//import sass
import "./Home.sass";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Advantages />
        <section className="container">
          <h2>Produtos</h2>
          <MenuIcon />
          <FeaturedProdCard />
        </section>
      </main>
    </>
  );
};

export default Home;
