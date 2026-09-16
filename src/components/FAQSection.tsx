import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, ShieldCheck } from 'lucide-react';
import { FAQS_DATA } from '../data/faqsData';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
  });
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-900 tracking-wider uppercase shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Factual and transparent answers to key questions about Australian migration regulations and Rivercity Migration services.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-7.5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 shadow-2xs"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-900 text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-10 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500 text-sm">No matching questions found.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-blue-900 font-bold mt-2 underline"
            >
              Clear search
            </button>
          </div>
        )}

        <div className="mt-12 p-5 rounded-xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-between flex-wrap gap-4 text-xs text-blue-950">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0" />
            <span>Have a specific question not covered here?</span>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-blue-900 text-white font-bold hover:bg-blue-800 transition-colors"
          >
            Contact Amit Verma Directly
          </a>
        </div>
      </div>
    </section>
  );
};
