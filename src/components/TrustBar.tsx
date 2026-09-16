import React from 'react';
import { ShieldCheck, MapPin, CalendarCheck, UserCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const cards = [
    {
      id: 'trust-card-1',
      title: 'REGISTERED MIGRATION AGENT',
      line1: 'Amit Verma',
      line2: 'MARN 0851419',
      icon: ShieldCheck,
      color: 'text-blue-900',
      bg: 'bg-blue-50',
    },
    {
      id: 'trust-card-2',
      title: 'BRISBANE BASED',
      line1: 'Brisbane City',
      line2: 'Queensland, Australia',
      icon: MapPin,
      color: 'text-emerald-800',
      bg: 'bg-emerald-50',
    },
    {
      id: 'trust-card-3',
      title: 'FREE INITIAL CONSULTATION',
      line1: 'Initial Discussion',
      line2: 'Start with an initial discussion about your circumstances.',
      icon: CalendarCheck,
      color: 'text-indigo-900',
      bg: 'bg-indigo-50',
    },
    {
      id: 'trust-card-4',
      title: 'PERSONALISED GUIDANCE',
      line1: 'Individual Approach',
      line2: 'Migration pathways depend on individual circumstances.',
      icon: UserCheck,
      color: 'text-slate-800',
      bg: 'bg-slate-100',
    },
  ];

  return (
    <section id="trust-bar" className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              id={card.id}
              className="bg-white rounded-xl p-5 sm:p-6 shadow-md border border-slate-200/80 hover:shadow-lg hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="flex items-center gap-3.5 mb-3">
                <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center ${card.color} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                  {card.title}
                </h3>
              </div>
              <div className="space-y-1">
                <div className="text-base font-bold text-slate-900">{card.line1}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{card.line2}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
