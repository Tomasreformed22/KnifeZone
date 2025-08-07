import CartWidget from "./CartWidget";
import logo from '../assets/logo.png';


const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Knife Zone Logo" style={{ height: '100px', width: 'auto' }} />
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Mariposa</a></li>
        <li><a href="#">Karambit</a></li>
        <li><a href="#">Bayoneta</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
