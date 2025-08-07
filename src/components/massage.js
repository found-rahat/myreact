import React, { Component } from "react";

class Massage extends Component {
  constructor() {
    super();
    this.state = {
      massage:
        "hellow sir my name is rahat! please click button and subscript our channel.",
    };
  }
  className() {
    this.setState({
      massage: "Thank you for subscribe our channel.",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.massage}</h1>
        <button onClick={() => this.className()}>Click Here!</button>
      </div>
    );
  }
}
export default Massage;
