import React, { Component } from "react";

class eventbind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      massage: props.name,
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = () => {
    this.setState({
      massage: "thank You so much!",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <h2>{this.state.massage}</h2>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Here!</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click Here!</button> */}
        <button onClick={this.clickHandler}>Click Here!</button>
      </div>
    );
  }
}

export default eventbind;
