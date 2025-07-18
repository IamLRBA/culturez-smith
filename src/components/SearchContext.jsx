import React, { createContext, useContext, useState, useMemo } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // All searchable data from your pages
  const searchData = useMemo(() => {
    // Artists data
    const artists = [
      {
        id: 1,
        title: 'Artist 1',
        type: 'artist',
        path: '/artists/1',
        category: 'Artists',
        genre: 'Hip Hop',
        image: '/images/artists/artist1/profile1.jpg'
      },
      {
        id: 2,
        title: 'Artist 2',
        type: 'artist',
        path: '/artists/2',
        category: 'Artists',
        genre: 'R&B',
        image: '/images/artists/artist2/profile2.jpg'
      },
      {
        id: 3,
        title: 'Artist 3',
        type: 'artist',
        path: '/artists/3',
        category: 'Artists',
        genre: 'Afrobeat',
        image: '/images/artists/artist3/profile3.jpg'
      },
      {
        id: 4,
        title: 'Artist 4',
        type: 'artist',
        path: '/artists/4',
        category: 'Artists',
        genre: 'Pop',
        image: '/images/artists/artist4/profile4.jpg'
      },
      {
        id: 5,
        title: 'Artist 5',
        type: 'artist',
        path: '/artists/5',
        category: 'Artists',
        genre: 'Electronic',
        image: '/images/artists/artist5/profile5.jpg'
      },
      {
        id: 6,
        title: 'Artist 6',
        type: 'artist',
        path: '/artists/6',
        category: 'Artists',
        genre: 'Jazz',
        image: '/images/artists/artist6/profile6.jpg'
      }
    ];

    // Releases data
    const releases = [
      {
        id: 1,
        title: 'New Single',
        type: 'release',
        path: '/releases/1',
        category: 'Releases',
        artist: 'Artist 1',
        cover: '/images/artists/artist1/album1.jpg',
        description: 'Latest single from Artist 1'
      },
      {
        id: 2,
        title: 'Latest Album',
        type: 'release',
        path: '/releases/2',
        category: 'Releases',
        artist: 'Artist 2',
        cover: '/images/artists/artist2/album2.jpg',
        description: 'Highly anticipated album from Artist 2'
      },
      {
        id: 3,
        title: 'Summer Vibes EP',
        type: 'release',
        path: '/releases/3',
        category: 'Releases',
        artist: 'Artist 3',
        cover: '/images/artists/artist3/album3.jpg',
        description: 'Perfect for your summer playlist'
      },
      {
        id: 4,
        title: 'Midnight Sessions',
        type: 'release',
        path: '/releases/4',
        category: 'Releases',
        artist: 'Artist 4',
        cover: '/images/artists/artist4/album4.jpg',
        description: 'Recorded late at night'
      },
      {
        id: 5,
        title: 'Urban Nights',
        type: 'release',
        path: '/releases/5',
        category: 'Releases',
        artist: 'Artist 5',
        cover: '/images/artists/artist5/album5.jpg',
        description: 'Urban-inspired tracks'
      },
      {
        id: 6,
        title: 'Acoustic Sessions',
        type: 'release',
        path: '/releases/6',
        category: 'Releases',
        artist: 'Artist 6',
        cover: '/images/artists/artist6/album6.jpg',
        description: 'Stripped-down acoustic versions'
      }
    ];

    // Studio services data
    const studioServices = [
      {
        id: 1,
        title: 'Audio Services',
        type: 'studio',
        path: '/studio/services',
        category: 'Studio',
        description: 'Professional recording sessions with our expert engineers'
      },
      {
        id: 2,
        title: 'Beat Store',
        type: 'studio',
        path: '/studio/beat-store',
        category: 'Studio',
        description: 'Purchase high-quality beats from our producers'
      },
      {
        id: 3,
        title: 'Studio Booking',
        type: 'studio',
        path: '/studio/booking',
        category: 'Studio',
        description: 'Reserve your time in our professional recording space'
      },
      {
        id: 4,
        title: 'Studio Gallery',
        type: 'studio',
        path: '/studio/gallery',
        category: 'Studio',
        description: 'Take a virtual tour of our facilities'
      }
    ];

    // Pages data
    const pages = [
      {
        id: 1,
        title: 'About Tizzy Camp',
        type: 'page',
        path: '/about',
        category: 'Pages',
        description: 'Learn about our collective'
      },
      {
        id: 2,
        title: 'Artists',
        type: 'page',
        path: '/artists',
        category: 'Pages',
        description: 'Discover our talented artists'
      },
      {
        id: 3,
        title: 'Releases',
        type: 'page',
        path: '/releases',
        category: 'Pages',
        description: 'Explore our music catalog'
      },
      {
        id: 4,
        title: 'Studio',
        type: 'page',
        path: '/studio',
        category: 'Pages',
        description: 'Our recording facilities'
      },
      {
        id: 5,
        title: 'Contact',
        type: 'page',
        path: '/contact',
        category: 'Pages',
        description: 'Get in touch with us'
      }
    ];

    return [...artists, ...releases, ...studioServices, ...pages];
  }, []);

  const updateSuggestions = (query) => {
    if (!query) {
      setSearchSuggestions([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      (item.artist && item.artist.toLowerCase().includes(query.toLowerCase())) ||
      (item.genre && item.genre.toLowerCase().includes(query.toLowerCase())) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchSuggestions(filtered.slice(0, 5)); // Limit to 5 suggestions
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchSuggestions,
      showSuggestions,
      setShowSuggestions,
      updateSuggestions,
      searchData
    }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);