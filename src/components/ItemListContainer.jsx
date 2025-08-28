import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

// Productos simulados
const productos = [
  { id: 1, name: "Karambit Fade", category: "karambit", price: 250, stock: 10 },
  { id: 2, name: "Bayonet Doppler", category: "bayonet", price: 300, stock: 8 },
  { id: 3, name: "M9 Lore", category: "m9", price: 400, stock: 5 },
];

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    getProducts.then((res) => {
      if (categoryId) {
        setItems(res.filter((prod) => prod.category === categoryId));
      } else {
        setItems(res);
      }
    });
  }, [categoryId]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
