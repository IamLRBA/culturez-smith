import React from 'react';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaSpotify,
  FaApple,
  FaSoundcloud,
  FaDeezer
} from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import './Social.css';

const Social = ({ size = 'md', color = 'default', direction = 'horizontal' }) => {
  const sizeClasses = {
    sm: 'social-sm',
    md: 'social-md',
    lg: 'social-lg'
  };

  const colorClasses = {
    default: 'social-default',
    primary: 'social-primary',
    secondary: 'social-secondary',
    white: 'social-white'
  };

  return (
    <div className={`social-links ${direction === 'vertical' ? 'social-vertical' : ''}`}>
      <a href="https://facebook.com/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaFacebook />
      </a>
      <a href="https://twitter.com/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaTwitter />
      </a>
      <a href="https://instagram.com/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaInstagram />
      </a>
      <a href="https://youtube.com/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaYoutube />
      </a>
      <a href="https://open.spotify.com/artist/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaSpotify />
      </a>
      <a href="https://music.apple.com/artist/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaApple />
      </a>
      <a href="https://soundcloud.com/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaSoundcloud />
      </a>
      <a href="https://deezer.com/artist/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <FaDeezer />
      </a>
      <a href="https://tidal.com/artist/tizzycamp" target="_blank" rel="noopener noreferrer" 
         className={`social-link ${sizeClasses[size]} ${colorClasses[color]}`}>
        <SiTidal />
      </a>
    </div>
  );
};

export default Social;