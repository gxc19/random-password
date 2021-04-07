import React, {Component} from 'react'
import '../style/Button.css'

class Button extends Component {
    state = {
        counter: 1
    }
    
    addHandler = () => {
        this.setState({ counter: this.state.counter + 1 })
      }
    
      minusHandler = () => {
        if(this.state.counter === 1){
            this.setState({ counter: 1 })
        } else{
            this.setState(prevState => ({ counter: prevState.counter - 1}))
        }
      }

    render() { 
        return (
            <div className="button-container">
                <button onClick={this.minusHandler}>-</button>
                <div>
                    <h1>{this.state.counter}</h1>
                </div>
                <button onClick={this.addHandler}>+</button>
            </div>
        );
    }
}
 
export default Button;