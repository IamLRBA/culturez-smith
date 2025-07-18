import React, { useState } from 'react';
import { FaMicrophoneAlt, FaSlidersH, FaHeadphones, FaBroadcastTower, FaMusic, FaChevronDown, FaChevronUp, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './StudioServices.css';

const StudioServices = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Recording',
      icon: <FaMicrophoneAlt />,
      description: 'High-quality recording sessions in our acoustically treated live room. We offer vocal booths and instrument isolation for pristine recordings.',
      equipment: ['Neumann U87 Microphones', 'Universal Audio Apollo Interfaces', 'Pro Tools HD', 'SSL Console', 'Various Tube Preamps'],
      bgImage: '/images/recording-bg.jpg'
    },
    {
      id: 2,
      title: 'Mixing',
      icon: <FaSlidersH />,
      description: 'Professional mixing services to balance and enhance your recordings. Our engineers bring out the best in your music.',
      equipment: ['SSL Console', 'Waves Plugins', 'UAD Plugins', 'Analog Outboard Gear', 'Pro Tools HD'],
      bgImage: '/images/mixing-bg.jpg'
    },
    {
      id: 3,
      title: 'Mastering',
      icon: <FaHeadphones />,
      description: 'Final polish for your tracks to ensure they sound great on all playback systems. Ready for streaming and distribution.',
      equipment: ['Izotope Ozone', 'Barefoot Monitors', 'Analog Mastering Chain', 'Weiss EQ', 'Manley Massive Passive'],
      bgImage: '/images/mastering-bg.jpg'
    },
    {
      id: 4,
      title: 'Production',
      icon: <FaMusic />,
      description: 'Full music production from concept to final product. Work with our in-house producers to create your sound.',
      equipment: ['Ableton Live', 'MPC X', 'VST Instrument Collection', 'Moog Synths', 'Drum Kits'],
      bgImage: '/images/production-bg.jpg'
    },
    {
      id: 5,
      title: 'Voiceovers',
      icon: <FaBroadcastTower />,
      description: 'Professional voiceover recording for commercials, audiobooks, and other media projects.',
      equipment: ['Soundproof Booth', 'Sennheiser MKH 416', 'Adobe Audition', 'Compression Chain', 'Various Microphones'],
      bgImage: '/images/voiceover-bg.jpg'
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  // Generate musical notes for background
  const renderMusicalNotes = () => {
    const notes = [];
    const noteSymbols = ['♪', '♫', '♩', '♬', '♭', '♮'];
    
    for (let i = 0; i < 20; i++) {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 40 + 20}px`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.2,
      };
      notes.push(
        <div 
          key={`note-${i}`} 
          className="ss-musical-note"
          style={style}
        >
          {noteSymbols[Math.floor(Math.random() * noteSymbols.length)]}
        </div>
      );
    }
    return notes;
  };

  // Generate bubbles for background
  const renderBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 60 + 20;
      const style = {
        left: `${Math.random() * 100}%`,
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${Math.random() * 20 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      bubbles.push(
        <div 
          key={`bubble-${i}`}
          className="ss-bubble"
          style={style}
        ></div>
      );
    }
    return bubbles;
  };

  return (
    <div className="ss-page">
      {/* Background Elements */}
      <div className="ss-background">
        <div className="ss-blurred-bg"></div>
        {renderMusicalNotes()}
        {renderBubbles()}
      </div>

      <motion.section 
        className="ss-main-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="ss-container">
          {/* Animated Title */}
          <motion.div 
            className="ss-header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="ss-main-title"
              initial={{ letterSpacing: '1rem' }}
              animate={{ letterSpacing: '0.2rem' }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              Audio Services
            </motion.h1>
            <motion.p 
              className="ss-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Professional audio services tailored to your creative vision
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="ss-grid">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`ss-card ${expandedCard === service.id ? 'ss-expanded' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(179, 0, 0, 0.3)'
                }}
              >
                <div 
                  className="ss-card-bg"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                ></div>
                
                <div className="ss-card-content">
                  <div className="ss-icon-container">
                    <motion.div
                      className="ss-icon"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  
                  <h3 className="ss-title">{service.title}</h3>
                  <p className="ss-description">{service.description}</p>
                  
                  <motion.div
                    className="ss-toggle"
                    onClick={() => toggleCard(service.id)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {expandedCard === service.id ? (
                      <>
                        <span>Hide Equipment</span>
                        <FaChevronUp />
                      </>
                    ) : (
                      <>
                        <span>View Equipment</span>
                        <FaChevronDown />
                      </>
                    )}
                  </motion.div>
                  
                  <motion.div
                    className="ss-equipment-list"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedCard === service.id ? 'auto' : 0,
                      opacity: expandedCard === service.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4>Equipment We Use:</h4>
                    <ul>
                      {service.equipment.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{
                            x: expandedCard === service.id ? 0 : -20,
                            opacity: expandedCard === service.id ? 1 : 0
                          }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Booking CTA */}
          <motion.div
            className="ss-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <h3>Ready to book your session?</h3>
            <p>Reserve studio time with our easy online booking system</p>
            <Link to="/studio/booking" className="ss-cta-button">
              <FaCalendarAlt /> Book Now
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default StudioServices;