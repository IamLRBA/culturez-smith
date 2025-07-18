import React, { useState, useRef, useEffect } from 'react';
import BeatCard from '../../components/BeatCard';
import { FaMusic, FaShoppingCart, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './BeatStore.css';

const BeatStore = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('mobileMoney');
  const [bubbles, setBubbles] = useState([]);
  const [notes, setNotes] = useState([]);
  const cartRef = useRef(null);
  const pageRef = useRef(null);

  const beats = [
    {
      id: 1,
      title: 'Tropical Vibes',
      genre: 'Afrobeat',
      bpm: 112,
      price: 29.99,
      preview: '/audio/beat1-preview.mp3',
      fullVersion: '/audio/beat1-full.mp3',
      image: '/images/beats/beat1.jpg',
      tags: ['afrobeat', 'dance', 'summer']
    },
    {
      id: 2,
      title: 'City Lights',
      genre: 'Hip Hop',
      bpm: 95,
      price: 39.99,
      preview: '/audio/beat2-preview.mp3',
      fullVersion: '/audio/beat2-full.mp3',
      image: '/images/beats/beat2.jpg',
      tags: ['hiphop', 'trap', 'urban']
    },
    {
      id: 3,
      title: 'Soulful Groove',
      genre: 'R&B',
      bpm: 88,
      price: 34.99,
      preview: '/audio/beat3-preview.mp3',
      fullVersion: '/audio/beat3-full.mp3',
      image: '/images/beats/beat3.jpg',
      tags: ['rnb', 'soul', 'chill']
    },
    {
      id: 4,
      title: 'Electric Dreams',
      genre: 'Pop',
      bpm: 120,
      price: 44.99,
      preview: '/audio/beat4-preview.mp3',
      fullVersion: '/audio/beat4-full.mp3',
      image: '/images/beats/beat4.jpg',
      tags: ['pop', 'edm', 'dance']
    },
    {
      id: 5,
      title: 'Dark Alley',
      genre: 'Trap',
      bpm: 140,
      price: 49.99,
      preview: '/audio/beat5-preview.mp3',
      fullVersion: '/audio/beat5-full.mp3',
      image: '/images/beats/beat5.jpg',
      tags: ['trap', 'dark', 'hard']
    },
    {
      id: 6,
      title: 'Island Breeze',
      genre: 'Dancehall',
      bpm: 105,
      price: 29.99,
      preview: '/audio/beat6-preview.mp3',
      fullVersion: '/audio/beat6-full.mp3',
      image: '/images/beats/beat6.jpg',
      tags: ['dancehall', 'reggae', 'summer']
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

    const newNotes = [];
    const noteIcons = ['♪', '♫', '♬', '♩', '♭', '♮'];
    for (let i = 0; i < 10; i++) {
      newNotes.push({
        id: i,
        icon: noteIcons[Math.floor(Math.random() * noteIcons.length)],
        size: Math.random() * 24 + 16,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 25 + 15,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    setNotes(newNotes);
  }, []);

  const genres = ['all', ...new Set(beats.map(beat => beat.genre.toLowerCase()))];

  const filteredBeats = activeFilter === 'all' 
    ? beats 
    : beats.filter(beat => beat.genre.toLowerCase() === activeFilter);

  const addToCart = (beat, licenseType) => {
    const licensePrices = {
      'MP3 Lease': beat.price,
      'WAV Lease': beat.price * 1.5,
      'Trackout Lease': beat.price * 2,
      'Exclusive Rights': beat.price * 5
    };
    
    const cartItem = {
      ...beat,
      licenseType,
      finalPrice: licensePrices[licenseType]
    };
    
    setCart([...cart, cartItem]);
    setIsCartOpen(true);
    setTimeout(() => {
      cartRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const removeFromCart = (beatId) => {
    setCart(cart.filter(item => item.id !== beatId));
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.finalPrice, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setOrderDetails({
      items: [...cart],
      total: calculateTotal(),
      date: new Date().toLocaleString(),
      orderId: `TC-${Date.now()}`
    });
    setCheckoutOpen(true);
  };

  const handlePayment = () => {
    const whatsappMessage = encodeURIComponent(
      `New Beat Purchase\n\nOrder ID: ${orderDetails.orderId}\n\nItems:\n${orderDetails.items.map(item => `- ${item.title} (${item.genre}) - ${item.licenseType} - $${item.finalPrice}`).join('\n')}\n\nTotal: $${orderDetails.total}\n\nDate: ${orderDetails.date}`
    );
    window.open(`https://wa.me/256760316738?text=${whatsappMessage}`, '_blank');
    setCheckoutOpen(false);
    setCart([]);
  };

  const downloadBeat = (beatId) => {
    const beat = beats.find(b => b.id === beatId);
    if (beat) {
      const link = document.createElement('a');
      link.href = beat.fullVersion;
      link.download = `${beat.title.replace(/\s+/g, '_')}_full_version.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="beatstore-page" ref={pageRef}>
      <div className="beatstore-background"></div>
      
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="beatstore-bubble"
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
      
      {notes.map((note) => (
        <motion.div
          key={`note-${note.id}`}
          className="beatstore-note"
          style={{
            fontSize: `${note.size}px`,
            left: `${note.left}%`,
            opacity: note.opacity
          }}
          initial={{ bottom: -50 }}
          animate={{ bottom: '100%' }}
          transition={{
            duration: note.duration,
            delay: note.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {note.icon}
        </motion.div>
      ))}

      <section className="beatstore-section">
        <div className="beatstore-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="beatstore-header"
          >
            <h2 className="beatstore-title">Beat Store</h2>
            <p className="beatstore-subtitle">
              Purchase high-quality beats from our producers
            </p>
            
            <div className="beatstore-ctas">
              <a href="/contact" className="beatstore-cta">
                Need Custom Beats? Contact Us
              </a>
              <a href="/studio" className="beatstore-cta secondary">
                Book Studio Time
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="beatstore-genre-filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {genres.map(genre => (
              <button
                key={genre}
                className={`beatstore-genre-filter ${activeFilter === genre ? 'active' : ''}`}
                onClick={() => setActiveFilter(genre)}
              >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </button>
            ))}
          </motion.div>
          
          <div className="beatstore-beats-grid">
            {filteredBeats.map(beat => (
              <BeatCard 
                key={beat.id} 
                beat={beat} 
                onAddToCart={addToCart}
                onRemoveFromCart={() => removeFromCart(beat.id)}
                isInCart={cart.some(item => item.id === beat.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="beatstore-cart-section" ref={cartRef}>
        <div className="beatstore-container">
          <AnimatePresence>
            {(isCartOpen || cart.length > 0) && (
              <motion.div 
                className="beatstore-cart-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="beatstore-cart-header">
                  <h3>Your Cart ({cart.length})</h3>
                  {isCartOpen && (
                    <button 
                      className="beatstore-cart-close"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
                
                <div className="beatstore-cart-items">
                  {cart.length > 0 ? (
                    <>
                      {cart.map(item => (
                        <div key={`${item.id}-${item.licenseType}`} className="beatstore-cart-item">
                          <div className="beatstore-cart-item-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="beatstore-cart-item-info">
                            <h4>{item.title}</h4>
                            <p>{item.genre} • {item.licenseType}</p>
                            <p className="beatstore-cart-item-price">${item.finalPrice.toFixed(2)}</p>
                          </div>
                          <button 
                            className="beatstore-remove-from-cart"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      
                      <div className="beatstore-cart-navigation">
                        <button 
                          className="beatstore-continue-shopping"
                          onClick={() => {
                            setIsCartOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          <FaArrowLeft /> Continue Shopping
                        </button>
                        
                        <div className="beatstore-cart-total">
                          <span>Total:</span>
                          <span>${calculateTotal()}</span>
                        </div>
                        
                        <button 
                          className="beatstore-checkout-btn"
                          onClick={handleCheckout}
                        >
                          Proceed to Checkout <FaArrowRight />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="beatstore-cart-empty">
                      <FaMusic />
                      <p>Your cart is empty</p>
                      <button 
                        className="beatstore-continue-shopping"
                        onClick={() => setIsCartOpen(false)}
                      >
                        <FaArrowLeft /> Browse Beats
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
          className="beatstore-cart-button"
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
          <span className="beatstore-cart-count">{cart.length}</span>
        </motion.button>
      )}
      
      <AnimatePresence>
        {checkoutOpen && (
          <motion.div 
            className="beatstore-checkout-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="beatstore-checkout-content">
              <button 
                className="beatstore-checkout-close"
                onClick={() => setCheckoutOpen(false)}
              >
                <FaTimes />
              </button>
              
              <div className="beatstore-checkout-scrollable">
                <h3>Complete Your Purchase</h3>
                
                <div className="beatstore-order-summary">
                  <h4>Order Summary</h4>
                  <ul>
                    {orderDetails.items.map(item => (
                      <li key={`${item.id}-${item.licenseType}`}>
                        <div>
                          <span>{item.title}</span>
                          <span className="beatstore-license-type">{item.licenseType}</span>
                        </div>
                        <span>${item.finalPrice.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="beatstore-order-total">
                    <span>Total:</span>
                    <span>${orderDetails.total}</span>
                  </div>
                </div>
                
                <div className="beatstore-payment-methods">
                  <h4>Payment Method</h4>
                  <div className="beatstore-payment-options">
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
                    <div className="beatstore-mobile-money">
                      <p>Pay via Mobile Money to:</p>
                      <div className="beatstore-merchant-info">
                        <div>
                          <span>Merchant Code:</span>
                          <strong>TCMP2023</strong>
                        </div>
                        <div>
                          <span>Phone Number:</span>
                          <strong>+256 760 316 738</strong>
                        </div>
                      </div>
                      <p className="beatstore-payment-note">
                        After payment, send the transaction details to our WhatsApp for verification.
                      </p>
                    </div>
                  )}
                  
                  {paymentMethod === 'card' && (
                    <div className="beatstore-card-payment">
                      <div className="beatstore-card-form">
                        <input type="text" placeholder="Card Number" />
                        <div className="beatstore-card-details">
                          <input type="text" placeholder="MM/YY" />
                          <input type="text" placeholder="CVV" />
                        </div>
                        <input type="text" placeholder="Cardholder Name" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="beatstore-checkout-buttons">
                <button 
                  className="beatstore-cancel-payment"
                  onClick={() => setCheckoutOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="beatstore-confirm-payment"
                  onClick={handlePayment}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {orderDetails && !checkoutOpen && cart.length === 0 && (
          <motion.div 
            className="beatstore-download-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="beatstore-download-content">
              <div className="beatstore-download-scrollable">
                <h3>Thank You for Your Purchase!</h3>
                <p>Your order #{orderDetails.orderId} has been confirmed.</p>
                
                <div className="beatstore-download-beats">
                  <h4>Your Beats:</h4>
                  <ul>
                    {orderDetails.items.map(item => (
                      <li key={item.id}>
                        <div>
                          <span>{item.title}</span>
                          <span className="beatstore-download-license">{item.licenseType}</span>
                        </div>
                        <button 
                          onClick={() => downloadBeat(item.id)}
                          className="beatstore-download-btn"
                        >
                          Download
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="beatstore-receipt">
                  <h4>Receipt</h4>
                  <p>Order ID: {orderDetails.orderId}</p>
                  <p>Date: {orderDetails.date}</p>
                  <p>Total: ${orderDetails.total}</p>
                </div>
              </div>
              
              <button 
                className="beatstore-close-download"
                onClick={() => setOrderDetails(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BeatStore;