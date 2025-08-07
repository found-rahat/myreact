import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Khan } from "./components/greet";
import Welcome from "./components/classcomponents";
import Massage from "./components/massage";
import Counter from "./components/counter";
import FunctionClick from "./components/click";
import Eventbind from "./components/eventbind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <Eventbind name="hello sir My name id rahat" /> */}
      {/* <FunctionClick /> */}
      {/* <Counter counts={10} /> */}
      {/* <Massage /> */}
      {/* <Khan name="Ridoy" done="spiderman" />
      <Khan name="Ratul" done="batman" /> */}
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
