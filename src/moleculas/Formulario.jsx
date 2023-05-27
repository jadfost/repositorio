import React, { useState } from 'react';
import Input from '../atomos/Input';
import Button from '../atomos/Boton';
import './Formulario.css';

const Formulario = (props) => {
  const { onSubmit } = props;
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      numeroIdentificacion: numeroIdentificacion
    });
    setNombre('');
    setApellido('');
    setEdad('');
    setNumeroIdentificacion('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        etiqueta="Nombre"
        nombre="nombre"
        tipo="text"
        valor={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Input
        etiqueta="Apellido"
        nombre="apellido"
        tipo="text"
        valor={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <Input
        etiqueta="Edad"
        nombre="edad"
        tipo="number"
        valor={edad}
        onChange={(e) => setEdad(e.target.value)}
      />
      <Input
        etiqueta="Cédula"
        nombre="numeroIdentificacion"
        tipo="text"
        valor={numeroIdentificacion}
        onChange={(e) => setNumeroIdentificacion(e.target.value)}
      />
      <Button texto="Agregar" type="submit" className="form-button" />
    </form>
  );
};

export default Formulario;