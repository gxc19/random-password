import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  state = {
    upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",],
    lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",],
    number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbol: ["!", "@", "£", "$", "%", "^", "&", "*", "<", ">"],
    password: [],
    upperBtn: true,
    lowerBtn: true,
    numberBtn: true,
    symbolBtn: true,
    counter: 1,
  };

  // Adds to the counter, but prevents you from going above 16
  addHandler = () => {
    if (this.state.counter === 16) {
      this.setState({ counter: 16 });
    } else {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
  };

  // Decreases the counter, but prevents you from going below 0
  minusHandler = () => {
    if (this.state.counter === 1) {
      this.setState({ counter: 1 });
    } else {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    }
  };

  // Adds the 4 options into an array, which then randomly get picked. Once picked, a random character will be selected and pushed into the password array
  start = () => {
    let counter = this.state.counter;
    let upper = [...this.state.upper];
    let lower = [...this.state.lower];
    let number = [...this.state.number];
    let symbol = [...this.state.symbol];

    let characterOpt = [upper, lower, number, symbol];
    let pass = []

    for (let i = 0; i < counter; i++) {
      let currentOpt = characterOpt[Math.floor(Math.random() * characterOpt.length)];
      let randomOpt = currentOpt[Math.floor(Math.random() * currentOpt.length)];
      pass.push(randomOpt);
      this.setState({ password: pass });
    }
    
  };

  render() {
    return (
      <div className="container">
        <h1>Random PassWord Generator</h1>
        <div className="miniContainer">
          <h1>{this.state.password}</h1>
          <Button
            counter={this.state.counter}
            addHandler={this.addHandler}
            minusHandler={this.minusHandler}
          />
          <div className="optBtn">
            <h2>Upper Case</h2>
            <button>+</button>
          </div>
          <div className="optBtn">
            <h2>Lower Case</h2>
            <button>+</button>
          </div>
          <div className="optBtn">
            <h2>Numbers</h2>
            <button>+</button>
          </div>
          <div className="optBtn">
            <h2>Symbols</h2>
            <button>+</button>
          </div>
          <button onClick={this.start}>Start</button>
        </div>
      </div>
    );
  }
}

export default App;
