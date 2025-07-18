import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaUsers, FaMusic, FaMicrophone, FaHeadphones, FaEnvelope, FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { useSearch } from './SearchContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { 
    searchQuery, 
    setSearchQuery, 
    searchSuggestions, 
    showSuggestions, 
    setShowSuggestions,
    updateSuggestions
  } = useSearch();
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    updateSuggestions(value);
    setShowSuggestions(!!value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/search-results');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (path) => {
    navigate(path);
    setSearchOpen(false);
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const navLinks = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/about', name: 'About', icon: <FaUsers /> },
    { path: '/artists', name: 'Artists', icon: <FaMicrophone /> },
    { path: '/releases', name: 'Releases', icon: <FaMusic /> },
    { path: '/studio', name: 'Studio', icon: <FaHeadphones /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Tizzy Camp Logo" />
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="navbar-icon">{link.icon}</span>
              <span className="navbar-text">{link.name}</span>
              <span className="navbar-underline"></span>
            </Link>
          ))}
        </div>

        <div className="navbar-search-container" ref={searchRef}>
          {searchOpen && (
            <form onSubmit={handleSearchSubmit} className="navbar-search-form">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Search artists, releases, studio..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="navbar-search-input"
                  autoFocus
                />
                {showSuggestions && searchSuggestions.length > 0 && (
                  <div className="search-suggestions">
                    {searchSuggestions.map((item) => (
                      <div 
                        key={`${item.type}-${item.id}`}
                        className="suggestion-item"
                        onClick={() => handleSuggestionClick(item.path)}
                      >
                        <span className="suggestion-category">{item.category}</span>
                        <span className="suggestion-title">{item.title}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button type="submit" className="navbar-search-submit">
                <FaSearch />
              </button>
            </form>
          )}
          <button onClick={toggleSearch} className="navbar-search-toggle">
            {searchOpen ? <FaTimes /> : <FaSearch />}
          </button>
        </div>

        <button onClick={toggleMenu} className="navbar-toggle">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;