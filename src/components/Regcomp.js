import React, { Component } from "react";

export class Regcomp extends Component {
  render() {
    console.log("Regular Component with memo component");
    return <div>Regular components {this.props.name}</div>;
  }
}

export default React.memo(Regcomp);
