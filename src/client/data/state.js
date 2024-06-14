import { create } from "zustand";
import { getMessages } from "../api";

const productList = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "Description of Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "Description of Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30,
    description: "Description of Product 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40,
    description: "Description of Product 4",
  },
];

export const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      set({ products: productList || [] });
    } catch (error) {
      set({ products: [] });
    }
  },
}));

export const useMessageStore = create((set) => ({
  message: "",
  fetchMessage: async () => {
    try {
      const response = await getMessages();
      set({ message: response });
    } catch (error) {
      set({ message: "" });
    }
  },
}));
