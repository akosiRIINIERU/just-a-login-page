import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./loginpage";    // your login form component
import App from "./App";        // your random message home page
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />          {/* Landing page */}
      <Route path="/loginpage" element={<Login />} />  {/* Login page */}
    </Routes>
  </BrowserRouter>
);
