import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

function App() {
  const [counter, setCounter] = useState(15);

  // case 1:
  // run on every render:
  useEffect(() => {
    alert("hello i will run on every rebder");
  });

  // case 2:
  // run on first render:
  useEffect(() => {
    alert("hey welcome this is first render");
  }, []);

  // case 3:
  // run when counter is changed
  useEffect(() => {
    alert("I am running because counter us changed");
  }, [counter]);

  // counter -> holds value
  // setCounter -> function to update the counter

  //let counter = 1;
  const addValue = () => {
    // counter = counter + 1;
    console.log("value added", counter);
    setCounter(counter + 1);

    // Interview question:
    //  setCounter((counter) => counter + 1);
    // setCounter((counter) => counter + 1);
    // setCounter((counter) => counter + 1);
    // setCounter((counter + 1));
  };

  const removeValue = () => {
    // counter = counter + 1;
    console.log("value removed", counter);
    setCounter(counter - 1);
  };

  let [showpro, setshowpro] = useState(false);

  return (
    <>
      <h2>Counter Value is :{counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
      <br />
      <br />
      <button
        onClick={() => {
          setshowpro(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setshowpro(false);
        }}
      >
        Hide
      </button>

      {showpro == true ? <Product></Product> : <h2>Product not available</h2>}
    </>
  );
}

export default App;
