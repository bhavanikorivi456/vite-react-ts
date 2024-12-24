import React, { createContext, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextProps {
  cartItems: CartItem[];
  totalItems: number;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(()=>{
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        toast.success("Item quantity increased!");
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      toast.success("Item added to cart!");
      return [...prevItems, item];
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared!");
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed from cart!");
  };

    // Increase quantity
    const increaseQuantity = (id: number) => {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      
    };
  
    // Decrease quantity
    const decreaseQuantity = (id: number) => {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      
    };

    useEffect(() => {
      // Update local storage whenever the cart changes
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, totalItems, addToCart, clearCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
