import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(name) {
    alert(`Hello ${this.state.parentName} from ${name}`);
  }
  render() {
    return (
      <div>
        <ChildComponent handlerd={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
