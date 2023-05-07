import React from 'react';

const Input = (props) => {
  const { label, name, type, value, onChange } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
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
