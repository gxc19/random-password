import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";

class App extends Component {
  state = {
    upper: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lower: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbol: ["!", "@", "£", "$", "%", "^", "&", "*", "<", ">"],
    password: [],
    counter: 1,
    upperBtn: true,
    lowerBtn: true,
    numBtn: true,
    symBtn: true
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

    if(!this.state.upperBtn){
      characterOpt.splice(characterOpt.indexOf(upper), 1)
    }

    if(!this.state.lowerBtn){
      characterOpt.splice(characterOpt.indexOf(lower), 1)
    }

    if(!this.state.numBtn){
      characterOpt.splice(characterOpt.indexOf(number), 1)
    }

    if(!this.state.symBtn){
      characterOpt.splice(characterOpt.indexOf(symbol), 1)
    }

    if(characterOpt.length === 0){
      return
    }

    for (let i = 0; i < counter; i++) {
      let currentOpt = characterOpt[Math.floor(Math.random() * characterOpt.length)];
      let randomOpt = currentOpt[Math.floor(Math.random() * currentOpt.length)];
      pass.push(randomOpt);
      this.setState({ password: pass });
    }
    console.log(characterOpt)
  };

  charaHandler = () =>{
    this.setState((prevState) => {
      return {upperBtn: !prevState.upperBtn}
    })
    console.log(this.state.upperBtn)
  }

  charaHandler2 = () => {
    this.setState((prevState) => {
      return {lowerBtn: !prevState.lowerBtn}
    })
    console.log(this.state.lowerBtn)
  }

  charaHandler3 = () => {
    this.setState((prevState) => {
      return {numBtn: !prevState.numBtn}
    })
    console.log(this.state.numBtn)
  }

  charaHandler4 = () => {
    this.setState((prevState) => {
      return {symBtn: !prevState.symBtn}
    })
    console.log(this.state.symBtn)
  }

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
            <button onClick={this.charaHandler}>+</button>
          </div>
          <div className="optBtn">
            <h2>Lower Case</h2>
            <button onClick={this.charaHandler2}>+</button>
          </div>
          <div className="optBtn">
            <h2>Numbers</h2>
            <button onClick={this.charaHandler3}>+</button>
          </div>
          <div className="optBtn">
            <h2>Symbols</h2>
            <button onClick={this.charaHandler4}>+</button>
          </div>
          <button onClick={this.start}>Start</button>
        </div>
      </div>
    );
  }
}

export default App;
