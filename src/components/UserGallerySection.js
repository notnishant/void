import React from 'react';
import styles from './UserGallerySection.module.css';

const UserGallerySection = () => {
  const userPosts = [
    { id: 1, username: '@voidstyle', image: `${process.env.PUBLIC_URL}/17_700x.jpg.jpeg` },
    { id: 2, username: '@streetfam', image: `${process.env.PUBLIC_URL}/16_700x.jpg.jpeg` },
    { id: 3, username: '@voidcrew', image: `${process.env.PUBLIC_URL}/14_700x.jpg.jpeg` },
    { id: 4, username: '@stylehunter', image: `${process.env.PUBLIC_URL}/12_700x.jpg.jpeg` },
    { id: 5, username: '@voidvibes', image: `${process.env.PUBLIC_URL}/10_700x.jpg.jpeg` },
    { id: 6, username: '@streetwear', image: `${process.env.PUBLIC_URL}/098_700x.jpg.jpeg` },
    { id: 7, username: '@voidfam', image: `${process.env.PUBLIC_URL}/OOOI_700x.jpg.jpeg` },
    { id: 8, username: '@urbanstyle', image: `${process.env.PUBLIC_URL}/HH_700x.jpg.jpeg` },
    { id: 9, username: '@voidlover', image: `${process.env.PUBLIC_URL}/PIC3_700x.jpg.jpeg` },
    { id: 10, username: '@streetvibes', image: `${process.env.PUBLIC_URL}/PIC1_700x.jpg.jpeg` }
  ];

  return (
    <section className={styles.userGallerySection}>
      <div className={styles.header}>
        <h2 className={styles.tagline}>ON THE STREET</h2>
      </div>
      <div className={styles.scrollContainer}>
        <div className={styles.galleryGrid}>
          {userPosts.map((post) => (
            <div key={post.id} className={styles.userPost}>
              <div className={styles.imageContainer}>
                <img 
                  src={post.image} 
                  alt={`${post.username} wearing VOID`}
                  className={styles.userImage}
                />
              </div>
              <p className={styles.username}>{post.username}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserGallerySection;