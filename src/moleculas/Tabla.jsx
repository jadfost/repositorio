import React from 'react';
import Texto from '../atomos/Texto';
import Button from '../atomos/Boton';
import './Tabla.css';

const Tabla = (props) => {
  const { data, onDelete } = props;
  const filas = data.map((persona) => (
    <tr key={persona.id}>
      <td>{persona.nombre}</td>
      <td>{persona.apellido}</td>
      <td>{persona.edad}</td>
      <td>{persona.numeroIdentificacion}</td>
      <td>
        <Button texto="Eliminar" onClick={() => onDelete(persona.id)} />
      </td>
    </tr>
  ));

  const numMenores = data.filter((persona) => persona.edad < 18).length;
  const numMayores = data.length - numMenores;

  return (
    <div>
      <div>
        <Texto texto={`Mayores de edad: ${numMayores}`} />
        <Texto texto={`Menores de edad: ${numMenores}`} />
      </div>
      <table className="table">
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
          {filas}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;