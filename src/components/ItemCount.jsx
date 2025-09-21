import { useState } from "react";
import "../App.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrease = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <div className="counter-buttons">
        <button className="btn-counter" onClick={decrease}>-</button>
        <span className="count">{count}</span>
        <button className="btn-counter" onClick={increase}>+</button>
      </div>
      <button className="btn btn-add" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
