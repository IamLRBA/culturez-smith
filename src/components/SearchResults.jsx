import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaMusic, 
  FaMicrophone, 
  FaHeadphones, 
  FaHome, 
  FaExclamationCircle,
  FaSpotify,
  FaApple,
  FaYoutube,
  FaDeezer
} from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { useSearch } from './SearchContext';
import './SearchResults.css';

const SearchResults = () => {
  const { searchQuery, searchData } = useSearch();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery) {
      navigate('/');
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.artist && item.artist.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.genre && item.genre.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);
  }, [searchQuery, searchData, navigate]);

  const getIconForType = (type) => {
    switch(type) {
      case 'artist': return <FaMicrophone />;
      case 'release': return <FaMusic />;
      case 'studio': return <FaHeadphones />;
      default: return <FaHome />;
    }
  };

  if (results.length === 0) {
    return (
      <div className="search-results-page">
        <div className="no-results-container">
          <FaExclamationCircle className="error-icon" />
          <h2>No results found for "{searchQuery}"</h2>
          <p>Try different keywords or browse our content:</p>
          <div className="suggestion-links">
            <Link to="/artists" className="btn">Artists</Link>
            <Link to="/releases" className="btn">Releases</Link>
            <Link to="/studio" className="btn">Studio Services</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results-page">
      <div className="search-results-container">
        <h2>Search Results for: <span>"{searchQuery}"</span></h2>
        
        <div className="results-grid">
          {results.map((item) => (
            <div key={`${item.type}-${item.id}`} className="result-card">
              <div className="result-icon">{getIconForType(item.type)}</div>
              <div className="result-content">
                <Link to={item.path} className="result-title-link">
                  <h3>{item.title}</h3>
                </Link>
                <div className="result-category">{item.category}</div>
                {item.artist && <div className="result-artist">by {item.artist}</div>}
                {item.genre && <div className="result-genre">{item.genre}</div>}
                <p className="result-description">{item.description}</p>
                
                {item.type === 'release' && (
                  <div className="release-platforms">
                    <a href="#" aria-label="Spotify"><FaSpotify /></a>
                    <a href="#" aria-label="Apple Music"><FaApple /></a>
                    <a href="#" aria-label="YouTube"><FaYoutube /></a>
                    <a href="#" aria-label="Deezer"><FaDeezer /></a>
                    <a href="#" aria-label="Tidal"><SiTidal /></a>
                  </div>
                )}
              </div>
              {item.image && (
                <div className="result-image">
                  <img src={item.image} alt={item.title} />
                </div>
              )}
              {item.cover && (
                <div className="result-image">
                  <img src={item.cover} alt={item.title} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;