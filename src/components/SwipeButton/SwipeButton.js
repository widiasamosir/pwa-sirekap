import React, { useState } from 'react';
import './SwipeButton.css';

function SwipeButton({ setShowConfirmDialog }) {
  const [isSwiped, setIsSwiped] = useState(false);

  const onSwipeComplete = () => {
    console.log('Swiped!');
    setIsSwiped(true);
    // Show the confirm dialog by updating the state
    setShowConfirmDialog(true);
  };

  const handleMouseDown = (e) => {
    const startPosition = e.clientX;
    const threshold = 150;

    const handleMouseMove = (moveEvent) => {
      if (moveEvent.clientX - startPosition > threshold) {
        onSwipeComplete();
        document.removeEventListener('mousemove', handleMouseMove);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }, { once: true });
  };

  return (
    <div className={`swipe-button ${isSwiped ? 'swiped' : ''}`} onMouseDown={handleMouseDown}>
      <div className="icon">&#x27A4;</div>
      <span>Kunci & Buat Dokumen</span>
    </div>
  );
}

export default SwipeButton;
