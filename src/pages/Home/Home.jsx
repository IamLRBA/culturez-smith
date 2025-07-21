import React, { useState, useEffect } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp, FaEnvelope, FaComment, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import TestimonialCard from '../../components/TestimonialCard';
import './Home.css';

const Home = () => {
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactMethod: 'text'
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const [galleryBubbles] = useState(() => {
    const bubbles = [];
    for (let i = 0; i < 5; i++) {
      bubbles.push({
        id: i,
        size: Math.random() * 200 + 100,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDuration: Math.random() * 60 + 30,
        animationDelay: Math.random() * 10,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    return bubbles;
  });

  const handleImageClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate('/gallery');
    }, 400);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactMethod: 'text'
      });
      
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 2000);
  };

  const culturezItems = [
    {
      id: 1,
      title: 'Signature T-Shirt',
      category: 'T-Shirts',
      cover: '/images/culturez/tshirt.jpg',
      date: '2023-06-15',
      description: 'Our premium cotton t-shirt with unique Culturez by Smith embroidery. Made from 100% organic cotton with a tailored fit for maximum comfort.',
      price: '$39.99',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Olive']
    },
    {
      id: 2,
      title: 'Designer Pants',
      category: 'Pants',
      cover: '/images/culturez/pants.jpg',
      date: '2023-06-10',
      description: 'Slim-fit designer pants with premium stitching and durable fabric. Perfect for both casual and semi-formal occasions.',
      price: '$79.99',
      sizes: ['28-32', '34-38', '40-44'],
      colors: ['Black', 'Khaki', 'Navy']
    },
    {
      id: 3,
      title: 'Premium Sweater',
      category: 'Sweaters',
      cover: '/images/culturez/sweater.jpg',
      date: '2023-05-20',
      description: 'Hand-knitted premium wool sweater with unique patterns. Keeps you warm while maintaining style during colder seasons.',
      price: '$89.99',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Cream', 'Gray', 'Burgundy']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Mayulu Johnson',
      role: 'Fashion Blogger',
      image: '/images/testimonials/client1.jpg',
      text: 'Culturez has completely transformed my wardrobe. The quality and unique designs are unmatched in the market.'
    },
    {
      id: 2,
      name: 'Mugabi Williams',
      role: 'Stylist',
      image: '/images/testimonials/client2.jpg',
      text: 'My clients always ask where I get these amazing pieces. Culturez is my go-to for statement fashion items.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Entrepreneur',
      image: '/images/testimonials/client3.jpg',
      text: 'The attention to detail in every Culturez piece is remarkable. Worth every penny for the quality you get.'
    },
    {
      id: 4,
      name: 'Mason Park',
      role: 'Model',
      image: '/images/testimonials/client4.jpg',
      text: 'I wear Culturez to all my castings. The designs make me stand out and the comfort is unbeatable.'
    },
    {
      id: 5,
      name: 'David Miller',
      role: 'Photographer',
      image: '/images/testimonials/client5.jpg',
      text: 'As someone who works in fashion, I can confidently say Culturez is setting new standards in urban wear.'
    }
  ];

  const handleCardClick = (id) => {
    setExpandedRelease(expandedRelease === id ? null : id);
  };

  const getContactIcon = () => {
    switch(formData.contactMethod) {
      case 'whatsapp': return <FaWhatsapp />;
      case 'email': return <FaEnvelope />;
      default: return <FaComment />;
    }
  };

  return (
    <div className="home-page">
      <section className={`home-hero-section ${heroLoaded ? 'loaded' : ''}`}>
        <div className="home-hero-background"></div>
        <div className="home-hero-overlay"></div>
        <div className="home-hero-content">
          <motion.h1 
            className="home-hero-title"
            initial={{ opacity: 0, y: -50, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
          >
            <span className="home-color-changing">CULTUREZ</span> Fashion Store
          </motion.h1>
          <motion.p 
            className="home-hero-subtitle"
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 80,
              damping: 10
            }}
          >
            Where style meets culture and every piece tells a story
          </motion.p>
          <motion.div 
            className="home-hero-buttons"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              type: "spring",
              stiffness: 90,
              damping: 10
            }}
          >
            <NavLink to="/shop" className="home-shop-btn home-pulse-animate">Visit Our Shop</NavLink>
            <NavLink to="/about" className="home-about-btn home-btn-outline home-pulse-animate">Know Us</NavLink>
          </motion.div>
        </div>
        
        <motion.div 
          className="home-culturez-pivot-image"
          animate={{
            rotateY: [0, 20, 0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="home-pivot-reflection"></div>
          <img src="/images/culturez/logo.png" alt="Culturez" />
        </motion.div>
      </section>

      <section className="home-section home-culturez-section">
        <div className="home-container">
          <h2 className="home-section-title">
            <span className="home-highlighted-border">Culturez</span> by Smith
          </h2>
          <div className="home-releases-grid">
            {culturezItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                className={`home-release-card ${expandedRelease === item.id ? 'expanded' : ''}`}
                onClick={() => handleCardClick(item.id)}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div 
                  className="home-release-card-image"
                  style={{ 
                    backgroundImage: `url(${item.cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="home-release-category">{item.category}</div>
                </div>
                {expandedRelease === item.id && (
                  <div className="home-release-card-details">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="home-product-details">
                      <p><strong>Price:</strong> {item.price}</p>
                      <p><strong>Sizes:</strong> {item.sizes.join(', ')}</p>
                      <p><strong>Colors:</strong> {item.colors.join(', ')}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="home-section-footer">
            <NavLink to="/culturez" className="home-release-btn">
              View Full Collection <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>

      <section className="home-section home-message-section">
        <div className="home-container">
          <h2 className="home-section-title"><span className="home-highlighted-border">Message</span> Us</h2>
          <div className="home-message-container">
            <div className="home-message-background"></div>
            {isSent ? (
              <div className="home-message-success">
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="home-message-form">
                <div className="home-form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="home-form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="home-form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="home-form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    required
                  />
                </div>
                
                <div className="home-contact-method-selector">
                  <h4>Preferred Contact Method:</h4>
                  <div className="home-contact-method-options">
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="text"
                        checked={formData.contactMethod === 'text'}
                        onChange={handleInputChange}
                      />
                      <span>Text</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="whatsapp"
                        checked={formData.contactMethod === 'whatsapp'}
                        onChange={handleInputChange}
                      />
                      <span>WhatsApp</span>
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === 'email'}
                        onChange={handleInputChange}
                      />
                      <span>Email</span>
                    </label>
                  </div>
                </div>

                <button type="submit" className="home-submit-button" disabled={isSending}>
                  {isSending ? (
                    <>
                      <div className="home-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      {getContactIcon()} Send via {formData.contactMethod.charAt(0).toUpperCase() + formData.contactMethod.slice(1)}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="home-section home-gallery-section">
        {galleryBubbles.map((bubble) => (
          <div 
            key={bubble.id}
            className="home-gallery-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              top: `${bubble.top}%`,
              left: `${bubble.left}%`,
              animationDuration: `${bubble.animationDuration}s`,
              animationDelay: `${bubble.animationDelay}s`,
              opacity: bubble.opacity
            }}
          />
        ))}
        <div className="home-container">
          <motion.h2 
            className="home-animated-float-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="home-float-word">Tap To View</span>
            <span className="home-float-word home-highlight-border">Gallery</span>
          </motion.h2>

          <div className="home-pointer-illustration">
            <div
              onClick={handleImageClick}
              aria-label="Go to Gallery Page"
              className="home-pointer-link"
              style={{ cursor: 'pointer' }}
            >
              <motion.img
                src="/images/pointing-down.jpg"
                alt="Pointing down"
                className={`home-pointer-img ${clicked ? 'clicked' : ''}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-testimonials-section">
        <div className="home-container">
          <h2 className="home-section-title"><span className="home-highlighted-border">Client</span> Testimonials</h2>
          <div className="home-testimonials-slider-container">
            <div className="home-testimonials-slider">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-contact-cta-section">
        <div className="home-container">
          <div className="home-contact-cta-content">
            <h2 className="home-section-title">Any Questions?</h2>
            <p>Get in touch with our fashion consultants for personalized recommendations!</p>
            <NavLink to="/contact" className="home-cta-btn">Contact Us</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;