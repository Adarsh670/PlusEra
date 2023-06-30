import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/productcontext";
import { FilterContextProvider } from "./context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AppProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </AppProvider>
  </Router>
);
