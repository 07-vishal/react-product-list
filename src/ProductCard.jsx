import React from 'react';

const ProductCard = ({ name, description, price }) => (
  <div className="product-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <div className="price">{price}</div>
  </div>
);

export default ProductCard;
