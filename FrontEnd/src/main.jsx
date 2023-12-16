import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./Views/HomePage/HomePage";
import router from "./router";
import "./main.css";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
