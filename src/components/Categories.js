import React from 'react';
import styles from './Categories.module.css';

const Categories = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.heading}>CATEGORIES</h2>
      <div className={styles.categoriesGrid}>
        <div className={styles.categoryCard}>
          <div className={styles.imgPlaceholder}></div>
          <button className={styles.categoryBtn}>Shirts</button>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.imgPlaceholder}></div>
          <button className={styles.categoryBtn}>Tops</button>
        </div>
      </div>
    </section>
  );
};

export default Categories; 