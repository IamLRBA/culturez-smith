import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Culturez from './pages/Culturez/Culturez';
import Blog from './pages/Blog/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/Culturez" element={<Culturez />} />
      
      {/* Products Routes */}
      <Route path="/shop" element={<Shop />} />
      
      {/*   Gallery Routes */}
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default AppRoutes;