import React from 'react';

const HousePreview = ({ children }: any) => {
  return (
    <div
      style={{
        height: '500px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        background: '#FFE0E0',
      }}
    >
      {children}
    </div>
  );
};

export default HousePreview;
