import React from 'react';
import styles from './HighlightBlock.module.css';

const HighlightBlock = () => {
  return (
    <section className={styles.highlightSection}>
      <div className={styles.content}>
        <h2 className={styles.headline}>CLOTHES THAT REDEFINE PERFECTION</h2>
        <p className={styles.text}>
          Void is your ultimate destination for trendy, street-style fashion that keeps you ahead of the curve.
        </p>
        <button className={styles.cta}>About Us</button>
      </div>
    </section>
  );
};

export default HighlightBlock; 