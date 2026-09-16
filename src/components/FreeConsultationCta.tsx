import React from 'react';
import { Phone, MessageCircle, Calendar, Mail, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FreeConsultationCtaProps {
  onOpenConsultation: () => void;
}

export const FreeConsultationCta: React.FC<FreeConsultationCtaProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-t border-b border-slate-900">
      {/* Subtle radial ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
            Obligation-Free Initial Discussion
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Start Your Australian Migration Journey
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Not sure where to begin? Speak with Rivercity Migration about your Australian migration plans.
          </p>
        </div>

        {/* Contact Info Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-blue-400 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">Direct Phone</div>
              <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                {BUSINESS_INFO.phoneDisplay}
              </div>
            </div>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-800/80 flex items-center gap-3 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">WhatsApp Support</div>
              <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                {BUSINESS_INFO.whatsapp}
              </div>
            </div>
          </a>

          <a
            href={`mailto:${BUSINESS_INFO.email}`}
            className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-950 flex items-center justify-center text-indigo-400 shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-medium">Official Email</div>
              <div className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors truncate">
                {BUSINESS_INFO.email}
              </div>
            </div>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 border border-slate-700"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>CALL NOW</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WHATSAPP US</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK FREE CONSULTATION</span>
          </button>
        </div>
      </div>
    </section>
  );
};
