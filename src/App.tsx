import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import CartPage from "./components/CartPage";
import { CartProvider } from "./context/CartProvider";
import Footer from "./components/Footer";
import CategoryList from "./components/CategoryList";

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <CategoryList />
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
