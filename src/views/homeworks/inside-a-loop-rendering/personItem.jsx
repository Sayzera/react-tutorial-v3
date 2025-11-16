import React, { useState } from "react";

function PersonItem({ name, id, setPersonsData, personsData }) {
  const [personName, setPersonName] = useState();
  const [islem, setIslem] = useState();

  const handleDeletePerson = () => {
    const _personData = personsData.filter((person) => person.id != id);
    setPersonsData(_personData);
  };

  return (
    <li>
      <span
        onClick={() => {
          setPersonName(name);
          setIslem(name + " için işlem yapıldı");
        }}
      >
        {name} {islem}
      </span>
      <button onClick={handleDeletePerson}>Sil</button>
    </li>
  );
}

export default PersonItem;
