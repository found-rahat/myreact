import React from "react";
import Person from "./person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "rahat",
      age: 12,
      skill: "vue",
    },
    {
      id: 2,
      name: "Khan",
      age: 16,
      skill: "React",
    },
    {
      id: 3,
      name: "Dot",
      age: 18,
      skill: "Laravel",
    },
  ];

  const personlist = persons.map((person) => <Person person={person} />);
  //   const personlist = persons.map((person) => (
  //     <li>{person.name + " - " + person.age}</li>
  //   ));

  return (
    <div>
      <ul>{personlist}</ul>
    </div>
  );
}

export default NameList;
