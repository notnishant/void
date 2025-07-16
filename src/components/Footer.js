import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div className={styles.logo}>VOID</div>
        <ul className={styles.links}>
          <li><a href="#about">About</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#privacy">Privacy</a></li>
        </ul>
      </div>
      <div className={styles.footerRight}>
        <form className={styles.newsletter} onSubmit={e => e.preventDefault()}>
          <label htmlFor="newsletter" className={styles.newsletterLabel}>JOIN OUR NEWSLETTER</label>
          <div className={styles.newsletterInputGroup}>
            <input type="email" id="newsletter" placeholder="Email" className={styles.input} />
            <button type="submit" className={styles.submit}>Submit</button>
          </div>
        </form>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} VOID. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 