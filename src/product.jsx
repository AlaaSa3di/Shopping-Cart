import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import axios from 'axios';
import './App.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://67a3cb1831d0d3a6b784a380.mockapi.io/product')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;