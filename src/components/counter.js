import React, { Component } from "react";

class counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  Increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => console.log("call back value", this.state.count)
    // );
    // // this.state.count = this.state.count + 1;
    // console.log(this.state.count);

    this.setState((prevState, props) => ({
      count: prevState.count + props.counts,
    }));
    console.log(this.state.count);
  }

  IncrementByFiveTime() {
    this.Increment();
    this.Increment();
    this.Increment();
  }

  render() {
    return (
      <div>
        <div>counter - {this.state.count}</div>
        <button onClick={() => this.IncrementByFiveTime()}>Increment</button>
      </div>
    );
  }
}

export default counter;
