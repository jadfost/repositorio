import React, { useState } from 'react';
import './PersonList.css';


function ListaPersonas() {
  const [personas, setPersonas] = useState([]);
  
  const agregarPersona = (persona) => {
  setPersonas([...personas, persona]);
  }
  
  const eliminarPersona = (index) => {
  const nuevasPersonas = [...personas];
  nuevasPersonas.splice(index, 1);
  setPersonas(nuevasPersonas);
  }
  
  const contarAdultos = () => {
  return personas.filter(persona => persona.edad >= 18).length;
  }
  
  const contarMenores = () => {
  return personas.filter(persona => persona.edad < 18).length;
  }
  
  const manejarEnvio = (event) => {
  event.preventDefault();
  const persona = {
  nombre: event.target.nombre.value,
  apellido: event.target.apellido.value,
  edad: parseInt(event.target.edad.value),
  id: event.target.id.value,
  };
  agregarPersona(persona);
  event.target.reset();
  }
  
  return (
  <div className="person-list">
  <h1>Lista de Personas</h1>
  <form onSubmit={manejarEnvio}>
  <input type="text" name="nombre" placeholder="Nombre" />
  <input type="text" name="apellido" placeholder="Apellido" />
  <input type="number" name="edad" placeholder="Edad" />
  <input type="text" name="id" placeholder="Cedula" />
  <button type="submit">Agregar Persona</button>
  </form>
  <ul>
  {personas.map((persona, index) => (
  <li key={persona.id}>
  (CC. {persona.id}) {persona.nombre} {persona.apellido} ({persona.edad} años)
  <button onClick={() => eliminarPersona(index)}>Eliminar</button>
  </li>
  ))}
  </ul>
  
  </div>
  );
  }
  
  export default ListaPersonas;