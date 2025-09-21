import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCart } from "../context/CartContext";
import "../App.css";

function NavBar() {
  const { getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        KnifeZone ⚡
      </Link>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/category/karambit"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Karambit
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/bayonet"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Bayoneta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/m9"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            M9
          </NavLink>
        </li>
      </ul>

      <Link to="/cart">
        <CartWidget count={getTotalItems()} />
      </Link>
    </nav>
  );
}

export default NavBar;
