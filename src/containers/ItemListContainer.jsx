import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts } from "../services/products";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts().then((productsList) => {
      const filtered = categoryId
        ? productsList.filter((p) => p.category === categoryId)
        : productsList;
      setItems(filtered);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="container">
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;
