import React, { useState, useRef, useEffect } from 'react';
import { FaShoppingCart, FaTimes, FaArrowLeft, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('mobileMoney');
  const [bubbles, setBubbles] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  const [sectionToExpand, setSectionToExpand] = useState(null);
  const [backgroundIcons, setBackgroundIcons] = useState([]);
  const cartRef = useRef(null);
  const pageRef = useRef(null);

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // All product data organized by category and sections
  const allProducts = {
    'Shirts and Tees': [
      {
        id: 'shirts-casual',
        name: 'Casual',
        titleImage: '/images/products/shirts/casual-title.jpg',
        products: [
          {
            id: 1,
            title: 'Basic Cotton Tee',
            price: 29.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/casual-${i+1}.jpg`),
            description: 'Comfortable casual t-shirt made from premium cotton blend',
            addedToCart: false
          },
          {
            id: 2,
            title: 'Graphic Print Tee',
            price: 34.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/casual-graphic-${i+1}.jpg`),
            description: 'Cotton t-shirt with unique graphic print design',
            addedToCart: false
          }
        ]
      },
      {
        id: 'shirts-checked',
        name: 'Checked',
        titleImage: '/images/products/shirts/checked-title.jpg',
        products: [
          {
            id: 3,
            title: 'Classic Check Shirt',
            price: 49.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/checked-${i+1}.jpg`),
            description: 'Traditional checked shirt with button-down collar',
            addedToCart: false
          }
        ]
      },
      {
        id: 'shirts-denim',
        name: 'Denim',
        titleImage: '/images/products/shirts/denim-title.jpg',
        products: [
          {
            id: 4,
            title: 'Denim Shirt',
            price: 54.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/denim-${i+1}.jpg`),
            description: 'Rugged denim shirt with reinforced stitching',
            addedToCart: false
          }
        ]
      },
      {
        id: 'shirts-gentle',
        name: 'Gentle',
        titleImage: '/images/products/shirts/gentle-title.jpg',
        products: [
          {
            id: 5,
            title: 'Linen Shirt',
            price: 59.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/gentle-${i+1}.jpg`),
            description: 'Breathable linen shirt for a refined look',
            addedToCart: false
          }
        ]
      },
      {
        id: 'shirts-polo',
        name: 'Polo',
        titleImage: '/images/products/shirts/polo-title.jpg',
        products: [
          {
            id: 6,
            title: 'Classic Polo',
            price: 39.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/polo-${i+1}.jpg`),
            description: 'Premium polo shirt with embroidered logo',
            addedToCart: false
          }
        ]
      },
      {
        id: 'shirts-sports',
        name: 'Sports',
        titleImage: '/images/products/shirts/sports-title.jpg',
        products: [
          {
            id: 7,
            title: 'Performance Tee',
            price: 44.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/sports-${i+1}.jpg`),
            description: 'Moisture-wicking sports t-shirt',
            addedToCart: false
          }
        ]
      },
      {
        id: 'shirts-textured',
        name: 'Textured',
        titleImage: '/images/products/shirts/textured-title.jpg',
        products: [
          {
            id: 8,
            title: 'Textured Knit Shirt',
            price: 64.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/textured-${i+1}.jpg`),
            description: 'Unique textured fabric with interesting patterns',
            addedToCart: false
          }
        ]
      },
      {
        id: 'shirts-vintage',
        name: 'Vintage',
        titleImage: '/images/products/shirts/vintage-title.jpg',
        products: [
          {
            id: 9,
            title: 'Vintage Wash Tee',
            price: 49.99,
            images: Array(4).fill().map((_, i) => `/images/products/shirts/vintage-${i+1}.jpg`),
            description: 'Distressed vintage-style t-shirt',
            addedToCart: false
          }
        ]
      }
    ],
    'Bottoms': [
      {
        id: 'bottoms-shorts',
        name: 'Shorts',
        titleImage: '/images/products/bottoms/shorts-title.jpg',
        products: [
          {
            id: 10,
            title: 'Cargo Shorts',
            price: 49.99,
            images: Array(4).fill().map((_, i) => `/images/products/bottoms/cargo-shorts-${i+1}.jpg`),
            description: 'Durable cargo shorts with multiple pockets',
            addedToCart: false
          },
          {
            id: 11,
            title: 'Denim Shorts',
            price: 44.99,
            images: Array(4).fill().map((_, i) => `/images/products/bottoms/denim-shorts-${i+1}.jpg`),
            description: 'Classic denim shorts with distressed details',
            addedToCart: false
          },
          {
            id: 12,
            title: 'Jogger Shorts',
            price: 39.99,
            images: Array(4).fill().map((_, i) => `/images/products/bottoms/jogger-shorts-${i+1}.jpg`),
            description: 'Comfortable jogger shorts with elastic waistband',
            addedToCart: false
          }
        ]
      },
      {
        id: 'bottoms-trousers',
        name: 'Trousers',
        titleImage: '/images/products/bottoms/trousers-title.jpg',
        products: [
          {
            id: 13,
            title: 'Slim Fit Chinos',
            price: 59.99,
            images: Array(4).fill().map((_, i) => `/images/products/bottoms/chinos-${i+1}.jpg`),
            description: 'Slim-fit chino pants for a polished look',
            addedToCart: false
          },
          {
            id: 14,
            title: 'Cargo Pants',
            price: 64.99,
            images: Array(4).fill().map((_, i) => `/images/products/bottoms/cargo-pants-${i+1}.jpg`),
            description: 'Utility cargo pants with multiple pockets',
            addedToCart: false
          },
          {
            id: 15,
            title: 'Denim Jeans',
            price: 69.99,
            images: Array(4).fill().map((_, i) => `/images/products/bottoms/denim-${i+1}.jpg`),
            description: 'Classic straight-fit denim jeans',
            addedToCart: false
          }
        ]
      }
    ],
    'Coats and Jackets': [
      {
        id: 'coats-bomber',
        name: 'Bomber and Varsity',
        titleImage: '/images/products/coats/bomber-title.jpg',
        products: [
          {
            id: 16,
            title: 'Classic Bomber',
            price: 119.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/bomber-${i+1}.jpg`),
            description: 'Iconic bomber jacket with ribbed cuffs and hem',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-cardigan',
        name: 'Cardigan',
        titleImage: '/images/products/coats/cardigan-title.jpg',
        products: [
          {
            id: 17,
            title: 'Knit Cardigan',
            price: 89.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/cardigan-${i+1}.jpg`),
            description: 'Chunky knit cardigan for layering',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-denim',
        name: 'Denim',
        titleImage: '/images/products/coats/denim-title.jpg',
        products: [
          {
            id: 18,
            title: 'Denim Jacket',
            price: 99.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/denim-${i+1}.jpg`),
            description: 'Timeless denim jacket with button-front closure',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-leather',
        name: 'Leather',
        titleImage: '/images/products/coats/leather-title.jpg',
        products: [
          {
            id: 19,
            title: 'Biker Jacket',
            price: 199.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/leather-${i+1}.jpg`),
            description: 'Premium genuine leather biker jacket',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-puffer',
        name: 'Puffer',
        titleImage: '/images/products/coats/puffer-title.jpg',
        products: [
          {
            id: 20,
            title: 'Quilted Puffer',
            price: 149.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/puffer-${i+1}.jpg`),
            description: 'Warm quilted puffer jacket for cold weather',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-workwear',
        name: 'Workwear',
        titleImage: '/images/products/coats/workwear-title.jpg',
        products: [
          {
            id: 21,
            title: 'Utility Jacket',
            price: 109.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/workwear-${i+1}.jpg`),
            description: 'Durable workwear jacket with multiple pockets',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-windbreaker',
        name: 'Windbreaker',
        titleImage: '/images/products/coats/windbreaker-title.jpg',
        products: [
          {
            id: 22,
            title: 'Lightweight Windbreaker',
            price: 79.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/windbreaker-${i+1}.jpg`),
            description: 'Water-resistant windbreaker jacket',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-vests',
        name: 'Vests',
        titleImage: '/images/products/coats/vests-title.jpg',
        products: [
          {
            id: 23,
            title: 'Quilted Vest',
            price: 89.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/vests-${i+1}.jpg`),
            description: 'Warm quilted vest for layering',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-sweater',
        name: 'Sweater',
        titleImage: '/images/products/coats/sweater-title.jpg',
        products: [
          {
            id: 24,
            title: 'Cable Knit Sweater',
            price: 79.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/sweater-${i+1}.jpg`),
            description: 'Classic cable knit sweater',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-jacket',
        name: 'Jacket',
        titleImage: '/images/products/coats/jacket-title.jpg',
        products: [
          {
            id: 25,
            title: 'Field Jacket',
            price: 119.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/jacket-${i+1}.jpg`),
            description: 'Military-inspired field jacket',
            addedToCart: false
          }
        ]
      },
      {
        id: 'coats-hoodie',
        name: 'Hoodie',
        titleImage: '/images/products/coats/hoodie-title.jpg',
        products: [
          {
            id: 26,
            title: 'Pullover Hoodie',
            price: 69.99,
            images: Array(4).fill().map((_, i) => `/images/products/coats/hoodie-${i+1}.jpg`),
            description: 'Comfortable cotton pullover hoodie',
            addedToCart: false
          }
        ]
      }
    ],
    'Footwear': [
      {
        id: 'footwear-casual',
        name: 'Casual',
        titleImage: '/images/products/footwear/casual-title.jpg',
        products: [
          {
            id: 27,
            title: 'Canvas Sneakers',
            price: 59.99,
            images: Array(4).fill().map((_, i) => `/images/products/footwear/casual-${i+1}.jpg`),
            description: 'Classic canvas sneakers for everyday wear',
            addedToCart: false
          }
        ]
      },
      {
        id: 'footwear-gentle',
        name: 'Gentle',
        titleImage: '/images/products/footwear/gentle-title.jpg',
        products: [
          {
            id: 28,
            title: 'Leather Loafers',
            price: 89.99,
            images: Array(4).fill().map((_, i) => `/images/products/footwear/gentle-${i+1}.jpg`),
            description: 'Premium leather loafers for a refined look',
            addedToCart: false
          }
        ]
      },
      {
        id: 'footwear-streetwear',
        name: 'Streetwear',
        titleImage: '/images/products/footwear/streetwear-title.jpg',
        products: [
          {
            id: 29,
            title: 'High-Top Sneakers',
            price: 99.99,
            images: Array(4).fill().map((_, i) => `/images/products/footwear/streetwear-${i+1}.jpg`),
            description: 'Stylish high-top sneakers with cushioned soles',
            addedToCart: false
          }
        ]
      },
      {
        id: 'footwear-sandals',
        name: 'Sandals',
        titleImage: '/images/products/footwear/sandals-title.jpg',
        products: [
          {
            id: 30,
            title: 'Leather Sandals',
            price: 49.99,
            images: Array(4).fill().map((_, i) => `/images/products/footwear/sandals-${i+1}.jpg`),
            description: 'Comfortable leather sandals for warm weather',
            addedToCart: false
          }
        ]
      }
    ],
    'Accessories': [
      {
        id: 'accessories-bags',
        name: 'Bags',
        titleImage: '/images/products/accessories/bags-title.jpg',
        products: [
          {
            id: 31,
            title: 'Leather Backpack',
            price: 129.99,
            images: Array(4).fill().map((_, i) => `/images/products/accessories/bags-${i+1}.jpg`),
            description: 'Stylish leather backpack with multiple compartments',
            addedToCart: false
          }
        ]
      },
      {
        id: 'accessories-eyewear',
        name: 'Eyewear',
        titleImage: '/images/products/accessories/eyewear-title.jpg',
        products: [
          {
            id: 32,
            title: 'Aviator Sunglasses',
            price: 79.99,
            images: Array(4).fill().map((_, i) => `/images/products/accessories/eyewear-${i+1}.jpg`),
            description: 'Classic aviator sunglasses with UV protection',
            addedToCart: false
          }
        ]
      },
      {
        id: 'accessories-headwear',
        name: 'Headwear',
        titleImage: '/images/products/accessories/headwear-title.jpg',
        products: [
          {
            id: 33,
            title: 'Wool Beanie',
            price: 29.99,
            images: Array(4).fill().map((_, i) => `/images/products/accessories/headwear-${i+1}.jpg`),
            description: 'Warm wool beanie for cold weather',
            addedToCart: false
          }
        ]
      },
      {
        id: 'accessories-jewelry',
        name: 'Jewelry',
        titleImage: '/images/products/accessories/jewelry-title.jpg',
        products: [
          {
            id: 34,
            title: 'Leather Bracelet',
            price: 39.99,
            images: Array(4).fill().map((_, i) => `/images/products/accessories/jewelry-${i+1}.jpg`),
            description: 'Handcrafted leather bracelet with metal details',
            addedToCart: false
          }
        ]
      },
      {
        id: 'accessories-literature',
        name: 'Literature',
        titleImage: '/images/products/accessories/literature-title.jpg',
        products: [
          {
            id: 35,
            title: 'Fashion Magazine',
            price: 14.99,
            images: Array(4).fill().map((_, i) => `/images/products/accessories/literature-${i+1}.jpg`),
            description: 'Latest issue of our exclusive fashion magazine',
            addedToCart: false
          }
        ]
      }
    ],
    'Underwear': [
      {
        id: 'underwear-boxers',
        name: 'Boxers',
        titleImage: '/images/products/underwear/boxers-title.jpg',
        products: [
          {
            id: 36,
            title: 'Cotton Boxer Briefs',
            price: 24.99,
            images: Array(4).fill().map((_, i) => `/images/products/underwear/boxers-${i+1}.jpg`),
            description: 'Breathable cotton boxer briefs for all-day comfort',
            addedToCart: false
          }
        ]
      },
      {
        id: 'underwear-singlets',
        name: 'Singlets',
        titleImage: '/images/products/underwear/singlets-title.jpg',
        products: [
          {
            id: 37,
            title: 'Cotton Singlet',
            price: 19.99,
            images: Array(4).fill().map((_, i) => `/images/products/underwear/singlets-${i+1}.jpg`),
            description: 'Soft cotton singlet for layering',
            addedToCart: false
          }
        ]
      },
      {
        id: 'underwear-socks',
        name: 'Socks',
        titleImage: '/images/products/underwear/socks-title.jpg',
        products: [
          {
            id: 38,
            title: 'Premium Cotton Socks',
            price: 14.99,
            images: Array(4).fill().map((_, i) => `/images/products/underwear/socks-${i+1}.jpg`),
            description: 'Soft cotton blend socks with reinforced heels',
            addedToCart: false
          }
        ]
      }
    ],
    'Exhibition': [
      {
        id: 'exhibition-collaborations',
        name: 'Collaborations',
        titleImage: '/images/products/exhibition/collaborations-title.jpg',
        products: [
          {
            id: 39,
            title: 'Artist Collab Tee',
            price: 59.99,
            images: Array(4).fill().map((_, i) => `/images/products/exhibition/collaborations-${i+1}.jpg`),
            description: 'Limited edition artist collaboration t-shirt',
            addedToCart: false
          }
        ]
      },
      {
        id: 'exhibition-styled',
        name: 'Styled Works',
        titleImage: '/images/products/exhibition/styled-title.jpg',
        products: [
          {
            id: 40,
            title: 'Signature Collection Jacket',
            price: 199.99,
            images: Array(4).fill().map((_, i) => `/images/products/exhibition/styled-${i+1}.jpg`),
            description: 'Exclusive signature collection designer jacket',
            addedToCart: false
          }
        ]
      },
      {
        id: 'exhibition-designs',
        name: 'Design Exhibitions',
        titleImage: '/images/products/exhibition/designs-title.jpg',
        products: [
          {
            id: 41,
            title: 'Limited Edition Sneakers',
            price: 249.99,
            images: Array(4).fill().map((_, i) => `/images/products/exhibition/designs-${i+1}.jpg`),
            description: 'Exclusive limited edition designer sneakers',
            addedToCart: false
          }
        ]
      }
    ]
  };

  // Flatten all products for cart functionality
  const allProductsList = Object.values(allProducts).flatMap(category => 
    category.flatMap(section => section.products)
  );

  useEffect(() => {
    // Create bubbles
    const newBubbles = [];
    for (let i = 0; i < 15; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 40 + 10,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 10
      });
    }
    setBubbles(newBubbles);

    // Create background icons
    const icons = [
    ];
    const newIcons = [];
    for (let i = 0; i < 20; i++) {
      newIcons.push({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: Math.random() * 40 + 20,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 30 + 20,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    setBackgroundIcons(newIcons);

    // Handle section to expand if set
    if (sectionToExpand) {
      setActiveFilter(sectionToExpand.category);
      setTimeout(() => {
        toggleSection(sectionToExpand.sectionId);
        setSectionToExpand(null);
      }, 100);
    }
  }, [sectionToExpand]);

  const categories = ['all', ...Object.keys(allProducts)];

  const addToCart = (product) => {
    const updatedProducts = allProductsList.map(p => 
      p.id === product.id ? { ...p, addedToCart: true } : p
    );
    
    // Update the products in allProducts structure
    const updatedAllProducts = { ...allProducts };
    Object.keys(updatedAllProducts).forEach(category => {
      updatedAllProducts[category] = updatedAllProducts[category].map(section => ({
        ...section,
        products: section.products.map(p => 
          p.id === product.id ? { ...p, addedToCart: true } : p
        )
      }));
    });

    const cartItem = {
      ...product,
      finalPrice: product.price
    };
    
    setCart([...cart, cartItem]);
    setIsCartOpen(true);
    setTimeout(() => {
      cartRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    
    // Update the addedToCart status
    const updatedProducts = allProductsList.map(p => 
      p.id === productId ? { ...p, addedToCart: false } : p
    );
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.finalPrice, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setOrderDetails({
      items: [...cart],
      total: calculateTotal(),
      date: new Date().toLocaleString(),
      orderId: `CZ-${Date.now()}`
    });
    setCheckoutOpen(true);
  };

  const handlePayment = () => {
    const whatsappMessage = encodeURIComponent(
      `New Clothing Purchase\n\nOrder ID: ${orderDetails.orderId}\n\nItems:\n${orderDetails.items.map(item => `- ${item.title} - $${item.finalPrice}`).join('\n')}\n\nTotal: $${orderDetails.total}\n\nDate: ${orderDetails.date}`
    );
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${whatsappMessage}`, '_blank');
    setCheckoutOpen(false);
    setCart([]);
    
    // Reset addedToCart status for all items
    const updatedProducts = allProductsList.map(p => ({ ...p, addedToCart: false }));
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex(prev => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    } else {
      // For section sliders
      const currentSection = allProducts[activeFilter].find(section => 
        expandedSections[section.id]
      );
      if (currentSection) {
        setCurrentImageIndex(prev => 
          prev === currentSection.products.length - 1 ? 0 : prev + 1
        );
      }
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    } else {
      // For section sliders
      const currentSection = allProducts[activeFilter].find(section => 
        expandedSections[section.id]
      );
      if (currentSection) {
        setCurrentImageIndex(prev => 
          prev === 0 ? currentSection.products.length - 1 : prev - 1
        );
      }
    }
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const renderSectionTitle = (title) => {
    const words = title.split(' ');
    if (words.length === 1) {
      return <span className="highlight-text">{title}</span>;
    } else if (words.length === 3 && words[1] === 'and') {
      return (
        <>
          <span className="highlight-text">{words[0]}</span> {words[1]} <span className="highlight-box">{words[2]}</span>
        </>
      );
    } else {
      return (
        <>
          {words.map((word, index) => (
            index % 2 === 0 ? 
              <span key={index} className="highlight-text">{word} </span> : 
              <span key={index} className="highlight-box">{word} </span>
          ))}
        </>
      );
    }
  };

  const handleCategoryPreviewClick = (category, sectionId) => {
    setSectionToExpand({ category, sectionId });
  };

  return (
    <div className="products-page" ref={pageRef}>
      <div className="products-background"></div>
      
      {bubbles.map((bubble) => (
        <motion.div
          key={`bubble-${bubble.id}`}
          className="products-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
          }}
          initial={{ bottom: -100 }}
          animate={{ bottom: '100%' }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        />
      ))}

      {backgroundIcons.map((icon) => (
        <motion.div
          key={`icon-${icon.id}`}
          className="background-icon"
          style={{
            fontSize: `${icon.size}px`,
            left: `${icon.left}%`,
            top: `${icon.top}%`,
            transform: `rotate(${icon.rotation}deg)`,
            opacity: icon.opacity
          }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {icon.icon}
        </motion.div>
      ))}

      <section className="products-section">
        <div className="products-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="products-header"
          >
            <h2 className="products-title">
              <span className="highlight-border">Discover</span> Our{' '}
              Premium Collection
            </h2>
            <motion.p 
              className="products-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Explore our carefully curated selection of fashion essentials
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="products-category-filters"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map(category => (
              <button
                key={category}
                className={`products-category-filter ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category === 'all' ? 'All Products' : category}
              </button>
            ))}
          </motion.div>
          
          <div className="products-content">
            {activeFilter === 'all' ? (
              Object.entries(allProducts).map(([category, sections]) => (
                <motion.div 
                  key={category}
                  className="category-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="category-title">
                    {renderSectionTitle(category)}
                  </h3>
                  <div className="category-sections-grid">
                    {sections.map(section => (
                      <div 
                        key={section.id} 
                        className="category-section-preview"
                        onClick={() => handleCategoryPreviewClick(category, section.id)}
                      >
                        <img 
                          src={section.titleImage} 
                          alt={section.name} 
                          className="section-preview-image"
                        />
                        <h4>{section.name}</h4>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="category-title">
                  {renderSectionTitle(activeFilter)}
                </h3>
                <div className="product-sections">
                  {allProducts[activeFilter]?.map(section => (
                    <div key={section.id} className="product-section">
                      <div className="section-header">
                        <div className="section-title-container">
                          <h4 className="section-title">{section.name}</h4>
                          <img 
                            src={section.titleImage} 
                            alt={section.name} 
                            className="section-title-image"
                          />
                        </div>
                        <button 
                          className="toggle-section-btn"
                          onClick={() => toggleSection(section.id)}
                        >
                          {expandedSections[section.id] ? (
                            <>
                              <FaChevronUp /> Minimize Slider
                            </>
                          ) : (
                            <>
                              <FaChevronDown /> Click Here To View Products
                            </>
                          )}
                        </button>
                      </div>

                      <AnimatePresence>
                        {expandedSections[section.id] && (
                          <motion.div
                            className="section-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="product-slider-container">
                              <button 
                                className="slider-arrow prev" 
                                onClick={prevImage}
                                aria-label="Previous slide"
                              >
                                <FaArrowLeft />
                              </button>

                              <div className="product-slider-center">
                                <div className="product-slider">
                                  {section.products.map((product, index) => (
                                    <motion.div
                                      key={product.id}
                                      className={`slider-item ${currentImageIndex === index ? 'active' : ''} ${product.addedToCart ? 'added-to-cart' : ''}`}
                                      initial={{ scale: 0.9 }}
                                      animate={{ 
                                        scale: currentImageIndex === index ? 1.1 : 0.9,
                                        opacity: currentImageIndex === index ? 1 : 0.7
                                      }}
                                      transition={{ duration: 0.3 }}
                                      onClick={() => openProductDetail(product)}
                                    >
                                      <img 
                                        src={product.images[0]} 
                                        alt={product.title} 
                                        className="slider-image"
                                      />
                                      <div className="slider-item-info">
                                        <h5>{product.title}</h5>
                                        <p>${product.price.toFixed(2)}</p>
                                        {product.addedToCart && (
                                          <div className="added-to-cart-badge">
                                            <FaShoppingCart /> Added
                                          </div>
                                        )}
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>

                              <button 
                                className="slider-arrow next" 
                                onClick={nextImage}
                                aria-label="Next slide"
                              >
                                <FaArrowRight />
                              </button>
                            </div>

                            <div className="slider-dots">
                              {section.products.map((_, index) => (
                                <button
                                  key={index}
                                  className={`slider-dot ${currentImageIndex === index ? 'active' : ''}`}
                                  onClick={() => setCurrentImageIndex(index)}
                                  aria-label={`Go to slide ${index + 1}`}
                                />
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            className="product-detail-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="product-detail-content">
              <button 
                className="product-detail-close"
                onClick={closeProductDetail}
              >
                <FaTimes />
              </button>
              
              <div className="product-detail-main">
                <div className="product-detail-images">
                  <div className="product-main-image">
                    <img 
                      src={selectedProduct.images[currentImageIndex]} 
                      alt={selectedProduct.title} 
                    />
                  </div>
                  
                  <div className="product-thumbnails">
                    {selectedProduct.images.map((image, index) => (
                      <div 
                        key={index}
                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => selectImage(index)}
                      >
                        <img src={image} alt={`${selectedProduct.title} ${index + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="product-detail-info">
                  <h2>{selectedProduct.title}</h2>
                  <p className="product-price">${selectedProduct.price.toFixed(2)}</p>
                  <p className="product-description">{selectedProduct.description}</p>
                  
                  <button 
                    className={`add-to-cart-btn ${selectedProduct.addedToCart ? 'added' : ''}`}
                    onClick={() => {
                      addToCart(selectedProduct);
                      closeProductDetail();
                    }}
                    disabled={selectedProduct.addedToCart}
                  >
                    <FaShoppingCart /> 
                    {selectedProduct.addedToCart ? 'Already in Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <section className="products-cart-section" ref={cartRef}>
        <div className="products-container">
          <AnimatePresence>
            {(isCartOpen || cart.length > 0) && (
              <motion.div 
                className="products-cart-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="products-cart-header">
                  <h3>Your Cart ({cart.length})</h3>
                  {isCartOpen && (
                    <button 
                      className="products-cart-close"
                      onClick={() => setIsCartOpen(false)}
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
                
                <div className="products-cart-items">
                  {cart.length > 0 ? (
                    <>
                      {cart.map(item => (
                        <div key={`${item.id}`} className="products-cart-item">
                          <div className="products-cart-item-image">
                            <img src={item.images[0]} alt={item.title} />
                          </div>
                          <div className="products-cart-item-info">
                            <h4>{item.title}</h4>
                            <p className="products-cart-item-price">${item.finalPrice.toFixed(2)}</p>
                          </div>
                          <button 
                            className="products-remove-from-cart"
                            onClick={() => removeFromCart(item.id)}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      
                      <div className="products-cart-navigation">
                        <button 
                          className="products-continue-shopping"
                          onClick={() => {
                            setIsCartOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          <FaArrowLeft /> Continue Shopping
                        </button>
                        
                        <div className="products-cart-total">
                          <span>Total:</span>
                          <span>${calculateTotal()}</span>
                        </div>
                        
                        <button 
                          className="products-checkout-btn"
                          onClick={handleCheckout}
                        >
                          Proceed to Checkout <FaArrowRight />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="products-cart-empty">
                      <p>Your cart is empty</p>
                      <button 
                        className="products-continue-shopping"
                        onClick={() => setIsCartOpen(false)}
                      >
                        <FaArrowLeft /> Browse Products
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {cart.length > 0 && !isCartOpen && (
        <motion.button 
          className="products-cart-button"
          onClick={() => {
            setIsCartOpen(true);
            setTimeout(() => {
              cartRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaShoppingCart />
          <span className="products-cart-count">{cart.length}</span>
        </motion.button>
      )}
      
      <AnimatePresence>
        {checkoutOpen && (
          <motion.div 
            className="products-checkout-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="products-checkout-content">
              <button 
                className="products-checkout-close"
                onClick={() => setCheckoutOpen(false)}
              >
                <FaTimes />
              </button>
              
              <div className="products-checkout-scrollable">
                <h3>Complete Your Purchase</h3>
                
                <div className="products-order-summary">
                  <h4>Order Summary</h4>
                  <ul>
                    {orderDetails.items.map(item => (
                      <li key={`${item.id}`}>
                        <div>
                          <span>{item.title}</span>
                        </div>
                        <span>${item.finalPrice.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="products-order-total">
                    <span>Total:</span>
                    <span>${orderDetails.total}</span>
                  </div>
                </div>
                
                <div className="products-payment-methods">
                  <h4>Payment Method</h4>
                  <div className="products-payment-options">
                    <label className={paymentMethod === 'mobileMoney' ? 'active' : ''}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="mobileMoney" 
                        checked={paymentMethod === 'mobileMoney'}
                        onChange={() => setPaymentMethod('mobileMoney')}
                      />
                      <span>Mobile Money</span>
                    </label>
                    <label className={paymentMethod === 'card' ? 'active' : ''}>
                      <input 
                        type="radio" 
                        name="paymentMethod" 
                        value="card" 
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                      />
                      <span>Credit/Debit Card</span>
                    </label>
                  </div>
                  
                  {paymentMethod === 'mobileMoney' && (
                    <div className="products-mobile-money">
                      <p>Pay via Mobile Money to:</p>
                      <div className="products-merchant-info">
                        <div>
                          <span>Merchant Code:</span>
                          <strong>CULTUREZ</strong>
                        </div>
                        <div>
                          <span>Phone Number:</span>
                          <strong>+256 XXX XXX XXX</strong>
                        </div>
                      </div>
                      <p className="products-payment-note">
                        After payment, send the transaction details to our WhatsApp for verification.
                      </p>
                    </div>
                  )}
                  
                  {paymentMethod === 'card' && (
                    <div className="products-card-payment">
                      <div className="products-card-form">
                        <input type="text" placeholder="Card Number" />
                        <div className="products-card-details">
                          <input type="text" placeholder="MM/YY" />
                          <input type="text" placeholder="CVV" />
                        </div>
                        <input type="text" placeholder="Cardholder Name" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="products-checkout-buttons">
                <button 
                  className="products-cancel-payment"
                  onClick={() => setCheckoutOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="products-confirm-payment"
                  onClick={handlePayment}
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="products-cta-section">
        <div className="products-container">
          <div className="products-cta-content">
            <h3>Have Questions or Need Assistance?</h3>
            <p>Our team is ready to help you with any inquiries about our products or your order.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button">
                Contact Us
              </Link>
              <Link to="/" className="cta-button secondary">
                Visit Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;