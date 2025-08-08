import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      comment: "",
      skill: "react",
    };
  }
  handelNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handelAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handelCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handelSkillChange = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };
  handelsubmit = (event) => {
    alert(
      `${this.state.name} ${this.state.age} ${this.state.comment}${this.state.skill}`
    );
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handelsubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={this.handelNameChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label>age</label>
          <input
            type="number"
            onChange={this.handelAgeChange}
            value={this.state.age}
          />
        </div>
        <div>
          <label>comment</label>
          <textarea
            onChange={this.handelCommentChange}
            value={this.state.comment}
          ></textarea>
        </div>
        <div>
          <label>Skill</label>
          <select onChange={this.handelSkillChange} value={this.state.skill}>
            <option value="react">React</option>
            <option value="js">js</option>
            <option value="jsx">jsx</option>
          </select>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
