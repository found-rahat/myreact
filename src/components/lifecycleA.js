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
  shouldComponentUpdate() {
    console.log("A shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("A getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("A componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Khan",
    });
  };
  render() {
    console.log("A render");
    return (
      <div>
        <div>lifecycleA</div>
        <button onClick={this.changeState}> change state</button>
        <LifecycleB />
      </div>
    );
  }
}

export default lifecycleA;
