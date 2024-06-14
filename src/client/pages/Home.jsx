import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <p>Welcome to the Home Page</p>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/shop")}>Shop</button>
    </div>
  );
};

export default Home;
