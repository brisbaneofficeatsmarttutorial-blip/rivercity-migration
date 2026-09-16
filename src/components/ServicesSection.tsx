import React from 'react';
import {
  Compass,
  FileText,
  FileCheck,
  Plane,
  GraduationCap,
  Award,
  Briefcase,
  TrendingUp,
  Building,
  MapPin,
  HeartHandshake,
  Target,
  AlertCircle,
  ShieldAlert,
  Scale,
  Flag,
  HelpCircle,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  FileText,
  FileCheck,
  Plane,
  GraduationCap,
  Award,
  Briefcase,
  TrendingUp,
  Building,
  MapPin,
  HeartHandshake,
  Target,
  AlertCircle,
  ShieldAlert,
  Scale,
  Flag,
  HelpCircle,
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="services" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-900 tracking-wider uppercase shadow-2xs">
              <FileCheck className="w-3.5 h-3.5 text-blue-800" />
              <span>Professional Services</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Migration Services & Assistance
            </h2>
            <p className="text-slate-600 text-base">
              Personalised, regulated migration assistance tailored to your personal background, documentary requirements and timeline.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold tracking-wide transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>BOOK FREE CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 text-blue-400" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service) => {
            const Icon = iconMap[service.iconName] || HelpCircle;
            return (
              <div
                key={service.id}
                className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-blue-900 mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-serif text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2 mb-4">
                    {service.fullDesc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-50 text-slate-500 font-medium border border-slate-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2 px-3 rounded text-xs font-bold text-blue-900 hover:text-white hover:bg-blue-900 bg-blue-50/70 border border-blue-100 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Enquire About Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
