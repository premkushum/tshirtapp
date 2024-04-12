import React, { createContext, useState, useContext } from 'react';

// Context create karna
export const QuantityContext = createContext();

// Context provider
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

// Custom hook to use QuantityContext
export const useQuantity = () => {
  const context = useContext(QuantityContext);
  if (!context) {
    throw new Error('useQuantity must be used within a QuantityProvider');
  }
  return context;
};
