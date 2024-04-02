import React from 'react';

const Button = ({ onClick, label, quantity }) => {
  return (
    <button onClick={onClick}>{label} ({quantity})</button>
  );
};

export default Button;
