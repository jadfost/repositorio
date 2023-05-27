import React, { useState } from 'react';
import Formulario from '../moleculas/Formulario';
import Tabla from '../moleculas/Tabla';
import './ListaPersonas.css';

const ListaPersonas = () => {
  const [personas, setPersonas] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarPersona = (persona) => {
    setPersonas([...personas, { ...persona, id: Date.now() }]);
  };

  const eliminarPersona = (id) => {
    setPersonas(personas.filter((persona) => persona.id !== id));
  };

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div>
      <h1 className="person-list-heading">Lista de personas</h1>
      <button className={`button-toggle ${mostrarFormulario ? 'show' : ''}`} onClick={toggleFormulario}>
       + AGREGAR NUEVA PERSONA
      </button>
      {mostrarFormulario && <Formulario onSubmit={agregarPersona} />}
      <Tabla data={personas} onDelete={eliminarPersona} />
    </div>
  );
};

export default ListaPersonas;