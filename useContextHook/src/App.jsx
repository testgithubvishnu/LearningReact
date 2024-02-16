import React from "react";
import Product from "./Product.jsx";
import { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

function App() {
  // Global states
  const [name, setname] = useState("Saurabh");
  const [age, setage] = useState(45);
  return (
    <div>
      <userContext.Provider value={{ name, age, setname }}>
        <h1>{name}</h1>
        <h1>App component</h1>
        <Product></Product>
      </userContext.Provider>
    </div>
  );
}

export default App;
