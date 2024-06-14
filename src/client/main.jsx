import React from "react";
import ReactDOM from "react-dom/client";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./data/DataProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
      <DataProvider />
    </BrowserRouter>
  </ErrorBoundary>
);
