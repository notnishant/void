import React from 'react';
import styles from './ImageGridSection.module.css';

const ImageGridSection = () => {
  return (
    <section className={styles.imageGridSection}>
      <div className={styles.imageGrid}>
        <div className={styles.largeImage} style={{ backgroundImage: "url('/voidbackground.jpg')" }}></div>
        <div className={styles.smallImage} style={{ backgroundImage: "url('/voidbackground1.jpg')" }}></div>
      </div>
    </section>
  );
};

export default ImageGridSection; 