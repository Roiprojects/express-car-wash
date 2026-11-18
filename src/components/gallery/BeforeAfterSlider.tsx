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
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-[#E3EBE7] shadow-xl bg-white group"
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
          <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E3EBE7] text-[#438E88] font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
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
          <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white font-bold text-xs uppercase tracking-wider shadow-md">
            {item.beforeLabel}
          </div>
        </div>

        {/* Dividing Vertical Line & Central Draggable Pill */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-[#438E88] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-1 -translate-x-0.5 bg-[#438E88]/40 blur-[2px]" />

          {/* Draggable central handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#438E88] text-white flex items-center justify-center shadow-lg shadow-[#438E88]/30 border-2 border-white pointer-events-auto cursor-ew-resize transition-transform duration-150 group-hover:scale-110 active:scale-95">
            <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* Top Floating Service Badge */}
        <div className="absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E3EBE7] text-[#253C42] font-mono text-[11px] tracking-wide font-bold shadow-sm">
          {item.service} • {item.vehicle}
        </div>
      </div>

      {/* Caption & Asset Honesty Notice */}
      <div className="mt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div>
          <h4 className="font-serif font-bold text-[#253C42] text-base">{item.title}</h4>
          <p className="text-[#62747A] mt-0.5">{item.transformationDetails}</p>
        </div>

        {!item.isAuthenticWorkshopAsset && (
          <div className="flex items-center gap-1.5 text-[#62747A] text-[11px] font-mono bg-white px-3 py-1 rounded-full border border-[#E3EBE7]">
            <AlertCircle className="w-3.5 h-3.5 text-[#438E88]" />
            <span>Interactive Visual Demonstration</span>
          </div>
        )}
      </div>
    </div>
  );
}
