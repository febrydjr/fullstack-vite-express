import axios from "axios";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getMessages = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/hello`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
