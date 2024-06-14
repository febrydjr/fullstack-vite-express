import React, { useEffect } from "react";
import { useProductStore } from "../../data/state";

const ProductList = () => {
  const { products } = useProductStore();
  
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
