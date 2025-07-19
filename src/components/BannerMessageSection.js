import React from 'react';
import styles from './BannerMessageSection.module.css';

const BannerMessageSection = () => (
  <section className={styles.bannerSection}>
    <div className={styles.textContent}>
      <h1 className={styles.mainText}>
        Funky, bioacetate streetwear without the heavy markup. Designed & tested beachside in <span className={styles.cursiveText}>Los Angeles, CA</span> by a close-knit family of surfers, skaters, musicians & artists.
      </h1>
    </div>
    <div className={styles.imageGrid}>
      <div className={styles.smallImage} style={{ backgroundImage: "url('/WHITELICENSEFRONT_700x.png')" }}></div>
      <div className={styles.largeImage} style={{ backgroundImage: "url('/HH_1024x.jpg.jpeg')" }}></div>
    </div>
  </section>
);

export default BannerMessageSection; 