import React, { useState } from 'react';
import './PersonList.css';


function ListaPersonas() {
  const [personas, setPersonas] = useState([]);
  
  const agregarPersona = (persona) => {
  setPersonas([...personas, persona]);
  }
  
  
  }
  
  export default ListaPersonas;