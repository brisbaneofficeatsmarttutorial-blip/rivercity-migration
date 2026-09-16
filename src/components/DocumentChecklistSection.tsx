import React, { useState } from 'react';
import {
  FileCheck2,
  CheckSquare,
  Square,
  Copy,
  Check,
  AlertCircle,
  RotateCcw,
  Download,
} from 'lucide-react';
import { CHECKLIST_CATEGORIES } from '../data/checklistData';

export const DocumentChecklistSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState<boolean>(false);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalItems = CHECKLIST_CATEGORIES.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  );
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  const handleCopy = () => {
    let text = 'RIVERCITY MIGRATION - DOCUMENT PREPARATION SUMMARY\n';
    text += `Checked items: ${checkedCount} / ${totalItems}\n\n`;

    CHECKLIST_CATEGORIES.forEach((cat) => {
      text += `[${cat.title.toUpperCase()}]\n`;
      cat.items.forEach((item) => {
        const isDone = checkedItems[item.id] ? '[x]' : '[ ]';
        text += `${isDone} ${item.label} - ${item.description || ''}\n`;
      });
      text += '\n';
    });
    text += 'DISCLAIMER: Document requirements vary according to visa subclass and individual circumstances.';

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetChecklist = () => {
    setCheckedItems({});
  };

  const categoriesToShow =
    activeCategory === 'all'
      ? CHECKLIST_CATEGORIES
      : CHECKLIST_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="document-checklist" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-900 tracking-wider uppercase">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Interactive Checklist</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Australian Visa Document Checklist
            </h2>
            <p className="text-slate-600 text-base">
              Track and organise essential evidence across identity, education, employment, financial, and character criteria.
            </p>
          </div>

          {/* Progress Box & Action Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-right">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Preparation Progress
              </div>
              <div className="text-sm font-bold text-slate-900">
                <span className="text-blue-900 font-mono text-base">{checkedCount}</span> / {totalItems} items ready
              </div>
            </div>

            <button
              onClick={handleCopy}
              className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs cursor-pointer"
              title="Copy checklist summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy List'}</span>
            </button>

            {checkedCount > 0 && (
              <button
                onClick={handleResetChecklist}
                className="p-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-500 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                title="Reset checks"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Categories ({totalItems})
          </button>
          {CHECKLIST_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.title} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* Checklist Categories Content */}
        <div className="space-y-8">
          {categoriesToShow.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs"
            >
              <div className="border-b border-slate-200/80 pb-4 mb-5">
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {cat.items.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer select-none ${
                        isChecked
                          ? 'bg-emerald-50/70 border-emerald-300/80 text-slate-900 shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-slate-400">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <Square className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-bold leading-snug ${
                              isChecked ? 'line-through text-slate-500' : 'text-slate-900'
                            }`}
                          >
                            {item.label}
                          </span>
                          {item.isCore && (
                            <span className="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase bg-blue-100 text-blue-900">
                              Core
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Section 30 Mandatory Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
          <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-800">Checklist Notice: </strong>
            Document requirements vary according to visa subclass and individual circumstances. Certified English translations by NAATI-accredited translators or official government authorities are required for non-English documents.
          </div>
        </div>
      </div>
    </section>
  );
};
