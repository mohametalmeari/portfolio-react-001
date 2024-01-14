import { NavLink } from "react-router-dom";

const links = [
  { path: '/About', text: 'About' },
  { path: '/', text: 'Work' },
  { path: '#contact', text: 'Contact' },
];

const Navbar = () => (
  <ol>
    {links.map((link) => (
      <li key={link.text}>
        <NavLink to={link.path}>
          {link.text}
        </NavLink>
      </li>
    ))}
  </ol>
);

export default Navbar;