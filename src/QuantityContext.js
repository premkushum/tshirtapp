import React, { createContext, useState, useContext } from 'react';

export const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  const [quantity, setQuantity] = useState({
    large: 0,
    medium: 0,
    small: 0
  });

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};

export const useQuantity = () => {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error('useQuantity must be used within a QuantityProvider');
  }
  return context;
};
