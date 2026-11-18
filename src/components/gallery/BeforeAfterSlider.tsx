'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { BeforeAfterItem } from '@/data/gallery';
import { Sparkles, MoveHorizontal, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  item: BeforeAfterItem;
  className?: string;
}

export default function BeforeAfterSlider({ item, className = '' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture was already lost
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(prev - 4, 0));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(prev + 4, 100));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
    }
  };

  return (
    <div className={`relative flex flex-col ${className}`}>
      {/* Interactive Slider Viewport */}
      <div
        ref={containerRef}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Interactive before and after comparison slider for ${item.title}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border-2 border-[#DDD6CB] shadow-xl bg-[#202C2C] touch-none focus:outline-none focus:ring-4 focus:ring-[#087F75]/30 group"
      >
        {/* ============================================================ */}
        {/* AFTER IMAGE (Bottom Layer - Revealed as slider moves left)   */}
        {/* ============================================================ */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src={item.afterImage}
            alt={`${item.title} - After treatment`}
            fill
            sizes="(max-width: 768px) 100vw, 1400px"
            className="object-cover object-center"
            priority
            quality={95}
          />
          {/* Subtle bottom edge gradient for badge contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* AFTER Badge Label (Bottom Right) */}
          <div className="absolute bottom-4 right-4 z-10 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#DDD6CB] text-[#087F75] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#087F75]" />
            <span>{item.afterLabel}</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* BEFORE IMAGE (Top Layer - Clipped horizontally via clipPath) */}
        {/* ============================================================ */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={item.beforeImage}
            alt={`${item.title} - Before treatment`}
            fill
            sizes="(max-width: 768px) 100vw, 1400px"
            className="object-cover object-center"
            priority
            quality={95}
          />
          {/* Subtle bottom edge gradient for badge contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

          {/* BEFORE Badge Label (Bottom Left) */}
          <div className="absolute bottom-4 left-4 z-10 px-4 py-2 rounded-full bg-[#202C2C]/90 backdrop-blur-md border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>{item.beforeLabel}</span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* VERTICAL DIVIDER LINE & DRAG HANDLE                          */}
        {/* ============================================================ */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none z-30 shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-transform duration-75"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Grab Handle */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#087F75] text-[#087F75] flex items-center justify-center shadow-[0_8px_25px_rgba(8,127,117,0.35)] transition-all duration-200 ${
              isDragging
                ? 'scale-110 ring-4 ring-[#087F75]/30'
                : 'group-hover:scale-105'
            }`}
          >
            <div className="flex items-center -space-x-1">
              <ChevronLeft className="w-4 h-4 text-[#087F75] stroke-[3]" />
              <ChevronRight className="w-4 h-4 text-[#087F75] stroke-[3]" />
            </div>
          </div>
        </div>
      </div>

      {/* Info Card Below Slider */}
      <div className="mt-6 p-6 sm:p-7 rounded-3xl bg-white border border-[#DDD6CB] flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-[0_8px_30px_rgba(32,44,44,0.05)]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-mono text-[#087F75] uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-[#F5EBDD] border border-[#DDD6CB]">
              {item.service}
            </span>
            <span className="text-xs text-[#52615E] font-semibold">
              Vehicle: {item.vehicle}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#202C2C] mt-2">
            {item.title}
          </h3>
          <p className="text-sm sm:text-base text-[#445452] mt-1.5 leading-relaxed max-w-2xl">
            {item.transformationDetails}
          </p>
        </div>

        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#202C2C] font-semibold shrink-0 bg-[#F5EBDD] px-4 py-3 rounded-2xl border border-[#DDD6CB] self-start md:self-center shadow-sm">
          <MoveHorizontal className="w-4 h-4 text-[#087F75]" />
          <span>Drag handle horizontally or use Left/Right keys</span>
        </div>
      </div>
    </div>
  );
}
