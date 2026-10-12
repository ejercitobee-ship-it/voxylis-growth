export interface Role {
  title: string;
  description: string;
  responsibilities: string[];
  engagement: string;
}

export interface Category {
  slug: string;
  title: string;
  short: string; // homepage card description
  examples: string; // example roles line for the homepage card
  intro: string; // category page intro
  caveat: string; // honest, category-specific note
  icon: string; // inner SVG markup (24x24, currentColor stroke)
  roles: Role[];
}

const ic = {
  ops: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M8 12h8M8 16h5"/>',
  support: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.3"/><path d="M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M14.9 9.1l4.2-4.2M4.9 19.1l4.2-4.2"/>',
  sales: '<path d="M3 17l6-6 4 4 7-7"/><path d="M14 7h7v7"/>',
  tech: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 9l-2.5 3L9 15M15 9l2.5 3L15 15"/>',
  marketing: '<path d="M4 11v2a1 1 0 0 0 1 1h2l5 4V6L7 10H5a1 1 0 0 0-1 1z"/><path d="M16 8a4 4 0 0 1 0 8"/><path d="M19 5.5a8 8 0 0 1 0 13"/>',
  ecommerce: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.3 12.2a1 1 0 0 0 1 .8h9a1 1 0 0 0 1-.8L21 7H6"/>',
};

export const categories: Category[] = [
  {
    slug: 'business-operations',
    title: 'Business Operations & Administration',
    short: 'Keep the day to day organized with professionals who run scheduling, documentation, and recurring workflows.',
    examples: 'Executive Assistant, Operations Coordinator, CRM Administrator',
    intro:
      'Experienced professionals who keep your operations organized and moving. They own scheduling, documentation, internal coordination, CRM hygiene, reporting preparation, and the recurring workflows that quietly run a business. The right candidate is selected for your actual responsibilities, not a generic job title.',
    caveat:
      'Each role is scoped to your workflows and tools. Responsibilities are agreed up front rather than assumed.',
    icon: ic.ops,
    roles: [
      { title: 'Executive Assistant', description: 'A dependable right hand for leaders, managing calendars, inboxes, travel, and follow-ups so you stay focused on decisions.', responsibilities: ['Calendar, inbox, and meeting coordination', 'Travel, documents, and follow-up tracking', 'Light research and briefing preparation'], engagement: 'Part-time or full-time' },
      { title: 'Administrative Specialist', description: 'Handles the recurring administrative work that keeps a team running, accurately and on time.', responsibilities: ['Data entry and records maintenance', 'Form, document, and template handling', 'Scheduling and internal coordination'], engagement: 'Part-time or full-time' },
      { title: 'Operations Coordinator', description: 'Organizes workflows, tracks deliverables, and keeps execution consistent across your team.', responsibilities: ['Track tasks, deadlines, and handoffs', 'Maintain process documentation', 'Coordinate between people and tools'], engagement: 'Full-time' },
      { title: 'Project Coordinator', description: 'Keeps projects on schedule with clear task tracking, status updates, and stakeholder coordination.', responsibilities: ['Maintain project plans and timelines', 'Track status and flag blockers early', 'Prepare updates for stakeholders'], engagement: 'Project-based or full-time' },
      { title: 'Virtual Office Manager', description: 'A central point of coordination for a distributed team, keeping tools, documents, and routines in order.', responsibilities: ['Manage shared tools and documents', 'Coordinate schedules and vendors', 'Maintain internal processes'], engagement: 'Part-time or full-time' },
      { title: 'CRM Administrator', description: 'Keeps your CRM clean and reliable so pipeline and reporting reflect reality.', responsibilities: ['Maintain accurate records and fields', 'Standardize stages and data entry', 'Prepare lists, segments, and reports'], engagement: 'Part-time or full-time' },
      { title: 'Data and Reporting Specialist', description: 'Turns scattered data into clean, consistent reports leaders can act on.', responsibilities: ['Compile and clean data from sources', 'Build and maintain recurring reports', 'Flag trends and inconsistencies'], engagement: 'Part-time or full-time' },
      { title: 'Document Control Specialist', description: 'Keeps documents organized, versioned, and accessible across the team.', responsibilities: ['Organize and version documents', 'Maintain naming and storage standards', 'Control access and approvals'], engagement: 'Part-time' },
      { title: 'Property Operations Coordinator', description: 'Supports property management teams with coordination, documentation, and recurring operational tasks.', responsibilities: ['Coordinate tenant and vendor requests', 'Maintain records and documentation', 'Track recurring operational tasks'], engagement: 'Part-time or full-time' },
    ],
  },
  {
    slug: 'customer-success',
    title: 'Customer Success & Support',
    short: 'Warm, capable professionals who answer customers, resolve issues, and keep relationships strong.',
    examples: 'Customer Support Specialist, Onboarding Specialist, Help Desk',
    intro:
      'People who represent your brand well on every interaction. They handle inquiries, onboarding, ticket management, follow-ups, and the customer relationship workflows that build loyalty. We distinguish routine support from advanced technical support and regulated interactions when we scope the role.',
    caveat:
      'Advanced technical and regulated customer interactions are scoped separately and matched to candidates with the right experience.',
    icon: ic.support,
    roles: [
      { title: 'Customer Support Specialist', description: 'Answers customer questions across email, chat, and tickets with clear, friendly, accurate responses.', responsibilities: ['Respond to inquiries across channels', 'Manage and resolve support tickets', 'Document common questions and answers'], engagement: 'Part-time or full-time' },
      { title: 'Customer Success Specialist', description: 'Helps customers get value from your product and stay engaged over time.', responsibilities: ['Guide onboarding and adoption', 'Run check-ins and follow-ups', 'Surface risks and opportunities'], engagement: 'Full-time' },
      { title: 'Customer Experience Coordinator', description: 'Keeps the customer journey smooth by coordinating touchpoints and resolving friction.', responsibilities: ['Coordinate across support and success', 'Track and improve common pain points', 'Maintain help content and templates'], engagement: 'Part-time or full-time' },
      { title: 'Client Onboarding Specialist', description: 'Gets new customers set up and confident, so they succeed early.', responsibilities: ['Run structured onboarding steps', 'Prepare accounts, data, and access', 'Follow up until the customer is active'], engagement: 'Full-time' },
      { title: 'Technical Support Representative', description: 'Resolves product and technical questions that go beyond basic support.', responsibilities: ['Troubleshoot product and account issues', 'Escalate with clear documentation', 'Maintain internal troubleshooting notes'], engagement: 'Full-time' },
      { title: 'Help Desk Support Specialist', description: 'First line of response for internal or external help requests, organized and responsive.', responsibilities: ['Triage and route incoming requests', 'Resolve common issues quickly', 'Keep the queue clean and current'], engagement: 'Part-time or full-time' },
      { title: 'Customer Retention Specialist', description: 'Reaches out to at-risk and lapsed customers to keep them engaged.', responsibilities: ['Follow up on renewals and risk signals', 'Handle cancellation and save flows', 'Track retention outcomes'], engagement: 'Part-time or full-time' },
      { title: 'Escalation Coordinator', description: 'Owns difficult or time-sensitive cases and drives them to resolution.', responsibilities: ['Manage escalated cases end to end', 'Coordinate across internal teams', 'Keep customers informed throughout'], engagement: 'Full-time' },
    ],
  },
  {
    slug: 'sales',
    title: 'Sales & Lead Generation',
    short: 'Support that fills and maintains your pipeline, from research and outreach to appointment setting.',
    examples: 'SDR, Lead Generation Specialist, Appointment Setter',
    intro:
      'Professionals who do the research, outreach support, and pipeline work that frees your closers to close. They handle prospect research, CRM maintenance, lead qualification, outreach support, appointment coordination, and pipeline administration. Outreach follows your approved messaging and applicable laws.',
    caveat:
      'We do not promise a specific number of leads, meetings, or conversions. Outreach is conducted according to client-approved messaging and applicable laws.',
    icon: ic.sales,
    roles: [
      { title: 'Sales Development Representative', description: 'Works the top of your funnel with researched, approved outreach that books real conversations.', responsibilities: ['Run outreach on approved messaging', 'Qualify and route interested leads', 'Keep CRM activity accurate'], engagement: 'Full-time' },
      { title: 'Lead Generation Specialist', description: 'Builds targeted, accurate prospect lists so your outreach reaches the right people.', responsibilities: ['Research and build prospect lists', 'Verify and enrich contact data', 'Maintain lists in your CRM'], engagement: 'Part-time or full-time' },
      { title: 'Appointment Setter', description: 'Turns interest into booked meetings on your team’s calendar.', responsibilities: ['Follow up with interested prospects', 'Coordinate and confirm appointments', 'Reduce no-shows with reminders'], engagement: 'Part-time or full-time' },
      { title: 'Sales Support Coordinator', description: 'Handles the administrative side of selling so reps stay in front of prospects.', responsibilities: ['Prepare proposals and documents', 'Coordinate follow-ups and scheduling', 'Keep deal records up to date'], engagement: 'Part-time or full-time' },
      { title: 'CRM and Pipeline Specialist', description: 'Keeps your pipeline clean, consistent, and reportable.', responsibilities: ['Maintain accurate pipeline stages', 'Standardize data and activity logging', 'Prepare pipeline reports'], engagement: 'Part-time or full-time' },
      { title: 'Account Coordinator', description: 'Supports account managers with coordination, follow-up, and client communication.', responsibilities: ['Coordinate account tasks and renewals', 'Prepare account updates', 'Follow up on open items'], engagement: 'Full-time' },
      { title: 'Outbound Research Specialist', description: 'Deep account and contact research that sharpens targeting and messaging.', responsibilities: ['Research accounts and decision makers', 'Gather signals and context', 'Document findings for outreach'], engagement: 'Part-time or full-time' },
    ],
  },
  {
    slug: 'technical',
    title: 'Technical & IT Services',
    short: 'Technical professionals for support, maintenance, QA, automation, and reporting.',
    examples: 'IT Support, Website Maintenance, QA Tester',
    intro:
      'Technical talent matched to the work, from day to day support and website maintenance to QA, automation, and reporting. We differentiate general technical support from specialized software development, infrastructure, security, and engineering engagements, and scope accordingly.',
    caveat:
      'Advanced technical roles are subject to skills assessment and client-specific requirements. We do not claim every specialist covers every stack.',
    icon: ic.tech,
    roles: [
      { title: 'IT Support Specialist', description: 'Keeps your team productive by resolving everyday IT and account issues.', responsibilities: ['Resolve access, device, and app issues', 'Manage accounts and permissions', 'Document fixes and procedures'], engagement: 'Part-time or full-time' },
      { title: 'Technical Support Analyst', description: 'Handles higher-complexity technical cases with clear diagnosis and follow-through.', responsibilities: ['Diagnose and resolve technical issues', 'Reproduce and document bugs', 'Escalate with detail when needed'], engagement: 'Full-time' },
      { title: 'Website Maintenance Specialist', description: 'Keeps your site updated, functional, and healthy.', responsibilities: ['Update content, pages, and plugins', 'Monitor uptime and fix breakages', 'Run backups and routine checks'], engagement: 'Part-time' },
      { title: 'Web Developer', description: 'Builds and maintains website features and integrations to your requirements.', responsibilities: ['Implement pages and components', 'Fix bugs and improve performance', 'Integrate tools and APIs'], engagement: 'Project-based or full-time' },
      { title: 'QA Tester', description: 'Finds issues before your customers do with structured, thorough testing.', responsibilities: ['Write and run test cases', 'Report bugs with clear steps', 'Verify fixes and regressions'], engagement: 'Part-time or project-based' },
      { title: 'CRM Implementation Specialist', description: 'Sets up and configures your CRM so it fits how you actually work.', responsibilities: ['Configure fields, stages, and workflows', 'Migrate and clean data', 'Document setup and train users'], engagement: 'Project-based' },
      { title: 'Workflow Automation Specialist', description: 'Removes repetitive manual work by connecting your tools and automating steps.', responsibilities: ['Map and automate recurring workflows', 'Build integrations between tools', 'Monitor and maintain automations'], engagement: 'Project-based or part-time' },
      { title: 'Reporting and Analytics Specialist', description: 'Builds the dashboards and reports that turn your data into decisions.', responsibilities: ['Build dashboards and reports', 'Maintain data accuracy', 'Explain trends clearly'], engagement: 'Part-time or full-time' },
    ],
  },
  {
    slug: 'marketing',
    title: 'Marketing & Creative',
    short: 'Execution support for campaigns, content, design, and marketing operations.',
    examples: 'Social Media Coordinator, Content Specialist, Graphic Designer',
    intro:
      'Professionals who execute the marketing work consistently: campaign coordination, content production, creative support, publishing workflows, reporting, and marketing administration. They extend your marketing team rather than replace your strategy.',
    caveat:
      'We support execution and coordination. We do not promise search rankings, guaranteed reach, or guaranteed advertising returns.',
    icon: ic.marketing,
    roles: [
      { title: 'Digital Marketing Specialist', description: 'Coordinates and executes campaigns across your channels.', responsibilities: ['Set up and schedule campaigns', 'Coordinate assets and timelines', 'Track and report on performance'], engagement: 'Full-time' },
      { title: 'Social Media Coordinator', description: 'Keeps your social presence active, consistent, and on brand.', responsibilities: ['Schedule and publish content', 'Engage and monitor comments', 'Report on reach and engagement'], engagement: 'Part-time or full-time' },
      { title: 'Content Operations Specialist', description: 'Runs the content pipeline from draft to published, on schedule.', responsibilities: ['Manage the content calendar', 'Format and publish content', 'Maintain the content library'], engagement: 'Part-time or full-time' },
      { title: 'Graphic Designer', description: 'Produces clean, on-brand visuals for your campaigns and channels.', responsibilities: ['Design social and marketing assets', 'Maintain brand consistency', 'Prepare files for each platform'], engagement: 'Part-time or project-based' },
      { title: 'Video Editor', description: 'Edits raw footage into polished, platform-ready video.', responsibilities: ['Edit short and long-form video', 'Add captions, graphics, and sound', 'Export for each channel'], engagement: 'Part-time or project-based' },
      { title: 'SEO Specialist', description: 'Supports your organic growth with on-page work, research, and reporting.', responsibilities: ['Keyword and content research', 'On-page optimization support', 'Track rankings and report'], engagement: 'Part-time or full-time' },
      { title: 'Email Marketing Specialist', description: 'Builds, sends, and reports on your email campaigns and flows.', responsibilities: ['Build and schedule campaigns', 'Maintain lists and segments', 'Report on opens, clicks, and results'], engagement: 'Part-time or full-time' },
      { title: 'Marketing Operations Coordinator', description: 'Keeps marketing running with coordination, reporting, and tool hygiene.', responsibilities: ['Coordinate projects and assets', 'Maintain marketing tools and data', 'Prepare recurring reports'], engagement: 'Full-time' },
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce & Specialized Operations',
    short: 'Store operations support for products, orders, inventory, and marketplace work.',
    examples: 'Order Management, Product Listing, Marketplace Support',
    intro:
      'Professionals who keep online stores running: product data, order workflows, inventory coordination, customer inquiries, and reporting. They help you manage recurring store operations accurately and on time.',
    caveat:
      'We match platform experience to your store. We do not imply every specialist has worked on every e-commerce platform.',
    icon: ic.ecommerce,
    roles: [
      { title: 'E-commerce Operations Specialist', description: 'Keeps your store’s day to day operations running smoothly.', responsibilities: ['Manage recurring store tasks', 'Coordinate across tools and teams', 'Maintain operational accuracy'], engagement: 'Full-time' },
      { title: 'Order Management Coordinator', description: 'Owns the order workflow from placement to fulfillment handoff.', responsibilities: ['Process and track orders', 'Resolve order issues', 'Coordinate with fulfillment'], engagement: 'Part-time or full-time' },
      { title: 'Product Listing Specialist', description: 'Creates and maintains accurate, complete product listings.', responsibilities: ['Create and update listings', 'Maintain product data and images', 'Keep catalogs consistent'], engagement: 'Part-time or full-time' },
      { title: 'Inventory Coordination Specialist', description: 'Keeps inventory data accurate so stock and listings stay in sync.', responsibilities: ['Track and reconcile inventory', 'Flag low stock and discrepancies', 'Coordinate restock updates'], engagement: 'Part-time or full-time' },
      { title: 'Marketplace Support Specialist', description: 'Manages your presence and tasks across marketplaces.', responsibilities: ['Maintain marketplace listings', 'Handle marketplace messages and cases', 'Monitor account health'], engagement: 'Part-time or full-time' },
      { title: 'Returns and Customer Support Coordinator', description: 'Handles returns and post-purchase support with care.', responsibilities: ['Process returns and refunds', 'Answer post-purchase questions', 'Track return reasons'], engagement: 'Part-time or full-time' },
      { title: 'E-commerce Reporting Analyst', description: 'Turns store data into clear reports on sales, products, and operations.', responsibilities: ['Build sales and ops reports', 'Maintain data accuracy', 'Surface trends and issues'], engagement: 'Part-time or full-time' },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

// Industries shown as examples, not restrictions.
export const industries = [
  'Professional services',
  'SaaS and technology',
  'E-commerce',
  'Property management and real estate',
  'Marketing agencies',
  'Growing small and midsize businesses',
];
