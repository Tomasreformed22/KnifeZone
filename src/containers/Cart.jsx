import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

function Cart() {
  const { cartItems, getTotalPrice, removeItem, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Carrito vacío 🛒</h2>
        <Link to="/" className="btn">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Tu carrito</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.image}
            alt={item.name}
            className="cart-item-img"
          />
          <div className="cart-item-info">
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
            <button
              className="btn btn-remove"
              onClick={() => removeItem(item.id)}
            >
              Quitar
            </button>
          </div>
        </div>
      ))}

      <h3>Total: ${getTotalPrice()}</h3>

      <div className="cart-actions">
        <button className="btn btn-clear" onClick={clearCart}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-checkout">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
}

export default Cart;
