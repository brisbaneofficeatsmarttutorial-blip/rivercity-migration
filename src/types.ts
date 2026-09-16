export interface BusinessDetails {
  name: string;
  tagline: string;
  agentName: string;
  marn: string;
  abn: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappLink: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
    full: string;
  };
  consultation: string;
  officialLinks: {
    omara: string;
    codeOfConduct: string;
    consumerGuide: string;
    homeAffairs: string;
  };
}

export interface VisaSubclass {
  id: string;
  subclass: string;
  title: string;
  subtitle: string;
  category: 'visitor' | 'student' | 'graduate' | 'employer' | 'skilled' | 'regional' | 'family' | 'innovation' | 'transit' | 'other';
  categoryLabel: string;
  streams?: string[];
  description: string;
  keyConsiderations: string[];
  servicesProvided: string[];
  whoItsFor: string;
  ctaText: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  location: string;
  visaCategory: string;
  rating: number;
  date: string;
  content: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  description: string;
  items: {
    id: string;
    label: string;
    description?: string;
    isCore?: boolean;
  }[];
}

export interface VisaFinderState {
  mainGoal: string;
  inAustralia: string;
  age: string;
  nationality: string;
  residenceCountry: string;
  currentVisa: string;
  visaExpiry: string;
  qualification: string;
  occupation: string;
  workExperience: string;
  englishStatus: string;
  skillsAssessment: string;
  employerSponsor: string;
  partnerFamilyInAu: string;
  previousRefusal: string;
  intendedGoal: string;
}

export interface AssessmentFormData {
  fullName: string;
  email: string;
  phone: string;
  age: string;
  nationality: string;
  currentCountry: string;
  currentAustralianVisa: string;
  visaExpiry: string;
  education: string;
  occupation: string;
  workExperience: string;
  englishTest: string;
  skillsAssessment: string;
  intendedVisa: string;
  familyCircumstances: string;
  previousVisaRefusal: string;
  message: string;
  privacyConsent: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  nationality: string;
  currentCountry: string;
  age: string;
  currentAustralianVisa: string;
  visaExpiry: string;
  occupation: string;
  education: string;
  workExperience: string;
  intendedVisa: string;
  message: string;
  disclaimerConsent: boolean;
}
