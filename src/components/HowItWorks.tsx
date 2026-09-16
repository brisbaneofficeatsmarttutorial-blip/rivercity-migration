import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      num: '01',
      title: 'INITIAL ENQUIRY',
      description: 'Tell us about your circumstances.',
      detail: 'Reach out via our online assessment form, WhatsApp, or by calling our Brisbane office.',
    },
    {
      num: '02',
      title: 'ASSESSMENT',
      description: 'Explore potentially relevant pathways.',
      detail: 'We evaluate your qualifications, employment history, English scores and objectives against current migration criteria.',
    },
    {
      num: '03',
      title: 'FREE CONSULTATION',
      description: 'Discuss your circumstances with Amit Verma.',
      detail: 'Direct, obligation-free discussion with Registered Migration Agent Amit Verma (MARN 0851419).',
    },
    {
      num: '04',
      title: 'DOCUMENT PREPARATION',
      description: 'Organise relevant supporting evidence.',
      detail: 'Receive structured checklists and guidance to ensure every statutory document and translation is compliant.',
    },
    {
      num: '05',
      title: 'APPLICATION PREPARATION',
      description: 'Prepare the relevant application.',
      detail: 'Comprehensive drafting of departmental forms, statutory declarations and submission letters.',
    },
    {
      num: '06',
      title: 'LODGEMENT & FOLLOW-UP',
      description: 'Where engaged to provide the service, assist with the relevant process and follow-up.',
      detail: 'Timely lodgement via official Department portals and managing correspondence or requests for information (RFI).',
    },
    {
      num: '07',
      title: 'OUTCOME',
      description: 'The relevant Australian Government decision-maker makes the visa decision.',
      detail: 'Final decision received from the Department of Home Affairs or relevant assessing authority.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block">
            Structured & Transparent Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base">
            From your first enquiry through to application preparation and outcome, we guide you through every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.slice(0, 4).map((step, idx) => (
            <div
              key={step.num}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-blue-900/40">
                    {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-blue-900" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-blue-950 mb-2">
                  {step.description}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {steps.slice(4).map((step) => (
            <div
              key={step.num}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-emerald-800/40">
                    {step.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-700" />
                </div>
                <h3 className="font-serif text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-emerald-950 mb-2">
                  {step.description}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <div className="font-serif text-lg font-bold">Ready to take Step 01?</div>
            <div className="text-xs text-slate-300">
              Speak directly with Amit Verma in our Brisbane City office or remotely.
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            START WITH FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};
