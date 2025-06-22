import React, { useState } from 'react';
import './index.css';
import ProductCard from './ProductCard';
import { products } from './data';

const App = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>🚀 Cosmic Product Hub</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <p className="not-found">✨ No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
