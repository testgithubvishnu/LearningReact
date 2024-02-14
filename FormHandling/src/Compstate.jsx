import React from "react";

function Compstate() {
  const [name, setname] = useState("Saurabh");

  let [animals, setAnimal] = useState(["lion", "tiger", "leopard"]);

  // case 1:
  // function addAnimal() {
  // Spread operator
  //   let copyAnimals = [...animals, "Deer"];
  //   setAnimal(copyAnimals);
  // }

  // case 2:
  function addAnimal() {
    setAnimal((prev) => {
      return [...prev, "deer"];
    });
  }

  function changeName() {
    setname((prev) => {
      console.log(prev);
      return prev + "suhas";
    });
  }
  // prev=> denotes old value if we want to perform some operation with old value
  // return gives new value
  return (
    <div>
      <h2>Hello</h2>
      <h2>{name}</h2>

      {/* <button
          onClick={() => {
            setname("suhas");
          }}
        > */}

      <button onClick={changeName}>Change name</button>

      {animals.map((animal, index) => {
        return <h2 key={index}>{animal}</h2>;
      })}

      <button onClick={addAnimal}>Add new animal</button>
    </div>
  );
}

export default Compstate;
