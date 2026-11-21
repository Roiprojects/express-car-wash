'use client';

import React, { useState } from 'react';
import { FAQ_DATA, FAQ_CATEGORIES } from '@/data/faq';
import { ChevronDown, MessageSquare, Search } from 'lucide-react';
import { generateQuickWhatsAppUrl } from '@/lib/whatsapp';

export default function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>(FAQ_DATA[0].id);

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-8">
      {/* Search and Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#087F75] text-white shadow-sm'
                    : 'bg-white text-[#202C2C] hover:text-[#087F75] border border-[#DDD6CB]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#52615E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#DDD6CB] text-[#202C2C] text-base sm:text-sm placeholder:text-[#52615E] focus:outline-none focus:border-[#087F75]"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFF9EF] border-2 border-[#087F75]/70 shadow-md'
                    : 'bg-white border-[#DDD6CB] hover:border-[#087F75]/50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#202C2C]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#087F75] text-white rotate-180'
                        : 'bg-[#F5EBDD] text-[#087F75] border border-[#DDD6CB]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#445452] leading-relaxed border-t border-[#DDD6CB] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center rounded-3xl bg-white border border-[#DDD6CB] space-y-3">
            <p className="text-[#445452] text-sm">
              No answers matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-full bg-[#087F75] text-white font-bold text-xs uppercase"
            >
              Clear Search &amp; Show All
            </button>
          </div>
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-8 rounded-3xl bg-white border border-[#DDD6CB] text-center space-y-4 shadow-sm">
        <h4 className="font-serif font-bold text-xl text-[#202C2C]">
          Still have a question regarding your car or bike?
        </h4>
        <p className="text-sm text-[#445452] max-w-lg mx-auto">
          Our workshop managers answer WhatsApp queries throughout operating hours (8:00 AM – 8:30 PM).
        </p>
        <a
          href={generateQuickWhatsAppUrl('I have a question about vehicle detailing')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#087F75] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#06665F] transition-colors shadow-sm"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Ask On WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
