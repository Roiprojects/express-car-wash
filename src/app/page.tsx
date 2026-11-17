'use client';

import React from 'react';
import ScrollingCarsHero from '@/components/home/ScrollingCarsHero';
import AboutPreview from '@/components/home/AboutPreview';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedServices from '@/components/home/FeaturedServices';
import PricingPreview from '@/components/home/PricingPreview';
import InteractiveBeforeAfter from '@/components/home/InteractiveBeforeAfter';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import ConversionCTA from '@/components/home/ConversionCTA';
import { useBooking } from '@/components/layout/AppShell';

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 02: Animated Scrolling Everyday Cars Hero */}
      <ScrollingCarsHero onOpenBooking={() => openBooking()} />

      {/* 03: About Preview */}
      <AboutPreview />

      {/* 04: Why Choose Us */}
      <WhyChooseUs />

      {/* 05: Featured Services */}
      <FeaturedServices onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 06: Pricing Preview */}
      <PricingPreview onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 07: Before / After Transformations */}
      <InteractiveBeforeAfter />

      {/* 08: Customer Experiences Preview */}
      <TestimonialsPreview />

      {/* 09: Final Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </>
  );
}
