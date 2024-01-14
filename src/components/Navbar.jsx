const links = [
  { path: '#home', text: 'Home' },
  { path: '#skills', text: 'My Skills' },
  { path: '#work', text: 'Work' },
  { path: '#clients', text: 'Clients' },
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