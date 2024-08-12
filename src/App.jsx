import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginSignup from "./components/LoginSignup";
import { useState } from "react";
const App = () => {
  const[ showLoginSignup , setShowLoginSignup] = useState(false);
  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
    <div>
    {showLoginSignup &&
      <LoginSignup setShowLoginSignup={setShowLoginSignup} />
    }
    </div>
    <div className={"app "+(showLoginSignup && 'showloginsignup')}>
      <Header setShowLoginSignup={setShowLoginSignup}/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productid" element={<Product/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/cart" element={<Cart/>} />
        {/* <Route path="/login" element={<LoginSignup/>} /> */}
      </Routes>
      </div>
    </BrowserRouter>
    </>
  );
};

export default App;
