import React from 'react';
import styles from './RotatingText.module.css';

const RotatingText = ({ text = "ENTER THE VOID" }) => {
  // Create multiple copies for truly seamless scrolling
  const repeatedText = Array(20).fill(text).join(' • ');

  return (
    <section className={styles.scrollingBannerSection}>
      <div className={styles.scrollingContainer}>
        <div className={styles.scrollingText}>
          {repeatedText}
        </div>
        <div className={styles.scrollingText}>
          {repeatedText}
        </div>
      </div>
    </section>
  );
};

export default RotatingText;