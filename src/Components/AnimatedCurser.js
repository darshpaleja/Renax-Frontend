import React, { useEffect, useState } from 'react';

function AnimatedCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    const hoverableElements = [
      'input',
      'label',
      'select',
      'textarea',
      'button',
      'a.link', 
    ];

    const handleHover = (event) => {
      if (hoverableElements.some(selector => event.target.matches(selector))) {
        handleMouseEnter();
      } else {
        handleMouseLeave();
      }
    };

    window.addEventListener('mouseover', handleHover);
    window.addEventListener('mouseout', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHover);
      window.removeEventListener('mouseout', handleHover);
    };
  }, []);

  const dotStyle = {
    position: 'fixed',
    width: isHovering ? '40px' : '14px', 
    height: isHovering ? '40px' : '14px',
    backgroundColor: isHovering ? 'orange' : 'orange', 
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    opacity: isHovering ? '0.7' : '1',
    left: `${cursorPosition.x}px`,
    top: `${cursorPosition.y}px`,
    transition: 'all 0.1s ease', 
    zIndex: 9999,
  };

  return (
    <div style={dotStyle} />
  );
}

export default AnimatedCursor;
