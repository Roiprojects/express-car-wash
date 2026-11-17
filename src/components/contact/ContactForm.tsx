'use client';

import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '@/data/business';
import { SERVICES_DATA } from '@/data/services';
import { generateWhatsAppBookingUrl } from '@/lib/whatsapp';
import { MessageSquare, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>('car');
  const [interestedService, setInterestedService] = useState('Full Car Foam Wash');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      vehicleType,
      serviceName: interestedService,
      customerName: name.trim(),
      customerPhone: phone.trim(),
      customerNotes: `${email ? `Email: ${email.trim()} | ` : ''}${message.trim() || 'General enquiry'}`,
    };

    const targetUrl = generateWhatsAppBookingUrl(payload);
    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-[#13171D] border border-[#252B34] space-y-6 shadow-2xl">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-2 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Workshop Enquiry</span>
        </div>
        <h3 className="text-2xl font-bold text-white">Send Detailing Query</h3>
        <p className="text-xs text-[#738CAC] mt-1">
          Fill in your details below. You will be smoothly connected to our WhatsApp line with your pre-filled inquiry.
        </p>
      </div>

      {errorMessage && (
        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Vehicle Type Choice */}
      <div>
        <label className="block text-xs font-semibold text-[#738CAC] mb-2">
          Vehicle Classification *
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setVehicleType('car')}
            className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
              vehicleType === 'car'
                ? 'bg-[#19212A] border-accent text-accent'
                : 'bg-[#0C1016] border-[#252B34] text-[#738CAC] hover:text-white'
            }`}
          >
            Car / SUV
          </button>
          <button
            type="button"
            onClick={() => setVehicleType('bike')}
            className={`py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
              vehicleType === 'bike'
                ? 'bg-[#19212A] border-accent text-accent'
                : 'bg-[#0C1016] border-[#252B34] text-[#738CAC] hover:text-white'
            }`}
          >
            Bike / Superbike
          </button>
        </div>
      </div>

      {/* Name and Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#0C1016] border border-[#252B34] text-white placeholder:text-[#738CAC] text-xs sm:text-sm focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#0C1016] border border-[#252B34] text-white placeholder:text-[#738CAC] text-xs sm:text-sm focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Email & Service */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#0C1016] border border-[#252B34] text-white placeholder:text-[#738CAC] text-xs sm:text-sm focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
            Interested Service *
          </label>
          <select
            value={interestedService}
            onChange={(e) => setInterestedService(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#0C1016] border border-[#252B34] text-white text-xs sm:text-sm focus:outline-none focus:border-accent"
          >
            {SERVICES_DATA.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name} ({s.vehicleType === 'bike' ? 'Bike' : 'Car'})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#738CAC] mb-1.5">
          Your Message or Vehicle Queries
        </label>
        <textarea
          rows={3}
          placeholder="Tell us about your vehicle model, current condition, or questions about wash timing..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#0C1016] border border-[#252B34] text-white placeholder:text-[#738CAC] text-xs sm:text-sm focus:outline-none focus:border-accent"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-accent text-white font-extrabold text-xs uppercase tracking-wider hover:bg-accent-hover transition-all duration-300 shadow-xl shadow-accent/25 disabled:opacity-50"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit & Connect on WhatsApp'}</span>
      </button>

      <p className="text-[11px] text-[#738CAC] text-center leading-normal">
        By submitting, you are directly routed to {BUSINESS_CONFIG.phone} on WhatsApp with your query details. No spam.
      </p>
    </form>
  );
}
