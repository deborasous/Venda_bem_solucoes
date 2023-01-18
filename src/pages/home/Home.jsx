import React from "react";

//import

//import components
import Advantages from "../../components/advantages/Advantages";
import BannerBody from "../../components/bannerBody/BannerBody";
import Brands from "../../components/brands/Brands";
import FeaturedProdCard from "../../components/featuredProducts/FeaturedProdCard";
import Header from "../../components/header/Header";
import InfoHome from "../../components/infoHome/InfoHome";
import MenuIcon from "../../components/menuIcon/MenuIcon";

//import sass
import "./Home.sass";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Advantages />
        <MenuIcon />
        <FeaturedProdCard />
        <BannerBody />
        <Brands />
        <InfoHome />
      </main>
    </>
  );
};

export default Home;
