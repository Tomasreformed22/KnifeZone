import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Item({ id, name, price, image }) {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-img" />
      <h3 className="item-title">{name}</h3>
      <p className="item-price">${price}</p>
      <Link to={`/item/${id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}

export default Item;