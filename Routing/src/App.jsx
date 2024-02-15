import React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Products from "./Components/Products";
import Service from "./Components/Service";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/service" element={<Service></Service>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
