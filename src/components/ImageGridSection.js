import React from 'react';
import styles from './ImageGridSection.module.css';

const ImageGridSection = () => {
  const gridImages = [
    { id: 1, src: `${process.env.PUBLIC_URL}/HEAVY_METAL_FRONT_700x.png`, alt: 'Heavy Metal Collection' },
    { id: 2, src: `${process.env.PUBLIC_URL}/JAPANWHITEFRONT_700x.png`, alt: 'Japan White Collection' },
    { id: 3, src: `${process.env.PUBLIC_URL}/OUTLAW_FRONT_700x.png`, alt: 'Outlaw Collection' },
    { id: 4, src: `${process.env.PUBLIC_URL}/TRAP_FRONT_700x.png`, alt: 'Trap Collection' },
    { id: 5, src: `${process.env.PUBLIC_URL}/BROWNWRLDTEE_700x.jpg.jpeg`, alt: 'Brown World Tee' },
    { id: 6, src: `${process.env.PUBLIC_URL}/MCBLUEFRONT_700x.png`, alt: 'MC Blue Collection' }
  ];

  return (
    <section className={styles.imageGridSection}>
      <div className={styles.gridContainer}>
        {gridImages.map((image) => (
          <div key={image.id} className={styles.gridItem}>
            <img 
              src={image.src} 
              alt={image.alt}
              className={styles.gridImage}
            />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.overlayText}>EXPLORE</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGridSection;