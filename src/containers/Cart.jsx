import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../App.css";

function Cart() {
  const { cartItems, removeItem, clearCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Carrito vacío 🛒</h2>
        <Link to="/" className="btn">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Mi carrito</h2>
      {cartItems.map(item => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Subtotal: ${item.price * item.quantity}</p>
          <button className="btn" onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${getTotalPrice()}</h3>
      <button className="btn" onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout" className="btn">Finalizar compra</Link>
    </div>
  );
}

export default Cart;
