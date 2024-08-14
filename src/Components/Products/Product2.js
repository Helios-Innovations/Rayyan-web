import React from 'react';
import './prod.css';
import motor1 from '../image/Vehicles/motor1.png'
import motor2 from '../image/Vehicles/motor2.png'
import scooty2 from '../image/Vehicles/scooty2.png'
import scooty1 from '../image/Vehicles/sccoty3.png'

import Count from '../Counter/Count';

const products = [
  {
    name: 'Product 1',
    price: '$10',
    picture: motor1,
    description: 'This is a description of product 1.',
  },
  {
    name: 'Product 2',
    price: '$20',
    picture:scooty2,
    description: 'This is a description of product 2.',
  },
  {
    name: 'Product 3',
    price: '$30',
    picture: motor2,
    description: 'This is a description of product 3.',
  },
  {
    "name": "Product 4",
    "price": "$25",
    "picture": scooty1,
    "description": "Widget for all your needs."
  }
  
];

function Product() {

    const handleBook = (productName) => {
  window.location.href = `/${productName}`;
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
            <button onClick={() => handleBook(product.name)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
          <Count/>   
    </>      
  );
}

export default Product;
