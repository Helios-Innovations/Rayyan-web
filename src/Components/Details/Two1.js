import React from 'react';
import motor1 from '../image/Vehicles/motor1.png'; // Adjust the path to your image
import './dtl.css';

function Two1() {
  const product = {
    name: 'Product 1',
    price: '$10',
    picture: motor1,
    description: 'This is a description of product 1.',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    specifications: {
      color: 'Black',
      weight: '150kg',
      material: 'Carbon Fibre',
    },
  };

  return (
    <div className="product-container">
      <div className="product-image">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="product-details">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>

        <div className="product-features">
          <h3>Features:</h3>
          <ul>
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="product-specifications">
          <h3>Specifications:</h3>
          <ul>
            <li>Color: {product.specifications.color}</li>
            <li>Weight: {product.specifications.weight}</li>
            <li>Material: {product.specifications.material}</li>
          </ul>
        </div>

        <div className="product-price">
          <p className="new-price">Price: <span>{product.price}</span></p>
        </div>

        
      </div>
    </div>
  );
}

export default Two1;
