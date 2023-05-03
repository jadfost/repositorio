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
  
  
  }
  
  export default ListaPersonas;