import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbol: ["!", "@", "£", "$", "%", "^", "&", "*"],
    counter: 0,
    password: []
  }

  addHandler = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  minusHandler = () => {
    this.setState({ counter: this.state.counter - 1 })

  }

  ranLetter = () => {
    
  }


  render() { 
    return (
      <div>
        <h1>Random PassWord Generator</h1>
        <h1>{this.state.password}</h1>
        <button onClick={this.minusHandler}>-</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addHandler}>+</button>
        <button>Start</button>
      </div>
    );
  }
}
 
export default App;
