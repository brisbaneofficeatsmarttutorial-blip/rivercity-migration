import React from 'react';
import {
  Shield,
  MapPin,
  CalendarCheck,
  UserCheck,
  MessageSquare,
  FileCheck2,
  Phone,
  Mail,
  CheckCircle,
  Building2,
} from 'lucide-react';
import { BUSINESS_INFO, WHY_RIVERCITY_CARDS } from '../data/businessInfo';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Building2,
  Clock: CalendarCheck,
  Compass: UserCheck,
  MessageSquare,
  FileCheck2,
};

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: About Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-900 tracking-wider uppercase shadow-2xs">
              <Shield className="w-3.5 h-3.5 text-blue-900" />
              <span>About Rivercity Migration</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Professional Migration Guidance With a Personal Approach
            </h2>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p className="font-medium text-slate-800">
                Rivercity Migration is an Australian migration consultancy based in Brisbane City, Queensland.
              </p>
              <p>
                Led by Registered Migration Agent Amit Verma (MARN 0851419), Rivercity Migration assists clients with a range of Australian visa and migration matters.
              </p>
              <p>
                Our approach focuses on understanding each client&apos;s circumstances, providing clear information, organising relevant documentation and helping clients navigate the application process.
              </p>
              <p>
                We aim to make Australian migration information easier to understand and the application process more organised.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold tracking-wide uppercase transition-colors shadow-sm cursor-pointer"
              >
                BOOK FREE CONSULTATION
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-5 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold tracking-wide transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-900" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right: Agent Profile Box */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden space-y-6">
              <div className="flex items-center gap-4 border-b border-slate-100 pb-5">
                <div className="w-16 h-16 rounded-full bg-slate-900 text-white font-serif font-bold text-2xl flex items-center justify-center border-2 border-blue-900 shrink-0">
                  AV
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900">
                    AMIT VERMA
                  </h3>
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mt-0.5">
                    Registered Migration Agent
                  </div>
                  <div className="text-xs font-mono font-medium text-slate-500 mt-0.5">
                    MARN {BUSINESS_INFO.marn}
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Regulated under the Australian <strong>Migration Act 1958</strong> and the Office of the Migration Agents Registration Authority (OMARA).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Direct communication and personalised case handling without delegation to unaccredited staff.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    ABN: <strong>{BUSINESS_INFO.abn}</strong> registered business in Queensland.
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <MapPin className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>{BUSINESS_INFO.address.full}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 26: WHY RIVERCITY MIGRATION (6 Premium Cards) */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block">
              Core Principles
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
              Why Rivercity Migration
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our commitment to clear communication, individual attention and lawful Australian migration practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_RIVERCITY_CARDS.map((card, idx) => {
              const Icon = iconMap[card.icon] || Shield;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-900 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-slate-900 mb-1">
                      {card.title}
                    </h4>
                    <div className="text-xs font-semibold text-blue-950 mb-2">
                      {card.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
