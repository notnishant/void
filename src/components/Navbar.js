import React from 'react';
import styles from './Navbar.module.css';
import AccountCartSection from './AccountCartSection';
import { NAV_LINKS } from '../constants';

const Navbar = ({ glass }) => {
  return (
    <nav className={glass ? `${styles.navbar} ${styles.glass}` : styles.navbar}>
      {glass && (
        <div className={styles.glassBg}>
          <div 
            className={styles.noiseOverlay}
            style={{
              backgroundImage: "url('/noise_texture.png')"
            }}
          />
        </div>
      )}
      <div className={styles.contentWrap}>
        <div className={styles.left}></div>
        <div className={styles.center}>
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
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