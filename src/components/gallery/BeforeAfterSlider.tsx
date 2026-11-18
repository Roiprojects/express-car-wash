'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { BeforeAfterItem } from '@/data/gallery';
import { Sparkles, MoveHorizontal, AlertCircle } from 'lucide-react';

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
  className?: string;
}

export default function BeforeAfterSlider({ item, className = '' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedPercentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(prev - 5, 0));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(prev + 5, 100));
    }
  };

  return (
    <div className={`relative flex flex-col ${className}`}>
      {/* Slider Viewport Container */}
      <div
        ref={containerRef}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Interactive transformation slider for ${item.title}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        data-cursor-text="DRAG"
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-[#DDD6CB] shadow-xl bg-white group"
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={item.afterImage}
            alt={`${item.title} - After transformation`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 z-10 px-4 py-2 rounded-full bg-white border border-[#DDD6CB] text-[#087F75] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#087F75]" />
            <span>{item.afterLabel}</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={item.beforeImage}
            alt={`${item.title} - Before detailing`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 z-10 px-4 py-2 rounded-full bg-[#202C2C]/85 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md">
            {item.beforeLabel}
          </div>
        </div>

        {/* The Vertical Divider Line & Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#087F75] pointer-events-none z-20 shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#087F75] text-[#087F75] flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
            <MoveHorizontal className="w-5 h-5 text-[#087F75]" />
          </div>
        </div>
      </div>

      {/* Info Card Below Slider */}
      <div className="mt-6 p-6 rounded-3xl bg-white border border-[#DDD6CB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <span className="text-xs font-mono text-[#087F75] uppercase tracking-wider font-bold">
            {item.service} • {item.vehicle}
          </span>
          <h3 className="text-xl font-serif font-bold text-[#202C2C] mt-0.5">
            {item.title}
          </h3>
          <p className="text-sm text-[#445452] mt-1">
            {item.transformationDetails}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#52615E] font-medium shrink-0 bg-[#F5EBDD] px-4 py-2.5 rounded-full border border-[#DDD6CB]">
          <MoveHorizontal className="w-4 h-4 text-[#087F75]" />
          <span>Drag slider or press Left/Right keys</span>
        </div>
      </div>
    </div>
  );
}
