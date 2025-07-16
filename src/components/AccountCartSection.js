import React from 'react';
import styles from './AccountCartSection.module.css';

const AccountCartSection = () => {
  return (
    <div className={styles.container}>
      <button className={styles.iconBtn} aria-label="Account">
        {/* User SVG icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-7 8-7s8 3 8 7"/></svg>
      </button>
      <button className={styles.iconBtn} aria-label="Cart">
        {/* Cart SVG icon */}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
      </button>
    </div>
  );
};

export default AccountCartSection; 