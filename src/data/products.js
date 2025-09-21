const products = [
  { 
    id: 1, 
    name: "Karambit Doble Filo", 
    category: "karambit", 
    price: 250, 
    stock: 5, 
    image: "/images/karambit.jpg" 
  },
  { 
    id: 2, 
    name: "Bayoneta Fade", 
    category: "bayonet", 
    price: 300, 
    stock: 8, 
    image: "/images/bayonet.jpg" 
  },
  { 
    id: 3, 
    name: "M9 Doppler", 
    category: "m9", 
    price: 400, 
    stock: 3, 
    image: "/images/m9.jpg" 
  },
  { 
    id: 4, 
    name: "Karambit Slaughter", 
    category: "karambit", 
    price: 280, 
    stock: 6, 
    image: "/images/karambit2.jpg" 
  },
];

// Simula traer todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

// Simula traer un producto por ID
export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === parseInt(id)));
    }, 1000);
  });
};

export default products;