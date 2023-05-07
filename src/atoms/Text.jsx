import React from 'react';
import './Text.css';

const Text = (props) => {
  const { text } = props;
  return (
    <p className="text">
      {text}
    </p>
  );
};

export default Text;
