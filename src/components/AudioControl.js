import React, { useState } from 'react';
import styles from './AudioControl.module.css';

const AudioControl = ({ videoRef }) => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className={styles.audioControl}>
      <button 
        className={styles.iconBtn} 
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          // Muted icon with red cross
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="white"/>
            <line x1="23" y1="9" x2="17" y2="15" stroke="#FF0033"/>
            <line x1="17" y1="9" x2="23" y2="15" stroke="#FF0033"/>
          </svg>
        ) : (
          // Unmuted icon
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default AudioControl;