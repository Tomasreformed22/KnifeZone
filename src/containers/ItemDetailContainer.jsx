import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

function ItemDetailContainer({ onAdd }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const productRef = doc(db, "products", id);
      const productSnap = await getDoc(productRef);
      if (productSnap.exists()) setProduct({ id: productSnap.id, ...productSnap.data() });
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="container">
      <ItemDetail {...product} onAdd={onAdd} />
    </div>
  );
}

export default ItemDetailContainer;
