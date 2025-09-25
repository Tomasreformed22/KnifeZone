import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getProducts = async () => {
  try {
    const productsCol = collection(db, "products");
    const snapshot = await getDocs(productsCol);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error al traer productos:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(db, "products", id);
    const snapshot = await getDoc(productRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      throw new Error("Producto no encontrado");
    }
  } catch (error) {
    console.error("Error al traer producto:", error);
    return null;
  }
};
