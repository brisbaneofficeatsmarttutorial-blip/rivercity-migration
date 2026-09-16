import { ChecklistCategory } from '../types';

export const CHECKLIST_CATEGORIES: ChecklistCategory[] = [
  {
    id: 'identity',
    title: 'Identity & Nationality',
    description: 'Fundamental identity verification documents required across all Australian visa subclasses.',
    items: [
      {
        id: 'id-passport',
        label: 'Current Valid Passport',
        description: 'Bio-data page with at least 6 months validity from planned travel date.',
        isCore: true,
      },
      {
        id: 'id-birth-cert',
        label: 'Full Birth Certificate',
        description: 'Showing parent names, accompanied by official certified English translation if issued in another language.',
        isCore: true,
      },
      {
        id: 'id-national-id',
        label: 'National Identity Documents',
        description: 'National ID card (e.g. Aadhaar, CNIC, National ID card) where issued.',
      },
      {
        id: 'id-prev-passports',
        label: 'Previous Passports & Travel Records',
        description: 'Pages containing previous visas, travel stamps and entry/exit stamps where relevant.',
      },
      {
        id: 'id-name-change',
        label: 'Evidence of Name Change',
        description: 'Marriage certificate, deed poll, or official gazette notification if applicable.',
      },
    ],
  },
  {
    id: 'education',
    title: 'Education & English Language',
    description: 'Academic records, degrees, transcripts, and official language test results.',
    items: [
      {
        id: 'edu-qualifications',
        label: 'Formal Degree & Diploma Certificates',
        description: 'Completion letters, degree parchments and trade trade certificates.',
        isCore: true,
      },
      {
        id: 'edu-transcripts',
        label: 'Official Academic Transcripts',
        description: 'Complete year-by-year or semester-by-semester marksheets and academic records.',
        isCore: true,
      },
      {
        id: 'edu-english',
        label: 'English Language Test Results',
        description: 'IELTS, PTE Academic, TOEFL iBT, or Cambridge test taken within specified validity period.',
        isCore: true,
      },
      {
        id: 'edu-cricos',
        label: 'CRICOS Australian Study Evidence',
        description: 'Completion letter stating CRICOS code, course duration in weeks, and language of instruction (for 485/points test).',
      },
    ],
  },
  {
    id: 'employment',
    title: 'Employment & Skills Evidence',
    description: 'Verifiable proof of skilled work experience and professional credentials.',
    items: [
      {
        id: 'emp-cv',
        label: 'Comprehensive Professional Curriculum Vitae (CV)',
        description: 'Detailed chronological CV detailing duties, dates, employer names, and contact details.',
        isCore: true,
      },
      {
        id: 'emp-references',
        label: 'Formal Employment Reference Letters',
        description: 'On official company letterhead detailing job title, hours worked per week, exact start/end dates, and itemised duties.',
        isCore: true,
      },
      {
        id: 'emp-contracts',
        label: 'Employment Contracts & Offer Letters',
        description: 'Signed agreements specifying terms, duties, and remuneration.',
      },
      {
        id: 'emp-payslips',
        label: 'Payslips & Salary Statements',
        description: 'Consecutive payslips covering the relevant period of claimed skilled work experience.',
        isCore: true,
      },
      {
        id: 'emp-skills-assessment',
        label: 'Positive Skills Assessment Outcome Letter',
        description: 'From relevant assessing body (e.g. VETASSESS, ACS, Engineers Australia, TRA, CPA/CAANZ).',
        isCore: true,
      },
      {
        id: 'emp-tax',
        label: 'Taxation Records / Income Tax Returns',
        description: 'Official tax returns, Australian ATO Notices of Assessment, or foreign tax certificates.',
      },
    ],
  },
  {
    id: 'financial',
    title: 'Financial & Sponsorship Capacity',
    description: 'Evidence demonstrating capacity to fund your travel, living expenses, or course fees.',
    items: [
      {
        id: 'fin-bank-statements',
        label: 'Official Bank Statements',
        description: 'Recent 3-6 months official bank statements showing genuine savings and balance history.',
        isCore: true,
      },
      {
        id: 'fin-income',
        label: 'Verifiable Income Evidence',
        description: 'Salary slips, business earnings, audited balance sheets, or rental income records.',
      },
      {
        id: 'fin-sponsor',
        label: 'Sponsorship Evidence & Undertakings',
        description: 'Employer nomination documents, Standard Business Sponsorship approval, or family statutory declarations.',
      },
      {
        id: 'fin-funds-source',
        label: 'Evidence of Source of Funds',
        description: 'Sale of asset deeds, loan disbursement letters, or fixed deposit certificates.',
      },
    ],
  },
  {
    id: 'family',
    title: 'Family & Relationship Evidence',
    description: 'Statutory evidence evidencing genuine spouse, de facto partner, parent, or child relationships.',
    items: [
      {
        id: 'fam-marriage-cert',
        label: 'Registered Marriage Certificate',
        description: 'Official government-registered certificate with certified translation if not in English.',
      },
      {
        id: 'fam-children-birth',
        label: 'Children’s Birth Certificates',
        description: 'Demonstrating relationship to both parents for dependent children included in the application.',
      },
      {
        id: 'fam-relationship-pillars',
        label: 'Partner Evidence across 4 Statutory Pillars',
        description: 'Joint bank accounts, shared lease/mortgage, joint utility bills, travel tickets, social photos with friends and family.',
        isCore: true,
      },
      {
        id: 'fam-stat-decs',
        label: 'Form 888 Statutory Declarations',
        description: 'Statements from Australian citizen or permanent resident witnesses supporting your relationship.',
      },
    ],
  },
  {
    id: 'health-character',
    title: 'Health & Character Clearances',
    description: 'Mandatory background integrity checks required by Australian immigration law.',
    items: [
      {
        id: 'hc-police-cert',
        label: 'National Police Clearances',
        description: 'From home country and every country lived in for 12 months or more over the past 10 years since turning 16.',
        isCore: true,
      },
      {
        id: 'hc-afp-check',
        label: 'Australian Federal Police (AFP) Check (Code 33)',
        description: 'Complete Disclosure National Police Check required for onshore applicants and Australian study graduates.',
        isCore: true,
      },
      {
        id: 'hc-medical',
        label: 'Department Health Examinations (Bupa / eMedical)',
        description: 'Completed through approved panel clinics following issuance of HAP ID from the Department.',
        isCore: true,
      },
      {
        id: 'hc-military',
        label: 'Military Service Discharge Records (Where Applicable)',
        description: 'Official discharge documents detailing rank and character during service.',
      },
    ],
  },
];
