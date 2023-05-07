import React from 'react';
import './Input.css'; // importar archivo CSS personalizado

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor={name}>{label}</label>
      <input
        className="input"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
