import React, { useState } from 'react';
import { FaPlay, FaSpotify, FaApple, FaYoutube, FaChevronDown, FaChevronUp, FaDeezer, FaItunesNote } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { motion } from 'framer-motion';
import './ReleaseCard.css';

const ReleaseCard = ({ release }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: '0 15px 30px rgba(210, 0, 0, 0.3)'
    }
  };

  return (
    <motion.div 
      className={`release-card ${isExpanded ? 'expanded' : ''}`}
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="release-header" onClick={toggleExpand}>
        <div className="release-image">
          <img src={release.cover} alt={release.title} />
          <button className="play-button">
            <FaPlay />
          </button>
        </div>
        
        <div className="release-basic-info">
          <h3>{release.title}</h3>
          <p>{release.artist}</p>
          <span>{release.type} • {new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        </div>
        
        <button className="expand-button" onClick={(e) => {
          e.stopPropagation();
          toggleExpand();
        }}>
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      {isExpanded && (
        <motion.div 
          className="release-details"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="release-description">
            <p>{release.description}</p>
          </div>
          
          <div className="tracklist">
            <h4>Tracklist</h4>
            <ul>
              {release.tracks.map((track) => (
                <li key={track.id}>
                  <span>{track.id}. {track.title}</span>
                  <span>{track.duration}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="release-links">
            <h4>Stream & Download</h4>
            <div className="platform-links">
              <a href={release.links.spotify} target="_blank" rel="noopener noreferrer" className="platform-link">
                <FaSpotify className="spotify" />
                <span>Spotify</span>
              </a>
              <a href={release.links.apple} target="_blank" rel="noopener noreferrer" className="platform-link">
                <FaApple className="apple" />
                <span>Apple Music</span>
              </a>
              <a href={release.links.youtube} target="_blank" rel="noopener noreferrer" className="platform-link">
                <FaYoutube className="youtube" />
                <span>YouTube</span>
              </a>
              <a href={release.links.deezer} target="_blank" rel="noopener noreferrer" className="platform-link">
                <FaDeezer className="deezer" />
                <span>Deezer</span>
              </a>
              <a href={release.links.tidal} target="_blank" rel="noopener noreferrer" className="platform-link">
                <SiTidal className="tidal" />
                <span>Tidal</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ReleaseCard;