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
    short: 'Remote professionals who keep leasing, tenant communication, and operations moving.',
    featured: true,
    intro:
      'Property management and real estate teams run on coordination: tenant and owner communication, documentation, scheduling, and recurring operational tasks. Voxylis Growth provides experienced professionals who handle that work reliably so your team can focus on growth and relationships.',
    helps: [
      'Tenant and owner communication, follow-ups, and support',
      'Leasing coordination, documentation, and data entry',
      'Maintenance request coordination and vendor follow-up',
      'CRM and listing hygiene, reporting, and recurring admin',
    ],
    services: ['customer-experience', 'executive-admin', 'business-ecommerce'],
  },
  {
    slug: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    short: 'Store operations, product data, orders, inventory, and customer support.',
    intro:
      'Online stores run on dozens of recurring tasks. Our professionals keep product data, order workflows, inventory, marketplace operations, and customer inquiries accurate and on time.',
    helps: [
      'Order processing, tracking, and issue resolution',
      'Product listings, catalog data, and marketplace support',
      'Inventory reconciliation and restock coordination',
      'Customer support and post-purchase care',
    ],
    services: ['business-ecommerce', 'customer-experience', 'marketing'],
  },
  {
    slug: 'technology-saas',
    title: 'Technology & SaaS',
    short: 'Support, onboarding, QA, and operations for growing software companies.',
    intro:
      'Software companies scale fastest when the operational load is handled well. We support customer onboarding, technical support, QA, and the day to day operations that keep a SaaS business running.',
    helps: [
      'Customer onboarding and success support',
      'Tier-one technical support and help desk',
      'QA testing and website maintenance',
      'CRM, reporting, and operations coordination',
    ],
    services: ['customer-experience', 'technical', 'sales'],
  },
  {
    slug: 'healthcare-administration',
    title: 'Healthcare Administration',
    short: 'Administrative and coordination support for healthcare-adjacent operations.',
    intro:
      'Healthcare administration teams carry heavy coordination and documentation loads. Our professionals support the administrative and operational work, with roles scoped carefully around your requirements and any regulated interactions.',
    helps: [
      'Scheduling, documentation, and records coordination',
      'Patient or client communication support, where appropriate',
      'Data entry, reporting, and process tracking',
      'Administrative coordination across tools and teams',
    ],
    services: ['executive-admin', 'customer-experience', 'business-ecommerce'],
  },
  {
    slug: 'professional-services',
    title: 'Professional Services',
    short: 'Administrative, client, and operations support for service firms.',
    intro:
      'Professional service firms sell their people’s time, so protecting that time matters. We take on the administrative, client coordination, and operational work that pulls senior people away from billable, high-value work.',
    helps: [
      'Executive and administrative support',
      'Client communication and onboarding coordination',
      'Document preparation and process management',
      'CRM, scheduling, and reporting',
    ],
    services: ['executive-admin', 'customer-experience', 'sales'],
  },
  {
    slug: 'education',
    title: 'Education & E-learning',
    short: 'Support for enrollment, student communication, content, and operations.',
    intro:
      'Education and e-learning organizations balance student experience with content and operations. We support enrollment coordination, student communication, content operations, and the administrative work behind programs.',
    helps: [
      'Student and enrollment communication support',
      'Content operations and publishing coordination',
      'Scheduling, documentation, and records',
      'Marketing and social media support',
    ],
    services: ['customer-experience', 'marketing', 'executive-admin'],
  },
  {
    slug: 'other-business-services',
    title: 'Other Business Services',
    short: 'Not listed? We match experienced professionals to your specific needs.',
    intro:
      'Your business may not fit neatly into a category, and that is fine. We match experienced professionals to your actual responsibilities and workflows across operations, customer-facing, administrative, marketing, and technical work.',
    helps: [
      'Roles scoped to your specific requirements',
      'A managed model with onboarding and oversight',
      'Flexibility to start small and expand',
      'Professionals matched to your tools and standards',
    ],
    services: ['executive-admin', 'customer-experience', 'business-ecommerce'],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
