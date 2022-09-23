import React, { useState } from "react";

function App() {
  const [headingText, setheadingText] = useState("Hello");
  const [isMouseOver, setMouseover] = useState("false");

  function handleClick() {
    setheadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseover(true);
  }

  function handleMouseOut() {
    setMouseover(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
