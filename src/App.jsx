import React from "react";

// import routes and route
import { Routes, Route } from "react-router-dom";

//import Components
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Error from "./components/erro/Erro";

//import pages
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import AboutUs from "./pages/about/AboutUs";
import AdmFirebase from "./pages/uploadFirebase/AdmProduct";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Product />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/adm" element={<AdmFirebase />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
