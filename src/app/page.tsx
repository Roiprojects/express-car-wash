'use client';

import React from 'react';
import LightHeroSection from '@/components/home/LightHeroSection';
import EverydayCarsStrip from '@/components/home/EverydayCarsStrip';
import AboutPreview from '@/components/home/AboutPreview';
import FeaturedServices from '@/components/home/FeaturedServices';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import PricingPreview from '@/components/home/PricingPreview';
import InteractiveBeforeAfter from '@/components/home/InteractiveBeforeAfter';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import ConversionCTA from '@/components/home/ConversionCTA';
import { useBooking } from '@/components/layout/AppShell';

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 01: Light-Theme Hero Section */}
      <LightHeroSection onOpenBooking={() => openBooking()} />

      {/* 02: Subtle Secondary Everyday Cars Counter-Scrolling Rows */}
      <EverydayCarsStrip />

      {/* 03: Brand Overview & Philosophy */}
      <AboutPreview />

      {/* 04: Featured Services Grid */}
      <FeaturedServices onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 05: Why Vehicle Owners Choose Us Marquee */}
      <WhyChooseUs />

      {/* 06: Pricing Preview & Vehicle Tiers */}
      <PricingPreview onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 07: Before / After Transformations */}
      <InteractiveBeforeAfter />

      {/* 08: Infinite Scrolling Customer Testimonials */}
      <TestimonialsPreview />

      {/* 09: Final Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </>
  );
}
