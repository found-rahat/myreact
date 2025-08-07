import React from "react";

function person({ person }) {
  return (
    <div>
      <li>{person.name + " - " + person.age}</li>
    </div>
  );
}

export default person;
