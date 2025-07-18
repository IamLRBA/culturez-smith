import React from 'react';
import { FaPlay, FaSpotify, FaApple, FaYoutube, FaDeezer, FaItunesNote } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import ReleaseCard from '../../components/ReleaseCard';
import { motion } from 'framer-motion';
import './Releases.css';

const Releases = () => {
  const latestReleases = [
    {
      id: 1,
      title: 'New Single',
      artist: 'Artist 1',
      type: 'Single',
      cover: '/images/artists/artist1/album1.jpg',
      artistImage: '/images/artists/artist1/profile1.jpg',
      date: '2023-06-15',
      description: 'This is the latest single from Artist 1, showcasing their unique sound and style. The track blends modern production with classic influences.',
      tracks: [
        { id: 1, title: 'New Single', duration: '3:45' }
      ],
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      },
      stats: {
        streams: '1.2M',
        downloads: '45K',
        chartPosition: '#12'
      }
    },
    {
      id: 2,
      title: 'Latest Album',
      artist: 'Artist 2',
      type: 'Album',
      cover: '/images/artists/artist2/album2.jpg',
      artistImage: '/images/artists/artist2/profile2.jpg',
      date: '2023-05-20',
      description: 'The highly anticipated album from Artist 2 features collaborations with top producers and showcases their artistic evolution.',
      tracks: [
        { id: 1, title: 'Intro', duration: '2:30' },
        { id: 2, title: 'Track 1', duration: '3:45' },
        { id: 3, title: 'Track 2', duration: '4:20' },
        { id: 4, title: 'Track 3', duration: '3:15' },
        { id: 5, title: 'Outro', duration: '2:50' }
      ],
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      },
      stats: {
        streams: '5.7M',
        downloads: '210K',
        chartPosition: '#3'
      }
    },
    {
      id: 3,
      title: 'Summer Vibes',
      artist: 'Artist 3',
      type: 'EP',
      cover: '/images/artists/artist3/album3.jpg',
      artistImage: '/images/artists/artist3/profile3.jpg',
      date: '2023-07-10',
      description: 'Perfect for your summer playlist, this EP brings tropical vibes and upbeat rhythms that will keep you moving all season long.',
      tracks: [
        { id: 1, title: 'Sunshine', duration: '3:20' },
        { id: 2, title: 'Beach Days', duration: '4:05' },
        { id: 3, title: 'Ocean Breeze', duration: '3:45' }
      ],
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      },
      stats: {
        streams: '2.8M',
        downloads: '95K',
        chartPosition: '#8'
      }
    },
    {
      id: 4,
      title: 'Midnight Sessions',
      artist: 'Artist 4',
      type: 'Album',
      cover: '/images/artists/artist4/album4.jpg',
      artistImage: '/images/artists/artist4/profile4.jpg',
      date: '2023-04-05',
      description: 'Recorded late at night, these tracks capture the essence of midnight creativity with moody tones and introspective lyrics.',
      tracks: [
        { id: 1, title: 'Midnight', duration: '4:30' },
        { id: 2, title: 'Moonlight', duration: '3:55' },
        { id: 3, title: 'Starlight', duration: '4:15' },
        { id: 4, title: 'Dreamscape', duration: '5:20' }
      ],
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      },
      stats: {
        streams: '3.5M',
        downloads: '125K',
        chartPosition: '#5'
      }
    },
    {
      id: 5,
      title: 'Urban Nights',
      artist: 'Artist 5',
      type: 'Album',
      cover: '/images/artists/artist5/album5.jpg',
      artistImage: '/images/artists/artist5/profile5.jpg',
      date: '2023-04-05',
      description: 'A collection of urban-inspired tracks that blend hip-hop, R&B, and electronic elements for a fresh nighttime sound.',
      tracks: [
        { id: 1, title: 'City Lights', duration: '3:45' },
        { id: 2, title: 'Neon Signs', duration: '4:10' },
        { id: 3, title: 'Concrete Dreams', duration: '3:55' },
        { id: 4, title: 'Alleyway', duration: '4:30' }
      ],
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      },
      stats: {
        streams: '4.1M',
        downloads: '150K',
        chartPosition: '#4'
      }
    },
    {
      id: 6,
      title: 'Acoustic Sessions',
      artist: 'Artist 6',
      type: 'EP',
      cover: '/images/artists/artist6/album6.jpg',
      artistImage: '/images/artists/artist6/profile6.jpg',
      date: '2023-04-05',
      description: 'Stripped-down acoustic versions of popular tracks, showcasing raw talent and emotional delivery.',
      tracks: [
        { id: 1, title: 'Acoustic Version', duration: '3:25' },
        { id: 2, title: 'Unplugged', duration: '4:15' }
      ],
      links: {
        spotify: 'https://spotify.com',
        apple: 'https://apple.com',
        youtube: 'https://youtube.com',
        deezer: 'https://deezer.com',
        tidal: 'https://tidal.com'
      },
      stats: {
        streams: '1.8M',
        downloads: '65K',
        chartPosition: '#10'
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="releases-full-page">
      <section className="section releases-list-section">
        <div className="container">
          <motion.div 
            className="title-wrapper"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="releases-section-title">Discography</h2>
            <div className="animated-wave"></div>
          </motion.div>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore all the music released under Tizzy Camp Music Label
          </motion.p>
          
          <motion.div 
            className="releases-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {latestReleases.map((release) => (
              <motion.div key={release.id} variants={itemVariants}>
                <ReleaseCard release={release} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Releases;