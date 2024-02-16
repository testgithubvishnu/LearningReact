import React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Products from "./Components/Products";
import Service from "./Components/Service";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Image from "./Components/about/Image";
import Price from "./Components/about/Price";
import Location from "./Components/about/Location";
import RefDemo from "./Components/RefDemo";

function App() {
  return (
    <>
      <RefDemo />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="Image" element={<Image />} />
            <Route path="Location" element={<Location />} />
            <Route path="Price" element={<Price />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/service" element={<Service></Service>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
