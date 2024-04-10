import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantityLarge, setQuantityLarge] = useState('');
  const [quantityMedium, setQuantityMedium] = useState('');
  const [quantitySmall, setQuantitySmall] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      price,
      quantity: { large: quantityLarge, medium: quantityMedium, small: quantitySmall }
    };
    onAddProduct(product);
    setName('');
    setDescription('');
    setPrice('');
    setQuantityLarge('');
    setQuantityMedium('');
    setQuantitySmall('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity - Large" value={quantityLarge} onChange={(e) => setQuantityLarge(e.target.value)} />
      <input type="number" placeholder="Quantity - Medium" value={quantityMedium} onChange={(e) => setQuantityMedium(e.target.value)} />
      <input type="number" placeholder="Quantity - Small" value={quantitySmall} onChange={(e) => setQuantitySmall(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
