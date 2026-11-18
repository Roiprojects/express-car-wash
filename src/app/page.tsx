'use client';

import React from 'react';
import ScrollingCarsHero from '@/components/home/ScrollingCarsHero';
import AboutPreview from '@/components/home/AboutPreview';
import PaintProtectionSection from '@/components/home/PaintProtectionSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AccessoriesPreview from '@/components/home/AccessoriesPreview';
import PricingPreview from '@/components/home/PricingPreview';
import BranchLocations from '@/components/home/BranchLocations';
import InteractiveBeforeAfter from '@/components/home/InteractiveBeforeAfter';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';
import ConversionCTA from '@/components/home/ConversionCTA';
import { useBooking } from '@/components/layout/AppShell';

export default function HomePage() {
  const { openBooking } = useBooking();

  return (
    <>
      {/* 01: Hero with Counter-Scrolling Everyday Indian Cars */}
      <ScrollingCarsHero onOpenBooking={() => openBooking()} />

      {/* 02: Brand Overview & Philosophy */}
      <AboutPreview />

      {/* 03: Dedicated Paint Protection Section (PPF, Ceramic, Graphene) */}
      <PaintProtectionSection />

      {/* 04: Featured Services Grid */}
      <FeaturedServices onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 05: Why Vehicle Owners Choose Us Carousel */}
      <WhyChooseUs />

      {/* 06: Automotive Accessories Preview */}
      <AccessoriesPreview />

      {/* 07: Pricing Preview & Vehicle Tiers */}
      <PricingPreview onOpenBookingWithService={(id) => openBooking(id)} />

      {/* 08: 3-Branch Network Section */}
      <BranchLocations />

      {/* 09: Before / After Transformations */}
      <InteractiveBeforeAfter />

      {/* 10: Infinite Scrolling Customer Testimonials */}
      <TestimonialsPreview />

      {/* 11: Final Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </>
  );
}
