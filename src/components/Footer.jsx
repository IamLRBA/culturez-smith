import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid icons (for general UI elements)
import { 
  faMusic,
  faShieldAlt,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';

// Brand icons (for social media & platforms)
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSpotify,
  faApple
} from '@fortawesome/free-brands-svg-icons';

// Heroicons (for navigation links)
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineMail,
  HiOutlineShoppingBag,
  HiOutlinePhotograph,
  HiOutlineShoppingCart
} from 'react-icons/hi';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <h3>Ready to elevate your style?</h3>
        <Link to="/contact" className="btn">Get In Touch</Link>
      </div>

      {/* Wave Section */}
      <div className="footer-wave"></div>
      
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* About Column */}
        <div className="footer-section brand-section">
          <div className="footer-logo">
            <FontAwesomeIcon icon={faMusic} className="logo-icon" />
            <h3>Culturez</h3>
          </div>
          <p className="brand-tagline">
            A premium fashion brand blending urban culture with contemporary style.
            We create unique pieces that tell your story.
          </p>
          
          <div className="social-media">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Quick Links Column */}
        <div className="footer-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><HiOutlineHome className="link-icon" /> Home</Link></li>
            <li><Link to="/about"><HiOutlineUsers className="link-icon" /> About Us</Link></li>
            <li><Link to="/Shop"><HiOutlineShoppingCart className="link-icon" /> Shop</Link></li>
            <li><Link to="/Gallery"><HiOutlinePhotograph className="link-icon" /> Gallery</Link></li>
            <li><Link to="/Culturez"><HiOutlineShoppingBag className="link-icon" /> Culturez</Link></li>
            <li><Link to="/contact"><HiOutlineMail className="link-icon" /> Contact</Link></li>
          </ul>
        </div>
        
        {/* Legal Column */}
        <div className="footer-section">
          <h3 className="footer-section-title">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy"><FontAwesomeIcon icon={faShieldAlt} className="link-icon" /> Privacy Policy</Link></li>
            <li><Link to="/terms"><FontAwesomeIcon icon={faFileAlt} className="link-icon" /> Terms of Service</Link></li>
          </ul>
          
          
          
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Culturez by Smith. All rights reserved.
        </p>
        <p className="copyright">Designed by - LRBA</p>
      </div>
    </footer>
  );
};

export default Footer;