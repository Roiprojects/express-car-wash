'use client';

import React from 'react';
import Link from 'next/link';
import { REVIEWS_DATA, TESTIMONIALS_CONFIG, CustomerReview } from '@/data/reviews';
import { Star, ShieldCheck, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

function TestimonialCard({
  review,
  isDuplicate = false,
}: {
  review: CustomerReview;
  isDuplicate?: boolean;
}) {
  return (
    <div
      className="w-[82vw] max-w-[340px] sm:w-[360px] md:w-[380px] lg:w-[410px] shrink-0 p-6 sm:p-7 rounded-3xl bg-[#13171D] border border-[#252B34] flex flex-col justify-between shadow-xl min-h-[270px] sm:min-h-[280px] select-none transition-colors duration-300"
      {...(isDuplicate ? { tabIndex: -1 } : {})}
    >
      <div>
        {/* Star Rating & 5-Star Index */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-accent">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-accent" />
            ))}
          </div>
          <span className="font-mono text-xs font-bold text-[#738CAC]/50">
            05
          </span>
        </div>

        {/* Review Quote */}
        <p className="text-xs sm:text-sm text-white/95 leading-relaxed italic line-clamp-4">
          &ldquo;{review.content}&rdquo;
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="mt-6 pt-4 border-t border-[#252B34]">
        <div className="flex items-center justify-between">
          <div className="font-bold text-sm text-white">{review.author}</div>
          <div className="flex items-center gap-1 text-[10px] text-accent font-mono font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            <span>Verified</span>
          </div>
        </div>

        <div className="text-xs text-[#738CAC] mt-0.5 font-medium">
          {review.vehicle}
        </div>
        <div className="text-[10px] text-[#738CAC]/80 mt-0.5">
          {review.serviceReceived}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsPreview() {
  // Duplicate reviews to build an expansive, seamless sequence that comfortably covers ultra-wide viewports
  const sequence = [...REVIEWS_DATA, ...REVIEWS_DATA];

  return (
    <section
      className="py-24 bg-[#0C1016] border-t border-[#252B34] relative overflow-hidden"
      aria-label="What Our Drivers Say"
    >
      {/* Fixed Stationary Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Customer Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              WHAT OUR <span className="text-gradient-cyan">DRIVERS SAY.</span>
            </h2>
            <p className="mt-3 text-sm text-[#738CAC] leading-relaxed">
              Real feedback from local car and motorcycle owners who rely on our bays for regular maintenance and deep restorative detailing.
            </p>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-wider hover:text-[#10B6C5] transition-colors group self-start md:self-end"
          >
            <span>Read All Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Continuously Scrolling Testimonial Marquee (Right-to-Left, Infinite, Non-stopping) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Soft Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-r from-[#0C1016] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-l from-[#0C1016] to-transparent z-10" />

        {/* Dual Sequence Infinite Conveyor */}
        <div className="animate-testimonials-marquee flex items-stretch">
          {/* Primary Sequence (Accessible to Screen Readers) */}
          <div className="flex gap-6 shrink-0 pr-6 items-stretch">
            {sequence.map((review, idx) => (
              <TestimonialCard
                key={`primary-${review.id}-${idx}`}
                review={review}
              />
            ))}
          </div>

          {/* Secondary Duplicate Sequence (Hidden from Screen Readers for Accessibility) */}
          <div
            className="flex gap-6 shrink-0 pr-6 items-stretch"
            aria-hidden="true"
          >
            {sequence.map((review, idx) => (
              <TestimonialCard
                key={`duplicate-${review.id}-${idx}`}
                review={review}
                isDuplicate
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Stationary Review Honesty & Submission Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="p-6 sm:p-7 rounded-3xl bg-[#13171D] border border-[#252B34] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">
              {TESTIMONIALS_CONFIG.sectionNotice}
            </h4>
            <p className="text-xs text-[#738CAC]">
              {TESTIMONIALS_CONFIG.feedbackPrompt}
            </p>
          </div>

          <Link
            href="/testimonials#submit-review"
            className="px-5 py-2.5 rounded-xl bg-[#19212A] border border-[#252B34] text-white hover:border-accent hover:text-accent font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-accent" />
            <span>Share Feedback</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
