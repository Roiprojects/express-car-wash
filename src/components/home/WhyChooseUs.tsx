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
  MapPin,
} from 'lucide-react';

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

  // Duplicate items to ensure seamless infinite wrapping
  const repeatedPillars = [...pillars, ...pillars, ...pillars, ...pillars];

  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  // Animation & Drag state refs
  const posRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const setWidthRef = useRef(0);
  const cardWidthRef = useRef(380);

  // React state for UI feedback
  const [isHovered, setIsHovered] = useState(false);
  const [isPausedByUser, setIsPausedByUser] = useState(false);
  const [isDraggingState, setIsDraggingState] = useState(false);

  // Measure full set width
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
    const baseSpeed = 0.85;

    const tick = () => {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const isPaused = isHovered || isPausedByUser || prefersReducedMotion;

      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.05) {
          posRef.current += velocityRef.current;
          velocityRef.current *= 0.94;
        } else if (!isPaused) {
          posRef.current -= baseSpeed;
        }
      }

      const setWidth = setWidthRef.current;
      if (setWidth > 0) {
        while (posRef.current <= -setWidth) posRef.current += setWidth;
        while (posRef.current > 0) posRef.current -= setWidth;
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
      className="py-20 sm:py-24 bg-[#F1F7F3] border-t border-[#E3EBE7] relative overflow-hidden select-none"
      aria-label="Why Vehicle Owners Choose Us"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        {/* Section Heading & Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-3 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Why Vehicle Owners Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#253C42] leading-[1.1] tracking-tight">
              Engineered for{' '}
              <span className="text-[#438E88] italic font-serif">Uncompromising Care.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#62747A] leading-relaxed">
              Our workshops across Bengaluru are organized around transparent standards, vehicle-specific care, dust-free application booths, and authentic accessories.
            </p>
          </div>

          {/* Interactive Navigation & Playback Controls */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E3EBE7] text-xs text-[#62747A] shadow-sm">
              <MoveHorizontal className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Drag or hover to pause</span>
            </div>

            <button
              type="button"
              onClick={() => setIsPausedByUser((prev) => !prev)}
              aria-label={isPausedByUser ? 'Resume auto-scroll' : 'Pause auto-scroll'}
              className="p-2.5 rounded-xl bg-white border border-[#E3EBE7] text-[#62747A] hover:text-[#438E88] hover:border-[#438E88]/40 transition-all duration-200 shadow-sm"
              title={isPausedByUser ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPausedByUser ? (
                <Play className="w-4 h-4 text-[#438E88]" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>

            <button
              type="button"
              onClick={() => step('prev')}
              aria-label="Previous card"
              className="p-2.5 rounded-xl bg-white border border-[#E3EBE7] text-[#62747A] hover:text-[#438E88] hover:border-[#438E88]/40 transition-all duration-200 active:scale-95 shadow-sm"
              title="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => step('next')}
              aria-label="Next card"
              className="p-2.5 rounded-xl bg-white border border-[#E3EBE7] text-[#62747A] hover:text-[#438E88] hover:border-[#438E88]/40 transition-all duration-200 active:scale-95 shadow-sm"
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
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[#F1F7F3] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[#F1F7F3] to-transparent z-10" />

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
                className="group relative w-[82vw] max-w-[340px] sm:w-[360px] md:w-[400px] lg:w-[420px] shrink-0 p-7 sm:p-8 rounded-[24px] bg-white border border-[#E3EBE7] hover:border-[#438E88] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_8px_30px_rgba(37,60,66,0.06)]"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#E4F2EF] text-[#438E88] flex items-center justify-center group-hover:bg-[#438E88] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xl font-bold text-[#E3EBE7] group-hover:text-[#438E88] transition-colors duration-300">
                      {pillar.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#253C42] group-hover:text-[#438E88] transition-colors duration-300 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm text-[#62747A] leading-relaxed line-clamp-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer Highlight */}
                <div className="mt-6 pt-4 border-t border-[#E3EBE7] flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#438E88] shrink-0" />
                  <span className="text-[#438E88] font-bold tracking-wide">
                    {pillar.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="max-w-7xl mx-auto px-4 mt-6 sm:hidden flex items-center justify-center gap-2 text-xs text-[#62747A]">
        <MoveHorizontal className="w-3.5 h-3.5 text-[#438E88]" />
        <span>Swipe horizontally to browse features</span>
      </div>
    </section>
  );
}
