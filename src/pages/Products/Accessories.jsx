import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import './Accessories.css';

const Accessories = () => {
  const [activeSection, setActiveSection] = useState(null);

  const accessoryCategories = [
    {
      id: 1,
      name: 'Bags',
      images: Array(10).fill().map((_, i) => `/images/products/accessories/bags-${i+1}.jpg`)
    },
    {
      id: 2,
      name: 'Eyewear',
      images: Array(10).fill().map((_, i) => `/images/products/accessories/eyewear-${i+1}.jpg`)
    },
    {
      id: 3,
      name: 'Headwear',
      images: Array(10).fill().map((_, i) => `/images/products/accessories/headwear-${i+1}.jpg`)
    },
    {
      id: 4,
      name: 'Jewelry',
      images: Array(10).fill().map((_, i) => `/images/products/accessories/jewelry-${i+1}.jpg`)
    },
    {
      id: 5,
      name: 'Literature',
      images: Array(10).fill().map((_, i) => `/images/products/accessories/literature-${i+1}.jpg`)
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="accessories-page">
      <div className="accessories-hero">
        <h1 className="accessories-hero-title">
          <span className="highlight-text">Accessories</span>
        </h1>
        <p className="accessories-hero-subtitle">
          Complete your look with our curated selection of premium accessories
        </p>
      </div>

      <div className="accessories-sections">
        {accessoryCategories.map((category) => (
          <div key={category.id} className="accessories-section">
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

      <div className="accessories-cta">
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

export default Accessories;