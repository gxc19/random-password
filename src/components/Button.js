import React from "react";
import "../style/Button.css";

const Button = (props) => {
  return (
    <div className="button-container">
      <button onClick={props.minusHandler}>-</button>
      <div>
        <h1>{props.counter}</h1>
      </div>
      <button onClick={props.addHandler}>+</button>
    </div>
  );
};

export default Button;
