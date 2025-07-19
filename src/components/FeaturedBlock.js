import React from 'react';
import styles from './FeaturedBlock.module.css';
import Button from './Button';
import { CONTENT_BLOCKS } from '../constants';

const FeaturedBlock = () => {
  const { headline, cta } = CONTENT_BLOCKS.featured;
  
  return (
    <section className={styles.featuredSection}>
      <div className={styles.imgPlaceholder}></div>
      <h2 className={styles.headline}>{headline}</h2>
      <Button variant="primary" size="medium">
        {cta}
      </Button>
    </section>
  );
};

export default FeaturedBlock; 