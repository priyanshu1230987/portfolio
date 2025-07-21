import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        left: position.x - 10,
        top: position.y - 10,
        width: '20px',
        height: '20px',
        background: 'linear-gradient(135deg, #00ffd5, #0ea5e9)',
        borderRadius: '50%',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'difference',
        transition: 'transform 0.1s ease',
        boxShadow: '0 0 15px rgba(0, 255, 213, 0.6)',
      }}
    />
  );
};

export default CustomCursor;