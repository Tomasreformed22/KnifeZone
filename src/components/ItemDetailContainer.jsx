import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

// Simulación productos
const productos = [
  { id: 1, name: "Karambit Fade", category: "karambit", price: 250, stock: 10 },
  { id: 2, name: "Bayonet Doppler", category: "bayonet", price: 300, stock: 8 },
  { id: 3, name: "M9 Lore", category: "m9", price: 400, stock: 5 },
];

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((prod) => prod.id === parseInt(id)));
      }, 1000);
    });

    getProduct.then((res) => setProduct(res));
  }, [id]);

  return (
    <div className="container">
      {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
    </div>
  );
}

export default ItemDetailContainer;
