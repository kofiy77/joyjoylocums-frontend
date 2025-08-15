// Medical compliance requirements for GP and Nurse Practitioner locums
export const MEDICAL_DOCUMENT_REQUIREMENTS = {
  mandatory: [
    {
      type: 'dbs_check',
      label: 'DBS Enhanced Check',
      description: 'Enhanced DBS certificate required for all clinical roles',
      category: 'Legal & Safety',
      validityMonths: 36,
      icon: '🛡️'
    },
    {
      type: 'right_to_work',
      label: 'Right to Work',
      description: 'Valid passport, birth certificate, or work permit',
      category: 'Legal & Safety',
      validityMonths: null, // Permanent
      icon: '📋'
    },
    {
      type: 'medical_indemnity',
      label: 'Medical Indemnity Insurance',
      description: 'Professional indemnity insurance cover (MDU/MPS/MDDUS)',
      category: 'Insurance & Protection',
      validityMonths: 12,
      icon: '🛡️'
    },
    {
      type: 'basic_life_support',
      label: 'Basic Life Support (BLS)',
      description: 'Current BLS certification from approved provider',
      category: 'Clinical Training',
      validityMonths: 12,
      icon: '🫀'
    },
    {
      type: 'safeguarding_children',
      label: 'Safeguarding Children Training',
      description: 'Level 3 safeguarding children training certificate',
      category: 'Safeguarding',
      validityMonths: 36,
      icon: '👶'
    },
    {
      type: 'safeguarding_adults',
      label: 'Safeguarding Adults Training',
      description: 'Adult safeguarding awareness certificate',
      category: 'Safeguarding',
      validityMonths: 36,
      icon: '🔒'
    },
    {
      type: 'infection_control',
      label: 'Infection Prevention & Control',
      description: 'IPC training for healthcare settings',
      category: 'Clinical Training',
      validityMonths: 12,
      icon: '🧼'
    },
    {
      type: 'medical_degree',
      label: 'Medical Degree Certificate',
      description: 'MBBS/MBChB or equivalent medical qualification',
      category: 'Qualifications',
      validityMonths: null, // Permanent
      icon: '🎓'
    },
    {
      type: 'nursing_degree',
      label: 'Nursing Degree/Diploma',
      description: 'BSc Nursing, Diploma, or equivalent nursing qualification',
      category: 'Qualifications',
      validityMonths: null, // Permanent
      icon: '🎓'
    },
    {
      type: 'clinical_reference_1',
      label: 'Clinical Reference 1',
      description: 'First clinical reference from medical supervisor or consultant',
      category: 'References',
      validityMonths: 24,
      icon: '📝'
    },
    {
      type: 'clinical_reference_2',
      label: 'Clinical Reference 2',
      description: 'Second clinical reference from medical supervisor or consultant',
      category: 'References',
      validityMonths: 24,
      icon: '📝'
    },
    {
      type: 'medical_cv',
      label: 'Medical CV',
      description: 'Current medical curriculum vitae with clinical experience',
      category: 'Professional Documentation',
      validityMonths: 12,
      icon: '📄'
    },
    {
      type: 'occupational_health',
      label: 'Occupational Health Clearance',
      description: 'Occupational health clearance including immunization status',
      category: 'Health & Safety',
      validityMonths: 12,
      icon: '💉'
    }
  ],
  supplementary: [
    {
      type: 'advanced_life_support',
      label: 'Advanced Life Support (ALS)',
      description: 'ALS certification (recommended for GPs)',
      category: 'Advanced Clinical Training',
      validityMonths: 36,
      icon: '🚑'
    },
    {
      type: 'prescribing_qualification',
      label: 'Independent Prescribing Qualification',
      description: 'V300 or equivalent prescribing qualification (for Nurse Practitioners)',
      category: 'Specialist Qualifications',
      validityMonths: null, // Permanent
      icon: '💊'
    },
    {
      type: 'specialist_training',
      label: 'Specialist Training Certificates',
      description: 'Additional specialist clinical training certificates',
      category: 'Specialist Training',
      validityMonths: 24,
      icon: '🎯'
    },
    {
      type: 'mentorship_qualification',
      label: 'Clinical Mentorship Qualification',
      description: 'Qualification to supervise junior medical staff',
      category: 'Leadership & Teaching',
      validityMonths: 36,
      icon: '👨‍🏫'
    }
  ]
};

// Role-specific requirements
export const ROLE_SPECIFIC_REQUIREMENTS = {
  'General Practitioner': {
    mandatory: [
      'dbs_check',
      'right_to_work',
      'medical_indemnity',
      'basic_life_support',
      'safeguarding_children',
      'safeguarding_adults',
      'infection_control',
      'medical_degree',
      'clinical_reference_1',
      'clinical_reference_2',
      'medical_cv',
      'occupational_health'
    ],
    recommended: [
      'advanced_life_support',
      'specialist_training'
    ]
  },
  'Nurse Practitioner': {
    mandatory: [
      'dbs_check',
      'right_to_work',
      'medical_indemnity',
      'basic_life_support',
      'safeguarding_children',
      'safeguarding_adults',
      'infection_control',
      'nursing_degree',
      'clinical_reference_1',
      'clinical_reference_2',
      'medical_cv',
      'occupational_health'
    ],
    recommended: [
      'prescribing_qualification',
      'advanced_life_support',
      'specialist_training'
    ]
  },
  'Advanced Nurse Practitioner': {
    mandatory: [
      'dbs_check',
      'right_to_work',
      'medical_indemnity',
      'basic_life_support',
      'safeguarding_children',
      'safeguarding_adults',
      'infection_control',
      'nursing_degree',
      'prescribing_qualification',
      'clinical_reference_1',
      'clinical_reference_2',
      'medical_cv',
      'occupational_health'
    ],
    recommended: [
      'advanced_life_support',
      'specialist_training',
      'mentorship_qualification'
    ]
  }
};

// Document categories for organization
export const DOCUMENT_CATEGORIES = {
  'Legal & Safety': {
    icon: '🛡️',
    color: 'bg-red-50 text-red-700 border-red-200'
  },
  'Insurance & Protection': {
    icon: '🛡️',
    color: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  'Clinical Training': {
    icon: '🩺',
    color: 'bg-green-50 text-green-700 border-green-200'
  },
  'Safeguarding': {
    icon: '🔒',
    color: 'bg-orange-50 text-orange-700 border-orange-200'
  },
  'Qualifications': {
    icon: '🎓',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  'References': {
    icon: '📝',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-200'
  },
  'Professional Documentation': {
    icon: '📄',
    color: 'bg-gray-50 text-gray-700 border-gray-200'
  },
  'Health & Safety': {
    icon: '💉',
    color: 'bg-pink-50 text-pink-700 border-pink-200'
  },
  'Advanced Clinical Training': {
    icon: '🚑',
    color: 'bg-teal-50 text-teal-700 border-teal-200'
  },
  'Specialist Qualifications': {
    icon: '💊',
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  },
  'Specialist Training': {
    icon: '🎯',
    color: 'bg-lime-50 text-lime-700 border-lime-200'
  },
  'Leadership & Teaching': {
    icon: '👨‍🏫',
    color: 'bg-amber-50 text-amber-700 border-amber-200'
  }
};