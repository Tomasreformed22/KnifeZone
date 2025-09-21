import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(categoryId ? productsList.filter(p => p.category === categoryId) : productsList);
      setLoading(false);
    };
    fetchProducts();
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
