import React from 'react';

const Ball = ({ x, y, size }) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: `calc(${x}px - 2.45vh)`,
        top: `${y}vh`,
        width: `${size}vh`,
        height: `${size}vh`,
        borderRadius: '50%',
        backgroundColor: 'white',
      }}
    />
  );
};

export default Ball;
