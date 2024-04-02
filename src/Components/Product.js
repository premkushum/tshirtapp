import React from 'react';

const Product = ({ name, description, price, quantity, onBuyLarge, onBuyMedium, onBuySmall }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Quantity - Large: {quantity.large}</p>
      <p>Quantity - Medium: {quantity.medium}</p>
      <p>Quantity - Small: {quantity.small}</p>
      <button onClick={onBuyLarge}>Buy Large ({quantity.large})</button>
      <button onClick={onBuyMedium}>Buy Medium ({quantity.medium})</button>
      <button onClick={onBuySmall}>Buy Small ({quantity.small})</button>
    </div>
  );
};

export default Product;
