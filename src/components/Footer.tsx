import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} MyShop. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a
            href="#"
            className="text-sm hover:text-yellow-500 transition duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm hover:text-yellow-500 transition duration-200"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm hover:text-yellow-500 transition duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
