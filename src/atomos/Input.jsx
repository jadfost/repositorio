import React from 'react';
import './Input.css';

const Input = ({ etiqueta, nombre, tipo, valor, onChange }) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor={nombre}>{etiqueta}</label>
      <input
        className="input"
        type={tipo}
        id={nombre}
        name={nombre}
        value={valor}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;