import React from 'react';
import styles from './MobileOverlay.module.css';

const MobileOverlay = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.message}>
        <h1>Experience is Better on Desktop</h1>
        <p>This website is not optimized for mobile devices. Please visit on a desktop for the best experience.</p>
      </div>
    </div>
  );
};

export default MobileOverlay;
