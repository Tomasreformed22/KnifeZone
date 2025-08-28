import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">CS:Knives</Link>
      <ul className="navbar-links">
        <li><Link to="/category/karambit">Karambit</Link></li>
        <li><Link to="/category/bayoneta">Bayoneta</Link></li>
        <li><Link to="/category/m9">M9</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;