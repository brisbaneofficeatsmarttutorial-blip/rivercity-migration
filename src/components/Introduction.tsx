import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export const Introduction: React.FC = () => {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="introduction" className="py-20 sm:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 tracking-wider uppercase">
              <Shield className="w-3.5 h-3.5 text-blue-900" />
              <span>Australian Migration & Visa Assistance</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Migration Guidance Built Around Your Journey
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-800">
                Every migration journey is different.
              </p>
              <p>
                Rivercity Migration provides personalised assistance to help clients understand Australian visa pathways, prepare relevant documentation and navigate the application process.
              </p>
              <p>
                Our approach focuses on clear communication, organised preparation and practical guidance.
              </p>
            </div>

            <div className="pt-2">
              <button
                id="intro-cta-btn"
                onClick={handleScrollToAbout}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-blue-900 text-white text-sm font-bold tracking-wide transition-colors shadow-sm cursor-pointer"
              >
                <span>LEARN ABOUT RIVERCITY MIGRATION</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block">
                  Regulated Representation
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900 mt-1">
                  Registered Migration Agent
                </h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Amit Verma (MARN {BUSINESS_INFO.marn})</strong> provides direct consultation and oversight.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Bound by the statutory <strong>Migration Agents Code of Conduct</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Direct access via phone, email and in-person consultations in Brisbane City.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Honest, realistic advice focused on meeting legislative criteria.
                  </span>
                </li>
              </ul>

              <div className="pt-2 text-xs text-slate-500 bg-white p-4 rounded-xl border border-slate-200/80">
                <span className="font-semibold text-slate-700 block mb-1">Brisbane City Office:</span>
                Level 6, Unit 87, 101 Wickham Terrace, Brisbane City QLD 4000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
