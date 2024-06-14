import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductStore } from "../../data/state";

const ProductDetailPage = () => {
  const { products } = useProductStore();

  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div>
      <a href="/shop">Back</a>
      <h1>Product Detail</h1>
      <h2>{product?.name}</h2>
      <p>Price: ${product?.price}</p>
      <p>Description: {product?.description}</p>
    </div>
  );
};

export default ProductDetailPage;
