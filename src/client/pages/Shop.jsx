import React from "react";
import ProductList from "../components/product/productList";
import { useMessageStore } from "../data/state";

const ProductListPage = () => {
  const { message } = useMessageStore();

  return (
    <div>
      <a href="/">Home</a>
      <h1>Welcome to our store!</h1>
      <h3>{message}</h3>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
