import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from '../Shop/ProductSlider';
import './Exhibition.css';

const Exhibition = () => {
  const [activeSection, setActiveSection] = useState(null);

  const exhibitionCategories = [
    {
      id: 1,
      name: 'Collaborations',
      images: Array(10).fill().map((_, i) => `/images/products/exhibition/collabs-${i+1}.jpg`)
    },
    {
      id: 2,
      name: 'Styled Works',
      images: Array(10).fill().map((_, i) => `/images/products/exhibition/styled-${i+1}.jpg`)
    },
    {
      id: 3,
      name: 'Design Exhibitions',
      images: Array(10).fill().map((_, i) => `/images/products/exhibition/design-${i+1}.jpg`)
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="exhibition-page">
      <div className="exhibition-hero">
        <h1 className="exhibition-hero-title">
          <span className="highlight-text">Exhibition</span>
        </h1>
        <p className="exhibition-hero-subtitle">
          Explore our creative collaborations and design showcases
        </p>
      </div>

      <div className="exhibition-sections">
        {exhibitionCategories.map((category) => (
          <div key={category.id} className="exhibition-section">
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
                {activeSection === category.id ? 'Minimize Slider' : 'Click Here To View Works'}
              </button>
            </div>

            {activeSection === category.id && (
              <ProductSlider images={category.images} />
            )}
          </div>
        ))}
      </div>

      <div className="exhibition-cta">
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

export default Exhibition;