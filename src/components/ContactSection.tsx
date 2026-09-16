import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';
import { ContactFormData } from '../types';
import { submitToEmail } from './formSubmit';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    currentCountry: '',
    age: '',
    currentAustralianVisa: '',
    visaExpiry: '',
    occupation: '',
    education: '',
    workExperience: '',
    intendedVisa: '',
    message: '',
    disclaimerConsent: false,
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

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
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please complete all required contact fields.');
      return;
    }
    if (!formData.disclaimerConsent) {
      setErrorMsg('You must check the consent acknowledgement before submitting.');
      return;
    }
    try {
      setErrorMsg('');
      await submitToEmail('Contact Form', formData as unknown as Record<string, unknown>);
      setSubmitted(true);
    } catch {
      setErrorMsg('We could not submit your enquiry. Please try again or contact us by phone/WhatsApp.');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 tracking-wider uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-900" />
            <span>Brisbane City Office & Enquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Talk About Your Australian Migration Journey
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Connect with Registered Migration Agent Amit Verma. We welcome in-person appointments at our Wickham Terrace office or remote telephone and video consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Business Contact Details & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-2xs space-y-6">
              <div>
                <span className="text-[11px] font-bold text-blue-900 uppercase tracking-widest block">
                  Rivercity Migration
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                  Amit Verma
                </h3>
                <div className="text-xs font-bold text-slate-700 mt-0.5">
                  Registered Migration Agent
                </div>
                <div className="text-xs font-mono font-medium text-blue-900 mt-0.5">
                  MARN {BUSINESS_INFO.marn}
                </div>
                <div className="text-xs font-mono text-slate-500 mt-0.5">
                  ABN: {BUSINESS_INFO.abn}
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200 text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 shrink-0 mt-0.5 shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-xs uppercase tracking-wider">
                      Office Address
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Level 6, Unit 87<br />
                      101 Wickham Terrace<br />
                      Brisbane City QLD 4000<br />
                      Australia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 shrink-0 mt-0.5 shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-xs uppercase tracking-wider">
                      Telephone
                    </strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-xs font-bold text-blue-900 hover:underline mt-0.5 block"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5 shadow-2xs">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-xs uppercase tracking-wider">
                      WhatsApp
                    </strong>
                    <a
                      href={BUSINESS_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:underline mt-0.5 block"
                    >
                      {BUSINESS_INFO.whatsapp} (Chat with us)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-blue-900 shrink-0 mt-0.5 shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-xs uppercase tracking-wider">
                      Email Address
                    </strong>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-xs font-bold text-slate-800 hover:text-blue-900 mt-0.5 block truncate"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 mt-0.5 shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold text-xs uppercase tracking-wider">
                      Consultation Hours
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Monday to Friday: 9:00 AM – 5:30 PM AEST<br />
                      Saturday: By Prior Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Brisbane Map Embed Container */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xs bg-slate-100">
              <div className="p-3 bg-slate-900 text-white text-xs flex items-center justify-between">
                <span className="font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  101 Wickham Terrace, Brisbane City QLD 4000
                </span>
                <span className="text-[10px] text-slate-400">Spring Hill / City Centre</span>
              </div>
              <iframe
                title="Rivercity Migration Brisbane Location"
                src="https://maps.google.com/maps?q=101+Wickham+Terrace,+Brisbane+City+QLD+4000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Complete Section 33 Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Send Your Migration Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Complete the details below for personalised guidance.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. Arslan Khan"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+61 466 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Nationality */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Nationality
                      </label>
                      <input
                        type="text"
                        name="nationality"
                        placeholder="Passport country"
                        value={formData.nationality}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Current Country */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Current Country
                      </label>
                      <input
                        type="text"
                        name="currentCountry"
                        placeholder="e.g. Australia / Overseas"
                        value={formData.currentCountry}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        placeholder="e.g. 29"
                        value={formData.age}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Current Australian Visa */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Current Australian Visa
                      </label>
                      <input
                        type="text"
                        name="currentAustralianVisa"
                        placeholder="e.g. None, 500, 485, 482, 600"
                        value={formData.currentAustralianVisa}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Visa Expiry */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Visa Expiry Date
                      </label>
                      <input
                        type="text"
                        name="visaExpiry"
                        placeholder="DD/MM/YYYY or N/A"
                        value={formData.visaExpiry}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Occupation
                      </label>
                      <input
                        type="text"
                        name="occupation"
                        placeholder="e.g. Accountant, Chef, Developer"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Education */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Education
                      </label>
                      <input
                        type="text"
                        name="education"
                        placeholder="Bachelor, Masters, Trade, etc."
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Work Experience */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Work Experience
                      </label>
                      <input
                        type="text"
                        name="workExperience"
                        placeholder="e.g. 4 years full-time"
                        value={formData.workExperience}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>

                    {/* Intended Visa */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                        Intended Visa
                      </label>
                      <input
                        type="text"
                        name="intendedVisa"
                        placeholder="e.g. 482, 190, 491, Partner, 600"
                        value={formData.intendedVisa}
                        onChange={handleChange}
                        className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Describe your current situation, timeline, or any specific questions..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                  </div>

                  {/* Section 33 Mandatory Consent */}
                  <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        name="disclaimerConsent"
                        checked={formData.disclaimerConsent}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 rounded text-blue-900 border-slate-300 focus:ring-blue-900"
                      />
                      <span className="font-medium text-slate-800 leading-relaxed">
                        “I understand that submitting this form does not guarantee visa eligibility or a visa outcome.”
                      </span>
                    </label>
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-blue-900 text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-blue-400" />
                    <span>SEND ENQUIRY</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-slate-900">
                    Enquiry Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Amit Verma will review your information and respond to you promptly via {formData.email || 'your email'} or phone.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-900 underline mt-2 cursor-pointer"
                  >
                    Send another enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
