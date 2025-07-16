import React from 'react';
import styles from './FeaturedBlock.module.css';

const FeaturedBlock = () => {
  return (
    <section className={styles.featuredSection}>
      <div className={styles.imgPlaceholder}></div>
      <h2 className={styles.headline}>ENTER THE VOID. WORLD WIDE.</h2>
      <button className={styles.cta}>Discover the Drop</button>
    </section>
  );
};

export default FeaturedBlock; 