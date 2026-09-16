import { VisaFinderState, VisaSubclass } from '../types';
import { VISAS_DATA } from './visasData';

export interface EvaluatedPathway {
  visa: VisaSubclass;
  matchStrength: 'High Potential' | 'Relevant Option' | 'Worth Exploring';
  reasoning: string;
  nextStep: string;
}

export const INITIAL_FINDER_STATE: VisaFinderState = {
  mainGoal: '',
  inAustralia: '',
  age: '',
  nationality: '',
  residenceCountry: '',
  currentVisa: '',
  visaExpiry: '',
  qualification: '',
  occupation: '',
  workExperience: '',
  englishStatus: '',
  skillsAssessment: '',
  employerSponsor: '',
  partnerFamilyInAu: '',
  previousRefusal: '',
  intendedGoal: '',
};

export const MAIN_GOALS = [
  { id: 'Visit Australia', label: 'Visit Australia', icon: 'Plane', desc: 'Tourism, visiting family or business visits' },
  { id: 'Study', label: 'Study in Australia', icon: 'GraduationCap', desc: 'Higher education, vocational courses, or school' },
  { id: 'Work', label: 'Work in Australia', icon: 'Briefcase', desc: 'Employer sponsored or temporary work rights' },
  { id: 'Skilled Migration', label: 'Skilled Migration', icon: 'TrendingUp', desc: 'Points-tested independent or state-nominated PR' },
  { id: 'Employer Sponsorship', label: 'Employer Sponsorship', icon: 'Building2', desc: 'Sponsored by an Australian business (482/186)' },
  { id: 'Partner/Family', label: 'Partner / Family', icon: 'HeartHandshake', desc: 'Spouse, de facto partner, parent or child' },
  { id: 'Permanent Migration', label: 'Permanent Migration', icon: 'Target', desc: 'Long-term pathway to Australian permanent residence' },
  { id: 'Business/Innovation', label: 'Business / Innovation', icon: 'Sparkles', desc: 'Subclass 858 National Innovation & high talent' },
  { id: 'Transit', label: 'Transit Through Australia', icon: 'Clock', desc: 'Connecting flights up to 72 hours (Subclass 771)' },
  { id: 'Other', label: 'Other Migration Matters', icon: 'HelpCircle', desc: 'Citizenship, bridging visas or review matters' },
];

export function evaluateVisaPathways(state: VisaFinderState): EvaluatedPathway[] {
  const results: EvaluatedPathway[] = [];
  const goal = state.mainGoal;
  const inAu = state.inAustralia === 'Yes';
  const hasEmployer = state.employerSponsor === 'Yes';
  const hasPartnerInAu = state.partnerFamilyInAu === 'Yes';
  const hasPositiveSkills = state.skillsAssessment === 'Positive Assessment Completed';

  const findVisa = (subclassStr: string) => VISAS_DATA.find((v) => v.subclass.includes(subclassStr));

  // 1. Visitor
  if (goal === 'Visit Australia') {
    const v600 = findVisa('600');
    if (v600) {
      results.push({
        visa: v600,
        matchStrength: 'High Potential',
        reasoning:
          'Based on your goal to visit Australia for tourism, visiting relatives, or permitted business, Subclass 600 provides multiple tailored streams.',
        nextStep: 'Confirm your intended duration of stay and assemble financial and genuine temporary stay evidence.',
      });
    }
  }

  // 2. Study
  if (goal === 'Study' || state.intendedGoal.toLowerCase().includes('study')) {
    const v500 = findVisa('500');
    if (v500) {
      results.push({
        visa: v500,
        matchStrength: 'High Potential',
        reasoning:
          'Subclass 500 allows you to enrol in full-time CRICOS registered Australian courses with part-time work rights during study terms.',
        nextStep: 'Obtain a valid Confirmation of Enrolment (CoE) and prepare your Genuine Student statement and financial evidence.',
      });
    }
  }

  // 3. Graduate Post-Study
  if (inAu && (state.currentVisa.toLowerCase().includes('500') || state.currentVisa.toLowerCase().includes('student') || goal === 'Work')) {
    const v485 = findVisa('485');
    if (v485) {
      results.push({
        visa: v485,
        matchStrength: 'High Potential',
        reasoning:
          'If you have completed an eligible Australian qualification meeting the Australian Study Requirement (92 weeks CRICOS), Subclass 485 grants full temporary work rights.',
        nextStep: 'Check completion dates, ensure English test validity, and apply within 6 months of course completion.',
      });
    }
  }

  // 4. Employer Sponsored
  if (goal === 'Employer Sponsorship' || goal === 'Work' || hasEmployer) {
    const v482 = findVisa('482');
    if (v482) {
      results.push({
        visa: v482,
        matchStrength: hasEmployer ? 'High Potential' : 'Worth Exploring',
        reasoning:
          'The Subclass 482 Skills in Demand visa allows approved Australian businesses to sponsor overseas professionals in Core Skills and Specialist roles.',
        nextStep: hasEmployer
          ? 'Review the employer Standard Business Sponsorship and nomination salary thresholds.'
          : 'Identify an eligible employer willing to sponsor your nominated occupation.',
      });
    }

    const v186 = findVisa('186');
    if (v186 && (state.workExperience === '3-5 years' || state.workExperience === '5+ years')) {
      results.push({
        visa: v186,
        matchStrength: 'Relevant Option',
        reasoning:
          'The Employer Nomination Scheme (Subclass 186) provides direct permanent residency for applicants with at least 3 years relevant experience and employer nomination.',
        nextStep: 'Assess whether Direct Entry or Temporary Residence Transition (TRT) stream is most applicable.',
      });
    }
  }

  // 5. Skilled Migration (189, 190, 491)
  if (goal === 'Skilled Migration' || goal === 'Permanent Migration' || hasPositiveSkills) {
    const v190 = findVisa('190');
    if (v190) {
      results.push({
        visa: v190,
        matchStrength: 'High Potential',
        reasoning:
          'State Nominated Subclass 190 offers direct permanent residence with an extra 5 points awarded by the state/territory government (such as Queensland).',
        nextStep: 'Check your occupation against the current state skilled lists and lodge an Expression of Interest (EOI).',
      });
    }

    const v491 = findVisa('491');
    if (v491) {
      results.push({
        visa: v491,
        matchStrength: 'Relevant Option',
        reasoning:
          'The 5-year Subclass 491 provisional visa awards 15 points towards your points score, offering a viable pathway in regional Australia leading to Subclass 191 PR.',
        nextStep: 'Explore regional employment opportunities and regional nomination quotas in Queensland and other states.',
      });
    }

    const v189 = findVisa('189');
    if (v189) {
      results.push({
        visa: v189,
        matchStrength: 'Worth Exploring',
        reasoning:
          'Points-tested independent permanent visa without state or employer sponsorship for occupations on the MLTSSL list.',
        nextStep: 'Calculate points score strictly and verify the competitive invitation score trends.',
      });
    }
  }

  // 6. Partner & Family
  if (goal === 'Partner/Family' || hasPartnerInAu) {
    const partnerVisa = VISAS_DATA.find((v) => v.id === 'partner-family');
    if (partnerVisa) {
      results.push({
        visa: partnerVisa,
        matchStrength: 'High Potential',
        reasoning:
          'If your partner or spouse is an Australian citizen, permanent resident or eligible NZ citizen, you may be eligible for an onshore (820/801) or offshore (309/100) partner visa.',
        nextStep: 'Collect documentation evidencing your relationship across financial, household, social, and mutual commitment aspects.',
      });
    }
  }

  // 7. Transit
  if (goal === 'Transit') {
    const v771 = findVisa('771');
    if (v771) {
      results.push({
        visa: v771,
        matchStrength: 'High Potential',
        reasoning:
          'Subclass 771 permits onward transit through Australia for up to 72 hours for connecting international flights.',
        nextStep: 'Check whether you qualify for Transit Without Visa (TWOV) or require a formal Subclass 771 application.',
      });
    }
  }

  // 8. Innovation
  if (goal === 'Business/Innovation') {
    const v858 = findVisa('858');
    if (v858) {
      results.push({
        visa: v858,
        matchStrength: 'High Potential',
        reasoning:
          'Subclass 858 is tailored for individuals with an internationally recognised record of exceptional and sustained achievement in targeted sectors.',
        nextStep: 'Assemble your portfolio of international achievements, citations, and identify an eligible Australian nominator.',
      });
    }
  }

  // Fallback if empty or broad
  if (results.length === 0) {
    const v190 = findVisa('190');
    const v482 = findVisa('482');
    const v600 = findVisa('600');
    if (v190) results.push({ visa: v190, matchStrength: 'Relevant Option', reasoning: 'General skilled migration pathway depending on occupation & qualifications.', nextStep: 'Book a consultation with Amit Verma for detailed points assessment.' });
    if (v482) results.push({ visa: v482, matchStrength: 'Worth Exploring', reasoning: 'Employer-sponsored temporary work pathway if an Australian sponsor is secured.', nextStep: 'Discuss sponsorship criteria with your potential employer.' });
    if (v600) results.push({ visa: v600, matchStrength: 'Worth Exploring', reasoning: 'Visitor pathway for temporary visits, family visits, or exploratory business trips.', nextStep: 'Review genuine temporary stay criteria.' });
  }

  return results;
}
