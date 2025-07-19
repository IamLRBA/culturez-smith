import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import './ProductSlider.css';

const ProductSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="product-slider-container">
      <div className="slider-wrapper">
        <button 
          className="slider-arrow prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>

        <div className="slider">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`slider-item ${index === currentIndex ? 'active' : ''}`}
              initial={{ scale: 0.9 }}
              animate={{ 
                scale: index === currentIndex ? 1.1 : 0.9,
                opacity: index === currentIndex ? 1 : 0.7
              }}
              transition={{ duration: 0.3 }}
              onClick={() => openImage(index)}
            >
              <img 
                src={image} 
                alt={`Product ${index + 1}`} 
                className="slider-image"
              />
            </motion.div>
          ))}
        </div>

        <button 
          className="slider-arrow next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="product-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="modal-content">
              <button 
                className="modal-close"
                onClick={closeImage}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="modal-main-image">
                <img 
                  src={images[selectedImage]} 
                  alt={`Selected product`}
                />
              </div>

              <div className="modal-thumbnails">
                {[selectedImage, (selectedImage + 1) % images.length, (selectedImage + 2) % images.length].map((index) => (
                  <div 
                    key={index}
                    className="modal-thumbnail"
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={images[index]} 
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              <div className="modal-info">
                <h3>Product Title</h3>
                <p className="modal-price">$49.99</p>
                <button className="modal-add-to-cart">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductSlider;