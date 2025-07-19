import React, { useState, useCallback } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FullScreenImageSection from './components/FullScreenImageSection';
import BannerMessageSection from './components/BannerMessageSection';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const handleScrollCheck = useCallback((isScrolled) => {
    setScrolled(isScrolled);
  }, []);

  return (
    <>
      <Navbar glass={scrolled} />
      <FullScreenImageSection scrolled={scrolled} onScrollCheck={handleScrollCheck} />
      <BannerMessageSection />
      <Hero />
    </>
  );
}

export default App;
