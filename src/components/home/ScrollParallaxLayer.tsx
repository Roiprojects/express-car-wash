'use client';

import React, { useEffect, useState, useRef } from 'react';

interface ScrollParallaxLayerProps {
  children: (scrollProgress: number) => React.ReactNode;
}

export default function ScrollParallaxLayer({ children }: ScrollParallaxLayerProps) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate normalized scroll progress between 0 and 1 over the hero height (~800px)
  const scrollProgress = Math.min(Math.max(scrollY / 700, 0), 1);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {children(scrollProgress)}
    </div>
  );
}
