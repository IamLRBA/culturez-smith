import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const productCategories = [
    {
      id: 1,
      name: 'Shirts and Tees',
      path: '/products/shirts-and-tees',
      image: '/images/products/shirts-tees.jpg'
    },
    {
      id: 2,
      name: 'Bottoms',
      path: '/products/bottoms',
      image: '/images/products/bottoms.jpg'
    },
    {
      id: 3,
      name: 'Coats and Jackets',
      path: '/products/coats-and-jackets',
      image: '/images/products/coats-jackets.jpg'
    },
    {
      id: 4,
      name: 'Footwear',
      path: '/products/footwear',
      image: '/images/products/footwear.jpg'
    },
    {
      id: 5,
      name: 'Accessories',
      path: '/products/accessories',
      image: '/images/products/accessories.jpg'
    },
    {
      id: 6,
      name: 'Underwear',
      path: '/products/underwear',
      image: '/images/products/underwear.jpg'
    },
    {
      id: 7,
      name: 'Exhibition',
      path: '/products/exhibition',
      image: '/images/products/exhibition.jpg'
    }
  ];

  return (
    <div className="products-page">
      <div className="products-hero">
        <h1 className="products-hero-title">
          Our <span className="highlight-text">Products</span>
        </h1>
        <p className="products-hero-subtitle">
          Discover the Culturez collection of premium clothing and accessories
        </p>
      </div>

      <div className="products-grid">
        {productCategories.map((category) => (
          <Link to={category.path} key={category.id} className="product-category-card">
            <div className="product-category-image-container">
              <img 
                src={category.image} 
                alt={category.name} 
                className="product-category-image"
              />
            </div>
            <h3 className="product-category-title">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;