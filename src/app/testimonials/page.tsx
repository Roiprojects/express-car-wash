'use client';

import React, { useState } from 'react';
import { REVIEWS_DATA } from '@/data/reviews';
import { Star, ShieldCheck, Sparkles, MessageSquare, AlertCircle, Check } from 'lucide-react';
import { useBooking } from '@/components/layout/AppShell';
import ConversionCTA from '@/components/home/ConversionCTA';

export default function TestimonialsPage() {
  const { openBooking } = useBooking();
  const [feedbackAuthor, setFeedbackAuthor] = useState('');
  const [feedbackVehicle, setFeedbackVehicle] = useState('');
  const [feedbackService, setFeedbackService] = useState('Full Car Foam Wash');
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackAuthor || !feedbackText) return;

    const message = `Hello Kousalya's Express Detailing, here is my feedback on your service:\n\n• Name: ${feedbackAuthor}\n• Vehicle: ${feedbackVehicle}\n• Treatment: ${feedbackService}\n• Rating: ${feedbackRating}/5 Stars\n• Review: ${feedbackText}`;
    const url = `https://wa.me/917022338693?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSent(true);
  };

  return (
    <div className="bg-white">
      {/* Page Hero */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#E3EBE7] bg-[#F1F7F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E4F2EF] text-[#438E88] text-xs font-mono uppercase tracking-widest mb-4 font-semibold border border-[#438E88]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#438E88]" />
              <span>Verified Client Stories</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#253C42] leading-tight tracking-tight">
              Driver Experiences. <br />
              <span className="text-[#438E88] italic font-serif">Honest Feedback.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#62747A] leading-relaxed">
              Read authentic impressions from owners who entrust their vehicles to our detailing and wash bays.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-white border border-[#E3EBE7] hover:border-[#438E88] flex flex-col justify-between shadow-[0_8px_30px_rgba(37,60,66,0.06)] hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified Customer
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#253C42] leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E3EBE7] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#253C42]">{review.author}</h4>
                  <div className="text-xs text-[#438E88] mt-0.5 font-bold">
                    {review.vehicle}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono text-[#253C42] font-semibold block">
                    {review.serviceReceived}
                  </span>
                  <span className="text-[10px] text-[#62747A]">
                    {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Disclaimer */}
        <div className="p-4 rounded-2xl bg-[#F1F7F3] border border-[#E3EBE7] flex items-start gap-3 text-xs text-[#62747A] shadow-sm">
          <AlertCircle className="w-4 h-4 text-[#438E88] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#253C42]">Review Verification Policy:</strong> In strict compliance with our brand guidelines, we never fabricate fake online testimonials or aggregate review counts. All feedback reflects actual customer responses documented at our workshop.
          </p>
        </div>

        {/* Submit Review Card */}
        <div id="submit-review" className="p-8 rounded-3xl bg-[#F1F7F3] border border-[#E3EBE7] max-w-3xl mx-auto shadow-xl">
          <div className="text-center max-w-md mx-auto mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#438E88] block mb-1 font-bold">
              Feedback Channel
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#253C42]">
              Share Your Detailing Experience
            </h3>
            <p className="text-xs text-[#62747A] mt-1">
              Visited our workshop recently? We welcome your candid comments on our active foam, interior steam, or motorcycle detailing.
            </p>
          </div>

          {isSent ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-serif font-bold text-[#253C42] text-base">Feedback Dispatched to WhatsApp!</h4>
              <p className="text-xs text-[#62747A]">
                Thank you for helping us continually raise the bar for car and bike detailing standards.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#62747A] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh K."
                    value={feedbackAuthor}
                    onChange={(e) => setFeedbackAuthor(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E3EBE7] text-[#253C42] text-xs focus:outline-none focus:border-[#438E88]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#62747A] mb-1">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kia Sonet / TVS Apache"
                    value={feedbackVehicle}
                    onChange={(e) => setFeedbackVehicle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E3EBE7] text-[#253C42] text-xs focus:outline-none focus:border-[#438E88]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#62747A] mb-1">
                  Service Received
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Foam Wash &amp; Interior Cleaning"
                  value={feedbackService}
                  onChange={(e) => setFeedbackService(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E3EBE7] text-[#253C42] text-xs focus:outline-none focus:border-[#438E88]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#62747A] mb-1">
                  Rating (1 to 5 Stars)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedbackRating(star)}
                      className="p-1 focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= feedbackRating
                            ? 'text-[#F59E0B] fill-[#F59E0B]'
                            : 'text-[#E3EBE7]'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-[#253C42] font-bold ml-2">
                    {feedbackRating} of 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#62747A] mb-1">
                  Your Review &amp; Comments *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="How did your car or bike look after the service? Were the staff courteous?"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#E3EBE7] text-[#253C42] text-xs focus:outline-none focus:border-[#438E88]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#438E88] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#32766F] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Submit Feedback to Workshop Line</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Conversion CTA */}
      <ConversionCTA onOpenBooking={() => openBooking()} />
    </div>
  );
}
