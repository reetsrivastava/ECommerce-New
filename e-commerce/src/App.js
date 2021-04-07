// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Product } from "./Components/product";
import { Cart } from "./Components/cart";
import { WishList } from './Components/wishlist';
import {Home} from "./Components/home";
import {Navbar} from "./Components/navbar";
import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [route,setRoute] = useState("Products");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
