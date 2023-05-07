import React from 'react';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const Table = (props) => {
  const { data, onDelete } = props;
  const rows = data.map((person) => (
    <tr key={person.id}>
      <td>{person.name}</td>
      <td>{person.lastName}</td>
      <td>{person.age}</td>
      <td>{person.idNumber}</td>
      <td>
        <Button text="Eliminar" onClick={() => onDelete(person.id)} />
      </td>
    </tr>
  ));

  const numMinors = data.filter((person) => person.age < 18).length;
  const numAdults = data.length - numMinors;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Cédula</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <div>
        <Text text={`Mayores de edad: ${numAdults}`} />
        <Text text={`Menores de edad: ${numMinors}`} />
      </div>
    </div>
  );
};

export default Table;