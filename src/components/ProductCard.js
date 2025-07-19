import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={styles.productImage} 
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productVariant}>{product.variant}</p>
        <p className={styles.productColors}>{product.colors}</p>
      </div>
    </div>
  );
};

export default ProductCard;