import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class lifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "rahat",
    };
    console.log("A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("A getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("A componentDidMount");
  }
  render() {
    console.log("A render");
    return (
      <div>
        <div>lifecycleA</div>
        <LifecycleB />
      </div>
    );
  }
}

export default lifecycleA;
