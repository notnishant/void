import React from 'react';
import styles from './UserGallerySection.module.css';

const UserGallerySection = () => {
  const userPosts = [
    { id: 1, username: '@voidstyle', image: '/17_700x.jpg.jpeg' },
    { id: 2, username: '@streetfam', image: '/16_700x.jpg.jpeg' },
    { id: 3, username: '@voidcrew', image: '/14_700x.jpg.jpeg' },
    { id: 4, username: '@stylehunter', image: '/12_700x.jpg.jpeg' },
    { id: 5, username: '@voidvibes', image: '/10_700x.jpg.jpeg' },
    { id: 6, username: '@streetwear', image: '/098_700x.jpg.jpeg' },
    { id: 7, username: '@voidfam', image: '/OOOI_700x.jpg.jpeg' },
    { id: 8, username: '@urbanstyle', image: '/HH_700x.jpg.jpeg' },
    { id: 9, username: '@voidlover', image: '/PIC3_700x.jpg.jpeg' },
    { id: 10, username: '@streetvibes', image: '/PIC1_700x.jpg.jpeg' }
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