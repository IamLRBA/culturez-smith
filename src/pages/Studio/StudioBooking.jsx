import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaWhatsapp, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { IoCheckmarkDone } from 'react-icons/io5';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import './StudioBooking.css';

const StudioBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
    contactMethod: 'email'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

    if (formData.contactMethod === 'whatsapp') {
      const phoneNumber = '256760316738';
      const message = encodeURIComponent(
        `STUDIO BOOKING REQUEST\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}\nService: ${formData.service}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => setIsSubmitted(false), 5000);
      return;
    }

    // Email submission
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_BOOKING_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        service: formData.service,
        message: formData.message
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: '',
        contactMethod: 'email'
      });
    })
    .catch(() => {
      alert('Failed to send booking request. Please try WhatsApp instead.');
    })
    .finally(() => {
      setIsLoading(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    });
  };

  return (
    <div className="studio-booking-page">
      {/* Background Elements */}
      <div className="studio-booking-background">
        <div className="studio-booking-blur"></div>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="studio-booking-note"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['♪', '♫', '♩', '♬'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="studio-booking-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <section className="studio-booking-section">
        <div className="studio-booking-container">
          {/* Animated Title */}
          <motion.div 
            className="studio-booking-title-container"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="studio-booking-main-title"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Book Your Studio Session
            </motion.h1>
            <motion.p 
              className="studio-booking-subtitle"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Reserve your creative space at G.O.E Records
            </motion.p>
            <motion.div
              className="studio-booking-contact-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/contact" className="studio-booking-contact-btn">
                Need help? Contact us <FaArrowRight />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="studio-booking-content-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="studio-booking-info slide-in-left"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="studio-booking-section-title">Studio Information</h2>
              <p className="studio-booking-description">
                Fill out the form to request studio time at G.O.E Records. 
                Our team will get back to you within 24 hours to confirm your booking.
              </p>
              
              <div className="studio-booking-details">
                <h3 className="studio-booking-details-title">Studio Rates</h3>
                <ul className="studio-booking-rates-list">
                  <li className="studio-booking-rate-item">Recording Session: $50/hour</li>
                  <li className="studio-booking-rate-item">Mixing/Mastering: $40/hour</li>
                  <li className="studio-booking-rate-item">Full Day (8 hours): $300</li>
                  <li className="studio-booking-rate-item">Beat Production: $60/hour</li>
                </ul>
                
                <div className="studio-booking-contact-info">
                  <h3 className="studio-booking-details-title">Contact & Location</h3>
                  <div className="studio-booking-contact-method">
                    <FaMapMarkerAlt className="studio-booking-contact-icon" />
                    <span>75a Better View Rd, Kampala, Uganda</span>
                  </div>
                  <div className="studio-booking-contact-method">
                    <FaPhone className="studio-booking-contact-icon" />
                    <span>+256 760 316 738</span>
                  </div>
                  <div className="studio-booking-contact-method">
                    <FaWhatsapp className="studio-booking-contact-icon" />
                    <span>+256 760 316 738</span>
                  </div>
                  <div className="studio-booking-contact-method">
                    <FaEnvelope className="studio-booking-contact-icon" />
                    <span>bookings@goerecords.com</span>
                  </div>
                </div>
                
                <div className="studio-booking-hours">
                  <h3 className="studio-booking-details-title">Studio Hours</h3>
                  <p className="studio-booking-hour-item">Monday - Friday: 9:00 AM - 9:00 PM</p>
                  <p className="studio-booking-hour-item">Saturday: 10:00 AM - 6:00 PM</p>
                  <p className="studio-booking-hour-item">Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="studio-booking-form slide-in-right"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {isSubmitted && (
                <motion.div 
                  className="studio-booking-success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <IoCheckmarkDone className="studio-booking-success-icon" />
                  <div>
                    <h3 className="studio-booking-success-title">Booking Request Submitted!</h3>
                    <p className="studio-booking-success-text">We'll contact you shortly to confirm your session.</p>
                  </div>
                </motion.div>
              )}
              
              <div className="studio-booking-form-group">
                <div className="studio-booking-input-icon">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="studio-booking-input"
                />
              </div>
              
              <div className="studio-booking-form-group">
                <div className="studio-booking-input-icon">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required={formData.contactMethod === 'email'}
                  className="studio-booking-input"
                />
              </div>
              
              <div className="studio-booking-form-group">
                <div className="studio-booking-input-icon">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="studio-booking-input"
                />
              </div>
              
              <div className="studio-booking-form-row">
                <div className="studio-booking-form-group">
                  <div className="studio-booking-input-icon">
                    <FaCalendarAlt />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="studio-booking-input"
                  />
                </div>
                
                <div className="studio-booking-form-group">
                  <div className="studio-booking-input-icon">
                    <FaClock />
                  </div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="studio-booking-input"
                  />
                </div>
              </div>
              
              <div className="studio-booking-form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="studio-booking-select"
                >
                  <option value="">Select Service</option>
                  <option value="recording">Recording Session</option>
                  <option value="mixing">Mixing/Mastering</option>
                  <option value="production">Beat Production</option>
                  <option value="full-day">Full Day Booking</option>
                  <option value="other">Other (Specify in Message)</option>
                </select>
              </div>
              
              <div className="studio-booking-form-group">
                <textarea
                  name="message"
                  placeholder="Additional Information (Artist Name, Project Details, Special Requests)"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="studio-booking-textarea"
                ></textarea>
              </div>
              
              <div className="studio-booking-contact-method-selector">
                <h4 className="studio-booking-method-title">Preferred Confirmation Method:</h4>
                <div className="studio-booking-method-options">
                  <label className={`studio-booking-method-label ${formData.contactMethod === 'email' ? 'studio-booking-method-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="email" 
                      checked={formData.contactMethod === 'email'}
                      onChange={handleChange}
                      className="studio-booking-method-input"
                    />
                    <span className="studio-booking-method-text">Email</span>
                  </label>
                  <label className={`studio-booking-method-label ${formData.contactMethod === 'whatsapp' ? 'studio-booking-method-active' : ''}`}>
                    <input 
                      type="radio" 
                      name="contactMethod" 
                      value="whatsapp" 
                      checked={formData.contactMethod === 'whatsapp'}
                      onChange={handleChange}
                      className="studio-booking-method-input"
                    />
                    <span className="studio-booking-method-text">WhatsApp</span>
                  </label>
                </div>
              </div>
              
              <button type="submit" className="studio-booking-submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <ImSpinner8 className="studio-booking-spinner" /> 
                    {formData.contactMethod === 'whatsapp' ? 'Opening WhatsApp...' : 'Submitting...'}
                  </>
                ) : (
                  <>
                    Submit Booking Request <FaPaperPlane className="studio-booking-submit-icon" />
                  </>
                )}
              </button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StudioBooking;