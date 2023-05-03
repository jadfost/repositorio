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
  
  
  }
  
  export default ListaPersonas;