import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ArtistCard from '../../components/ArtistCard';
import './Artists.css';

const Artists = () => {
  // Sample data 
  const artists = [
    {
      id: 1,
      name: 'Artist 1',
      image: '/images/artists/artist1/profile1.jpg',
      genre: 'Hip Hop',
      spotify: '#',
      instagram: '#'
    },
    {
      id: 2,
      name: 'Artist 2',
      image: '/images/artists/artist2/profile2.jpg',
      genre: 'R&B',
      spotify: '#',
      instagram: '#'
    },
    {
      id: 3,
      name: 'Artist 3',
      image: '/images/artists/artist3/profile3.jpg',
      genre: 'Afrobeat',
      spotify: '#',
      instagram: '#'
    },
    {
      id: 4,
      name: 'Artist 4',
      image: '/images/artists/artist4/profile4.jpg',
      genre: 'Pop',
      spotify: '#',
      instagram: '#'
    },
    {
      id: 5,
      name: 'Artist 5',
      image: '/images/artists/artist5/profile5.jpg',
      genre: 'Electronic',
      spotify: '#',
      instagram: '#'
    },
    {
      id: 6,
      name: 'Artist 6',
      image: '/images/artists/artist6/profile6.jpg',
      genre: 'Jazz',
      spotify: '#',
      instagram: '#'
    }
  ];

  const artistCardsRef = useRef([]);

  useEffect(() => {
    // Animate artist cards when they come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    artistCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      artistCardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="artists-page">
      {/* Animated background elements - 7 music notes */}
      <div className="music-note note-1">♪</div>
      <div className="music-note note-2">♫</div>
      <div className="music-note note-3">♩</div>
      <div className="music-note note-4">♬</div>
      <div className="music-note note-5">♪</div>
      <div className="music-note note-6">♫</div>
      <div className="music-note note-7">♩</div>
      
      <section className="section artists-list-section">
        <div className="container">
          <div className="section-header">
            <h2 className="artist-section-title">Our Artists</h2>
            <p className="section-subtitle">
              Discover the talented artists that make up the Tizzy Camp Collective
            </p>
            <div className="equalizer">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <div className="artists-grid">
            {artists.map((artist, index) => (
              <div 
                key={artist.id}
                ref={(el) => (artistCardsRef.current[index] = el)}
                className="artist-card-wrapper"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ArtistCard artist={artist} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;