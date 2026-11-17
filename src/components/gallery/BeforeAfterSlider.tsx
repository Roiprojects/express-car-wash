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
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
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
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-[#252B34] shadow-2xl bg-[#0C1016] group"
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
          <div className="absolute bottom-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-[#0C1016]/85 backdrop-blur-md border border-[#252B34] text-accent font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
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
          <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#0C1016]/85 backdrop-blur-md border border-[#252B34] text-white font-bold text-xs uppercase tracking-wider shadow-md">
            {item.beforeLabel}
          </div>
        </div>

        {/* Dividing Vertical Line & Central Draggable Pill */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-accent pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Subtle line glow */}
          <div className="absolute inset-0 w-1 -translate-x-0.5 bg-accent/60 blur-[2px]" />

          {/* Draggable central handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center shadow-xl shadow-accent/40 border-2 border-[#13171D] pointer-events-auto cursor-ew-resize transition-transform duration-150 group-hover:scale-110 active:scale-95">
            <MoveHorizontal className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* Top Floating Service Badge */}
        <div className="absolute top-4 left-4 z-20 px-3.5 py-1 rounded-full bg-[#0C1016]/85 backdrop-blur-md border border-[#252B34] text-white font-mono text-[11px] tracking-wide font-medium shadow-sm">
          {item.service} • {item.vehicle}
        </div>
      </div>

      {/* Caption & Asset Honesty Notice */}
      <div className="mt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
        <div>
          <h4 className="font-extrabold text-white text-base">{item.title}</h4>
          <p className="text-[#738CAC] mt-0.5">{item.transformationDetails}</p>
        </div>

        {!item.isAuthenticWorkshopAsset && (
          <div className="flex items-center gap-1.5 text-[#738CAC] text-[11px] font-mono bg-[#13171D] px-3 py-1 rounded-md border border-[#252B34]">
            <AlertCircle className="w-3.5 h-3.5 text-accent" />
            <span>Interactive Visual Demonstration Placeholder</span>
          </div>
        )}
      </div>
    </div>
  );
}
