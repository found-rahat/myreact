import React, { Component, PureComponent } from "react";
import Regcomp from "./Regcomp";
import PureComp from "./PureComp";

export class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rahat",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Rahat",
      });
    }, 2000);
  }
  render() {
    console.log("**************Parent Component***********");
    return (
      <div>
        Parent Component
        <Regcomp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
