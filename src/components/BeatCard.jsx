import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaShoppingCart, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './BeatCard.css';

const BeatCard = ({ beat, onAddToCart, onRemoveFromCart, isInCart }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showLicense, setShowLicense] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState('MP3 Lease');
  const audioRef = useRef(new Audio(beat.preview));
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('ended', handleEnded);
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e) => {
    const progressBar = progressRef.current;
    const clickPosition = e.nativeEvent.offsetX;
    const progressBarWidth = progressBar.clientWidth;
    const seekTime = (clickPosition / progressBarWidth) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const toggleLicense = () => {
    setShowLicense(!showLicense);
  };

  const handleLicenseSelect = (license) => {
    setSelectedLicense(license);
  };

  const handleCartAction = () => {
    if (isInCart) {
      onRemoveFromCart();
    } else {
      onAddToCart(beat, selectedLicense);
    }
  };

  const licensePrices = {
    'MP3 Lease': beat.price,
    'WAV Lease': beat.price * 1.5,
    'Trackout Lease': beat.price * 2,
    'Exclusive Rights': beat.price * 5
  };

  return (
    <motion.div 
      className={`beat-card ${isPlaying ? 'playing' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="beat-image">
        <img src={beat.image} alt={beat.title} />
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      
      <div className="beat-player">
        <div className="beat-progress" ref={progressRef} onClick={handleProgressClick}>
          <div 
            className="beat-progress-bar" 
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></div>
        </div>
        
        <div className="beat-time">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        
        <div className="beat-controls">
          <button className="beat-play-btn" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          
          <div className="beat-volume">
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
      </div>
      
      <div className="beat-info">
        <h3>{beat.title}</h3>
        <div className="beat-meta">
          <span>{beat.genre}</span>
          <span>{beat.bpm} BPM</span>
        </div>
        <div className="beat-price">${beat.price.toFixed(2)}</div>
        <button 
          className={`cart-button ${isInCart ? 'in-cart' : ''}`}
          onClick={handleCartAction}
        >
          {isInCart ? <FaCheck /> : <FaShoppingCart />}
          {isInCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
      
      <div className="beat-license-toggle" onClick={toggleLicense}>
        {showLicense ? (
          <>
            <span>Hide License Options</span>
            <FaChevronUp />
          </>
        ) : (
          <>
            <span>View License Options</span>
            <FaChevronDown />
          </>
        )}
      </div>
      
      <motion.div 
        className="license-options"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: showLicense ? 'auto' : 0,
          opacity: showLicense ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <h4>License Options:</h4>
        <ul>
          {Object.entries(licensePrices).map(([license, price]) => (
            <li 
              key={license}
              className={selectedLicense === license ? 'selected' : ''}
              onClick={() => handleLicenseSelect(license)}
            >
              <div>
                <span>{license}</span>
                <span className="license-price">${price.toFixed(2)}</span>
              </div>
              {selectedLicense === license && (
                <div className="license-selected-indicator">✓</div>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default BeatCard;