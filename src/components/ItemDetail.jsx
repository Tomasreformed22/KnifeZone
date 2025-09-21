import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import "../App.css";

function ItemDetail({ id, name, price, stock, image }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addItem({ id, name, price, stock, image }, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={image} alt={name} className="item-detail-img" />
      <h2 className="item-detail-title">{name}</h2>
      <p className="item-detail-price">Precio: ${price}</p>
      <p className="item-detail-stock">
        {stock > 0 ? `Stock disponible: ${stock}` : "Producto sin stock"}
      </p>

      {!added ? (
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      ) : (
        <Link to="/cart" className="btn">Ir al carrito</Link>
      )}
    </div>
  );
}

export default ItemDetail;
