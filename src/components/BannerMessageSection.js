import React from 'react';
import styles from './BannerMessageSection.module.css';

const BannerMessageSection = () => (
  <section className={styles.bannerSection}>
    <div className={styles.topSmall}>VOID WORLDWIDE</div>
    <div className={styles.bigText}>VOID IS HERE</div>
    <div className={styles.bottomSmall}>Something something something</div>
  </section>
);

export default BannerMessageSection; 