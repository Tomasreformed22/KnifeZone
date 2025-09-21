import "../App.css";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { getTotalItems } = useCart();
  const count = getTotalItems();

  return (
    <button className="cart-widget" aria-label="Carrito">
      🛒
      {count > 0 && <span className="cart-count">{count}</span>}
    </button>
  );
}

export default CartWidget;
