import React from 'react';
import styles from './Navbar.module.css';
import AccountCartSection from './AccountCartSection';

const Navbar = ({ glass }) => {
  return (
    <nav className={glass ? `${styles.navbar} ${styles.glass}` : styles.navbar}>
      {glass && (
        <div className={styles.glassBg}>
          <div
            className={styles.noiseOverlay}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: "url('/noise_texture.png')",
              backgroundRepeat: 'repeat',
              opacity: 0.02,
              mixBlendMode: 'soft-light',
              pointerEvents: 'none',
              zIndex: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
            }}
          />
        </div>
      )}
      <div className={styles.contentWrap}>
        <div className={styles.left}></div>
        <div className={styles.center}>
          <ul className={styles.navLinks}>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>
        <div className={styles.right}>
          <AccountCartSection />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 