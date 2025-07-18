import React from 'react';
import { Link } from 'react-router-dom';
import { FaMusic } from 'react-icons/fa';
import './ArtistCard.css';

const ArtistCard = ({ artist }) => {
  return (
    <Link to={`/artists/${artist.id}`} className="artist-card">
      <div className="artist-image">
        <img src={artist.image} alt={artist.name} />
        <div className="artist-overlay">
          <FaMusic className="artist-icon" />
        </div>
      </div>
      <div className="artist-info">
        <h3>{artist.name}</h3>
        <p>{artist.genre}</p>
      </div>
    </Link>
  );
};

export default ArtistCard;