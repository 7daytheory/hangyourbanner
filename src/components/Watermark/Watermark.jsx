import React from 'react';

const Watermark = () => {
  return (
    <p
      className="absolute text-[2em] opacity-[0.05] bottom-0 right-[5px] text-gray-300 transform rotate-45"
      style={{ userSelect: 'none', pointerEvents: 'none', zIndex: '9999' }}
    >
      MJL
    </p>
  );
};

export default Watermark;