import React, { Component } from "react";

export class Regcomp extends Component {
  render() {
    console.log("Regular Component");
    return <div>Regular components {this.props.name}</div>;
  }
}

export default Regcomp;
