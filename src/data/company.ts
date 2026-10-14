// Central company configuration. Edit these in one place.
export const company = {
  name: 'Voxylis Growth',
  legalName: 'Voxylis Growth', // editable, update when the legal entity is confirmed
  tagline: 'Clear Strategy. Focused Execution. Real Growth.',
  pitch:
    'Voxylis Growth is a growth consulting firm that helps US and UK businesses turn ambition into a clear plan and measurable results across strategy, marketing, sales, and operations.',
  market: 'United States and United Kingdom',

  // Configurable business contact details. Replace placeholders when confirmed.
  email: 'hello@voxylisgrowth.com', // placeholder business email
  phoneDisplay: '+1 (773) 220-0531',
  phoneHref: 'tel:+17732200531',

  // Contact form submission endpoint. Web3Forms for now (emails the business inbox).
  // Swap to GetResponse when its form code is ready. The Web3Forms key is public by design.
  form: {
    endpoint: 'https://api.web3forms.com/submit',
    web3formsKey: 'f5e1c514-d43c-440d-b505-ca843cbc6524',
    subject: 'New Voxylis Growth consultation request',
  },

  get year() {
    return new Date().getFullYear();
  },
};

// Set to an array of sample packages to show indicative pricing; keep empty to stay proposal-only.
export const samplePricing: Array<{ name: string; summary: string; priceNote: string }> = [];
