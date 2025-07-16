import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.headline}>HIT THE ROAD IN STYLE</h1>
        <p className={styles.subheadline}>Elevate Your Streetwear Game by entering the Void!</p>
        <button className={styles.cta}>Shop Now</button>
      </div>
      <div className={styles.heroImages}>
        <div className={styles.heroImgLeft}>
          {/* Placeholder for left product image */}
          <div className={styles.imgPlaceholder}></div>
        </div>
        <div className={styles.heroImgCenter}>
          {/* Placeholder for center product image */}
          <div className={styles.imgPlaceholder}></div>
        </div>
        <div className={styles.heroImgRight}>
          {/* Placeholder for right product image */}
          <div className={styles.imgPlaceholder}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 