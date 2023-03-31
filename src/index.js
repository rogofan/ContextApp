import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ProductsProvider from "./coontext/products-context";
import "./index.css";
import App from "./App";

import configureStore from "../src/hooks-store/product-store";

configureStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
