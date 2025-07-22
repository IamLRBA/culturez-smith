import React, { createContext, useContext, useState, useMemo } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // All searchable product data from Shop and Culturez pages
  const searchData = useMemo(() => {
    // Products from Shop page
    const shopProducts = [
      // Shirts and Tees
      {
        id: 1,
        title: 'Basic Cotton Tee',
        type: 'product',
        path: '/Shop#shirts-casual',
        category: 'Shirts and Tees',
        description: 'Comfortable casual t-shirt made from premium cotton blend',
        price: 29.99
      },
      {
        id: 2,
        title: 'Graphic Print Tee',
        type: 'product',
        path: '/Shop#shirts-casual',
        category: 'Shirts and Tees',
        description: 'Cotton t-shirt with unique graphic print design',
        price: 34.99
      },
      {
        id: 3,
        title: 'Classic Check Shirt',
        type: 'product',
        path: '/Shop#shirts-checked',
        category: 'Shirts and Tees',
        description: 'Traditional checked shirt with button-down collar',
        price: 49.99
      },
      {
        id: 4,
        title: 'Denim Shirt',
        type: 'product',
        path: '/Shop#shirts-denim',
        category: 'Shirts and Tees',
        description: 'Rugged denim shirt with reinforced stitching',
        price: 54.99
      },
      {
        id: 5,
        title: 'Linen Shirt',
        type: 'product',
        path: '/Shop#shirts-gentle',
        category: 'Shirts and Tees',
        description: 'Breathable linen shirt for a refined look',
        price: 59.99
      },
      {
        id: 6,
        title: 'Classic Polo',
        type: 'product',
        path: '/Shop#shirts-polo',
        category: 'Shirts and Tees',
        description: 'Premium polo shirt with embroidered logo',
        price: 39.99
      },
      {
        id: 7,
        title: 'Performance Tee',
        type: 'product',
        path: '/Shop#shirts-sports',
        category: 'Shirts and Tees',
        description: 'Moisture-wicking sports t-shirt',
        price: 44.99
      },
      {
        id: 8,
        title: 'Textured Knit Shirt',
        type: 'product',
        path: '/Shop#shirts-textured',
        category: 'Shirts and Tees',
        description: 'Unique textured fabric with interesting patterns',
        price: 64.99
      },
      {
        id: 9,
        title: 'Vintage Wash Tee',
        type: 'product',
        path: '/Shop#shirts-vintage',
        category: 'Shirts and Tees',
        description: 'Distressed vintage-style t-shirt',
        price: 49.99
      },
      // Bottoms
      {
        id: 10,
        title: 'Cargo Shorts',
        type: 'product',
        path: '/Shop#bottoms-shorts',
        category: 'Bottoms',
        description: 'Durable cargo shorts with multiple pockets',
        price: 49.99
      },
      {
        id: 11,
        title: 'Denim Shorts',
        type: 'product',
        path: '/Shop#bottoms-shorts',
        category: 'Bottoms',
        description: 'Classic denim shorts with distressed details',
        price: 44.99
      },
      {
        id: 12,
        title: 'Jogger Shorts',
        type: 'product',
        path: '/Shop#bottoms-shorts',
        category: 'Bottoms',
        description: 'Comfortable jogger shorts with elastic waistband',
        price: 39.99
      },
      {
        id: 13,
        title: 'Slim Fit Chinos',
        type: 'product',
        path: '/Shop#bottoms-trousers',
        category: 'Bottoms',
        description: 'Slim-fit chino pants for a polished look',
        price: 59.99
      },
      {
        id: 14,
        title: 'Cargo Pants',
        type: 'product',
        path: '/Shop#bottoms-trousers',
        category: 'Bottoms',
        description: 'Utility cargo pants with multiple pockets',
        price: 64.99
      },
      {
        id: 15,
        title: 'Denim Jeans',
        type: 'product',
        path: '/Shop#bottoms-trousers',
        category: 'Bottoms',
        description: 'Classic straight-fit denim jeans',
        price: 69.99
      },
      // Coats and Jackets
      {
        id: 16,
        title: 'Classic Bomber',
        type: 'product',
        path: '/Shop#coats-bomber',
        category: 'Coats and Jackets',
        description: 'Iconic bomber jacket with ribbed cuffs and hem',
        price: 119.99
      },
      {
        id: 17,
        title: 'Knit Cardigan',
        type: 'product',
        path: '/Shop#coats-cardigan',
        category: 'Coats and Jackets',
        description: 'Chunky knit cardigan for layering',
        price: 89.99
      },
      {
        id: 18,
        title: 'Denim Jacket',
        type: 'product',
        path: '/Shop#coats-denim',
        category: 'Coats and Jackets',
        description: 'Timeless denim jacket with button-front closure',
        price: 99.99
      },
      {
        id: 19,
        title: 'Biker Jacket',
        type: 'product',
        path: '/Shop#coats-leather',
        category: 'Coats and Jackets',
        description: 'Premium genuine leather biker jacket',
        price: 199.99
      },
      {
        id: 20,
        title: 'Quilted Puffer',
        type: 'product',
        path: '/Shop#coats-puffer',
        category: 'Coats and Jackets',
        description: 'Warm quilted puffer jacket for cold weather',
        price: 149.99
      },
      {
        id: 21,
        title: 'Utility Jacket',
        type: 'product',
        path: '/Shop#coats-workwear',
        category: 'Coats and Jackets',
        description: 'Durable workwear jacket with multiple pockets',
        price: 109.99
      },
      {
        id: 22,
        title: 'Lightweight Windbreaker',
        type: 'product',
        path: '/Shop#coats-windbreaker',
        category: 'Coats and Jackets',
        description: 'Water-resistant windbreaker jacket',
        price: 79.99
      },
      {
        id: 23,
        title: 'Quilted Vest',
        type: 'product',
        path: '/Shop#coats-vests',
        category: 'Coats and Jackets',
        description: 'Warm quilted vest for layering',
        price: 89.99
      },
      {
        id: 24,
        title: 'Cable Knit Sweater',
        type: 'product',
        path: '/Shop#coats-sweater',
        category: 'Coats and Jackets',
        description: 'Classic cable knit sweater',
        price: 79.99
      },
      {
        id: 25,
        title: 'Field Jacket',
        type: 'product',
        path: '/Shop#coats-jacket',
        category: 'Coats and Jackets',
        description: 'Military-inspired field jacket',
        price: 119.99
      },
      {
        id: 26,
        title: 'Pullover Hoodie',
        type: 'product',
        path: '/Shop#coats-hoodie',
        category: 'Coats and Jackets',
        description: 'Comfortable cotton pullover hoodie',
        price: 69.99
      },
      // Footwear
      {
        id: 27,
        title: 'Canvas Sneakers',
        type: 'product',
        path: '/Shop#footwear-casual',
        category: 'Footwear',
        description: 'Classic canvas sneakers for everyday wear',
        price: 59.99
      },
      {
        id: 28,
        title: 'Leather Loafers',
        type: 'product',
        path: '/Shop#footwear-gentle',
        category: 'Footwear',
        description: 'Premium leather loafers for a refined look',
        price: 89.99
      },
      {
        id: 29,
        title: 'High-Top Sneakers',
        type: 'product',
        path: '/Shop#footwear-streetwear',
        category: 'Footwear',
        description: 'Stylish high-top sneakers with cushioned soles',
        price: 99.99
      },
      {
        id: 30,
        title: 'Leather Sandals',
        type: 'product',
        path: '/Shop#footwear-sandals',
        category: 'Footwear',
        description: 'Comfortable leather sandals for warm weather',
        price: 49.99
      },
      // Accessories
      {
        id: 31,
        title: 'Leather Backpack',
        type: 'product',
        path: '/Shop#accessories-bags',
        category: 'Accessories',
        description: 'Stylish leather backpack with multiple compartments',
        price: 129.99
      },
      {
        id: 32,
        title: 'Shades & Sunglasses',
        type: 'product',
        path: '/Shop#accessories-eyewear',
        category: 'Accessories',
        description: 'Classic aviator sunglasses with UV protection',
        price: 79.99
      },
      {
        id: 33,
        title: 'Wool Beanie',
        type: 'product',
        path: '/Shop#accessories-headwear',
        category: 'Accessories',
        description: 'Warm wool beanie for cold weather',
        price: 29.99
      },
      {
        id: 34,
        title: 'Watches',
        type: 'product',
        path: '/Shop#accessories-jewelry',
        category: 'Accessories',
        description: 'Handcrafted leather bracelet with metal details',
        price: 39.99
      },
      {
        id: 35,
        title: 'Bracelets',
        type: 'product',
        path: '/Shop#accessories-jewelry',
        category: 'Accessories',
        description: 'Handcrafted leather bracelet with metal details',
        price: 39.99
      },
      {
        id: 36,
        title: 'Necklaces',
        type: 'product',
        path: '/Shop#accessories-jewelry',
        category: 'Accessories',
        description: 'Handcrafted leather bracelet with metal details',
        price: 39.99
      },
      {
        id: 37,
        title: 'Rings',
        type: 'product',
        path: '/Shop#accessories-jewelry',
        category: 'Accessories',
        description: 'Handcrafted leather bracelet with metal details',
        price: 39.99
      },
      {
        id: 38,
        title: 'Fashion Magazine',
        type: 'product',
        path: '/Shop#accessories-literature',
        category: 'Accessories',
        description: 'Latest issue of our exclusive fashion magazine',
        price: 14.99
      },
      // Underwear
      {
        id: 39,
        title: 'Cotton Boxer Briefs',
        type: 'product',
        path: '/Shop#underwear-boxers',
        category: 'Underwear',
        description: 'Breathable cotton boxer briefs for all-day comfort',
        price: 24.99
      },
      {
        id: 40,
        title: 'Cotton Singlet',
        type: 'product',
        path: '/Shop#underwear-singlets',
        category: 'Underwear',
        description: 'Soft cotton singlet for layering',
        price: 19.99
      },
      {
        id: 41,
        title: 'Premium Cotton Socks',
        type: 'product',
        path: '/Shop#underwear-socks',
        category: 'Underwear',
        description: 'Soft cotton blend socks with reinforced heels',
        price: 14.99
      }
    ];

    // Products from Culturez page
    const culturezProducts = [
      {
        id: 42,
        title: 'T-Shirt',
        type: 'product',
        path: '/Culturez#shirts',
        category: 'Culturez',
        description: 'Basic t-shirt from Culturez collection',
        price: 29.99
      },
      {
        id: 43,
        title: 'Shirt',
        type: 'product',
        path: '/Culturez#shirts',
        category: 'Culturez',
        description: 'Stylish shirt from Culturez collection',
        price: 39.99
      },
      {
        id: 44,
        title: 'Shorts',
        type: 'product',
        path: '/Culturez#pants',
        category: 'Culturez',
        description: 'Comfortable shorts from Culturez collection',
        price: 49.99
      },
      {
        id: 45,
        title: 'Trouser',
        type: 'product',
        path: '/Culturez#pants',
        category: 'Culturez',
        description: 'Classic trousers from Culturez collection',
        price: 59.99
      },
      {
        id: 46,
        title: 'Sweater',
        type: 'product',
        path: '/Culturez#sweaters',
        category: 'Culturez',
        description: 'Warm sweater from Culturez collection',
        price: 129.99
      },
      {
        id: 47,
        title: 'Hoodie',
        type: 'product',
        path: '/Culturez#sweaters',
        category: 'Culturez',
        description: 'Comfortable hoodie from Culturez collection',
        price: 89.99
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
        title: 'Shop',
        type: 'page',
        path: '/Shop',
        category: 'Pages',
        description: 'Browse our full product collection'
      },
      {
        id: 3,
        title: 'Culturez',
        type: 'page',
        path: '/Culturez',
        category: 'Pages',
        description: 'Explore our Culturez product line'
      },
      {
        id: 4,
        title: 'Gallery',
        type: 'page',
        path: '/Gallery',
        category: 'Pages',
        description: 'View our photo gallery'
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

    return [...shopProducts, ...culturezProducts, ...pages];
  }, []);

  const updateSuggestions = (query) => {
    if (!query) {
      setSearchSuggestions([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
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