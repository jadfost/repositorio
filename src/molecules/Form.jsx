import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Form = (props) => {
  const { onSubmit } = props;
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: name,
      lastName: lastName,
      age: age,
      idNumber: idNumber
    });
    setName('');
    setLastName('');
    setAge('');
    setIdNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nombre"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Apellido"
        name="lastName"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Input
        label="Edad"
        name="age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Input
        label="Cédula"
        name="idNumber"
        type="text"
        value={idNumber}
        onChange={(e) => setIdNumber(e.target.value)}
      />
      <Button text="Agregar" type="submit" />
    </form>
  );
};

export default Form;