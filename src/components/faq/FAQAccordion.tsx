'use client';

import React, { useState } from 'react';
import { FAQ_DATA, FAQ_CATEGORIES, FAQItem } from '@/data/faq';
import { ChevronDown, Sparkles, MessageSquare, Search } from 'lucide-react';
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
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-accent text-white shadow-sm shadow-accent/25'
                    : 'bg-[#13171D] text-[#738CAC] hover:text-white border border-[#252B34]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#738CAC] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#13171D] border border-[#252B34] text-white text-xs placeholder:text-[#738CAC] focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#13171D] border-accent shadow-lg'
                    : 'bg-[#13171D] border-[#252B34] hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-accent text-white rotate-180'
                        : 'bg-[#0C1016] text-accent border border-[#252B34]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#738CAC] leading-relaxed border-t border-[#252B34] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#13171D] border border-[#252B34]">
            <p className="text-[#738CAC] text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
          </div>
        )}
      </div>

      {/* Bottom WhatsApp Help Banner */}
      <div className="p-6 rounded-3xl bg-[#13171D] border border-[#252B34] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
        <div>
          <h4 className="text-base font-bold text-white">
            Have a question not listed above?
          </h4>
          <p className="text-xs text-[#738CAC] mt-1">
            Our workshop staff is available on WhatsApp to answer specific queries regarding your vehicle model and detailing requirements.
          </p>
        </div>

        <a
          href={generateQuickWhatsAppUrl('FAQ question enquiry')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-hover transition-colors shadow-sm shadow-accent/20 whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
