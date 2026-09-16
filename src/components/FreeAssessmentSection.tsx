import React, { useState } from 'react';
import {
  FileText,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  Send,
  Lock,
  Calendar,
} from 'lucide-react';
import { AssessmentFormData } from '../types';
import { submitToEmail } from './formSubmit';
import { BUSINESS_INFO } from '../data/businessInfo';

export const FreeAssessmentSection: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<AssessmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    nationality: '',
    currentCountry: '',
    currentAustralianVisa: '',
    visaExpiry: '',
    education: '',
    occupation: '',
    workExperience: '',
    englishTest: '',
    skillsAssessment: '',
    intendedVisa: '',
    familyCircumstances: '',
    previousVisaRefusal: 'No',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim()) errs.email = 'Valid Email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone Number is required';
    if (!formData.age) errs.age = 'Please select age bracket';
    if (!formData.nationality.trim()) errs.nationality = 'Nationality is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.education) errs.education = 'Education level is required';
    if (!formData.occupation.trim()) errs.occupation = 'Occupation is required';
    if (!formData.workExperience) errs.workExperience = 'Work experience is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setErrors((prev) => ({ ...prev, privacyConsent: 'Please consent to the privacy policy to continue' }));
      return;
    }
    try {
      setErrors({});
      await submitToEmail('Free Assessment', formData as unknown as Record<string, unknown>);
      setIsSubmitted(true);
    } catch {
      setErrors((prev) => ({ ...prev, submit: 'We could not submit your assessment. Please try again or contact us by phone/WhatsApp.' }));
    }
  };

  return (
    <section id="free-assessment" className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-blue-900 tracking-wider uppercase shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-blue-800" />
            <span>Structured Evaluation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Free Online Assessment
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-base">
            Provide your details for an initial confidential review by Registered Migration Agent Amit Verma.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          {/* Form Step Header */}
          {!isSubmitted && (
            <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400">
                  PART {step} OF 3
                </span>
                <span className="text-slate-500">|</span>
                <span className="text-xs font-medium text-slate-300">
                  {step === 1 && 'Personal & Contact Details'}
                  {step === 2 && 'Qualifications, Occupation & Experience'}
                  {step === 3 && 'Visa Goals & History'}
                </span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-6 h-1.5 rounded-full transition-colors ${
                      step >= i ? 'bg-emerald-400' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="p-6 sm:p-8 lg:p-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* STEP 1: Personal Details */}
                {step === 1 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Gurpreet Singh"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                        {errors.fullName && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.fullName}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.email}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Phone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+61 400 000 000"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                        {errors.phone && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.phone}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Age Bracket <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select Age</option>
                          <option value="Under 18">Under 18</option>
                          <option value="18-24">18 - 24</option>
                          <option value="25-32">25 - 32</option>
                          <option value="33-39">33 - 39</option>
                          <option value="40-44">40 - 44</option>
                          <option value="45+">45 and above</option>
                        </select>
                        {errors.age && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.age}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Nationality <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nationality"
                          placeholder="e.g. Pakistani, Indian, Bangladeshi"
                          value={formData.nationality}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                        {errors.nationality && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.nationality}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Current Country
                        </label>
                        <input
                          type="text"
                          name="currentCountry"
                          placeholder="e.g. Australia or Home Country"
                          value={formData.currentCountry}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          if (validateStep1()) setStep(2);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-900 text-white text-xs font-bold tracking-wide hover:bg-blue-800 cursor-pointer"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Qualifications & Experience */}
                {step === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Education / Highest Qualification <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select Level</option>
                          <option value="Doctorate">Doctorate (PhD)</option>
                          <option value="Master's">Master&apos;s Degree</option>
                          <option value="Bachelor's">Bachelor&apos;s Degree</option>
                          <option value="Australian Diploma">Australian Diploma / Trade</option>
                          <option value="Overseas Diploma">Overseas Diploma</option>
                          <option value="Secondary">Secondary (Year 12)</option>
                        </select>
                        {errors.education && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.education}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Occupation / Job Role <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          placeholder="e.g. Registered Nurse, Civil Engineer"
                          value={formData.occupation}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                        {errors.occupation && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.occupation}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Work Experience <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="workExperience"
                          value={formData.workExperience}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select Experience</option>
                          <option value="None">None / Graduate</option>
                          <option value="1-2 years">1 - 2 years</option>
                          <option value="3-5 years">3 - 5 years</option>
                          <option value="5-8 years">5 - 8 years</option>
                          <option value="8+ years">8+ years</option>
                        </select>
                        {errors.workExperience && (
                          <span className="text-[11px] text-red-600 mt-1 block">{errors.workExperience}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          English Test Status
                        </label>
                        <select
                          name="englishTest"
                          value={formData.englishTest}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select English Level</option>
                          <option value="Superior (8+ / 79+)">Superior (IELTS 8+ / PTE 79+)</option>
                          <option value="Proficient (7+ / 65+)">Proficient (IELTS 7+ / PTE 65+)</option>
                          <option value="Competent (6+ / 50+)">Competent (IELTS 6+ / PTE 50+)</option>
                          <option value="Native Speaker">Native Speaker (Passport)</option>
                          <option value="Not yet taken">Not yet taken</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Skills Assessment
                        </label>
                        <select
                          name="skillsAssessment"
                          value={formData.skillsAssessment}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="">Select Status</option>
                          <option value="Positive Outcome">Positive Outcome</option>
                          <option value="Applied / In Progress">Applied / In Progress</option>
                          <option value="Not Yet Applied">Not Yet Applied</option>
                          <option value="Not Applicable">Not Applicable</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Current Australian Visa (if onshore)
                        </label>
                        <input
                          type="text"
                          name="currentAustralianVisa"
                          placeholder="e.g. Subclass 500, 485, 600, BVA"
                          value={formData.currentAustralianVisa}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (validateStep2()) setStep(3);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-900 text-white text-xs font-bold tracking-wide hover:bg-blue-800 cursor-pointer"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Visa Goals, History & Consent */}
                {step === 3 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Visa Expiry (if currently holding visa)
                        </label>
                        <input
                          type="text"
                          name="visaExpiry"
                          placeholder="e.g. 15/03/2027 or N/A"
                          value={formData.visaExpiry}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Intended Visa Category
                        </label>
                        <input
                          type="text"
                          name="intendedVisa"
                          placeholder="e.g. Subclass 190 / 482 / Partner / 485"
                          value={formData.intendedVisa}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Family Circumstances
                        </label>
                        <input
                          type="text"
                          name="familyCircumstances"
                          placeholder="Single, Married with spouse, Dependent children"
                          value={formData.familyCircumstances}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                          Previous Visa Refusal / Cancellation?
                        </label>
                        <select
                          name="previousVisaRefusal"
                          value={formData.previousVisaRefusal}
                          onChange={handleChange}
                          className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                          <option value="No">No — Clean Immigration History</option>
                          <option value="Yes - Refusal">Yes — Previous Visa Refusal</option>
                          <option value="Yes - Cancellation">Yes — Previous Visa Cancellation</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1 uppercase tracking-wider">
                        Message / Specific Questions
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Provide any additional context regarding your migration goals or deadlines..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full py-2.5 px-3.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Privacy Consent */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="privacyConsent"
                          checked={formData.privacyConsent}
                          onChange={handleChange}
                          className="mt-0.5 w-4 h-4 rounded text-blue-900 border-slate-300 focus:ring-blue-900"
                        />
                        <span className="leading-relaxed">
                          I consent to Rivercity Migration collecting and reviewing my personal details for the purpose of assessing my Australian visa options in accordance with the Privacy Act 1988 (Cth). I understand that this preliminary assessment does not guarantee visa eligibility or grant.
                        </span>
                      </label>
                      {errors.privacyConsent && (
                        <span className="text-[11px] text-red-600 block pl-7">
                          {errors.privacyConsent}
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>START MY FREE ASSESSMENT</span>
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* Success State */
              <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Assessment Request Received
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Registered Migration Agent Amit Verma will review your background and get in touch with you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="text-xs font-bold text-blue-900 underline hover:text-blue-700 cursor-pointer"
                  >
                    Submit another enquiry
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
