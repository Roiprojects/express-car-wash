'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  Bike,
  Sparkles,
  Layers,
  Sliders,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  MoveHorizontal,
  CheckCircle2,
  ShieldAlert,
  Car,
  MapPin,
} from 'lucide-react';
import { BUSINESS_CONFIG } from '@/data/business';

interface Pillar {
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight: string;
}

export default function WhyChooseUs() {
  const pillars: Pillar[] = [
    {
      num: '01',
      title: 'Dedicated Two-Wheeler & Four-Wheeler Detailing',
      description:
        'Unlike ordinary washes that treat two-wheelers as an afterthought, we offer tailored protocols: safe low pressures around motorcycle switchgear and wiring, chain degreasing, compressed air drying, and precision polish for Activa, Jupiter, Pulsar, Splendor and all daily rides.',
      icon: Bike,
      highlight: 'Tailored bays for bikes, scooters and cars',
    },
    {
      num: '02',
      title: 'Transparent Vehicle-Tier Pricing System',
      description:
        'Clear pricing calibrated directly to your car size (Swift / i20 hatchbacks, Creta / Nexon compact SUVs, or full family XL). You know the baseline investment before booking, with no hidden surprises.',
      icon: Sliders,
      highlight: 'Transparent vehicle size tiers',
    },
    {
      num: '03',
      title: 'Self-Healing PPF & 9H/10H Ceramic Armor',
      description:
        'Dust-controlled clean application booths for optical TPU Paint Protection Film (PPF), hard quartz ceramic coatings, and graphene matrix heat dispersion shields that defend against gravel, keys, and acid rain.',
      icon: ShieldAlert,
      highlight: 'Physical film & molecular nano-shields',
    },
    {
      num: '04',
      title: 'Accessories, Wrapping & Audio Upgrades',
      description:
        'One-stop styling upgrades: alloy wheels, performance tyres, Android touchscreens, speaker setups, ambient cabin lighting, and sun-protection window films fitted with warranty-safe coupler wiring.',
      icon: Layers,
      highlight: 'Alloys, audio, tints & cabin styling',
    },
    {
      num: '05',
      title: 'Advertised 45-Minute Minimum Attention',
      description:
        'As marked on our service signboard, we uphold a minimum washing duration of 45 minutes for cars and bikes. We deliberately avoid rushed conveyor-belt cleans to ensure thorough crevice decontamination.',
      icon: ShieldCheck,
      highlight: 'Never a rushed 10-minute wipe',
    },
    {
      num: '06',
      title: '3-Branch Network Across Bengaluru',
      description:
        'Convenient workshop bays across 3 branches. Direct WhatsApp coordination gives you instant bay availability, live location pins, and prompt turnaround updates for your vehicle.',
      icon: MapPin,
      highlight: '3 branches & direct WhatsApp booking',
    },
  ];

  // Duplicate items to ensure seamless, glitch-free infinite wrapping
  const repeatedPillars = [...pillars, ...pillars, ...pillars, ...pillars];

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  // Animation & Drag state refs (keep in refs for 60fps performance)
  const posRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const setWidthRef = useRef(0);
  const cardWidthRef = useRef(380);
  const hasMovedRef = useRef(false);

  // React state for UI feedback
  const [isHovered, setIsHovered] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);

  // Measure full set width (width of 6 cards including gap)
  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.children;
    if (cards.length >= 12) {
      const card0 = cards[0] as HTMLElement;
      const card6 = cards[6] as HTMLElement;
      const card1 = cards[1] as HTMLElement;
      if (card0 && card6) {
        const measuredSetWidth = card6.offsetLeft - card0.offsetLeft;
        if (measuredSetWidth > 0) {
          setWidthRef.current = measuredSetWidth;
        }
      }
      if (card0 && card1) {
        cardWidthRef.current = card1.offsetLeft - card0.offsetLeft;
      }
    }
  }, []);

  useEffect(() => {
    measure();
    const handleResize = () => measure();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [measure]);

  // Main animation frame loop
  useEffect(() => {
    let animationFrameId: number;
    const baseSpeed = 0.85; // pixels per frame

    const tick = () => {
      // Check prefers-reduced-motion
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const isPaused = isHovered || isPausedByUser || prefersReducedMotion;

      if (!isDraggingRef.current) {
        // If momentum exists, decay smoothly
        if (Math.abs(velocityRef.current) > 0.05) {
          posRef.current += velocityRef.current;
          velocityRef.current *= 0.94; // friction
        } else if (!isPaused) {
          // Continuous right-to-left drift
          posRef.current -= baseSpeed;
        }
      }

      // Seamless infinite wrapping
      const setWidth = setWidthRef.current;
      if (setWidth > 0) {
        while (posRef.current <= -setWidth) {
          posRef.current += setWidth;
        }
        while (posRef.current > 0) {
          posRef.current -= setWidth;
        }
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isPausedByUser]);

  // Pointer drag & touch swipe handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    isDraggingRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    setIsDraggingState(true);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - lastXRef.current;
    const now = performance.now();
    const dt = now - lastTimeRef.current;

    if (Math.abs(e.clientX - startXRef.current) > 6) {
      hasMovedRef.current = true;
    }

    if (dt > 0) {
      velocityRef.current = (deltaX / dt) * 16.6;
    }

    posRef.current += deltaX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    const setWidth = setWidthRef.current;
    if (setWidth > 0) {
      while (posRef.current <= -setWidth) posRef.current += setWidth;
      while (posRef.current > 0) posRef.current -= setWidth;
    }

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDraggingState(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    velocityRef.current = Math.max(-18, Math.min(18, velocityRef.current));
  };

  const step = (direction: 'prev' | 'next') => {
    const cardStep = cardWidthRef.current || 380;
    const targetDelta = direction === 'next' ? -cardStep : cardStep;
    velocityRef.current = targetDelta / 20;
  };

  return (
    <section
      className="py-20 sm:py-24 bg-[#0C1016] border-t border-[#252B34] relative overflow-hidden select-none"
      aria-label="Why Vehicle Owners Choose Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Section Heading & Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>Why Vehicle Owners Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-[1.1]">
              ENGINEERED FOR{' '}
              <span className="text-gradient-cyan">UNCOMPROMISING CARE.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#738CAC] leading-relaxed">
              Our workshops across Bengaluru are organized around transparent standards, vehicle-specific care, dust-free application booths, and authentic accessories.
            </p>
          </div>

          {/* Interactive Navigation & Playback Controls */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#13171D] border border-[#252B34] text-xs text-[#738CAC]">
              <MoveHorizontal className="w-3.5 h-3.5 text-accent" />
              <span>Drag or hover to pause</span>
            </div>

            <button
              type="button"
              onClick={() => setIsPausedByUser((prev) => !prev)}
              aria-label={isPausedByUser ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className="p-2.5 rounded-xl bg-[#13171D] border border-[#252B34] text-[#738CAC] hover:text-white hover:border-accent transition-all duration-200"
              title={isPausedByUser ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPausedByUser ? (
                <Play className="w-4 h-4 text-accent" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => step('prev')}
              aria-label="Previous card"
              className="p-2.5 rounded-xl bg-[#13171D] border border-[#252B34] text-[#738CAC] hover:text-white hover:border-accent transition-all duration-200 active:scale-95"
              title="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => step('next')}
              aria-label="Next card"
              className="p-2.5 rounded-xl bg-[#13171D] border border-[#252B34] text-[#738CAC] hover:text-white hover:border-accent transition-all duration-200 active:scale-95"
              title="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Carousel Container */}
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden cursor-grab ${
          isDraggingState ? 'cursor-grabbing' : ''
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ touchAction: 'pan-y' }}
      >
        {/* Soft edge blur/fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#0C1016] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#0C1016] to-transparent z-10" />

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          className="flex gap-5 sm:gap-6 px-4 py-4 will-change-transform"
          style={{ width: 'max-content' }}
        >
          {repeatedPillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isFirstSet = index < 6;

            return (
              <div
                key={`${pillar.num}-${index}`}
                ref={isFirstSet && index === 0 ? firstSetRef : undefined}
                className="group relative w-[82vw] max-w-[340px] sm:w-[360px] md:w-[400px] lg:w-[420px] shrink-0 p-7 sm:p-8 rounded-[24px] bg-[#13171D] border border-[#252B34] hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(6,157,173,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Glow accent */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0C1016] border border-[#252B34] text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-bold text-[#252B34] group-hover:text-accent transition-colors duration-300">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm text-[#738CAC] leading-relaxed line-clamp-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer Highlight */}
                <div className="mt-6 pt-4 border-t border-[#252B34] flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-accent font-semibold tracking-wide">
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="max-w-7xl mx-auto px-4 mt-6 sm:hidden flex items-center justify-center gap-2 text-xs text-[#738CAC]">
        <MoveHorizontal className="w-3.5 h-3.5 text-accent" />
        <span>Swipe horizontally to browse features</span>
      </div>
    </section>
  );
}
