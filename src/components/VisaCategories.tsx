import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Search,
  CheckCircle,
  Briefcase,
  Layers,
} from 'lucide-react';
import { VisaSubclass } from '../types';
import { VISAS_DATA } from '../data/visasData';

interface VisaCategoriesProps {
  onSelectVisa: (visa: VisaSubclass) => void;
  onOpenConsultation: () => void;
}

export const VisaCategories: React.FC<VisaCategoriesProps> = ({
  onSelectVisa,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categoryFilters = [
    { id: 'all', label: 'All Visas' },
    { id: 'visitor', label: 'Visitor' },
    { id: 'student', label: 'Student' },
    { id: 'graduate', label: 'Graduate' },
    { id: 'employer', label: 'Employer Sponsored' },
    { id: 'skilled', label: 'Skilled Migration' },
    { id: 'regional', label: 'Regional' },
    { id: 'family', label: 'Family & Partner' },
    { id: 'innovation', label: 'Innovation' },
    { id: 'transit', label: 'Transit' },
    { id: 'other', label: 'Other Matters' },
  ];

  const filteredVisas = VISAS_DATA.filter((visa) => {
    const matchesCategory =
      activeCategory === 'all' || visa.category === activeCategory;
    const matchesSearch =
      visa.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visa.subclass.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visa.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visa.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="visas" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-900 tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>Australian Visa Categories</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore Australian Visa Pathways
            </h2>
            <p className="text-slate-600 text-base">
              Comprehensive guidance across temporary, skilled, employer-sponsored, regional and family migration streams.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search subclass or visa name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categoryFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVisas.map((visa) => (
            <div
              key={visa.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200">
                    {visa.subclass}
                  </span>
                  <span className="text-[11px] font-semibold text-blue-900 uppercase tracking-wider">
                    {visa.categoryLabel}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {visa.title}
                </h3>

                <p className="text-xs text-blue-800/90 font-medium mt-1 mb-3">
                  {visa.subtitle}
                </p>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {visa.description}
                </p>

                {visa.streams && visa.streams.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Key Streams:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {visa.streams.slice(0, 3).map((stream, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] bg-slate-50 text-slate-600 border border-slate-100 font-medium"
                        >
                          {stream.length > 28 ? stream.substring(0, 26) + '...' : stream}
                        </span>
                      ))}
                      {visa.streams.length > 3 && (
                        <span className="text-[10px] text-slate-400 font-medium self-center">
                          +{visa.streams.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectVisa(visa)}
                  className="text-xs font-bold text-blue-950 group-hover:text-blue-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>VIEW VISA DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  Discuss Visa
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredVisas.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 text-sm">No visa subclasses matched your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="mt-3 text-xs font-bold text-blue-900 underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
