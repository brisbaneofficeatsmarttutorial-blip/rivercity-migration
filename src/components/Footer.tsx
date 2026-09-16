import React from 'react';
import {
  Shield,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  MessageCircle,
  FileText,
  Scale,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface FooterProps {
  onOpenLegalModal: (type: 'disclaimer' | 'privacy' | 'terms') => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLegalModal,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 text-xs">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Identity & MARN */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center text-white font-serif font-black text-xl shadow-md border border-blue-700/50">
                RM
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-tight block">
                  Rivercity Migration
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  Brisbane Migration Consultancy
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Professional, regulated Australian migration assistance led by Registered Migration Agent Amit Verma. Assisting applicants onshore and offshore with clarity, precision, and diligence.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-white font-semibold text-xs flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>Amit Verma</span>
              </div>
              <div className="text-slate-400 text-[11px]">
                Registered Migration Agent &bull; <strong>MARN {BUSINESS_INFO.marn}</strong>
              </div>
              <div className="text-slate-500 text-[10px]">
                ABN: {BUSINESS_INFO.abn}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Pathways */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Visas & Pathways
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#visas" className="hover:text-white transition-colors">
                  Visitor Visa (600)
                </a>
              </li>
              <li>
                <a href="#visas" className="hover:text-white transition-colors">
                  Student Visa (500)
                </a>
              </li>
              <li>
                <a href="#visas" className="hover:text-white transition-colors">
                  Graduate Visa (485)
                </a>
              </li>
              <li>
                <a href="#visas" className="hover:text-white transition-colors">
                  Skills in Demand (482)
                </a>
              </li>
              <li>
                <a href="#visas" className="hover:text-white transition-colors">
                  Skilled Migration (189/190/491)
                </a>
              </li>
              <li>
                <a href="#visas" className="hover:text-white transition-colors">
                  Family & Partner Visas
                </a>
              </li>
              <li>
                <a href="#visas" className="hover:text-white transition-colors">
                  National Innovation (858)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Interactive Tools */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Guidance & Tools
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#visa-finder" className="hover:text-white transition-colors">
                  Interactive Visa Finder
                </a>
              </li>
              <li>
                <a href="#free-assessment" className="hover:text-white transition-colors">
                  Free Online Assessment
                </a>
              </li>
              <li>
                <a href="#document-checklist" className="hover:text-white transition-colors">
                  Document Checklist Guide
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Assessment & Lodgement Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  Our 7-Step Process
                </a>
              </li>
              <li>
                <a href="#client-experiences" className="hover:text-white transition-colors">
                  Client Experiences (30 Reviews)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Brisbane Office
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.line1}<br />
                  {BUSINESS_INFO.address.line2}<br />
                  {BUSINESS_INFO.address.city} {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postcode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2 px-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs tracking-wider uppercase transition-colors"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Statutory Regulatory Statement (Section 34) */}
        <div className="mt-12 pt-8 border-t border-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-3">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <Scale className="w-4 h-4 text-emerald-400" />
              <span>Statutory Code of Conduct Notice</span>
            </h5>
            <p className="text-slate-400 leading-relaxed text-xs">
              Registered Migration Agents are bound by the Migration Agents Code of Conduct administered by the Office of the Migration Agents Registration Authority (OMARA). A copy of the Code of Conduct is available from the OMARA website.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-semibold pt-1">
              <a
                href={BUSINESS_INFO.officialLinks.omara}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                <span>OMARA Official Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.officialLinks.codeOfConduct}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Code of Conduct</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.officialLinks.consumerGuide}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                <span>OMARA Consumer Guide</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={BUSINESS_INFO.officialLinks.homeAffairs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Department of Home Affairs</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-2">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-widest flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Legal Policies & Terms</span>
            </h5>
            <div className="flex flex-col space-y-1.5 text-slate-400">
              <button
                onClick={() => onOpenLegalModal('disclaimer')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                &bull; Migration Advice Disclaimer
              </button>
              <button
                onClick={() => onOpenLegalModal('privacy')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                &bull; Privacy Policy (Privacy Act 1988 Cth)
              </button>
              <button
                onClick={() => onOpenLegalModal('terms')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                &bull; Terms of Engagement & Agreement
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Statement (Section 34) */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> The information on this website is for general informational purposes only and does not constitute migration or legal advice. An Australian visa cannot be guaranteed. Visa eligibility depends on individual circumstances and Australian migration law at the time of assessment or decision.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} Rivercity Migration. All rights reserved. Amit Verma (MARN {BUSINESS_INFO.marn}).
          </div>
          <div className="flex items-center gap-3">
            <span>Brisbane City, Queensland, Australia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
