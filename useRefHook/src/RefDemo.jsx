import React from "react";
import { useState, useEffect, useRef } from "react";

function RefDemo() {
  const [name, setname] = useState("saurabh");
  let nVar = 0;
  let rVar = useRef(10);
  useEffect(() => {
    console.log(name);
    console.log(nVar);
    console.log(rVar);
    console.log(ptag);

    {
      current: 10;
    }
  });
  let ptag = useRef();

  return (
    <div className="refdemo">
      <h1>useRef Demo</h1>
      <h1>{name}</h1>
      <h1>{nVar}</h1>
      <h1>{rVar.current}</h1>
      <button
        onClick={() => {
          setname("Thor");
          nVar = 1;
          rVar.current = 20;
        }}
      >
        change name
      </button>

      {/* Dom Manipulation */}
      <p ref={ptag}>Hello Everyone</p>
      <button
        onClick={() => {
          ptag.current.style.backGroundColor = "red";
        }}
      >
        Change content
      </button>
    </div>
  );
}

export default RefDemo;
