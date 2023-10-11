import React, { useState } from 'react';

const HoverMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Center vertically
    width: '100vw',  // Center horizontally
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={containerStyle}
    >
      <span
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me!
      </span>
      {showMessage && (
        <div>
          Thanks for hovering
        </div>
      )}
    </div>
  );
};

export default HoverMessage;
