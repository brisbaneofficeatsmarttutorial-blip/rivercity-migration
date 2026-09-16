import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { VisaFinderState, VisaSubclass } from '../types';
import {
  INITIAL_FINDER_STATE,
  MAIN_GOALS,
  evaluateVisaPathways,
  EvaluatedPathway,
} from '../data/visaFinderData';

interface VisaFinderProps {
  onOpenConsultationWithData: (data: Partial<VisaFinderState>) => void;
  onSelectVisa: (visa: VisaSubclass) => void;
}

export const VisaFinder: React.FC<VisaFinderProps> = ({
  onOpenConsultationWithData,
  onSelectVisa,
}) => {
  const [formState, setFormState] = useState<VisaFinderState>(INITIAL_FINDER_STATE);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<EvaluatedPathway[]>([]);

  const handleInputChange = (field: keyof VisaFinderState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleGoalSelect = (goalId: string) => {
    handleInputChange('mainGoal', goalId);
  };

  const handleCalculateResults = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const evaluated = evaluateVisaPathways(formState);
    setResults(evaluated);
    setShowResults(true);
  };

  const handleReset = () => {
    setFormState(INITIAL_FINDER_STATE);
    setCurrentStep(1);
    setShowResults(false);
    setResults([]);
  };

  return (
    <section id="visa-finder" className="py-20 sm:py-24 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-900 tracking-wider uppercase shadow-xs">
            <Compass className="w-3.5 h-3.5 text-blue-700" />
            <span>Interactive Pathway Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Which Australian Visa Pathway Could Be Right for You?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
            Answer a few questions to explore potentially relevant Australian visa pathways.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/90 overflow-hidden">
          {/* Step Progress Bar */}
          {!showResults && (
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-blue-950 uppercase tracking-widest">
                  Step {currentStep} of 3
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-slate-600 font-medium">
                  {currentStep === 1 && 'Primary Goal & Location'}
                  {currentStep === 2 && 'Personal & Visa Background'}
                  {currentStep === 3 && 'Skills, Employment & Sponsorship'}
                </span>
              </div>
              <div className="w-32 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-900 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="p-6 sm:p-8 lg:p-10">
            {!showResults ? (
              <div>
                {/* STEP 1: Main Goal & Status */}
                {currentStep === 1 && (
                  <div className="space-y-8 animate-in fade-in duration-300">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-1">
                        1. What is your main goal? <span className="text-red-500">*</span>
                      </label>
                      <p className="text-xs text-slate-500 mb-4">
                        Select the primary purpose for your Australian visa enquiry.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {MAIN_GOALS.map((goal) => {
                          const isSelected = formState.mainGoal === goal.id;
                          return (
                            <button
                              type="button"
                              key={goal.id}
                              onClick={() => handleGoalSelect(goal.id)}
                              className={`p-4 rounded-xl text-left border transition-all duration-150 flex items-start justify-between cursor-pointer ${
                                isSelected
                                  ? 'border-blue-900 bg-blue-50/70 ring-2 ring-blue-900/10'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              <div>
                                <div className={`text-sm font-bold ${isSelected ? 'text-blue-950' : 'text-slate-900'}`}>
                                  {goal.label}
                                </div>
                                <div className="text-xs text-slate-500 mt-0.5">{goal.desc}</div>
                              </div>
                              {isSelected && (
                                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                      {/* Question 2: In Australia */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          2. Are you currently in Australia? <span className="text-red-500">*</span>
                        </label>
                        <p className="text-xs text-slate-500 mb-2">Onshore or offshore status</p>
                        <div className="grid grid-cols-2 gap-3">
                          {['Yes', 'No'].map((opt) => (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => handleInputChange('inAustralia', opt)}
                              className={`py-3 px-4 rounded-lg text-sm font-semibold border text-center transition-colors cursor-pointer ${
                                formState.inAustralia === opt
                                  ? 'bg-slate-900 text-white border-slate-900'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Question 3: Age */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          3. Age bracket
                        </label>
                        <p className="text-xs text-slate-500 mb-2">Important for points-tested visas</p>
                        <select
                          value={formState.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select your age bracket</option>
                          <option value="Under 18">Under 18</option>
                          <option value="18-24">18 - 24 years</option>
                          <option value="25-32">25 - 32 years (Maximum points)</option>
                          <option value="33-39">33 - 39 years</option>
                          <option value="40-44">40 - 44 years</option>
                          <option value="45+">45 years and above</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        disabled={!formState.mainGoal || !formState.inAustralia}
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-900 text-white text-sm font-bold tracking-wide hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <span>Continue to Step 2</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Personal & Current Visa Details */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Question 4: Nationality */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          4. Nationality (Passport Country)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. India, Pakistan, Bangladesh, UK, etc."
                          value={formState.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      {/* Question 5: Current Country of Residence */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          5. Current country of residence
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Australia, UAE, India, Singapore, etc."
                          value={formState.residenceCountry}
                          onChange={(e) => handleInputChange('residenceCountry', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      {/* Question 6: Current Australian Visa */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          6. Current Australian visa (if applicable)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. None, Subclass 500, 485, 600, BVA, 482"
                          value={formState.currentVisa}
                          onChange={(e) => handleInputChange('currentVisa', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      {/* Question 7: Visa Expiry Date */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          7. Visa expiry date (if holding Australian visa)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 15/12/2026 or Not Applicable"
                          value={formState.visaExpiry}
                          onChange={(e) => handleInputChange('visaExpiry', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      {/* Question 8: Highest Qualification */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          8. Highest qualification
                        </label>
                        <select
                          value={formState.qualification}
                          onChange={(e) => handleInputChange('qualification', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select qualification</option>
                          <option value="Doctorate (PhD)">Doctorate (PhD)</option>
                          <option value="Master's Degree">Master&apos;s Degree</option>
                          <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                          <option value="Australian Diploma or Trade Qualification">
                            Australian Diploma / Trade Qualification
                          </option>
                          <option value="Overseas Diploma">Overseas Diploma</option>
                          <option value="Secondary School (Year 12)">Secondary School</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Question 9: Occupation */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          9. Occupation / Field of Work
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Software Engineer, Registered Nurse, Chef"
                          value={formState.occupation}
                          onChange={(e) => handleInputChange('occupation', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-900 text-white text-sm font-bold tracking-wide hover:bg-blue-800 transition-colors"
                      >
                        <span>Continue to Step 3</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Experience, Sponsorship & Circumstances */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Question 10: Work Experience */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          10. Years of relevant skilled work experience
                        </label>
                        <select
                          value={formState.workExperience}
                          onChange={(e) => handleInputChange('workExperience', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select experience</option>
                          <option value="None">None / Less than 1 year</option>
                          <option value="1-2 years">1 - 2 years</option>
                          <option value="3-5 years">3 - 5 years</option>
                          <option value="5-8 years">5 - 8 years</option>
                          <option value="8+ years">8+ years</option>
                        </select>
                      </div>

                      {/* Question 11: English Status */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          11. English-language test / status
                        </label>
                        <select
                          value={formState.englishStatus}
                          onChange={(e) => handleInputChange('englishStatus', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select English level</option>
                          <option value="Superior (IELTS 8+ / PTE 79+)">Superior (IELTS 8+ / PTE 79+)</option>
                          <option value="Proficient (IELTS 7+ / PTE 65+)">Proficient (IELTS 7+ / PTE 65+)</option>
                          <option value="Competent (IELTS 6+ / PTE 50+)">Competent (IELTS 6+ / PTE 50+)</option>
                          <option value="Native Speaker (Passport: UK, USA, CA, NZ, IE)">
                            Native Speaker (Exempt Passport)
                          </option>
                          <option value="Not Yet Tested">Not Yet Tested</option>
                        </select>
                      </div>

                      {/* Question 12: Skills Assessment */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          12. Skills assessment status
                        </label>
                        <select
                          value={formState.skillsAssessment}
                          onChange={(e) => handleInputChange('skillsAssessment', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select assessment status</option>
                          <option value="Positive Assessment Completed">Positive Outcome Completed</option>
                          <option value="Application In Progress">Application In Progress</option>
                          <option value="Not Yet Applied">Not Yet Applied</option>
                          <option value="Not Applicable for My Goal">Not Applicable / Unsure</option>
                        </select>
                      </div>

                      {/* Question 13: Australian Employer */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          13. Australian employer / sponsor available?
                        </label>
                        <select
                          value={formState.employerSponsor}
                          onChange={(e) => handleInputChange('employerSponsor', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select employer status</option>
                          <option value="Yes">Yes — Employer willing to sponsor</option>
                          <option value="No">No — Seeking independent or other pathways</option>
                          <option value="Currently in Discussions">Currently in discussions with employer</option>
                        </select>
                      </div>

                      {/* Question 14: Partner/Family in AU */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          14. Partner or family in Australia?
                        </label>
                        <select
                          value={formState.partnerFamilyInAu}
                          onChange={(e) => handleInputChange('partnerFamilyInAu', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select family connection</option>
                          <option value="Yes">Yes — Spouse / Partner is AU Citizen or PR</option>
                          <option value="Family in Regional AU">Eligible Family in Regional Australia</option>
                          <option value="Family in Metro AU">Family member in Metropolitan Australia</option>
                          <option value="No">None</option>
                        </select>
                      </div>

                      {/* Question 15: Previous Refusal/Cancellation */}
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-1">
                          15. Previous Australian visa refusal or cancellation?
                        </label>
                        <select
                          value={formState.previousRefusal}
                          onChange={(e) => handleInputChange('previousRefusal', e.target.value)}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="No">No — Clean immigration history</option>
                          <option value="Yes - Previous Refusal">Yes — Previous Visa Refusal</option>
                          <option value="Yes - Previous Cancellation">Yes — Previous Visa Cancellation</option>
                        </select>
                      </div>
                    </div>

                    {/* Question 16: Intended Goal Note */}
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-1">
                        16. Brief summary of your intended migration goal
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Permanent residency in Brisbane as a software engineer, or student visa extension"
                        value={formState.intendedGoal}
                        onChange={(e) => handleInputChange('intendedGoal', e.target.value)}
                        className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    <div className="flex justify-between pt-4 border-t border-slate-100">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleCalculateResults()}
                        className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold tracking-wide shadow-md transition-all cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>VIEW POTENTIALLY RELEVANT PATHWAYS</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* RESULTS VIEW */
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 block">
                      Evaluation Outcome
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                      Potentially Relevant Visa Pathways
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 self-start sm:self-auto cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Start Over</span>
                  </button>
                </div>

                {/* Pathway Cards */}
                <div className="space-y-4">
                  {results.map((path, idx) => (
                    <div
                      key={path.visa.id || idx}
                      className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-900/40 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide bg-blue-950 text-white">
                              {path.visa.subclass}
                            </span>
                            <span
                              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                                path.matchStrength === 'High Potential'
                                  ? 'bg-emerald-100 text-emerald-800'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {path.matchStrength}
                            </span>
                            <span className="text-xs text-slate-500 font-medium">
                              {path.visa.categoryLabel}
                            </span>
                          </div>
                          <h4 className="font-serif text-xl font-bold text-slate-900 mt-1">
                            {path.visa.title}
                          </h4>
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectVisa(path.visa)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-blue-700 self-start shrink-0 cursor-pointer"
                        >
                          <span>View Full Details</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-sm text-slate-700 mb-3 leading-relaxed">
                        {path.reasoning}
                      </p>

                      <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900 font-semibold">Recommended Focus: </strong>
                          {path.nextStep}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section 11 Statutory Disclaimer */}
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>IMPORTANT NOTICE</span>
                  </div>
                  <p className="leading-relaxed text-amber-950/80">
                    The assessment provides general guidance only and does not guarantee visa eligibility, nomination, invitation or visa grant. Australian migration laws and requirements depend on individual circumstances at the time of lodgement.
                  </p>
                </div>

                {/* Final Booking CTA */}
                <div className="bg-slate-950 text-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
                      Personalised Consultation
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold">
                      Discuss These Pathways With Amit Verma
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                      Review these identified options and understand your exact documentation requirements in an obligation-free discussion.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenConsultationWithData(formState)}
                    className="px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors shrink-0 shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>BOOK FREE CONSULTATION</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
