import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import './CoatsAndJackets.css';

const CoatsAndJackets = () => {
  const [activeSection, setActiveSection] = useState(null);

  const coatCategories = [
    {
      id: 1,
      name: 'Bomber and Varsity',
      images: Array(10).fill().map((_, i) => `/images/products/coats/bomber-${i+1}.jpg`)
    },
    {
      id: 2,
      name: 'Cardigan',
      images: Array(10).fill().map((_, i) => `/images/products/coats/cardigan-${i+1}.jpg`)
    },
    {
      id: 3,
      name: 'Denim',
      images: Array(10).fill().map((_, i) => `/images/products/coats/denim-${i+1}.jpg`)
    },
    {
      id: 4,
      name: 'Leather',
      images: Array(10).fill().map((_, i) => `/images/products/coats/leather-${i+1}.jpg`)
    },
    {
      id: 5,
      name: 'Puffer',
      images: Array(10).fill().map((_, i) => `/images/products/coats/puffer-${i+1}.jpg`)
    },
    {
      id: 6,
      name: 'Workwear',
      images: Array(10).fill().map((_, i) => `/images/products/coats/workwear-${i+1}.jpg`)
    },
    {
      id: 7,
      name: 'Windbreaker',
      images: Array(10).fill().map((_, i) => `/images/products/coats/windbreaker-${i+1}.jpg`)
    },
    {
      id: 8,
      name: 'Vests',
      images: Array(10).fill().map((_, i) => `/images/products/coats/vests-${i+1}.jpg`)
    },
    {
      id: 9,
      name: 'Sweater',
      images: Array(10).fill().map((_, i) => `/images/products/coats/sweater-${i+1}.jpg`)
    },
    {
      id: 10,
      name: 'Jacket',
      images: Array(10).fill().map((_, i) => `/images/products/coats/jacket-${i+1}.jpg`)
    },
    {
      id: 11,
      name: 'Hoodie',
      images: Array(10).fill().map((_, i) => `/images/products/coats/hoodie-${i+1}.jpg`)
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="coats-and-jackets-page">
      <div className="coats-and-jackets-hero">
        <h1 className="coats-and-jackets-hero-title">
          <span className="highlight-text">Coats</span> and <span className="highlight-box">Jackets</span>
        </h1>
        <p className="coats-and-jackets-hero-subtitle">
          Stay warm and stylish with our premium outerwear collection
        </p>
      </div>

      <div className="coats-and-jackets-sections">
        {coatCategories.map((category) => (
          <div key={category.id} className="coats-and-jackets-section">
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

      <div className="coats-and-jackets-cta">
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

export default CoatsAndJackets;