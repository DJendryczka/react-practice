import React from "react";
import { useState } from "react";

const Content = () => {

  const [name, setName] = useState("Dariusz");
  const handlaName = () => {
    const names = ["John", "Paul", "George", "Ringo"];
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  const handleClick = () => {
    alert("Hello, World!");
  };

  const handleClick2 = (name) => {
    alert("Hello, " + name);
  };

  const handleClick3 = (e) => {
    alert("Hello, " + e.target.innerText);
  };
  return (
    <main>
      <p>My name is {name}</p>
      <button onClick={handlaName}>Change me!</button>
      <button
        onClick={() => {
          handleClick2("Dariusz");
        }}
      >
        Click me!
      </button>
      <button
        onClick={(e) => {
          handleClick3(e);
        }}
      >
        Click me!
      </button>
    </main>
  );
};

export default Content;
