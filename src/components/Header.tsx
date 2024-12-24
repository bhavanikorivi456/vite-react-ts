import React from "react";
import Logo from '../assets/logoAmazon.webp'
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";



const Header: React.FC= () => {
    const {totalItems} = useCart();

  return (
    <header className="bg-black text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <div className="cursor-pointer">
                <img src={Logo} alt="Logo Image" className="w-16 h-18"/>
            </div>
            <div className="flex items-center bg-yellow-500 rounded-md overflow-hidden">
                <input
                    type="text"
                    placeholder="Search..."
                    className="p-2 w-80 text-black outline-none"
                />
                <button className="p-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
            <div className="text-lg flex items-center space-x-2 cursor-pointer" >
            <Link to="/cart" className="text-lg flex items-center space-x-2 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l1.4-8H5.4M16 16a2 2 0 11-4 0 2 2 0 014 0zm-6 0a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                <span className="absolute top-3 right-8 bg-yellow-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                </span>
                </Link>
            </div>

        </div>
        
    </header>
  );
};

export default Header;
