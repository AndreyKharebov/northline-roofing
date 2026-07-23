const shortFormFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    autoComplete: 'name',
    required: true,
    requiredMessage: 'Please enter your full name.',
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    autoComplete: 'tel',
    required: true,
    requiredMessage: 'Please enter your phone number.',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    autoComplete: 'email',
    required: true,
    requiredMessage: 'Please enter your email address.',
    fullWidth: true,
  },
  {
    name: 'message',
    label: 'Your question',
    type: 'textarea',
    placeholder: 'How can we help?',
    rows: 6,
    required: true,
    requiredMessage: 'Please enter your question.',
    fullWidth: true,
  },
  {
    name: 'consent',
    type: 'checkbox',
    checkboxLabel:
      'I agree that Northline may contact me by phone, email, or text regarding this request.',
    required: true,
    requiredMessage:
      'Please confirm that we may contact you about this request.',
    fullWidth: true,
    defaultValue: false,
  },
];

const fullFormFields = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    autoComplete: 'name',
    required: true,
    requiredMessage: 'Please enter your full name.',
  },
  {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    autoComplete: 'tel',
    required: true,
    requiredMessage: 'Please enter your phone number.',
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    autoComplete: 'email',
    required: true,
    requiredMessage: 'Please enter your email address.',
  },
  {
    name: 'preferredContact',
    label: 'Preferred Contact Method',
    type: 'select',
    defaultValue: 'phone',
    options: [
      { value: 'phone', label: 'Phone' },
      { value: 'email', label: 'Email' },
      { value: 'text', label: 'Text Message' },
    ],
  },
  {
    name: 'address',
    label: 'Property Address',
    type: 'text',
    autoComplete: 'street-address',
    fullWidth: true,
  },
  {
    name: 'city',
    label: 'City',
    type: 'text',
    autoComplete: 'address-level2',
  },
  {
    name: 'zipCode',
    label: 'Zip Code',
    type: 'text',
    inputMode: 'numeric',
    autoComplete: 'postal-code',
    required: true,
    requiredMessage: 'Please enter the property ZIP code.',
  },
  {
    name: 'service',
    label: 'Service Needed',
    type: 'select',
    placeholder: 'Select a service',
    required: true,
    requiredMessage: 'Please select a service.',
    options: [
      { value: 'roof-replacement', label: 'Roof Replacement' },
      { value: 'roof-repair', label: 'Roof Repair' },
      { value: 'storm-damage', label: 'Storm Damage' },
      { value: 'siding', label: 'Siding' },
      { value: 'gutters', label: 'Gutters' },
      {
        value: 'windows-skylights',
        label: 'Windows & Skylights',
      },
      {
        value: 'multiple-services',
        label: 'Multiple Services',
      },
      { value: 'not-sure', label: 'Not Sure Yet' },
    ],
  },
  {
    name: 'propertyType',
    label: 'Property Type',
    type: 'select',
    placeholder: 'Select property type',
    required: true,
    requiredMessage: 'Please select a property type.',
    options: [
      {
        value: 'single-family',
        label: 'Single-Family Home',
      },
      { value: 'townhouse', label: 'Townhouse' },
      {
        value: 'multi-family',
        label: 'Multi-Family Property',
      },
      {
        value: 'commercial',
        label: 'Small Commercial Property',
      },
      { value: 'other', label: 'Other' },
    ],
  },
  {
    name: 'projectTiming',
    label: 'When Are You Planning the Project?',
    type: 'select',
    placeholder: 'Select timing',
    fullWidth: true,
    options: [
      {
        value: 'urgent',
        label: 'As Soon as Possible',
      },
      {
        value: 'one-month',
        label: 'Within One Month',
      },
      {
        value: 'three-months',
        label: 'Within Three Months',
      },
      {
        value: 'six-months',
        label: 'Within Six Months',
      },
      {
        value: 'researching',
        label: 'I Am Currently Researching',
      },
    ],
  },
  {
    name: 'message',
    label: 'Project Details',
    type: 'textarea',
    placeholder:
      'Describe the problem, damage, project goals, or anything else we should know...',
    rows: 6,
    required: true,
    requiredMessage: 'Please tell us about your project.',
    fullWidth: true,
  },
  {
    name: 'consent',
    type: 'checkbox',
    checkboxLabel:
      'I agree that Northline may contact me by phone, email, or text regarding this request.',
    required: true,
    requiredMessage:
      'Please confirm that we may contact you about this request.',
    fullWidth: true,
    defaultValue: false,
  },
];

export const formVersions = {
  short: {
    eyebrow: 'Have a Question?',
    title: 'How Can We Help?',
    fields: shortFormFields,
    submitLabel: 'Submit Question',
    successTitle: 'Thank you for your question.',
    successMessage: 'We will contact you as soon as possible.',
  },

  full: {
    eyebrow: 'Project Information',
    title: 'Request Your Free Estimate',
    fields: fullFormFields,
    submitLabel: 'Request Free Estimate',
    successTitle: 'Thank you for your request.',
    successMessage:
      'Your project information has been successfully submitted. We will contact you as soon as possible.',
  },
};
