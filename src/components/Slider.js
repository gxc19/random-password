import React from "react";
import "../style/Slider.css";

const Slider = (props) => {
  return (
    <div className="button-container">
      <p className="counter">Length: {props.counter}</p>
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="16"
          value={props.counter}
          className="slider"
          onChange={props.changeHandler}
          // style={{
          //   background: 
          //   `linear-gradient(90deg,#2EAC68 0%, #2EAC68 ${props.counter}%, #182B3C ${props.counter}%, #182B3C 100%)`
          // }}
        />
      </div>
    </div>
  );
};

export default Slider;
