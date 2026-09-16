import React, { useState, useEffect } from 'react';
import { submitToEmail } from './formSubmit';
import {
  X,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  CheckCircle2,
  Shield,
  MapPin,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

interface ConsultationModalProps {
  isOpen: boolean;
  initialVisaTitle?: string;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  initialVisaTitle = '',
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'Phone Call',
    visaInterest: initialVisaTitle || 'General Visa Exploration',
    preferredDate: '',
    preferredTime: 'Morning (9am - 12pm)',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialVisaTitle) {
      setFormData((prev) => ({ ...prev, visaInterest: initialVisaTitle }));
    }
  }, [initialVisaTitle]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await submitToEmail('Consultation Request', formData);
      setSubmitted(true);
    } catch {
      window.alert('We could not submit your request. Please try again or contact us by phone/WhatsApp.');
    }
  };

  return (
    <div
      id="consultation-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-slate-950 text-white p-6 relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-[11px] font-bold text-blue-200 uppercase tracking-wider mb-2">
            <Shield className="w-3 h-3 text-blue-400" />
            <span>Obligation-Free Initial Discussion</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
            Book Free Consultation
          </h3>
          <p className="text-xs text-slate-300 mt-1 font-medium">
            Speak directly with Registered Migration Agent Amit Verma (MARN {BUSINESS_INFO.marn}).
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+61 400 000 000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                    Consultation Format
                  </label>
                  <select
                    value={formData.consultationType}
                    onChange={(e) =>
                      setFormData({ ...formData, consultationType: e.target.value })
                    }
                    className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Phone Call">Phone Call</option>
                    <option value="WhatsApp Call">WhatsApp Call</option>
                    <option value="Video Conference (Zoom/Google Meet)">Video Conference (Zoom/Google Meet)</option>
                    <option value="Brisbane Office Meeting">Brisbane Office Meeting (101 Wickham Tce)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                  Visa or Subject Matter of Interest
                </label>
                <input
                  type="text"
                  value={formData.visaInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, visaInterest: e.target.value })
                  }
                  className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                  >
                    <option value="Morning (9am - 12pm)">Morning (9am - 12pm AEST)</option>
                    <option value="Afternoon (12pm - 3pm)">Afternoon (12pm - 3pm AEST)</option>
                    <option value="Late Afternoon (3pm - 5:30pm)">Late Afternoon (3pm - 5:30pm AEST)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-800 mb-1 uppercase tracking-wider">
                  Notes / Questions
                </label>
                <textarea
                  rows={2}
                  placeholder="Briefly describe your situation..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full py-2 px-3 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              {/* Direct Channels Quick Link */}
              <div className="p-3 bg-slate-100 rounded-xl flex items-center justify-between text-[11px] text-slate-600">
                <span>Prefer immediate contact?</span>
                <div className="flex gap-2">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-bold text-blue-900 hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>
                  <span className="text-slate-400">|</span>
                  <a
                    href={BUSINESS_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold tracking-wide transition-colors cursor-pointer"
                >
                  Confirm Free Consultation
                </button>
              </div>
            </form>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900">
                Consultation Request Received
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Amit Verma will confirm your consultation time and details shortly via {formData.phone} or {formData.email}.
              </p>
              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
