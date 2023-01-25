//import images banner
import ImageSwiperOne from "../assets/banners/slideMahou.svg";
import imageSwiperTwo from "../assets/banners/slideEasychef.png";
import imageSwiperThree from "../assets/banners/slideSeafood.png";

//import images banner small
import ImageSlideSmall from "../assets/banners/slideBgSmall.svg";

// *** Images banner Body
import imageBanner from "../assets/banners/bannerBody.svg";
import imageBannerSmall from "../assets/banners/bannerBodySmall.svg";

export const slideHeaderData = [
  {
    id: 1,
    brand: "Mahou",
    desc: "Mahou a cerveja portuguesa mais tradicional e gelada do momento.",
    banner: ImageSwiperOne,
    bannerSmall: ImageSlideSmall,
  },
  {
    id: 2,
    brand: "EasyChef",
    desc: "EasyChef Professional é a linha de batatas fritas mais profissional e completa que você vai ver hoje.",
    banner: imageSwiperTwo,
    bannerSmall: ImageSlideSmall,
  },
  {
    id: 3,
    brand: "Venda Bem",
    desc: "Frutos do mar selecionados e de qualidade e com marcas variadas, você encontra na Venda Bem Soluções",
    banner: imageSwiperThree,
    bannerSmall: ImageSlideSmall,
  },
];

export const slideBody = [
  {
    id: 1,
    banner: imageBanner,
    bannerSmall: imageBannerSmall,
  },
];
