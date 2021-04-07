import React, {Component} from 'react';
import './App.css';
import Button from './components/Button'

class App extends Component {
  state = {
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    symbol: ["!", "@", "£", "$", "%", "^", "&", "*"],
    password: []
  }

  random1 = () => {
    let letter = [...this.state.letters]
    let rl = letter[Math.floor(Math.random()*letter.length)]

    this.setState({ password: rl})
  }


  render() { 
    return (
      <div className="container">
        <h1>Random PassWord Generator</h1>
        <h1>
          {this.state.password}
        </h1>
        <Button/>
        <h2>Upper Case</h2>
        <h2>Lower Case</h2>
        <h2>Numbers</h2>
        <h2>Symbols</h2>
        <button onClick={this.random1}>Start</button>
      </div>
    );
  }
}
 
export default App;
