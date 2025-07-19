import React from 'react';
import styles from './Hero.module.css';
import ProductCard from './ProductCard';
import Button from './Button';
import { PRODUCTS } from '../constants';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.productGrid}>
        {PRODUCTS.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <div className={styles.ctaContainer}>
        <Button variant="primary" size="medium">
          Shop Best Sellers
        </Button>
      </div>
    </section>
  );
};

export default Hero; 