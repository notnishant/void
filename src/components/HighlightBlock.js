import React, { useState } from 'react';
import styles from './HighlightBlock.module.css';

const HighlightBlock = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className={styles.highlightSection}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.headline}>
            Stay tuned,<br />
            next drop
          </h2>
          <p className={styles.text}>Drops, Sales, Music, and more...</p>
        </div>
        <div className={styles.signupContainer}>
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <label htmlFor="email" className={styles.emailLabel}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.emailInput}
              placeholder="Enter your email"
              required
            />
            <button type="submit" className={styles.signupButton}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HighlightBlock; 