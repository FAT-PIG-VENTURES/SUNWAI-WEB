'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = () => {
      // Check if hovering over a clickable element
      const elements = document.querySelectorAll(':hover');
      let hovering = false;
      
      elements.forEach(el => {
        const tag = el.tagName.toLowerCase();
        if (tag === 'a' || tag === 'button' || el.classList.contains('btn') || window.getComputedStyle(el).cursor === 'pointer') {
          hovering = true;
        }
      });
      
      setIsHovering(hovering);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousemove', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', updateHoverState);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`custom-cursor-dot ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
