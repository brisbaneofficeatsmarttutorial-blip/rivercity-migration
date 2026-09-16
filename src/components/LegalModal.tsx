import React from 'react';
import { X, ShieldCheck, Scale, FileText, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface LegalModalProps {
  type: 'disclaimer' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const titles: Record<string, string> = {
    disclaimer: 'Migration Advice & Regulatory Disclaimer',
    privacy: 'Privacy Policy (Privacy Act 1988 Cth)',
    terms: 'Terms of Engagement & Professional Practice',
  };

  return (
    <div
      id="legal-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">
              Legal Information
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {titles[type]}
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-slate-700 space-y-4 leading-relaxed">
          {type === 'disclaimer' && (
            <>
              <p>
                <strong>General Information Only:</strong> The material, guides, and interactive tools provided on this website are published for general informational and educational purposes only. They do not constitute formal Australian migration advice or legal counsel.
              </p>
              <p>
                <strong>No Guarantee of Visa Outcome:</strong> In accordance with the Migration Agents Code of Conduct, no migration agent can guarantee the grant of any Australian visa. All statutory visa decisions are made exclusively by delegates of the Minister for Immigration and Multicultural Affairs (Department of Home Affairs).
              </p>
              <p>
                <strong>Statutory Regulation:</strong> Registered Migration Agent Amit Verma (MARN {BUSINESS_INFO.marn}) is registered with the Office of the Migration Agents Registration Authority (OMARA).
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <a
                  href={BUSINESS_INFO.officialLinks.omara}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Visit OMARA register for details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                <strong>Commitment to Privacy:</strong> Rivercity Migration is committed to protecting your personal privacy in accordance with the Australian Privacy Principles (APPs) set out in the <em>Privacy Act 1988</em> (Cth).
              </p>
              <p>
                <strong>Collection of Information:</strong> We collect personal details (such as names, contact information, immigration history, qualifications and family details) solely for assessing visa options and providing regulated Australian migration assistance.
              </p>
              <p>
                <strong>Confidentiality:</strong> Your personal information will never be sold or rented to third-party commercial marketers. Information is disclosed only where strictly required by Australian immigration authorities (e.g. Department of Home Affairs, skills assessment bodies) or with your direct consent.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong>Client Service Agreements:</strong> Rivercity Migration provides migration services under formal written Client Agreements detailing the agreed scope of work, professional fees, anticipated Department of Home Affairs application charges, and expected timelines.
              </p>
              <p>
                <strong>Code of Conduct Compliance:</strong> All services are delivered in strict compliance with the statutory Migration Agents Code of Conduct. Clients receive a copy of the Consumer Guide prior to executing any formal contract.
              </p>
              <p>
                <strong>Fees & Trust Accounts:</strong> Rivercity Migration maintains rigorous accounting practices. Unearned client advance funds are held in compliant client accounts until milestones are met.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
