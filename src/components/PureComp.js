import React, { PureComponent } from "react";

export class purecomp extends PureComponent {
  render() {
    console.log("Pure Component");
    return <div>Pure Components {this.props.name}</div>;
  }
}

export default purecomp;
