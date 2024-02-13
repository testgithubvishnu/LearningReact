import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("harry");

  const handleClick = () => {
    alert("hey welcome!");
  };

  const handleMouse = () => {
    alert("Click");
  };
  const nameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>

      <div onMouseOver={handleMouse}>india is my country</div>

      <input type="text" value={name} onChange={nameChange} />
    </>
  );
}

export default App;
