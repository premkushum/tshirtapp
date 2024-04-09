import React, { useState } from 'react';
import ProductForm from './Components/ProductForm';
import Product from './Components/Product';
import Button from './Components/Button';
import "./App.css"

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const handleAddProduct = async (product) => {
    try {
      const response = await fetch('https://crudcrud.com/api/446974d9c4f24f35806679aa3d266583/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add product');
      }
      setProducts([...products, product]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  

  const handleBuyLarge = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity.large > 0) {
      updatedProducts[index].quantity.large--;
      setProducts(updatedProducts);
      addToCart(updatedProducts[index], 'large');
    }
  };

  const handleBuyMedium = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity.medium > 0) {
      updatedProducts[index].quantity.medium--;
      setProducts(updatedProducts);
      addToCart(updatedProducts[index], 'medium');
    }
  };

  const handleBuySmall = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity.small > 0) {
      updatedProducts[index].quantity.small--;
      setProducts(updatedProducts);
      addToCart(updatedProducts[index], 'small');
    }
  };

  const addToCart = (product, size) => {
    const existingCartItemIndex = cart.findIndex(item => item.name === product.name && item.size === size);
    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { name: product.name, size, quantity: 1, price: product.price }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const calculateTotalCost = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>T-Shirt Store</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <div>
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            description={product.description}
            price={product.price}
            quantity={product.quantity}
            onBuyLarge={() => handleBuyLarge(index)}
            onBuyMedium={() => handleBuyMedium(index)}
            onBuySmall={() => handleBuySmall(index)}
          />
        ))}
      </div>
      <Button onClick={toggleCartModal} label={`Cart (${cart.length})`} />
      {showCartModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleCartModal}>&times;</span>
            <h2>Cart</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <p>{item.name} - {item.size} ({item.quantity})</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <p>Total Cost: ${calculateTotalCost()}</p>
            <Button onClick={() => console.log("Place Order")} label="Place Order" />
            <Button onClick={toggleCartModal} label="Cancel" />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;