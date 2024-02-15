import React from "react";
import { useState } from "react";

function App() {
  const [details, setdetails] = useState({
    name: "",
    email: "",
  });

  // Just given below:
  details = {};
  {
    name: "saurabh";
    email: "saurabh@gmail.com";
  }

  function handleInput(event) {
    setdetails((prevObj) => {
      return { ...prevObj, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit() {
    console.log(details);
  }

  // const [name, setname] = useState();
  // const [email, setemail] = useState();
  function handleName(event) {
    //console.log(event.target.value);
    setname(event.target.value);
  }

  function handleEmail(event) {
    setemail(event.target.value);
  }

  return (
    <>
      <h2>{name}</h2>
      <br />
      <h2>{email}</h2>
      <button
        onClick={() => {
          setname("Saurabh");
        }}
      >
        Change Name
      </button>
      <button
        onClick={() => {
          setemail("abc@gmail.com");
        }}
      >
        Change Email
      </button>
      <div className="data-form">
        <input
          type="text"
          onChange={handleInput}
          placeholder="Enter Name"
          value={details.name}
          name="name"
        />

        <input
          type="text"
          onChange={handleInput}
          placeholder="Enter Email"
          name="email"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default App;

// In form handling if input field changes then state variable also gets changed .but what when state variable changes by someone else and according to that we want to change the input fiels value?

// - if we not using value state variable changed by other but inout field remains unchanged

//=> answer is use
//value={state_variable}

// This is two-way binding
