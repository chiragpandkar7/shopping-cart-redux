import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice.js';

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    };
    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    alert(`Added ${product.title} to the cart`);
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', padding: '20px' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClickFunction={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
