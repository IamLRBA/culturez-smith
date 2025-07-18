import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaSpotify, FaApple, FaYoutube, FaDeezer } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import ArtistCard from '../../components/ArtistCard';
import TestimonialCard from '../../components/TestimonialCard';
import './Home.css';

const Home = () => {
  const [expandedRelease, setExpandedRelease] = useState(null);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  // Floating elements state
  const [floatingElements] = useState(() => {
    const elements = [];
    const types = ['note', 'note', 'note', 'bubble', 'bubble'];
    for (let i = 0; i < 12; i++) {
      elements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        size: Math.random() * 20 + 10,
        left: Math.random() * 100,
        animationDuration: Math.random() * 30 + 20,
        animationDelay: Math.random() * 10,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
    return elements;
  });

  const handleImageClick = () => {
    setClicked(true);
    setTimeout(() => {
      navigate('/artists');
    }, 400); // match duration of clickPop animation
  };

  const latestReleases = [
    {
      id: 1,
      title: 'New Single',
      artist: 'Artist 1',
      cover: '/images/artists/artist1/album1.jpg',
      artistImage: '/images/artists/artist1/profile1.jpg',
      date: '2023-06-15',
      description: 'This is the latest single from Artist 1, showcasing their unique sound and style. The track blends modern production with classic influences.',
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      }
    },
    {
      id: 2,
      title: 'New EP',
      artist: 'Artist 2',
      cover: '/images/artists/artist2/album2.jpg',
      artistImage: '/images/artists/artist2/profile2.jpg',
      date: '2023-06-15',
      description: 'This is the latest single from Artist 1, showcasing their unique sound and style. The track blends modern production with classic influences.',
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      }
    },
    {
      id: 3,
      title: 'Latest Album',
      artist: 'Artist 3',
      cover: '/images/artists/artist3/album3.jpg',
      artistImage: '/images/artists/artist3/profile3.jpg',
      date: '2023-05-20',
      description: 'The highly anticipated album from Artist 2 features collaborations with top producers and showcases their artistic evolution.',
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      }
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'Artist 1',
      image: '/images/artists/artist1/profile.jpg',
      genre: 'Hip Hop'
    },
    {
      id: 2,
      name: 'Artist 2',
      image: '/images/artists/artist2/profile.jpg',
      genre: 'R&B'
    },
    {
      id: 3,
      name: 'Artist 3',
      image: '/images/artists/artist3/profile.jpg',
      genre: 'Afrobeat'
    },
    {
      id: 4,
      name: 'Artist 4',
      image: '/images/artists/artist4/profile.jpg',
      genre: 'Pop'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Client 1',
      role: 'Musician',
      image: '/images/testimonials/client1.jpg',
      text: 'Working with Tizzy Camp was an amazing experience. Their professionalism and creativity are unmatched.'
    },
    {
      id: 2,
      name: 'Client 2',
      role: 'Producer',
      image: '/images/testimonials/client2.jpg',
      text: 'The best studio in town! The equipment and atmosphere are perfect for creating hits.'
    },
    {
      id: 3,
      name: 'Rebo Chapo',
      role: 'Artist',
      image: '/images/testimonials/client3.jpg',
      text: 'Tizzy Camp helped me take my music to the next level. Highly recommend their services.'
    },
    {
      id: 4,
      name: 'Kim Swaqq',
      role: 'Artist',
      image: '/images/testimonials/client4.jpg',
      text: 'Tizzy Camp helped me take my music to the next level. Highly recommend their services.'
    },
    {
      id: 5,
      name: 'Quex',
      role: 'Artist',
      image: '/images/testimonials/client5.jpg',
      text: 'Tizzy Camp helped me take my music to the next level. Highly recommend their services.'
    }
  ];

  const handleCardClick = (id) => {
    setExpandedRelease(expandedRelease === id ? null : id);
  };

  return (
    <div className="home-page">
      {/* Floating background elements */}
      {floatingElements.map((element) => (
        <div 
          key={element.id}
          className={`home-floating-element home-floating-${element.type}`}
          style={{
            left: `${element.left}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.animationDelay}s`,
            opacity: element.opacity
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title slide-in-left">Welcome to <span>Tizzy Camp</span> Collective</h1>
          <p className="hero-subtitle slide-in-left delay-1">Where music meets passion and creativity knows no bounds</p>
          <div className="hero-buttons slide-in-left delay-2">
            <Link to="/artists" className="btn">Explore Artists</Link>
            <Link to="/studio" className="btn btn-outline">Studio Services</Link>
          </div>
        </div>
        <div className="hero-image slide-in-right">
          <img src="/images/hero-bg1.jpg" alt="Tizzy Camp Collective" />
        </div>
      </section>

      {/* Latest Releases */}
      <section className="home-section releases-section">
        <div className="container">
          <h2 className="home-section-title">
            Latest <span className="highlighted-border">Releases</span>
          </h2>
          <div className="home-releases-grid">
            {latestReleases.map((release) => (
              <motion.div
                key={release.id}
                layout
                className={`home-release-card ${expandedRelease === release.id ? 'expanded' : ''}`}
                onClick={() => handleCardClick(release.id)}
                initial={{ borderRadius: 16 }}
                style={{ 
                  backgroundImage: `url(${release.cover})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="home-artist-image-circle">
                  <img src={release.artistImage} alt={release.artist} />
                </div>

                <button className="home-play-button">
                  <FaPlay />
                </button>

                <div className="home-release-info-overlay">
                  <div className="home-release-info">
                    <h3>{release.title}</h3>
                    <p>{release.artist}</p>
                    <span>{new Date(release.date).toLocaleDateString()}</span>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedRelease === release.id && (
                    <motion.div
                      className="home-release-expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="home-release-description">
                        <p>{release.description}</p>
                      </div>
                      <div className="home-release-links">
                        <a href={release.links.spotify} target="_blank" rel="noopener noreferrer" aria-label="Spotify" data-tooltip="Listen on Spotify">
                          <FaSpotify />
                        </a>
                        <a href={release.links.apple} target="_blank" rel="noopener noreferrer" aria-label="Apple Music" data-tooltip="Listen on Apple Music">
                          <FaApple />
                        </a>
                        <a href={release.links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" data-tooltip="Watch on YouTube">
                          <FaYoutube />
                        </a>
                        <a href={release.links.deezer} target="_blank" rel="noopener noreferrer" aria-label="Deezer" data-tooltip="Listen on Deezer">
                          <FaDeezer />
                        </a>
                        <a href={release.links.tidal} target="_blank" rel="noopener noreferrer" aria-label="Tidal" data-tooltip="Listen on Tidal">
                          <SiTidal />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="section-footer slide-in-bottom delay-2">
            <Link to="/releases" className="btn">
              View All Releases <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="section artists-section highlight-bg">
        <div className="container">
          <h2 className="animated-float-title">
            <span className="float-word highlight-border">Click</span>
            <span className="float-word">the</span>
            <span className="float-word">Ball</span>
            <span className="float-word">Below</span>
            <span className="float-word highlight-border">To</span>
            <span className="float-word">Meet</span>
            <span className="float-word">Our</span>
            <span className="float-word highlight-border">Artists</span>
          </h2>

          <div className="pointer-illustration fade-in-up">
            <div
              onClick={handleImageClick}
              aria-label="Go to Artists Page"
              className="pointer-link"
              style={{ cursor: 'pointer' }}
            >
              <img
                src="/images/pointing-down3.jpg"
                alt="Pointing down"
                className={`pointer-img bounce ${clicked ? 'clicked' : ''}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="home-section-title"><span className="highlighted-border">Client</span> Testimonials</h2>
          <div className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Studio CTA Section */}
      <section className="section studio-cta-section">
        <div className="container">
          <div className="studio-cta-content">
            <h2 className="home-section-title">Ready to Create Something Amazing?</h2>
            <p>Book time at G.O.E Records, our state-of-the-art recording studio!</p>
            <Link to="/studio/booking" className="btn">Book Studio Time</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
