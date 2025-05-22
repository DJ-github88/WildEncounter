import React from 'react';
import './BackgroundAnimation.css';
import backgroundGif from '../../b79f9b27f5bd33fae89f352b6dfb06a5.gif';

const BackgroundAnimation = () => {
  return (
    <div className="background-animation-container">
      <img
        src={backgroundGif}
        alt="Background animation"
        className="background-animation"
      />
    </div>
  );
};

export default BackgroundAnimation;
