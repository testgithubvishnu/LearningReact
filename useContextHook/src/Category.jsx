import React from "react";
import { useContext } from "react";
import { userContext } from "./App";
function Category() {
  let u = useContext(userContext);
  return (
    <div>
      <h2>
        Category component{u.name}
        {u.age}
      </h2>
      <button
        onClick={() => {
          u.setname("Manish");
        }}
      >
        {" "}
        change name here
      </button>
    </div>
  );
}

export default Category;
