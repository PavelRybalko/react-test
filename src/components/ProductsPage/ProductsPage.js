// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
import ProductItem from './ProductItem.js';
import p from 'prop-types';

function ProductsPage({ products, onAddToBasket, basket }) {
  return (
    <>
      <h2>Products today</h2>
      <h3>{JSON.stringify(basket)}</h3>
      <ul>
        {products.map((product, idx) => (
          <ProductItem
            key={idx}
            name={product.name}
            price={product.price}
            onClick={() => onAddToBasket(product)}
          />
        ))}
      </ul>
    </>
  );
}

ProductsPage.propTypes = {
  products: p.arrayOf(p.object).isRequired,
};

export default ProductsPage;
