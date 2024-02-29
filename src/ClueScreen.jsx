// ClueScreen.js
import React from 'react';

const ClueScreen = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Clue" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default ClueScreen;
