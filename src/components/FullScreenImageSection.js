import React, { useRef, useEffect, useState } from 'react';
import styles from './FullScreenImageSection.module.css';
import AudioControl from './AudioControl';

const LOGO_START = { scale: 1, width: 350, height: 350, opacity: 1 };
const LOGO_END = { scale: 0.5, width: 150, height: 150, opacity: 0.98 };
const SCROLL_DISTANCE = 220; // px to complete the transition
const NAVBAR_LEFT = 32; // px, matches navbar left padding
const NAVBAR_TOP = -28; // px, fixed offset for logo vertical alignment in navbar

function lerp(a, b, t) {
  return a + (b - a) * t;
}

const FullScreenImageSection = ({ scrolled, onScrollCheck }) => {
  const [progress, setProgress] = useState(0);
  const logoRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const t = Math.min(Math.max(scrollY / SCROLL_DISTANCE, 0), 1);
      setProgress(t);
      if (onScrollCheck) onScrollCheck(t > 0.95);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScrollCheck]);

  // Calculate center of viewport
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  // Use fixed Y offset for logo in navbar
  const logoEndY = NAVBAR_TOP + LOGO_END.height / 2;
  // Interpolate position
  const x = lerp(centerX, NAVBAR_LEFT + LOGO_END.width / 2, progress);
  const y = lerp(centerY, logoEndY, progress);
  const scale = lerp(LOGO_START.scale, LOGO_END.scale, progress);
  const width = lerp(LOGO_START.width, LOGO_END.width, progress);
  const height = lerp(LOGO_START.height, LOGO_END.height, progress);
  const opacity = lerp(LOGO_START.opacity, LOGO_END.opacity, progress);

  return (
    <section className={styles.fullScreenSection}>
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={`${process.env.PUBLIC_URL}/void_background_video.mp4`} type="video/mp4" />
      </video>
      <img
        ref={logoRef}
        src={`${process.env.PUBLIC_URL}/void-logo.png`}
        alt="VOID Logo"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: `${width}px`,
          height: `${height}px`,
          zIndex: 200,
          pointerEvents: 'none',
          transform: `translate(${x - width / 2}px, ${y - height / 2}px) scale(${scale})`,
          opacity,
          transition: 'none',
        }}
      />
      <div className={styles.overlay}>
        <div className={styles.topBar}></div>
      </div>
      <AudioControl videoRef={videoRef} />
    </section>
  );
};

export default FullScreenImageSection; 