'use client';

import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === 'undefined') return;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    let animFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check for custom cursor instructions
      const customLabel = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      if (customLabel) {
        setCursorText(customLabel);
        setIsPointer(true);
      } else {
        setCursorText('');
        const isClickable = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"]')
        );
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Smooth trailing animation loop
    const renderLoop = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animFrame = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animFrame = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animFrame);
    };
  }, [position.x, position.y]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer ring / pill */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-accent/80 transition-all duration-150 flex items-center justify-center pointer-events-none ${
          cursorText
            ? 'w-16 h-16 bg-accent text-white font-black text-[10px] tracking-widest uppercase shadow-lg shadow-accent/40'
            : isPointer
            ? 'w-12 h-12 bg-accent/15 border-accent scale-110'
            : 'w-8 h-8 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (cursorText ? 32 : isPointer ? 24 : 16)}px, ${
            trailingPos.y - (cursorText ? 32 : isPointer ? 24 : 16)
          }px, 0)`,
        }}
      >
        {cursorText && <span>{cursorText}</span>}
      </div>

      {/* Center dot */}
      {!cursorText && (
        <div
          className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none transition-transform duration-75 ${
            isPointer ? 'scale-0' : 'scale-100'
          }`}
          style={{
            transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          }}
        />
      )}
    </div>
  );
}
