import React, { useState } from 'react';
import Form from '../molecules/Form';
import Table from '../molecules/Table';

const PersonList = () => {
  const [people, setPeople] = useState([]);

  const handleAddPerson = (person) => {
    setPeople([...people, { ...person, id: Date.now() }]);
  };

  const handleDeletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h1>Lista de personas</h1>
      <Form onSubmit={handleAddPerson} />
      <Table data={people} onDelete={handleDeletePerson} />
    </div>
  );
};

export default PersonList;