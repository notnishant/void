import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import HighlightBlock from './components/HighlightBlock';
import StatementBlock from './components/StatementBlock';
import FeaturedBlock from './components/FeaturedBlock';
import Footer from './components/Footer';
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
      <Categories />
      <HighlightBlock />
      <StatementBlock />
      <FeaturedBlock />
      <Footer />
    </>
  );
}

export default App;
