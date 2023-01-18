import React from "react";

//import sass
import "./BannerBody.sass";

import imagebg from "../../assets/banners/bannerBody.svg";

const BannerBody = () => {
  return (
    <section id="bannerBody">
      <div className="imageBanner">
        <img src={imagebg} alt="" />
        <p className="textBanner">
          O caminho mais rápido e fácil <br />
          <span> para as grandes marcas é aqui</span>
        </p>
      </div>
    </section>
  );
};

export default BannerBody;
