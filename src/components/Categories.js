import React from 'react';
import styles from './Categories.module.css';
import { CATEGORIES } from '../constants';

const Categories = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.heading}>CATEGORIES</h2>
      <div className={styles.categoriesGrid}>
        {CATEGORIES.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <div className={styles.imgPlaceholder}></div>
            <button className={styles.categoryBtn}>{category.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories; 