import { NavLink } from "react-router-dom";

const links = [
  { path: "/About", text: "About" },
  { path: "/", text: "Work" },
];

const Navbar = () => (
  <ol>
    {links.map((link) => (
      <li key={link.text}>
        <NavLink to={link.path}>{link.text}</NavLink>
      </li>
    ))}
    <li>
      <a href="#contact">Contact</a>
    </li>
  </ol>
);

export default Navbar;
