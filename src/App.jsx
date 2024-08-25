import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import GallerySection from './Components/GallerySection';
import MerchSection from './Components/MerchSection';
import Footer from './Components/Footer';
import BackToTopButton from './Components/BackToTopButton';
import LiveChatWidget from './Components/LiveChatWidget';
import ScrollToTopButton from './Components/ScrollToButton';

const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/';

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/merch" element={<MerchSection />} />
        {/* Add more routes as needed */}
      </Routes>
      <LiveChatWidget />
      <ScrollToTopButton />
      {showFooter && <Footer />}
      <BackToTopButton />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
