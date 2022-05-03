import React, { useEffect } from "react";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Vendor from "./pages/Vendor";
import "./index.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { getArts } from "./features/slice/artSlice";
import { useDispatch } from "react-redux";
import Edit from "./components/Edit";
import { getCartProduct } from "./features/slice/cartSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArts());
    dispatch(getCartProduct())
  }, [dispatch]);

  return (
    <div className=" overflow-hidden">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
