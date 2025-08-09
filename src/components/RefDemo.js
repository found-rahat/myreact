import React, { Component } from "react";

export class RefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (event) => {
      this.cbRef = event;
    };
  }
  componentDidMount() {
    // this.inputRef.current.focus();
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <input ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default RefDemo;
