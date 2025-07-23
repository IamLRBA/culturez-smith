import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../../components/ProductCard';
import { Link } from 'react-router-dom';
import './Culturez.css';

const Culturez = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('mobileMoney');
  const [bubbles, setBubbles] = useState([]);
  const cartRef = useRef(null);
  const pageRef = useRef(null);

  // Product data from all categories
  const products = [
    // Shirts and Tees
    {
      id: 1,
      title: 'T-Shirt',
      category: 'Shirts and T-Shirts',
      price: 29.99,
      images: Array(4).fill().map((_, i) => `/images/products/shirts/casual-${i+1}.jpg`)
    },
    {
      id: 2,
      title: 'Shirt',
      category: 'Shirts and T-Shirts',
      price: 39.99,
      images: Array(4).fill().map((_, i) => `/images/products/shirts/vintage-title.jpg`)
    },
    // Pants
    {
      id: 3,
      title: 'Shorts',
      category: 'Pants',
      price: 49.99,
      images: Array(4).fill().map((_, i) => `/images/culturez/pants.jpg`)
    },
    {
      id: 4,
      title: 'Trouser',
      category: 'Pants',
      price: 59.99,
      images: Array(4).fill().map((_, i) => `/images/products/bottoms/gentle-1.jpg`)
    },
    // Sweaters and Hoodies
    {
      id: 5,
      title: 'Sweater',
      category: 'Sweaters and Hoodies',
      price: 129.99,
      images: Array(4).fill().map((_, i) => `/images/products/coats/sweater-1.jpg`)
    },
    {
      id: 6,
      title: 'Hoodie',
      category: 'Sweaters and Hoodies',
      price: 89.99,
      images: Array(4).fill().map((_, i) => `/images/products/coats/hoodie-title.jpg`)
    }
  ];

  useEffect(() => {
    const newBubbles = [];
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 40 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 10
      });
    }
    setBubbles(newBubbles);
  }, []);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const addToCart = (product, size, color) => {
    const cartItem = {
      ...product,
      size,
      color,
      finalPrice: product.price
    };
    
    setCart([...cart, cartItem]);
    setIsCartOpen(true);
    setTimeout(() => {
      cartRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.finalPrice, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setOrderDetails({
      items: [...cart],
      total: calculateTotal(),
      date: new Date().toLocaleString(),
      orderId: `CZ-${Date.now()}`
    });
    setCheckoutOpen(true);
  };

  const handlePayment = () => {
    const whatsappMessage = encodeURIComponent(
      `New Clothing Purchase\n\nOrder ID: ${orderDetails.orderId}\n\nItems:\n${orderDetails.items.map(item => `- ${item.title} (${item.category}) - Size: ${item.size}, Color: ${item.color} - $${item.finalPrice}`).join('\n')}\n\nTotal: $${orderDetails.total}\n\nDate: ${orderDetails.date}`
    );
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${whatsappMessage}`, '_blank');
    setCheckoutOpen(false);
    setCart([]);
  };

  return (
    <div className="culturez-page" ref={pageRef}>
      <div className="culturez-background"></div>
      
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="culturez-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
          }}
          initial={{ bottom: -100 }}
          animate={{ bottom: '100%' }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
      ))}

      <section className="culturez-section">
        <div className="culturez-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="culturez-header"
          >
            <motion.h2 
              className="culturez-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.span
                className="culturez-highlight"
                initial={{ color: '#1b741b' }}
                animate={{
                  color: ['#1b741b', '#3a9e3a', '#5cc75c', '#3a9e3a', '#1b741b'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                Our
              </motion.span> Products
            </motion.h2>
            <p className="culturez-subtitle">
              Select items from our collection and place your order
            </p>
            <div className="culturez-cta-container">
              <Link to="/about" className="culturez-about-cta-link">About Culturez®</Link>
              <Link to="/contact" className="culturez-contact-cta-link">Contact Us</Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="culturez-category-filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map(category => (
              <motion.button
                key={category}
                className={`culturez-category-filter ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Products' : category}
              </motion.button>
            ))}
          </motion.div>
          
          <div className="culturez-products-grid">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
                onRemoveFromCart={() => removeFromCart(product.id)}
                isInCart={cart.some(item => item.id === product.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="culturez-cart-section" ref={cartRef}>
        <div className="culturez-container">
          <AnimatePresence>
            {(isCartOpen || cart.length > 0) && (
              <motion.div 
                className="culturez-cart-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="culturez-cart-header">
                  <h3>Your Cart ({cart.length})</h3>
                  {isCartOpen && (
                    <button 
                      className="culturez-cart-close"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
                
                <div className="culturez-cart-items">
                  {cart.length > 0 ? (
                    <>
                      {cart.map(item => (
                        <motion.div 
                          key={`${item.id}-${item.size}-${item.color}`} 
                          className="culturez-cart-item"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="culturez-cart-item-image">
                            <img src={item.images[0]} alt={item.title} />
                          </div>
                          <div className="culturez-cart-item-info">
                            <h4>{item.title}</h4>
                            <p>{item.category} • Size: {item.size}, Color: {item.color}</p>
                            <p className="culturez-cart-item-price">${item.finalPrice.toFixed(2)}</p>
                          </div>
                          <button 
                            className="culturez-remove-from-cart"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </button>
                        </motion.div>
                      ))}
                      
                      <div className="culturez-cart-navigation">
                        <button 
                          className="culturez-continue-shopping"
                          onClick={() => {
                            setIsCartOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          <FaArrowLeft /> Continue Shopping
                        </button>
                        
                        <div className="culturez-cart-total">
                          <span>Total:</span>
                          <span>${calculateTotal()}</span>
                        </div>
                        
                        <button 
                          className="culturez-checkout-btn"
                          onClick={handleCheckout}
                        >
                          Proceed to Checkout <FaArrowRight />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="culturez-cart-empty">
                      <p>Your cart is empty</p>
                      <button 
                        className="culturez-continue-shopping"
                        onClick={() => setIsCartOpen(false)}
                      >
                        <FaArrowLeft /> Browse Products
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      <div className="culturez-bottom-cta">
        <Link to="/shop" className="culturez-shop-link">
          Purchase Our Other Products <FaArrowRight />
        </Link>
      </div>
      
      {cart.length > 0 && !isCartOpen && (
        <motion.button 
          className="culturez-cart-button"
          onClick={() => {
            setIsCartOpen(true);
            setTimeout(() => {
              cartRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaShoppingCart />
          <span className="culturez-cart-count">{cart.length}</span>
        </motion.button>
      )}
      
      <AnimatePresence>
        {checkoutOpen && (
          <motion.div 
            className="culturez-checkout-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="culturez-checkout-content">
              <button 
                className="culturez-checkout-close"
                onClick={() => setCheckoutOpen(false)}
              >
                <FaTimes />
              </button>
              
              <div className="culturez-checkout-scrollable">
                <h3>Complete Your Purchase</h3>
                
                <div className="culturez-summary">
                  <h4>Order Summary</h4>
                  <ul>
                    {orderDetails.items.map(item => (
                      <li key={`${item.id}-${item.size}-${item.color}`}>
                        <div>
                          <span>{item.title}</span>
                          <span className="culturez-item-details">Size: {item.size}, Color: {item.color}</span>
                        </div>
                        <span>${item.finalPrice.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="culturez-total">
                    <span>Total:</span>
                    <span>${orderDetails.total}</span>
                  </div>
                </div>
                
                <div className="culturez-payment-methods">
                  <h4>Payment Method</h4>
                  <div className="culturez-payment-options">
                    <label className={paymentMethod === 'mobileMoney' ? 'active' : ''}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="mobileMoney" 
                        checked={paymentMethod === 'mobileMoney'}
                        onChange={() => setPaymentMethod('mobileMoney')}
                      />
                      <span>Mobile Money</span>
                    </label>
                    <label className={paymentMethod === 'card' ? 'active' : ''}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="card" 
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                      />
                      <span>Credit/Debit Card</span>
                    </label>
                  </div>
                  
                  {paymentMethod === 'mobileMoney' && (
                    <div className="culturez-mobile-money">
                      <p>Pay via Mobile Money to:</p>
                      <div className="culturez-merchant-info">
                        <div>
                          <span>Merchant Code:</span>
                          <strong>CULTUREZ</strong>
                        </div>
                        <div>
                          <span>Phone Number:</span>
                          <strong>+256 XXX XXX XXX</strong>
                        </div>
                      </div>
                      <p className="culturez-payment-note">
                        After payment, send the transaction details to our WhatsApp for verification.
                      </p>
                    </div>
                  )}
                  
                  {paymentMethod === 'card' && (
                    <div className="culturez-card-payment">
                      <div className="culturez-card-form">
                        <input type="text" placeholder="Card Number" />
                        <div className="culturez-card-details">
                          <input type="text" placeholder="MM/YY" />
                          <input type="text" placeholder="CVV" />
                        </div>
                        <input type="text" placeholder="Cardholder Name" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="culturez-checkout-buttons">
                <button 
                  className="culturez-cancel-payment"
                  onClick={() => setCheckoutOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="culturez-confirm-payment"
                  onClick={handlePayment}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Culturez;