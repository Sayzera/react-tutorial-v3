import { useState } from "react";
import PersonItem from "./personItem";
import persons from "./temp-data.json";

function InsideALoopRendering() {
    const [personsData, setPersonsData] = useState(persons)
  
  return (
    <>
      <ul>
        {personsData.map((person, index) => (
         <PersonItem
          key={index}
          name={person.name}
          setPersonsData={setPersonsData}
          personsData={personsData}
          id={person.id}
          />
        ))}
      </ul>
    </>
  );
}

export default InsideALoopRendering;
