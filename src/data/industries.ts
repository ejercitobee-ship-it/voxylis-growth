export interface Industry {
  slug: string;
  title: string;
  short: string;
  featured?: boolean;
  intro: string;
  helps: string[];
  services: string[]; // related category slugs
}

export const industries: Industry[] = [
  {
    slug: 'property-management',
    title: 'Property Management & Real Estate',
    short: 'Clearer operations, stronger leasing funnels, and growth that does not add chaos.',
    featured: true,
    intro:
      'Property management and real estate teams grow on two things: a steady pipeline and operations that hold up as the portfolio expands. Voxylis Growth helps you sharpen how you attract owners and tenants, tighten the processes behind leasing and renewals, and build systems that scale with you.',
    helps: [
      'Positioning and marketing to attract owners and tenants',
      'Leasing and renewal funnels that convert more consistently',
      'Operational systems for a growing portfolio',
      'Clear reporting on occupancy, revenue, and performance',
    ],
    services: ['growth-strategy', 'operations-systems', 'marketing-demand'],
  },
  {
    slug: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    short: 'Higher-converting stores, smarter marketing, and more repeat revenue.',
    intro:
      'Online stores grow when the whole journey works: the right traffic, a store that converts, and customers who come back. We help you find where revenue leaks, lift conversion, and build the marketing and retention that compound over time.',
    helps: [
      'Conversion and funnel improvement across the store',
      'Marketing and demand generation that brings the right traffic',
      'Retention, email, and repeat-purchase strategy',
      'Analytics so you know what is actually driving sales',
    ],
    services: ['digital-ecommerce', 'marketing-demand', 'analytics-insights'],
  },
  {
    slug: 'technology-saas',
    title: 'Technology & SaaS',
    short: 'Go-to-market clarity, a sharper sales motion, and metrics you can steer by.',
    intro:
      'Software companies grow fastest with a clear go-to-market, a repeatable sales motion, and the right metrics in view. We help you position the product, tighten the path from lead to closed deal, and build the dashboards that show what is working.',
    helps: [
      'Positioning and go-to-market strategy',
      'Sales process, pipeline, and CRM that scale',
      'Growth metrics, dashboards, and performance reviews',
      'Prioritized growth roadmaps each quarter',
    ],
    services: ['growth-strategy', 'sales-revenue', 'analytics-insights'],
  },
  {
    slug: 'healthcare-administration',
    title: 'Healthcare & Wellness Businesses',
    short: 'Smoother operations and clearer growth for care-focused businesses.',
    intro:
      'Healthcare and wellness businesses carry heavy operational and compliance loads while still needing to grow. We help streamline the operations behind the scenes and build a measured, appropriate approach to attracting and keeping clients.',
    helps: [
      'Operational systems and documented workflows',
      'Marketing that is clear, measured, and appropriate',
      'Reporting on the metrics that matter to the business',
      'Prioritized plans for sustainable growth',
    ],
    services: ['operations-systems', 'analytics-insights', 'marketing-demand'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    short: 'A stronger pipeline, better-run operations, and more profitable engagements.',
    intro:
      'Professional service firms sell their people’s time, so growth means a steadier pipeline and operations that protect senior people from busywork. We help you build demand, tighten your sales process, and put systems in place so the firm runs without everything depending on the founders.',
    helps: [
      'Positioning and demand generation for the firm',
      'A clear sales process and healthier pipeline',
      'Operations and systems that free up senior time',
      'Pricing and packaging that protect your margins',
    ],
    services: ['growth-strategy', 'sales-revenue', 'operations-systems'],
  },
  {
    slug: 'education',
    title: 'Education & E-learning',
    short: 'Clearer positioning, stronger enrollment funnels, and better digital conversion.',
    intro:
      'Education and e-learning businesses grow by reaching the right learners and converting interest into enrollment. We help sharpen your positioning, build marketing that reaches your audience, and improve the digital journey from first visit to signed-up student.',
    helps: [
      'Positioning and marketing to reach the right learners',
      'Enrollment funnels and digital conversion',
      'Launch and growth planning for new programs',
      'Analytics on what drives enrollment and retention',
    ],
    services: ['marketing-demand', 'growth-strategy', 'digital-ecommerce'],
  },
  {
    slug: 'other-business-services',
    title: 'Other Growing Businesses',
    short: 'Not listed? If you are trying to grow with focus, we can help.',
    intro:
      'Your business may not fit neatly into a category, and that is fine. Growth consulting is about the fundamentals: a clear plan, the right demand, a sales process that works, and operations that scale. We tailor the engagement to where your business actually is.',
    helps: [
      'A prioritized growth plan built around your goals',
      'Marketing, sales, and operations support that fits',
      'Flexibility to start focused and expand',
      'Clear metrics so you can see progress',
    ],
    services: ['growth-strategy', 'operations-systems', 'marketing-demand'],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
