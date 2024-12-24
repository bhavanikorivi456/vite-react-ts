import React from 'react'

interface ProductListProps {
    onAddToCart: (id: number, name: string, price: number) => void
}

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
  }

const ProductList: React.FC<ProductListProps> = ({onAddToCart}) => {
    const products: Product[] = [
        { id: 1, name: "Product 1", price: 100, image: "/assets/product1.webp" },
        { id: 2, name: "Product 2", price: 200, image: "/assets/product2.jpg" },
        { id: 3, name: "Product 3", price: 300, image: "/assets/product3.webp" },
        { id: 4, name: "Product 4", price: 400, image: "/assets/product4.jpg" },
        { id: 5, name: "Product 5", price: 500, image: "/assets/product5.jpg" },
        { id: 6, name: "Product 6", price: 600, image: "/assets/product6.jpg" },
      ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />

          {/* Product Details */}
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-700">₹{product.price}</p>
            <button
              onClick={() => onAddToCart(product.id, product.name, product.price)}
              className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList