import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          {/* Shop Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Shop</h3>
            <ul className={styles.columnLinks}>
              <li><a href="#shop-all">Shop All</a></li>
              <li><a href="#new-arrivals">New Arrivals</a></li>
              <li><a href="#best-sellers">Best Sellers</a></li>
              <li><a href="#sale">Sale</a></li>
            </ul>
          </div>

          {/* About Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>About</h3>
            <ul className={styles.columnLinks}>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#family">Family</a></li>
              <li><a href="#planet">Planet</a></li>
              <li><a href="#cooperations">Cooperations</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#retailers">Retailers</a></li>
              <li><a href="#wholesale">Wholesale</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Help</h3>
            <ul className={styles.columnLinks}>
              <li><a href="#my-account">My Account</a></li>
              <li><a href="#contact-faq">Contact & FAQ</a></li>
              <li><a href="#shipping-returns">Shipping & Returns</a></li>
              <li><a href="#refer-friend">Refer A Friend</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <div className={styles.contactInfo}>
              <p><strong>Text Us:</strong> 000-0 (U.S. Only)</p>
              <p>service@voidwear.com</p>
              <p><strong>Live Chat:</strong> 11 AM – 5PM PST Daily</p>
            </div>
            <div className={styles.socialIcons}>
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#tiktok" aria-label="TikTok">🎵</a>
              <a href="#youtube" aria-label="YouTube">📺</a>
              <a href="#twitter" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className={styles.logoContainer}>
          <img src="/void-logo.png" alt="VOID" className={styles.logo} />
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <div className={styles.bottomLeft}>
          <p>&copy; {new Date().getFullYear()} Void Streetwear - Los Angeles, CA</p>
          <div className={styles.bottomLinks}>
            <a href="#accessibility">Accessibility</a>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#size">Size by VOID</a>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.certifications}>
            <span className={styles.cert}>🌍 Climate Neutral</span>
            <span className={styles.cert}>♻️ For the Planet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 