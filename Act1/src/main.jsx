import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./loginpage"; 
import App from "./App"; 
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/loginpage" element={<Login />} />
      <Route path="/App" element={<App />} />
    </Routes>
  </BrowserRouter>
);
