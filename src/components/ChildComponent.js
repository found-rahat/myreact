import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.handlerd("rahat")}>Click Me!</button>
    </div>
  );
}

export default ChildComponent;
