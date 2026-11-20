'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BEFORE_AFTER_ITEMS } from '@/data/gallery';
import BeforeAfterSlider from '@/components/gallery/BeforeAfterSlider';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function InteractiveBeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = BEFORE_AFTER_ITEMS[activeIndex];

  return (
    <section className="py-10 md:py-12 lg:py-14 bg-[#F5EBDD] border-t border-[#DDD6CB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EF] text-[#087F75] text-xs font-mono uppercase tracking-widest mb-3 font-bold border border-[#DDD6CB]">
              <Sparkles className="w-3.5 h-3.5 text-[#087F75]" />
              <span>Real Detailing Transformations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#202C2C] leading-tight tracking-tight">
              See the <span className="text-[#087F75] italic font-serif">Difference.</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#445452] leading-relaxed">
              Drag the interactive slider horizontally or use left/right arrow keys to reveal the optical depth, swirl correction, and deep interior extraction our bays achieve.
            </p>
          </div>

          {/* Transformation Switchers with Animated Highlight */}
          <div className="flex flex-wrap gap-2.5 relative">
            {BEFORE_AFTER_ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative z-10 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#202C2C] bg-white hover:text-[#087F75] border border-[#DDD6CB]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTransformTab"
                      className="absolute inset-0 bg-[#087F75] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {idx === 0 && 'Paint Polish'}
                  {idx === 1 && 'Interior Steam'}
                  {idx === 2 && 'Ceramic Hydrophobic'}
                </button>
              );
            })}
          </div>
        </div>

        {/* The Interactive Slider Component with Smooth Fade/Slide Mode Switching */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <BeforeAfterSlider item={activeItem} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gallery Link */}
        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#087F75] uppercase tracking-wider hover:text-[#06665F] transition-colors group"
          >
            <span>Explore Complete Workshop Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
