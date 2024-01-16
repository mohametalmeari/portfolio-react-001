import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import { useState } from "react";

const links = [
  { path: "/About", text: "About" },
  { path: "/", text: "Work" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <img src={logo} alt="Logo" />
      <img
        className="nav__burger-menu"
        src={menu}
        alt="menu"
        onClick={toggleMenu}
      />
      <ol style={{ left: isMenuOpen ? "0" : "-100%" }} className="nav__menu">
        {links.map((link) => (
          <li key={link.text} onClick={toggleMenu}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
        <li onClick={toggleMenu}>
          <a href="#contact">Contact</a>
        </li>
      </ol>
    </nav>
  );
};

export default Navbar;
