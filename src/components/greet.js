import React from "react";

// function Khan(){
// return <h1>hello khan !</h1>
// }

export const Khan = (props) => {
  return (
    <div>
      <h1>
        {" "}
        hello {props.name} from hero {props.done}!
      </h1>
    </div>
  );
};
// export default Khan
