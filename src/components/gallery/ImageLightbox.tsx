'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/data/gallery';
import { X, ChevronLeft, ChevronRight, Sparkles, AlertCircle } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-[calc(1rem+env(safe-area-inset-top,0px))] right-3 sm:top-6 sm:right-6 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#202C2C] border border-[#DDD6CB]/30 text-white hover:text-[#087F75] hover:border-[#087F75] active:scale-95 transition-all shadow-lg"
        aria-label="Close fullscreen view"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#202C2C] border border-[#DDD6CB]/30 text-white hover:text-[#087F75] hover:border-[#087F75] active:scale-95 transition-all shadow-lg"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-[#202C2C] border border-[#DDD6CB]/30 text-white hover:text-[#087F75] hover:border-[#087F75] active:scale-95 transition-all shadow-lg"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Center Image Container */}
      <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full aspect-[16/10] max-h-[70vh] rounded-3xl overflow-hidden border border-[#252B34] shadow-2xl bg-black">
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            fill
            sizes="1200px"
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4 space-y-1.5">
          <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-accent">
            <span>{currentItem.categoryLabel}</span>
            <span>•</span>
            <span className="text-white">{currentItem.vehicle}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#738CAC]">
            {currentItem.description}
          </p>

          {!currentItem.isAuthenticWorkshopAsset && (
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#738CAC] bg-[#13171D] px-2.5 py-0.5 rounded-full mt-2 border border-[#252B34]">
              <AlertCircle className="w-3 h-3 text-accent" />
              <span>Demonstration Asset</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
