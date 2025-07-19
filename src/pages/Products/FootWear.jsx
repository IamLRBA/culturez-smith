import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import './Footwear.css';

const Footwear = () => {
  const [activeSection, setActiveSection] = useState(null);

  const footwearCategories = [
    {
      id: 1,
      name: 'Casual',
      images: Array(10).fill().map((_, i) => `/images/products/footwear/casual-${i+1}.jpg`)
    },
    {
      id: 2,
      name: 'Gentle',
      images: Array(10).fill().map((_, i) => `/images/products/footwear/gentle-${i+1}.jpg`)
    },
    {
      id: 3,
      name: 'Streetwear',
      images: Array(10).fill().map((_, i) => `/images/products/footwear/streetwear-${i+1}.jpg`)
    },
    {
      id: 4,
      name: 'Sandals',
      images: Array(10).fill().map((_, i) => `/images/products/footwear/sandals-${i+1}.jpg`)
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="footwear-page">
      <div className="footwear-hero">
        <h1 className="footwear-hero-title">
          <span className="highlight-text">Footwear</span>
        </h1>
        <p className="footwear-hero-subtitle">
          Step out in style with our premium footwear collection
        </p>
      </div>

      <div className="footwear-sections">
        {footwearCategories.map((category) => (
          <div key={category.id} className="footwear-section">
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

      <div className="footwear-cta">
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

export default Footwear;