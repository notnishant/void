import React from 'react';

const SecondImageGridSection = () => {
  return (
    <div style={{
      background: '#111',
      minHeight: '100vh',
      width: '100%',
      padding: '40px 20px',
      position: 'relative',
      zIndex: 999
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '20px',
        maxWidth: '1800px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          height: '80vh',
          backgroundImage: "url('/voidbackground1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          position: 'sticky',
          top: '20px'
        }}></div>
        <div style={{
          aspectRatio: '9/16',
          backgroundImage: "url('/voidbackground.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px'
        }}></div>
      </div>
    </div>
  );
};

export default SecondImageGridSection; 