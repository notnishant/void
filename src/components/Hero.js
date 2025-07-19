import React from 'react';
import styles from './Hero.module.css';
import SecondImageGridSection from './SecondImageGridSection';

const Hero = () => {
  const products = [
    { name: 'The Street Classic', variant: 'Crystal Black Bio', colors: '(+5 Colors)', image: '/voidbackground.jpg' },
    { name: 'The Urban Edge', variant: 'Polarized Smoke Bio', colors: '(+2 Colors)', image: '/voidbackground1.jpg' },
    { name: 'The Night Rider', variant: 'Crystal Cherry Bio', colors: '(+3 Colors)', image: '/voidbackground.jpg' },
    { name: 'The City Pulse', variant: 'Licorice Bio', colors: '(+4 Colors)', image: '/voidbackground1.jpg' },
    { name: 'The Metro Flow', variant: 'Crystal Stone Bio', colors: '(+2 Colors)', image: '/voidbackground.jpg' },
    { name: 'The Urban Wave', variant: 'Black Moondust Bio', colors: '(+3 Colors)', image: '/voidbackground1.jpg' },
    { name: 'The Street Beat', variant: 'Polarized Lunar Bio', colors: '(+3 Colors)', image: '/voidbackground.jpg' },
    { name: 'The City Groove', variant: 'Crystal Cherry Bio', colors: '(+2 Colors)', image: '/voidbackground1.jpg' },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.imageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productVariant}>{product.variant}</p>
                <p className={styles.productColors}>{product.colors}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaContainer}>
          <button className={styles.cta}>Shop Best Sellers</button>
        </div>
      </section>
      <SecondImageGridSection />
    </>
  );
};

export default Hero; 