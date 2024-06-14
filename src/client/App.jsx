import React from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import ProductDetail from "./components/product/productDetail";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/shop" Component={Shop} />
      <Route path="/product/:id" Component={ProductDetail} />
    </Routes>
  );
};

export default App;
