import React from "react";
import { useState } from "react";

function App() {
  const [name, setname] = useState("Saurabh");
  let [animals, setAnimal] = useState(["lion", "tiger", "leopard"]);

  function addAnimal() {
    // Spread operator
    let copyAnimals = [...animals];
    copyAnimals.push("Deer");
    setAnimal(copyAnimals);
  }

  return (
    <div>
      <h2>Hello</h2>
      <h2>{name}</h2>

      <button
        onClick={() => {
          setname("suhas");
        }}
      >
        Change name
      </button>

      {animals.map((animal, index) => {
        return <h2 key={index}>{animal}</h2>;
      })}

      <button onClick={addAnimal}>Add new animal</button>
    </div>
  );
}

export default App;
