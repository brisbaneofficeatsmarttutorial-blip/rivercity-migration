/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Introduction } from './components/Introduction';
import { VisaFinder } from './components/VisaFinder';
import { VisaCategories } from './components/VisaCategories';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { ClientExperiences } from './components/ClientExperiences';
import { FreeConsultationCta } from './components/FreeConsultationCta';
import { FreeAssessmentSection } from './components/FreeAssessmentSection';
import { DocumentChecklistSection } from './components/DocumentChecklistSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VisaDetailModal } from './components/VisaDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';
import { VisaSubclass } from './types';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './data/businessInfo';

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
   {
  const [selectedVisaForDetail, setSelectedVisaForDetail] = useState<VisaSubclass | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationVisaTitle, setConsultationVisaTitle] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'privacy' | 'terms' | null>(null);

  const handleOpenConsultation = (visaTitle?: string) => {
    if (visaTitle) {
      setConsultationVisaTitle(visaTitle);
    } else {
      setConsultationVisaTitle('');
    }
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-900 selection:text-white">
      {/* Top Header & Navigation */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} onOpenConsultation={() => handleOpenConsultation()} />

      <main className="grow">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* MARN, OMARA, Location, ABN Trust Bar */}
        <TrustBar />

        {/* Section 10: Editorial Introduction */}
        <Introduction onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section 11: Interactive Visa Finder */}
        <VisaFinder onSelectVisa={() => {}} onOpenConsultationWithData={() => {}} onOpenConsultation={(visa) => handleOpenConsultation(visa)} />

        {/* Sections 12-22: Visa Subclasses & Categories */}
        <VisaCategories
          onSelectVisa={(visa) => setSelectedVisaForDetail(visa)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Section 23: Professional Services */}
        <ServicesSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section 24: 7-Step Process */}
        <HowItWorks onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section 25 & 26: About Rivercity Migration & Why Rivercity */}
        <AboutSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section 27: Client Experiences (30 Reviews) */}
        <ClientExperiences />

        {/* Section 28: High-Impact Free Consultation CTA */}
        <FreeConsultationCta onOpenConsultation={() => handleOpenConsultation()} />

        {/* Section 29: Multi-step Free Assessment */}
        <FreeAssessmentSection />

        {/* Section 30: Interactive Document Checklist */}
        <DocumentChecklistSection />

        {/* Section 31: Frequently Asked Questions */}
        <FAQSection />

        {/* Section 32 & 33: Brisbane Office & Contact Form */}
        <ContactSection />
      </main>

      {/* Section 34: Regulated Footer & Statutory Disclaimers */}
      <Footer
        onOpenLegalModal={(type) => setLegalModalType(type)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Sticky Mobile Fast Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 flex items-center justify-around">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-2 px-3 m-1 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span>Call Agent</span>
        </a>
        <a
          href={BUSINESS_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 m-1 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => handleOpenConsultation()}
          className="flex-1 py-2 px-3 m-1 rounded-lg bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
        >
          <span>Consult</span>
        </button>
      </div>

      {/* Modals */}
      <VisaDetailModal
        visa={selectedVisaForDetail}
        onClose={() => setSelectedVisaForDetail(null)}
        onBookConsultation={(visaTitle) => handleOpenConsultation(visaTitle)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        initialVisaTitle={consultationVisaTitle}
        onClose={() => {
          setIsConsultationOpen(false);
          setConsultationVisaTitle('');
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
}
