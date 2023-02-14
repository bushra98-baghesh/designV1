import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import ProductsDetails from "../pages/ProductsDetails";
import Products from "../pages/Products";
import SignUp from "../pages/auth/SignUp";
import Orders from "../pages/Orders";
import About from "../pages/About";
import Reset from "../pages/auth/Reset";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="products" element={<Products />} />
      <Route path="orders" element={<Orders />} />
      <Route path="about" element={<About />} />
      <Route path="products/:id" element={<ProductsDetails />} />
      <Route path="checkout" element={<CheckOut />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="reset" element={<Reset />} />
    </Routes>
  );
}

export default Routers;
