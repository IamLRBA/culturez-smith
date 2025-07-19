import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import './Underwear.css';

const Underwear = () => {
  const [activeSection, setActiveSection] = useState(null);

  const underwearCategories = [
    {
      id: 1,
      name: 'Boxers',
      images: Array(10).fill().map((_, i) => `/images/products/underwear/boxers-${i+1}.jpg`)
    },
    {
      id: 2,
      name: 'Singlets',
      images: Array(10).fill().map((_, i) => `/images/products/underwear/singlets-${i+1}.jpg`)
    },
    {
      id: 3,
      name: 'Socks',
      images: Array(10).fill().map((_, i) => `/images/products/underwear/socks-${i+1}.jpg`)
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="underwear-page">
      <div className="underwear-hero">
        <h1 className="underwear-hero-title">
          <span className="highlight-text">Underwear</span>
        </h1>
        <p className="underwear-hero-subtitle">
          Premium comfort with our high-quality underwear collection
        </p>
      </div>

      <div className="underwear-sections">
        {underwearCategories.map((category) => (
          <div key={category.id} className="underwear-section">
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

      <div className="underwear-cta">
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

export default Underwear;