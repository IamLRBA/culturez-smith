import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { IoCheckmarkDone } from 'react-icons/io5';
import { MdErrorOutline } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [bubbles, setBubbles] = useState([]);
  const [cardColors, setCardColors] = useState({
    location: 'primary',
    phone: 'secondary',
    email: 'primary'
  });

  // Create floating bubbles
  useEffect(() => {
    const newBubbles = [];
    const icons = ['FaPhone', 'FaEnvelope', 'FaWhatsapp', 'FaMapMarkerAlt'];
    
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 30 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 15 + 10,
        icon: icons[Math.floor(Math.random() * icons.length)]
      });
    }
    
    setBubbles(newBubbles);
  }, []);

  const toggleCardColor = (card) => {
    setCardColors(prev => ({
      ...prev,
      [card]: prev[card] === 'primary' ? 'secondary' : 'primary'
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formData.contactMethod === 'whatsapp') {
      const phoneNumber = '256760316738';
      const message = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      setIsLoading(false);
      return;
    }

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactMethod: 'email'
      });
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('Failed to send message. Please try again later or use WhatsApp.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="contact-page">
      {/* Animated Background Elements */}
      <div className="contact-background-container">
        <motion.div 
          className="contact-blurred-bg"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        ></motion.div>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className={`contact-bubble contact-${bubble.icon}`}
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
              repeatType: 'loop',
              ease: 'linear'
            }}
          >
            {bubble.icon === 'FaPhone' && <FaPhone />}
            {bubble.icon === 'FaEnvelope' && <FaEnvelope />}
            {bubble.icon === 'FaWhatsapp' && <FaWhatsapp />}
            {bubble.icon === 'FaMapMarkerAlt' && <FaMapMarkerAlt />}
          </motion.div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-hero-content"
          >
            <h1 className="contact-hero-title">Let's Connect</h1>
            <p className="contact-hero-subtitle">We're here to help and answer any questions you might have.</p>
            <div className="contact-scrolling-text">
              <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <span>Contact Us • Get Support • Book a Session • Inquire About Services • Contact Us • Get Support • Book a Session • Inquire About Services</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success/Error Modal */}
      {(isSuccess || error) && (
        <div className={`contact-status-modal ${isSuccess ? 'contact-success' : 'contact-error'}`}>
          <div className="contact-status-content">
            {isSuccess ? (
              <>
                <IoCheckmarkDone className="contact-status-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you soon. Thank you for reaching out.</p>
              </>
            ) : (
              <>
                <MdErrorOutline className="contact-status-icon" />
                <h3>Message Failed to Send</h3>
                <p>{error}</p>
                <button 
                  className="contact-btn contact-whatsapp-btn"
                  onClick={() => {
                    setError(null);
                    setFormData(prev => ({ ...prev, contactMethod: 'whatsapp' }));
                  }}
                >
                  <FaWhatsapp /> Try WhatsApp Instead
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Contact Info Section */}
      <section className="contact-section contact-info-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-info-wrapper"
          >
            <h2 className="contact-section-title">Our Contact Information</h2>
            <p className="contact-section-subtitle">Reach out through any of these channels for quick response</p>
            
            <div className="contact-info-grid">
              <motion.div 
                className={`contact-info-card contact-location-card contact-${cardColors.location}-card`}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleCardColor('location')}
              >
                <div className={`contact-info-icon contact-${cardColors.location}-icon`}>
                  <FaMapMarkerAlt />
                </div>
                <h3>Location</h3>
                <p>75a Better View Rd, Kampala, Uganda</p>
                <a 
                  href="https://maps.google.com/?q=75a+Better+View+Rd,+Kampala,+Uganda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`contact-map-link contact-${cardColors.location}-link`}
                >
                  View on Map
                </a>
              </motion.div>
              
              <motion.div 
                className={`contact-info-card contact-phone-card contact-${cardColors.phone}-card`}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleCardColor('phone')}
              >
                <div className={`contact-info-icon contact-${cardColors.phone}-icon`}>
                  <FaPhone />
                </div>
                <h3>Phone</h3>
                <p>+256 760 316 738</p>
                <a 
                  href="tel:+256760316738" 
                  className={`contact-call-link contact-${cardColors.phone}-link`}
                >
                  Call Now
                </a>
              </motion.div>
              
              <motion.div 
                className={`contact-info-card contact-email-card contact-${cardColors.email}-card`}
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => toggleCardColor('email')}
              >
                <div className={`contact-info-icon contact-${cardColors.email}-icon`}>
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <p>info@tizzycamp.com</p>
                <a 
                  href="mailto:info@tizzycamp.com" 
                  className={`contact-email-link contact-${cardColors.email}-link`}
                >
                  Send Email
                </a>
              </motion.div>
              
              <motion.div 
                className="contact-info-card contact-whatsapp-card"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <a 
                  href="https://wa.me/256760316738" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-whatsapp-link"
                >
                  <div className="contact-info-icon contact-whatsapp-icon">
                    <FaWhatsapp />
                  </div>
                  <h3>WhatsApp</h3>
                  <p>+256 760 316 738</p>
                  <span className="contact-whatsapp-cta">Message Us</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="contact-section contact-social-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-social-wrapper"
          >
            <h2 className="contact-section-title">Connect With Us</h2>
            <p className="contact-section-subtitle">Follow us on social media for updates and more</p>
            
            <div className="contact-social-grid">
              <motion.a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-card"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FaInstagram className="contact-social-icon" />
                <span>Instagram</span>
              </motion.a>
              
              <motion.a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-card"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaFacebook className="contact-social-icon" />
                <span>Facebook</span>
              </motion.a>
              
              <motion.a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-card"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <FaTwitter className="contact-social-icon" />
                <span>Twitter</span>
              </motion.a>
              
              <motion.a 
                href="https://www.tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-card"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FaTiktok className="contact-social-icon" />
                <span>TikTok</span>
              </motion.a>
              
              <motion.a 
                href="https://wa.me/256760316738" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-social-card"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <FaWhatsapp className="contact-social-icon" />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-section contact-map-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-map-wrapper"
          >
            <h2 className="contact-section-title">Our Location</h2>
            <p className="contact-section-subtitle">Find us easily with this interactive map</p>
            <div className="contact-map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7526223157565!2d32.4896411!3d0.2773552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdb4eddd7a25%3A0x585236c6d89ce5f0!2s75a%20Better%20View%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1625068800000!5m2!1sen!2sug" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Tizzy Camp Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section contact-form-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <div className="contact-form-image-container">
              <div className="contact-form-image">
                <img src="/images/contact-image1.jpg" alt="Contact Us" />
              </div>
              <div className="contact-support-badge">
                <RiCustomerService2Fill />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className="contact-section-title">Send Us a Message</h2>
              <p className="contact-form-subtitle">Fill out the form below and select your preferred contact method</p>
              
              <div className="contact-form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Full Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email Address" 
                  value={formData.email}
                  onChange={handleChange}
                  required={formData.contactMethod === 'email'}
                />
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Your Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                  required={formData.contactMethod === 'whatsapp' || formData.contactMethod === 'text'}
                />
              </div>
              
              <div className="contact-form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="contact-form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Detailed Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="contact-method-selector">
                <h4>Preferred Contact Method:</h4>
                <div className="contact-method-options">
                  <label className={`contact-method-label ${formData.contactMethod === 'email' ? 'contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="email" 
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                    />
                    <span>Email</span>
                  </label>
                  <label className={`contact-method-label ${formData.contactMethod === 'whatsapp' ? 'contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="whatsapp" 
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={handleChange}
                    />
                    <span>WhatsApp</span>
                  </label>
                  <label className={`contact-method-label ${formData.contactMethod === 'text' ? 'contact-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="text" 
                      checked={formData.contactMethod === 'text'}
                      onChange={handleChange}
                    />
                    <span>Text Message</span>
                  </label>
                </div>
              </div>
              
              {error && <p className="contact-error-message">{error}</p>}
              
              <button 
                type="submit" 
                className={`contact-btn ${formData.contactMethod === 'whatsapp' ? 'contact-whatsapp-btn' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <ImSpinner8 className="contact-spinner" /> 
                    {formData.contactMethod === 'whatsapp' ? 'Opening WhatsApp...' : 'Sending Message...'}
                  </>
                ) : (
                  <>
                    {formData.contactMethod === 'email' && 'Send Email'}
                    {formData.contactMethod === 'whatsapp' && (
                      <>
                        <FaWhatsapp /> Send via WhatsApp
                      </>
                    )}
                    {formData.contactMethod === 'text' && 'Send Text Message'}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="contact-section contact-hours-section">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-hours-wrapper"
          >
            <h2 className="contact-section-title">Business Hours</h2>
            <div className="contact-hours-grid">
              <div className="contact-day">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="contact-day">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="contact-day">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <p className="contact-emergency-note">For urgent matters outside business hours, please call or WhatsApp us.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;