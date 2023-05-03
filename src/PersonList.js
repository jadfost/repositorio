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
  
  
  }
  
  export default ListaPersonas;