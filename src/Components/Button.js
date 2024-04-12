import React, { useContext } from 'react';
import { QuantityContext } from './QuantityContext';

const Button = ({ onClick, label }) => {
  const { quantity } = useContext(QuantityContext);

  return (
    <button onClick={onClick}>{label} ({quantity.large + quantity.medium + quantity.small})</button>
  );
};
export default Button;