import React from "react";

function FragmentDemo() {
  return (
    // <div>
    //   <h1>demo fragmentation</h1>
    //   <p>this is fragmentation</p>
    // </div>
    // <React.Fragment>
    //   <h1>demo fragmentation</h1>
    //   <p>this is fragmentation</p>
    // </React.Fragment>
    <>
      <h1>demo fragmentation</h1>
      <p>this is fragmentation page</p>
    </>
  );
}

export default FragmentDemo;
