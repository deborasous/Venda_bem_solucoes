import React, { useEffect, useState } from "react";

//import Link
import { NavLink } from "react-router-dom";

//import icons
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

//import logo
import Logo from "../../assets/general/Logo.png";

//import sass
import "./Navbar.sass";

const Navbar = () => {
  //see if nav is open. If nav is open add class isMenu
  const [menuOpen, setMenuOpen] = useState(false);

  //**// close background nav mobile when screen size change
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  // will be listening when the window change
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //if window is bigger then 768 close nav mobile
  useEffect(() => {
    if (size.width > 800 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);
  //**//

  //click toggle close
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <div id="navigation">
      <div className="content">
        <div className="logo">
          <img src={Logo} alt="Logo Venda Bem Soluções" />
        </div>
        <nav
          className={`${"nav"} ${menuOpen && size.width < 800 ? "isMenu" : ""}`}
        >
          <ul>
            <li>
              <NavLink to="/" onClick={menuToggleHandler}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/produtos" onClick={menuToggleHandler}>
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" onClick={menuToggleHandler}>
                Sobre
              </NavLink>
            </li>
            <li>
              <a href="#customer" onClick={menuToggleHandler}>
                Seja um Cliente
              </a>
            </li>
            <li>
              <NavLink to="/noticias" onClick={menuToggleHandler}>
                Notícias
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="toggle">
          {menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
