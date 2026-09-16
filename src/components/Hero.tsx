import React from 'react';
import { ShieldCheck, MessageCircle, Calendar, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { HERO_CONTENT, BUSINESS_INFO } from '../data/businessInfo';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background with Brisbane Skyline / River ambiance */}
      <div className="absolute inset-0 z-0">
        {/* Crisp vector-photographic architectural rendering layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2000&q=80')`, // Brisbane River and Story Bridge
          }}
        />
        {/* Professional deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/25 via-transparent to-transparent" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Trust Badge Pill */}
            <div
              id="hero-trust-badge"
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 backdrop-blur-md text-xs sm:text-sm text-slate-200 shadow-sm"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-white tracking-wide">{HERO_CONTENT.trustBadge.title}:</span>
                <span className="text-emerald-300 font-medium">{HERO_CONTENT.trustBadge.name}</span>
                <span className="text-slate-400">({HERO_CONTENT.trustBadge.marn})</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                {HERO_CONTENT.headline}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-200/90 tracking-normal">
                {HERO_CONTENT.subheadline}
              </p>
            </div>

            {/* Body */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {HERO_CONTENT.body}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => handleScrollTo('visa-finder')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-blue-700 text-white font-bold text-sm tracking-wide hover:bg-blue-600 transition-all duration-200 shadow-lg shadow-blue-950/50 hover:shadow-blue-700/30 cursor-pointer"
              >
                <span>{HERO_CONTENT.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm tracking-wide backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>{HERO_CONTENT.secondaryCta}</span>
              </button>

              <a
                id="hero-third-cta"
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-bold text-sm tracking-wide transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{HERO_CONTENT.thirdCta}</span>
              </a>
            </div>

            {/* Key Micro Trust Indicators */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Brisbane City Office</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Regulated by OMARA</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Initial Assessment</span>
              </div>
            </div>
          </div>

          {/* Right Hero Feature Card (4 Cols) */}
          <div className="lg:col-span-4">
            <div
              id="hero-info-card"
              className="bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800/90 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-emerald-400 block">
                    Official Representation
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">Rivercity Migration</h3>
                </div>
                <div className="px-2.5 py-1 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700">
                  MARN {BUSINESS_INFO.marn}
                </div>
              </div>

              <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-blue-950 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Amit Verma</strong>
                    <span className="text-slate-400 text-xs">Registered Migration Agent</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-md bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Brisbane Location</strong>
                    <span className="text-slate-400 text-xs leading-relaxed">
                      Level 6, Unit 87, 101 Wickham Terrace, Brisbane City QLD 4000
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Free Initial Consultation Available
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Start with a direct discussion about your background, current visa status, and objectives.
                  </p>
                </div>
              </div>

              <button
                id="hero-card-consultation-btn"
                onClick={onOpenConsultation}
                className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK INITIAL CONSULTATION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
