import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar producto al carrito
  const addItem = (product, quantity) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  // Eliminar un producto del carrito por id
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => setCartItems([]);

  // Total de unidades en el carrito
  const getTotalItems = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Total precio del carrito
  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,   
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => useContext(CartContext);
