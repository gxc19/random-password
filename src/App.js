import React, { Component } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Buttons from "./components/Buttons";

class App extends Component {
  state = {
    upper: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    lower: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbol: ["!", "@", "£", "$", "%", "^", "&", "*", "<", ">"],
    password: [],
    counter: 5,
    upperBtn: true,
    lowerBtn: true,
    numBtn: true,
    symBtn: true,
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
    let pass = [];

    if (!this.state.upperBtn) {
      characterOpt.splice(characterOpt.indexOf(upper), 1);
    }

    if (!this.state.lowerBtn) {
      characterOpt.splice(characterOpt.indexOf(lower), 1);
    }

    if (!this.state.numBtn) {
      characterOpt.splice(characterOpt.indexOf(number), 1);
    }

    if (!this.state.symBtn) {
      characterOpt.splice(characterOpt.indexOf(symbol), 1);
    }

    if (characterOpt.length === 0) {
      return;
    }

    for (let i = 0; i < counter; i++) {
      let currentOpt =
        characterOpt[Math.floor(Math.random() * characterOpt.length)];
      let randomOpt = currentOpt[Math.floor(Math.random() * currentOpt.length)];
      pass.push(randomOpt);
      this.setState({ password: pass });
    }
    console.log(characterOpt);
  };

  charaHandler = () => {
    this.setState((prevState) => {
      return { upperBtn: !prevState.upperBtn };
    });
    console.log(this.state.upperBtn);
  };

  charaHandler2 = () => {
    this.setState((prevState) => {
      return { lowerBtn: !prevState.lowerBtn };
    });
    console.log(this.state.lowerBtn);
  };

  charaHandler3 = () => {
    this.setState((prevState) => {
      return { numBtn: !prevState.numBtn };
    });
    console.log(this.state.numBtn);
  };

  charaHandler4 = () => {
    this.setState((prevState) => {
      return { symBtn: !prevState.symBtn };
    });
    console.log(this.state.symBtn);
  };

  changeHandler = (e) => {
    this.setState({ counter: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="miniContainer">
          <h1>Random Password Generator</h1>
          <div className="display">
            <h1>{this.state.password}</h1>
          </div>

          <Slider
            counter={this.state.counter}
            addHandler={this.addHandler}
            minusHandler={this.minusHandler}
            changeHandler={this.changeHandler}
          />

          <Buttons
            ch={this.charaHandler}
            ch2={this.charaHandler2}
            ch3={this.charaHandler3}
            ch4={this.charaHandler4}
            upperBtn={this.state.upperBtn}
            lowerBtn={this.state.lowerBtn}
            numBtn={this.state.numBtn}
            symBtn={this.state.symBtn}
          />

          <div className="start" onClick={this.start}>
            <p>Generate Password</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
