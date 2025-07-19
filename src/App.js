import React from 'react';
import './App.css';
import {
  Navbar,
  Footer,
  FullScreenImageSection,
  BannerMessageSection,
  UserGallerySection,
  Hero,
  AsymmetricalImageSection,
  RotatingText,
  HighlightBlock,
  StatementBlock,
  FeaturedBlock
} from './components';
import { useScrollDetection } from './hooks';

function App() {
  const scrolled = useScrollDetection(100);

  return (
    <>
      {/* Navigation */}
      <Navbar glass={scrolled} />

      {/* Hero Sections */}
      <FullScreenImageSection scrolled={scrolled} />
      <BannerMessageSection />
      <Hero />

      {/* Content Sections */}
      <AsymmetricalImageSection />
      <RotatingText />
      <UserGallerySection />
      <HighlightBlock />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
