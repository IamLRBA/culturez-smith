import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import ShirtsAndTees from './pages/Products/ShirtsAndTees';
import Bottoms from './pages/Products/Bottoms';
import CoatsAndJackets from './pages/Products/CoatsAndJackets';
import Footwear from './pages/Products/Footwear';
import Accessories from './pages/Products/Accessories';
import Underwear from './pages/Products/Underwear';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Order from './pages/Order/Order';
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
      <Route path="/Order" element={<Order />} />
      
      {/* Products Routes */}
      <Route path="/products" element={<Products />} />
      <Route path="/products/shirts-and-tees" element={<ShirtsAndTees />} />
      <Route path="/products/bottoms" element={<Bottoms />} />
      <Route path="/products/coats-and-jackets" element={<CoatsAndJackets />} />
      <Route path="/products/footwear" element={<Footwear />} />
      <Route path="/products/accessories" element={<Accessories />} />
      <Route path="/products/underwear" element={<Underwear />} />
      <Route path="/products/order" element={<Order />} />
      
      {/*   Gallery Routes */}
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default AppRoutes;