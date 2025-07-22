import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../../components/ProductCard';
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
    <div className="order-page" ref={pageRef}>
      <div className="order-background"></div>
      
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="order-bubble"
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

      <section className="order-section">
        <div className="order-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-header"
          >
            <h2 className="order-title">Culturez Products</h2>
            <p className="order-subtitle">
              Select items from our collection and place your order
            </p>
          </motion.div>
          
          <motion.div 
            className="order-category-filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map(category => (
              <button
                key={category}
                className={`order-category-filter ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </motion.div>
          
          <div className="order-products-grid">
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
      
      <section className="order-cart-section" ref={cartRef}>
        <div className="order-container">
          <AnimatePresence>
            {(isCartOpen || cart.length > 0) && (
              <motion.div 
                className="order-cart-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="order-cart-header">
                  <h3>Your Cart ({cart.length})</h3>
                  {isCartOpen && (
                    <button 
                      className="order-cart-close"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
                
                <div className="order-cart-items">
                  {cart.length > 0 ? (
                    <>
                      {cart.map(item => (
                        <div key={`${item.id}-${item.size}-${item.color}`} className="order-cart-item">
                          <div className="order-cart-item-image">
                            <img src={item.images[0]} alt={item.title} />
                          </div>
                          <div className="order-cart-item-info">
                            <h4>{item.title}</h4>
                            <p>{item.category} • Size: {item.size}, Color: {item.color}</p>
                            <p className="order-cart-item-price">${item.finalPrice.toFixed(2)}</p>
                          </div>
                          <button 
                            className="order-remove-from-cart"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      
                      <div className="order-cart-navigation">
                        <button 
                          className="order-continue-shopping"
                          onClick={() => {
                            setIsCartOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          <FaArrowLeft /> Continue Shopping
                        </button>
                        
                        <div className="order-cart-total">
                          <span>Total:</span>
                          <span>${calculateTotal()}</span>
                        </div>
                        
                        <button 
                          className="order-checkout-btn"
                          onClick={handleCheckout}
                        >
                          Proceed to Checkout <FaArrowRight />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="order-cart-empty">
                      <p>Your cart is empty</p>
                      <button 
                        className="order-continue-shopping"
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
      
      {cart.length > 0 && !isCartOpen && (
        <motion.button 
          className="order-cart-button"
          onClick={() => {
            setIsCartOpen(true);
            setTimeout(() => {
              cartRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaShoppingCart />
          <span className="order-cart-count">{cart.length}</span>
        </motion.button>
      )}
      
      <AnimatePresence>
        {checkoutOpen && (
          <motion.div 
            className="order-checkout-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="order-checkout-content">
              <button 
                className="order-checkout-close"
                onClick={() => setCheckoutOpen(false)}
              >
                <FaTimes />
              </button>
              
              <div className="order-checkout-scrollable">
                <h3>Complete Your Purchase</h3>
                
                <div className="order-summary">
                  <h4>Order Summary</h4>
                  <ul>
                    {orderDetails.items.map(item => (
                      <li key={`${item.id}-${item.size}-${item.color}`}>
                        <div>
                          <span>{item.title}</span>
                          <span className="order-item-details">Size: {item.size}, Color: {item.color}</span>
                        </div>
                        <span>${item.finalPrice.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="order-total">
                    <span>Total:</span>
                    <span>${orderDetails.total}</span>
                  </div>
                </div>
                
                <div className="order-payment-methods">
                  <h4>Payment Method</h4>
                  <div className="order-payment-options">
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
                    <div className="order-mobile-money">
                      <p>Pay via Mobile Money to:</p>
                      <div className="order-merchant-info">
                        <div>
                          <span>Merchant Code:</span>
                          <strong>CULTUREZ</strong>
                        </div>
                        <div>
                          <span>Phone Number:</span>
                          <strong>+256 XXX XXX XXX</strong>
                        </div>
                      </div>
                      <p className="order-payment-note">
                        After payment, send the transaction details to our WhatsApp for verification.
                      </p>
                    </div>
                  )}
                  
                  {paymentMethod === 'card' && (
                    <div className="order-card-payment">
                      <div className="order-card-form">
                        <input type="text" placeholder="Card Number" />
                        <div className="order-card-details">
                          <input type="text" placeholder="MM/YY" />
                          <input type="text" placeholder="CVV" />
                        </div>
                        <input type="text" placeholder="Cardholder Name" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="order-checkout-buttons">
                <button 
                  className="order-cancel-payment"
                  onClick={() => setCheckoutOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="order-confirm-payment"
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