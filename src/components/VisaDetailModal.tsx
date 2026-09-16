import React from 'react';
import {
  X,
  Shield,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Briefcase,
  Layers,
  FileCheck2,
  UserCheck,
} from 'lucide-react';
import { VisaSubclass } from '../types';
import { BUSINESS_INFO } from '../data/businessInfo';

interface VisaDetailModalProps {
  visa: VisaSubclass | null;
  onClose: () => void;
  onBookConsultation: (visaTitle: string) => void;
}

export const VisaDetailModal: React.FC<VisaDetailModalProps> = ({
  visa,
  onClose,
  onBookConsultation,
}) => {
  if (!visa) return null;

  return (
    <div
      id="visa-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Header with Dark Navy accent */}
        <div className="bg-slate-950 text-white p-6 sm:p-7 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-900 text-blue-100">
              {visa.subclass}
            </span>
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {visa.categoryLabel}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {visa.title}
          </h3>
          <p className="text-sm text-slate-300 mt-1 font-medium max-w-xl">
            {visa.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
              Overview & Scope
            </h4>
            <p className="text-slate-700 leading-relaxed text-base">
              {visa.description}
            </p>
          </div>

          {/* Applicable Streams */}
          {visa.streams && visa.streams.length > 0 && (
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200/80">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-900" />
                <span>Available Streams & Pathways</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {visa.streams.map((stream, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-900 mt-2 shrink-0" />
                    <span>{stream}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Considerations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Key Considerations & Criteria</span>
            </h4>
            <ul className="space-y-2">
              {visa.keyConsiderations.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-4 h-4 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 border border-emerald-200">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Services by Rivercity Migration */}
          {visa.servicesProvided && visa.servicesProvided.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-blue-900" />
                <span>Rivercity Migration Assistance for this Visa</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {visa.servicesProvided.map((serv, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2 shadow-2xs"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-blue-800 shrink-0 mt-0.5" />
                    <span>{serv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Who It's For */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start gap-3">
            <UserCheck className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-blue-950 block uppercase tracking-wide">
                Target Applicants:
              </span>
              <p className="text-xs text-blue-900/90 mt-0.5 leading-relaxed">
                {visa.whoItsFor}
              </p>
            </div>
          </div>

          {/* Statutory Disclaimer */}
          <div className="p-3 bg-slate-100 rounded-lg text-[11px] text-slate-600 leading-relaxed flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span>
              <strong>Regulatory Notice:</strong> Visa criteria, processing times and legislative instruments are subject to changes by the Department of Home Affairs. Migration assistance is provided by Registered Migration Agent Amit Verma (MARN {BUSINESS_INFO.marn}).
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Have questions about {visa.subclass}? Start with our free initial discussion.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation(visa.title);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-blue-300" />
              <span>{visa.ctaText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
