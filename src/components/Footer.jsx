import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faUsers,
  faEnvelope,
  faMusic,
  faCompactDisc,
  faMicrophone,
  faCalendar,
  faShoppingBag,
  faFileAlt,
  faShieldAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSpotify,
  faApple
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <h3>Ready to work with us?</h3>
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
            <h3>Tizzy Camp</h3>
          </div>
          <p className="brand-tagline">
            A collective of talented artists and producers dedicated to creating 
            exceptional music and nurturing talent.
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
            <li><Link to="/"><FontAwesomeIcon icon={faHome} className="link-icon" /> Home</Link></li>
            <li><Link to="/about"><FontAwesomeIcon icon={faUsers} className="link-icon" /> About Us</Link></li>
            <li><Link to="/artists"><FontAwesomeIcon icon={faMicrophone} className="link-icon" /> Artists</Link></li>
            <li><Link to="/releases"><FontAwesomeIcon icon={faMusic} className="link-icon" /> Releases</Link></li>
            <li><Link to="/studio"><FontAwesomeIcon icon={faCompactDisc} className="link-icon" /> Studio</Link></li>
            <li><Link to="/contact"><FontAwesomeIcon icon={faEnvelope} className="link-icon" /> Contact</Link></li>
          </ul>
        </div>
        
        {/* Studio Column */}
        <div className="footer-section">
          <h3 className="footer-section-title">G.O.E Records</h3>
          <ul className="footer-links">
            <li><Link to="/studio/services"><FontAwesomeIcon icon={faShoppingBag} className="link-icon" /> Services</Link></li>
            <li><Link to="/studio/beat-store"><FontAwesomeIcon icon={faCompactDisc} className="link-icon" /> Beat Store</Link></li>
            <li><Link to="/studio/gallery"><FontAwesomeIcon icon={faCalendar} className="link-icon" /> Gallery</Link></li>
            <li><Link to="/studio/booking"><FontAwesomeIcon icon={faEnvelope} className="link-icon" /> Booking</Link></li>
          </ul>
        </div>
        
        {/* Legal Column */}
        <div className="footer-section">
          <h3 className="footer-section-title">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy"><FontAwesomeIcon icon={faShieldAlt} className="link-icon" /> Privacy Policy</Link></li>
            <li><Link to="/terms"><FontAwesomeIcon icon={faFileAlt} className="link-icon" /> Terms of Service</Link></li>
          </ul>
          
          <div className="platform-links">
            <h4>Find Us On</h4>
            <div className="platform-icons">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <FontAwesomeIcon icon={faSpotify} className="social-icon" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
                <FontAwesomeIcon icon={faApple} className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Tizzy Camp Music Label & G.O.E Records. All rights reserved.
        </p>
        <p1 className="copyright">Designed by - LRBA</p1>
      </div>
    </footer>
  );
};

export default Footer;