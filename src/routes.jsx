import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Artists from './pages/Artists/Artists';
import ArtistProfile from './pages/Artists/ArtistProfile';
import Releases from './pages/Releases/Releases';
import Studio from './pages/Studio/Studio';
import StudioServices from './pages/Studio/StudioServices';
import BeatStore from './pages/Studio/BeatStore';
import StudioGallery from './pages/Studio/StudioGallery';
import StudioBooking from './pages/Studio/StudioBooking';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './pages/Terms/Terms';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/:id" element={<ArtistProfile />} />
      <Route path="/releases" element={<Releases />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/studio/services" element={<StudioServices />} />
      <Route path="/studio/beat-store" element={<BeatStore />} />
      <Route path="/studio/gallery" element={<StudioGallery />} />
      <Route path="/studio/booking" element={<StudioBooking />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default AppRoutes;