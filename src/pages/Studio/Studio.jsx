import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaMusic, FaImages, FaCalendarAlt } from 'react-icons/fa';
import './Studio.css';

const Studio = () => {
  // Generate random musical notes for the background
  const renderMusicalNotes = () => {
    const notes = [];
    const noteSymbols = ['♪', '♫', '♩', '♬', '♭', '♮'];
    
    for (let i = 0; i < 20; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20 + 10}px`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.7 + 0.3,
      };
      notes.push(
        <div 
          key={i} 
          className="floating-note"
          style={style}
        >
          {noteSymbols[Math.floor(Math.random() * noteSymbols.length)]}
        </div>
      );
    }
    return notes;
  };

  // Generate random bubbles for the background
  const renderBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 40 + 10;
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.1,
      };
      bubbles.push(
        <div 
          key={i} 
          className="music-bubble"
          style={style}
        ></div>
      );
    }
    return bubbles;
  };

  return (
    <div className="studio-container">
      {/* Background elements */}
      <div className="studio-background-animation"></div>
      {renderMusicalNotes()}
      {renderBubbles()}

      {/* Studio Hero Section */}
      <section className="studio-hero-section">
        <div className="studio-hero-overlay">
          <div className="studio-hero-content">
            <h1>G.O.E Records</h1>
            <p>God Over Everything - Our sacred space for musical creation</p>
          </div>
        </div>
      </section>

      {/* Studio Services Overview */}
      <section className="studio-services-section">
        <div className="studio-container-inner">
          <h2 className="studio-section-title">Studio Services</h2>
          <div className="studio-services-grid">
            <Link to="/studio/services" className="studio-service-card">
              <div className="studio-service-icon">
                <FaMicrophone />
              </div>
              <h3>Audio Sevices</h3>
              <p>Professional recording sessions with our expert engineers</p>
            </Link>
            <Link to="/studio/beat-store" className="studio-service-card">
              <div className="studio-service-icon">
                <FaMusic />
              </div>
              <h3>Beat Store</h3>
              <p>Purchase high-quality beats from our producers</p>
            </Link>
            <Link to="/studio/booking" className="studio-service-card">
              <div className="studio-service-icon">
                <FaCalendarAlt />
              </div>
              <h3>Studio Booking</h3>
              <p>Reserve your time in our professional recording space</p>
            </Link>
            <Link to="/studio/gallery" className="studio-service-card">
              <div className="studio-service-icon">
                <FaImages />
              </div>
              <h3>Studio Gallery</h3>
              <p>Take a virtual tour of our facilities</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio CTA Section */}
      <section className="section studio-cta-section">
        <div className="container">
          <div className="studio-cta-content">
            <h2 className="studio-section-title">Ready to Create Something Amazing?</h2>
            <p>Book your session at G.O.E Records today and bring your musical vision to life!</p>
            <Link to="/studio/booking" className="btn">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;