import React, { useState } from 'react';
import Formulario from '../moleculas/Formulario';
import Tabla from '../moleculas/Tabla';
import './ListaPersonas.css';

const ListaPersonas = () => {
  const [personas, setPersonas] = useState([]);

  const agregarPersona = (persona) => {
    setPersonas([...personas, { ...persona, id: Date.now() }]);
  };

  const eliminarPersona = (id) => {
    setPersonas(personas.filter((persona) => persona.id !== id));
  };

  return (
    <div>
      <h1 className="person-list-heading">Lista de personas</h1>
      <Formulario onSubmit={agregarPersona} />
      <Tabla data={personas} onDelete={eliminarPersona} />
    </div>
  );
};

export default ListaPersonas;