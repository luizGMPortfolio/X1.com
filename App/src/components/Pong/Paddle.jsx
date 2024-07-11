import React from 'react';

const Paddle = ({ x, y, width, height , side}) => {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius:'20px',
        [side]: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'white',
        transition: '100ms'
      }}
    />
  );
};

export default Paddle;
