import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import './Bottoms.css';

const Bottoms = () => {
  const [activeSection, setActiveSection] = useState(null);

  const bottomCategories = [
    {
      id: 1,
      name: 'Shorts',
      subcategories: [
        { name: 'Cargo', images: Array(10).fill().map((_, i) => `/images/products/bottoms/shorts/cargo-${i+1}.jpg`) },
        { name: 'Jorts', images: Array(10).fill().map((_, i) => `/images/products/bottoms/shorts/jorts-${i+1}.jpg`) },
        { name: 'Sweats', images: Array(10).fill().map((_, i) => `/images/products/bottoms/shorts/sweats-${i+1}.jpg`) },
        { name: 'Textured', images: Array(10).fill().map((_, i) => `/images/products/bottoms/shorts/textured-${i+1}.jpg`) },
        { name: 'Windbreaker', images: Array(10).fill().map((_, i) => `/images/products/bottoms/shorts/windbreaker-${i+1}.jpg`) }
      ]
    },
    {
      id: 2,
      name: 'Trousers',
      subcategories: [
        { name: 'Cargo', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/cargo-${i+1}.jpg`) },
        { name: 'Denim', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/denim-${i+1}.jpg`) },
        { name: 'Gentle', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/gentle-${i+1}.jpg`) },
        { name: 'Joggers', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/joggers-${i+1}.jpg`) },
        { name: 'Leather', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/leather-${i+1}.jpg`) },
        { name: 'Textured', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/textured-${i+1}.jpg`) },
        { name: 'Windbreaker', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/windbreaker-${i+1}.jpg`) },
        { name: 'Workwear', images: Array(10).fill().map((_, i) => `/images/products/bottoms/trousers/workwear-${i+1}.jpg`) }
      ]
    }
  ];

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <div className="bottoms-page">
      <div className="bottoms-hero">
        <h1 className="bottoms-hero-title">
          <span className="highlight-box">Bottoms</span>
        </h1>
        <p className="bottoms-hero-subtitle">
          Complete your look with our premium selection of shorts and trousers
        </p>
      </div>

      <div className="bottoms-sections">
        {bottomCategories.map((category) => (
          <div key={category.id} className="bottoms-section">
            <h2 className="bottoms-category-title">{category.name}</h2>
            
            {category.subcategories.map((subcategory, index) => (
              <div key={index} className="bottoms-subsection">
                <div className="subsection-header">
                  <div className="subsection-title-container">
                    <h3 className="subsection-title">{subcategory.name}</h3>
                    <img 
                      src={subcategory.images[0]} 
                      alt={subcategory.name} 
                      className="subsection-title-image"
                    />
                  </div>
                  <button 
                    className="toggle-subsection-btn"
                    onClick={() => toggleSection(`${category.id}-${index}`)}
                  >
                    {activeSection === `${category.id}-${index}` ? 'Minimize Slider' : 'Click Here To View Products'}
                  </button>
                </div>

                {activeSection === `${category.id}-${index}` && (
                  <ProductSlider images={subcategory.images} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="bottoms-cta">
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

export default Bottoms;