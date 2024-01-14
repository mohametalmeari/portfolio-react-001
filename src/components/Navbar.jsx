const links = [
  { path: '/About', text: 'About' },
  { path: '/', text: 'Work' },
  { path: '#contact', text: 'Contact' },
];

const Navbar = () => (
  <ul>
    {links.map((link) => (
      <li key={link.text}>
        <a href={link.path}>{link.text}</a>
      </li>
    ))}
  </ul>
);

export default Navbar;