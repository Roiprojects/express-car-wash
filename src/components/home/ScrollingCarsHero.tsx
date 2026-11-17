'use client';

import React from 'react';
import ScrollParallaxLayer from './ScrollParallaxLayer';
import CarMarqueeRow from './CarMarqueeRow';
import HeroContent from './HeroContent';
import { HERO_ROW_1_CARS, HERO_ROW_2_CARS } from '@/data/everydayCars';

interface ScrollingCarsHeroProps {
  onOpenBooking: () => void;
}

export default function ScrollingCarsHero({ onOpenBooking }: ScrollingCarsHeroProps) {
  return (
    <section className="relative w-full min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-80px)] flex items-center justify-center overflow-hidden bg-[#0C1016]">
      <ScrollParallaxLayer>
        {(progress) => (
          <div className="relative w-full min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-80px)] flex items-center justify-center py-12 md:py-16">
            {/* LAYER 1 & 2: CONTINUOUSLY SCROLLING EVERYDAY CAR ROWS */}
            <div className="absolute inset-0 flex flex-col justify-center gap-6 sm:gap-10 pointer-events-none overflow-hidden select-none z-0 opacity-90">
              {/* ROW ONE: Swift, Baleno, i20, Dzire, Nexon (Direction: RIGHT TO LEFT) */}
              <div
                style={{
                  transform: `translate3d(0, -${progress * 60}px, 0)`,
                  transition: 'transform 0.1s ease-out',
                }}
                className="w-full will-change-transform"
              >
                <CarMarqueeRow
                  cars={HERO_ROW_1_CARS}
                  direction="left"
                  speedSeconds={28}
                />
              </div>

              {/* ROW TWO: Creta, Punch, Sonet, Brezza, Grand i10 (Direction: LEFT TO RIGHT) */}
              <div
                style={{
                  transform: `translate3d(0, ${progress * 60}px, 0)`,
                  transition: 'transform 0.1s ease-out',
                }}
                className="w-full will-change-transform"
              >
                <CarMarqueeRow
                  cars={HERO_ROW_2_CARS}
                  direction="right"
                  speedSeconds={32}
                />
              </div>
            </div>

            {/* LAYER 3: DARK NAVY OVERLAY FOR LEGIBILITY */}
            <div className="absolute inset-0 pointer-events-none z-10 [background:radial-gradient(circle_at_50%_50%,rgba(12,16,22,0.92)_0%,rgba(12,16,22,0.70)_50%,rgba(12,16,22,0.30)_100%)]" />

            {/* Refined Cyan Glow Spotlight Centered behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[340px] bg-accent/10 blur-[130px] rounded-full pointer-events-none z-10" />

            {/* LAYER 4: CENTRAL HERO HEADLINE & ACTIONS */}
            <div
              style={{
                transform: `translate3d(0, -${progress * 35}px, 0)`,
                opacity: 1 - progress * 0.7,
                transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
              }}
              className="relative w-full z-20 will-change-transform"
            >
              <HeroContent onOpenBooking={onOpenBooking} />
            </div>
          </div>
        )}
      </ScrollParallaxLayer>
    </section>
  );
}
