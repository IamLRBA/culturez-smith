import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import './ShirtsAndTees.css';

const ShirtsAndTees = () => {
  const [activeSection, setActiveSection] = useState(null);

  const shirtCategories = [
    {
      id: 1,
      name: 'Casual',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/casual-${i+1}.jpg`)
    },
    {
      id: 2,
      name: 'Checked',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/checked-${i+1}.jpg`)
    },
    {
      id: 3,
      name: 'Denim',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/denim-${i+1}.jpg`)
    },
    {
      id: 4,
      name: 'Gentle',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/gentle-${i+1}.jpg`)
    },
    {
      id: 5,
      name: 'Polo',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/polo-${i+1}.jpg`)
    },
    {
      id: 6,
      name: 'Sports',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/sports-${i+1}.jpg`)
    },
    {
      id: 7,
      name: 'Textured',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/textured-${i+1}.jpg`)
    },
    {
      id: 8,
      name: 'Vintage',
      images: Array(10).fill().map((_, i) => `/images/products/shirts/vintage-${i+1}.jpg`)
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="shirts-and-tees-page">
      <div className="shirts-and-tees-hero">
        <h1 className="shirts-and-tees-hero-title">
          <span className="highlight-text">Shirts</span> and <span className="highlight-box">Tees</span>
        </h1>
        <p className="shirts-and-tees-hero-subtitle">
          Explore our collection of premium shirts and t-shirts for every occasion
        </p>
      </div>

      <div className="shirts-and-tees-sections">
        {shirtCategories.map((category) => (
          <div key={category.id} className="shirts-and-tees-section">
            <div className="section-header">
              <div className="section-title-container">
                <h2 className="section-title">{category.name}</h2>
                <img 
                  src={category.images[0]} 
                  alt={category.name} 
                  className="section-title-image"
                />
              </div>
              <button 
                className="toggle-section-btn"
                onClick={() => toggleSection(category.id)}
              >
                {activeSection === category.id ? 'Minimize Slider' : 'Click Here To View Products'}
              </button>
            </div>

            {activeSection === category.id && (
              <ProductSlider images={category.images} />
            )}
          </div>
        ))}
      </div>

      <div className="shirts-and-tees-cta">
        <Link to="/products/order" className="cta-button">
          Place Your Order
        </Link>
        <Link to="/contact" className="cta-button secondary">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ShirtsAndTees;