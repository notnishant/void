import React from 'react';
import styles from './AsymmetricalImageSection.module.css';
import Button from './Button';

const AsymmetricalImageSection = () => {
  return (
    <section className={styles.asymmetricalSection}>
      <div className={styles.imageGrid}>
        <div className={styles.largeImage} style={{ backgroundImage: "url('/PIC1_1024x.jpg.jpeg')" }}>
          <div className={styles.textOverlay}>
            <div className={styles.textContent}>
              <h2 className={styles.collectionTitle}>SIGNATURE COLLECTION</h2>
              <p className={styles.collectionSubtitle}>Discover our most iconic streetwear pieces</p>
              <Button variant="primary" size="medium" className={styles.shopButton}>
                Shop Collection
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.smallImage} style={{ backgroundImage: "url('/PIC3_700x.jpg.jpeg')" }}></div>
      </div>
    </section>
  );
};

export default AsymmetricalImageSection;