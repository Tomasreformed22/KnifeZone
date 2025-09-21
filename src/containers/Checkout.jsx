import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const submitOrder = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return alert("Carrito vacío");
    setLoading(true);

    const order = {
      buyer: { name, email },
      items: cartItems.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      total: getTotalPrice(),
      createdAt: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error creando orden", error);
      alert("Ocurrió un error al crear la orden");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div className="container">
        <h2>Compra confirmada ✅</h2>
        <p>Gracias por tu compra. Tu id de orden es:</p>
        <strong>{orderId}</strong>
        <br />
        <button className="btn" onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={submitOrder}>
        <input required placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
        <input required placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;
