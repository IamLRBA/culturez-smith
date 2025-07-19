import React, { useState } from 'react';
import { FaShoppingCart, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleCartAction = () => {
    if (isInCart) {
      onRemoveFromCart();
    } else {
      onAddToCart(product, selectedSize, selectedColor);
    }
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['Black', 'White', 'Navy', 'Gray', 'Brown', 'Green'];

  return (
    <motion.div 
      className={`product-card ${isInCart ? 'in-cart' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image">
        <img src={product.images[0]} alt={product.title} />
      </div>
      
      <div className="product-info">
        <h3>{product.title}</h3>
        <div className="product-meta">
          <span>{product.category}</span>
        </div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button 
          className={`cart-button ${isInCart ? 'in-cart' : ''}`}
          onClick={handleCartAction}
        >
          {isInCart ? <FaCheck /> : <FaShoppingCart />}
          {isInCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
      
      <div className="product-options-toggle" onClick={toggleOptions}>
        {showOptions ? (
          <>
            <span>Hide Options</span>
            <FaChevronUp />
          </>
        ) : (
          <>
            <span>View Options</span>
            <FaChevronDown />
          </>
        )}
      </div>
      
      <motion.div 
        className="product-options"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: showOptions ? 'auto' : 0,
          opacity: showOptions ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="options-section">
          <h4>Size:</h4>
          <div className="size-options">
            {sizes.map(size => (
              <button
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        <div className="options-section">
          <h4>Color:</h4>
          <div className="color-options">
            {colors.map(color => (
              <button
                key={color}
                className={selectedColor === color ? 'selected' : ''}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color.toLowerCase() }}
                aria-label={color}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;