import React from "react";
import { Component } from "react";
import "../style/Buttons.css";

class Buttons extends Component {
  render() {
    let btnOff = "btnTop";
    let btnOff2 = "btnTop2";
    let btnOff3 = "btnTop3";
    let btnOff4 = "btnTop4";

    if (!this.props.upperBtn) {
      btnOff = "btnTop off";
    }
    if (!this.props.lowerBtn) {
      btnOff2 = "btnTop2 off";
    }
    if (!this.props.numBtn) {
      btnOff3 = "btnTop3 off";
    }
    if (!this.props.symBtn) {
      btnOff4 = "btnTop4 off";
    }
    return (
      <div className="btnBox">
        <div className="optBtn">
          <h2>Upper Case</h2>
          <div className="btn" onClick={this.props.ch}>
            <div className={this.props.upperBtn ? "none" : "btn-base"} />
            <div className={btnOff} />
          </div>
        </div>
        <div className="optBtn">
          <h2>Lower Case</h2>
          <div className="btn" onClick={this.props.ch2}>
            <div className={this.props.lowerBtn ? "none" : "btn-base"} />
            <div className={btnOff2} />
          </div>
        </div>
        <div className="optBtn">
          <h2>Numbers</h2>
          <div className="btn" onClick={this.props.ch3}>
            <div className={this.props.numBtn ? "none" : "btn-base"} />
            <div className={btnOff3} />
          </div>
        </div>
        <div className="optBtn">
          <h2>Symbols</h2>
          <div className="btn" onClick={this.props.ch4}>
            <div className={this.props.symBtn ? "none" : "btn-base"} />
            <div className={btnOff4} />
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
