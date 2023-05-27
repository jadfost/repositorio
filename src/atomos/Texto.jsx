import React from 'react';
import './Texto.css';

const Texto = (props) => {
  const { texto } = props;
  return (
    <p className="text">
      {texto}
    </p>
  );
};

export default Texto;