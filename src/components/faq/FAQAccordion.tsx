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
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-[#438E88] text-white shadow-sm'
                    : 'bg-[#F1F7F3] text-[#62747A] hover:text-[#253C42] border border-[#E3EBE7]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#62747A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#F1F7F3] border border-[#E3EBE7] text-[#253C42] text-xs placeholder:text-[#62747A]/60 focus:outline-none focus:border-[#438E88] focus:bg-white"
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
                    ? 'bg-white border-[#438E88] shadow-md'
                    : 'bg-[#F1F7F3] border-[#E3EBE7] hover:border-[#438E88]/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#253C42]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#438E88] text-white rotate-180'
                        : 'bg-white text-[#438E88] border border-[#E3EBE7]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#62747A] leading-relaxed border-t border-[#E3EBE7] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center rounded-2xl bg-[#F1F7F3] border border-[#E3EBE7]">
            <p className="text-[#62747A] text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
          </div>
        )}
      </div>

      {/* Bottom WhatsApp Help Banner */}
      <div className="p-6 rounded-3xl bg-[#F1F7F3] border border-[#E3EBE7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div>
          <h4 className="text-base font-serif font-bold text-[#253C42]">
            Have a question not listed above?
          </h4>
          <p className="text-xs text-[#62747A] mt-1">
            Our workshop staff is available on WhatsApp to answer specific queries regarding your vehicle model and detailing requirements.
          </p>
        </div>

        <a
          href={generateQuickWhatsAppUrl('FAQ question enquiry')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#438E88] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#32766F] transition-colors shadow-sm whitespace-nowrap"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
          <span>Ask on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
