import React, { useEffect } from "react";
import { useMessageStore, useProductStore } from "./state";

const DataProvider = () => {
  const { fetchProducts } = useProductStore();
  const { fetchMessage } = useMessageStore();

  useEffect(() => {
    fetchProducts();
    fetchMessage();
  }, []);

  return <div style={{ display: "none" }}></div>;
};

export default DataProvider;
