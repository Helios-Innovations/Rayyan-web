import React from 'react';
import './prod.css';
import rcj4 from '../image/Vehicles/rcj4.jpg'
import rcj2 from '../image/Vehicles/rcj2.jpg'
import rcj1 from '../image/Vehicles/rcj1.jpg'

import Count from '../Counter/Count';

const products = [
  {
    name: 'Three1',
    price: '$10',
    picture: rcj4,
    description: 'This is a description of product 1.',
  },
  {
    name: 'Three2',
    price: '$20',
    picture: rcj1,
    description: 'This is a description of product 2.',
  },
  {
    name: 'Three3',
    price: '$30',
    picture: rcj2,
    description: 'This is a description of product 3.',
  },
  {
    "name": "Three4",
    "price": "$25",
    "picture": rcj1,
    "description": "Widget for all your needs."
  }
  
];

function Product3() {

  const handleBook = (productName) => {
  window.location.href = `/booking/${productName}`;
        };

  return (
     <>
    <div className="app-alpha">
      <h1>Products List</h1>
      <div className="grid-container">
        {products.map((product, index) => (
          <div key={index} className="card">
            <img src={product.picture} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
            <button onClick={() => handleBook(product.name)}>Enquire</button>
          </div>
        ))}
      </div>
    </div>
          <Count/>   
    </>      
  );
}

export default Product3;
