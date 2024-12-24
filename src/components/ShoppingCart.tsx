import React from "react";
import { useCart } from "../context/CartProvider";


const ShoppingCart: React.FC = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Product 1", price: 100, image: "/assets/product1.webp" },
    { id: 2, name: "Product 2", price: 200, image: "/assets/product2.jpg" },
    { id: 3, name: "Product 3", price: 300, image: "/assets/product3.webp" },
    { id: 4, name: "Product 4", price: 400, image: "/assets/product4.jpg" },
    { id: 5, name: "Product 5", price: 500, image: "/assets/product5.jpg" },
    { id: 6, name: "Product 6", price: 600, image: "/assets/product6.jpg" },
  ];

  return (
    <div className="container mx-auto mt-4">
    <h1 className="text-2xl font-bold mb-4">Products</h1>
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded shadow">
            
            <img
            src={product.image}
            alt={product.name}
            className="mt-4 w-full h-48 object-cover rounded"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>${product.price}</p>
          <button
            onClick={() => addToCart({ ...product, quantity: 1 })}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  </div>
  );
};

export default ShoppingCart;
