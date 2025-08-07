import React, { Component } from "react";

class conditionalrendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    //4th condation type and short circuit operator
    let massage = "welcome Dashboard";
    let result = this.state.isLoggedIn && massage;

    //3rd condation type

    // let massage;
    // this.state.isLoggedIn
    //   ? (massage = "welcome Dashboard")
    //   : (massage = "welcome guest");

    //2nd condation type

    // let massage;
    // if (this.state.isLoggedIn) {
    //   massage = "welcome to dashboard";
    // } else {
    //   massage = "welcome guest";
    // }

    // 1st condation type

    // if (this.state.isLoggedIn) {
    //   return <h1>Welcome Home</h1>;
    // } else {
    //   return <h1>Welcome guest</h1>;
    // }
    return (
      <div>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default conditionalrendering;
