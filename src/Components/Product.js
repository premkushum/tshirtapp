import React, { useContext } from 'react';
import { QuantityContext } from './QuantityContext';

const Product = ({ name, description, price }) => {
  const { quantity, setQuantity } = useContext(QuantityContext);

  const handleBuy = (size) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [size]: prevQuantity[size] + 1
    }));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Quantity - Large: {quantity.large}</p>
      <p>Quantity - Medium: {quantity.medium}</p>
      <p>Quantity - Small: {quantity.small}</p>
      <button onClick={() => handleBuy('large')}>Buy Large</button>
      <button onClick={() => handleBuy('medium')}>Buy Medium</button>
      <button onClick={() => handleBuy('small')}>Buy Small</button>
    </div>
  );
};

export default Product;
