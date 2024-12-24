import React from "react";
import { useCart } from "../context/CartProvider";


const CartPage: React.FC = () => {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Cart Items</h1>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-2 border-b">
                <div>
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} × ${item.price}
                  </p>
                </div>
                <p className="font-bold">${item.quantity * item.price}</p>
                <button onClick={() => increaseQuantity(item.id)} className="bg-yellow-500 py-1 px-2 text-white">+</button>
              <button onClick={() => decreaseQuantity(item.id)} className="bg-yellow-500 py-1 px-2 text-white">-</button>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 py-1 px-2 text-white">Remove</button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-2 py-1 rounded mt-4"
          >
            Clear Cart
          </button>
          <p className="mt-4 text-lg font-bold">Total Items: {totalItems}</p>
          <p  className="mt-4 mb-4 text-lg font-bold ">Total Price: ${totalPrice.toFixed(2)}</p>
        </>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
