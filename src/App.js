import React from 'react';
import { QuantityProvider } from './QuantityContext';
import ProductForm from './Components/ProductForm'
import Product from './Components/Product'
import Button from './Components/Button';
import "./App.css"

const App = () => {
  return (
    <QuantityProvider>
      <div>
        <h1>T-Shirt Store</h1>
        <ProductForm />
        <Product
          name="Sample T-Shirt"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={20}
        />
        <Button label="Cart" />
      </div>
    </QuantityProvider>
  );
};

export default App;
