export interface Offering {
  title: string;
  description: string;
  responsibilities: string[]; // what the engagement typically includes
  engagement: string; // format of the work
}

export interface Category {
  slug: string;
  title: string;
  short: string; // homepage / overview card description
  examples: string;
  intro: string;
  caveat: string;
  icon: string; // inner SVG (24x24, currentColor stroke)
  roles: Offering[];
}

const ic = {
  strategy: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  marketing: '<path d="M4 11v2a1 1 0 0 0 1 1h2l5 4V6L7 10H5a1 1 0 0 0-1 1z"/><path d="M16 8a4 4 0 0 1 0 8"/><path d="M19 5.5a8 8 0 0 1 0 13"/>',
  sales: '<path d="M3 17l6-6 4 4 7-7"/><path d="M14 7h7v7"/>',
  ops: '<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a1.65 1.65 0 0 0 .33 1.82l.05.05a2 2 0 1 1-2.83 2.83l-.05-.05a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.08a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.05.05a2 2 0 1 1-2.83-2.83l.05-.05a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.08a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.05-.05a2 2 0 1 1 2.83-2.83l.05.05a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.08a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.05-.05a2 2 0 1 1 2.83 2.83l-.05.05a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.08a1.65 1.65 0 0 0-1.51 1z"/>',
  analytics: '<path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7"/><rect x="12" y="6" width="3" height="11"/><rect x="17" y="13" width="3" height="4"/>',
  digital: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.3 12.2a1 1 0 0 0 1 .8h9a1 1 0 0 0 1-.8L21 7H6"/>',
};

export const categories: Category[] = [
  {
    slug: 'growth-strategy',
    title: 'Growth Strategy & Planning',
    short: 'A clear, prioritized plan for where to grow next and the few moves that will matter most.',
    examples: 'Growth audits, strategy sprints, go-to-market planning, quarterly roadmaps',
    intro:
      'We help you step back, look at the whole business, and decide where growth should come from next. Together we pressure test your goals, your market, your numbers, and your capacity, then turn that into a focused plan you can actually run.',
    caveat: 'A strategy sets direction and priorities. It does not guarantee a specific revenue figure, and the results depend on execution, market conditions, and the decisions you make along the way.',
    icon: ic.strategy,
    roles: [
      { title: 'Growth Audit', description: 'A structured review of your business to find where growth is stalling and where the biggest opportunities sit.', responsibilities: ['Review goals, offers, pricing, and channels', 'Map where revenue and leads come from today', 'Surface the constraints holding growth back'], engagement: 'Project' },
      { title: 'Strategy Sprint', description: 'A focused working session that turns a messy set of priorities into one clear plan.', responsibilities: ['Clarify the goal and the few moves that matter', 'Prioritize by impact and effort', 'Leave with a written, ranked plan'], engagement: 'Workshop or project' },
      { title: 'Go-to-Market Planning', description: 'A practical plan for taking a product, service, or new market to the right buyers.', responsibilities: ['Define the audience and positioning', 'Choose channels and the first campaigns', 'Set targets and a launch sequence'], engagement: 'Project' },
      { title: 'Quarterly Growth Roadmap', description: 'A rolling plan that keeps the business focused on the right priorities each quarter.', responsibilities: ['Set quarterly goals and milestones', 'Assign owners and clear next steps', 'Review progress and adjust'], engagement: 'Ongoing advisory' },
    ],
  },
  {
    slug: 'marketing-demand',
    title: 'Marketing & Demand Generation',
    short: 'A marketing engine that brings in the right audience and turns attention into qualified leads.',
    examples: 'Positioning, content strategy, paid and organic channels, email and lifecycle',
    intro:
      'We help you get in front of the right people and give them a reason to act. From positioning and messaging to the channels and campaigns that fit your business, we build a marketing approach you can sustain, not a one-off burst.',
    caveat: 'We build and advise on marketing strategy and execution. We do not promise specific search rankings, guaranteed reach, or a guaranteed return on ad spend.',
    icon: ic.marketing,
    roles: [
      { title: 'Positioning & Messaging', description: 'A clear story for what you do, who it is for, and why it is different.', responsibilities: ['Sharpen your core message and offers', 'Define the audience and their problems', 'Align website and campaign language'], engagement: 'Project' },
      { title: 'Content & Organic Strategy', description: 'A content plan that builds trust and brings in buyers over time.', responsibilities: ['Plan topics around real buyer questions', 'Set a realistic publishing cadence', 'Define how content turns into leads'], engagement: 'Project or ongoing' },
      { title: 'Paid Channel Strategy', description: 'A focused plan for the paid channels most likely to work for your business.', responsibilities: ['Choose channels and budget allocation', 'Define offers, targeting, and tracking', 'Set up measurement before you spend'], engagement: 'Advisory or hands-on' },
      { title: 'Email & Lifecycle', description: 'Automated and ongoing email that nurtures leads and keeps customers coming back.', responsibilities: ['Map the lifecycle from lead to repeat', 'Plan welcome, nurture, and win-back flows', 'Define the metrics that matter'], engagement: 'Project or ongoing' },
    ],
  },
  {
    slug: 'sales-revenue',
    title: 'Sales & Revenue Growth',
    short: 'A sales process and pipeline that convert interest into booked, closed, and repeat revenue.',
    examples: 'Sales process design, pipeline and CRM, outreach and follow-up, pricing',
    intro:
      'We help you turn interest into revenue with a sales process that fits how your buyers actually decide. From pipeline and follow-up to pricing and CRM, we tighten the path from first contact to closed deal, then to repeat business.',
    caveat: 'We design and improve your sales process and pipeline. We do not promise a specific number of leads, meetings, or closed deals, and outcomes depend on your market and execution.',
    icon: ic.sales,
    roles: [
      { title: 'Sales Process Design', description: 'A clear, repeatable path from first contact to closed deal that your team can follow.', responsibilities: ['Map the stages buyers move through', 'Define what happens at each stage', 'Remove friction that stalls deals'], engagement: 'Project' },
      { title: 'Pipeline & CRM Setup', description: 'A pipeline and CRM that reflect reality so you can forecast and act with confidence.', responsibilities: ['Design stages, fields, and reporting', 'Clean up and structure existing data', 'Set the habits that keep it accurate'], engagement: 'Project' },
      { title: 'Outreach & Follow-Up', description: 'A consistent approach to reaching prospects and following up without letting deals go cold.', responsibilities: ['Build messaging and a follow-up cadence', 'Define who to reach and when', 'Keep outreach compliant and on brand'], engagement: 'Advisory or hands-on' },
      { title: 'Pricing & Offer Review', description: 'A look at how you package and price so each deal is easier to sell and more profitable.', responsibilities: ['Review current pricing and packaging', 'Test clearer, more compelling offers', 'Protect and improve your margins'], engagement: 'Project' },
    ],
  },
  {
    slug: 'operations-systems',
    title: 'Operations & Systems',
    short: 'The processes, tools, and systems that let the business grow without everything running through you.',
    examples: 'Process design, SOPs, tool and automation setup, team and workflow structure',
    intro:
      'Growth stalls when the business depends on one person holding everything together. We help you document how the work gets done, choose the right tools, automate the repetitive parts, and build systems that keep running as you scale.',
    caveat: 'We design processes and advise on tools and systems. Any tool costs, migrations, and ongoing maintenance are scoped and agreed before we begin.',
    icon: ic.ops,
    roles: [
      { title: 'Process & Workflow Design', description: 'Clear, documented workflows so the right work happens the same way every time.', responsibilities: ['Map how core work gets done today', 'Remove bottlenecks and handoff gaps', 'Document the way it should run'], engagement: 'Project' },
      { title: 'SOPs & Documentation', description: 'Written procedures that make the business easier to run, delegate, and hand off.', responsibilities: ['Capture key processes as clear SOPs', 'Build a simple, findable library', 'Make delegation and training easier'], engagement: 'Project' },
      { title: 'Tools & Automation', description: 'The right tools, connected and automated, so your team stops doing work software should.', responsibilities: ['Audit and rationalize your tool stack', 'Automate repetitive manual steps', 'Connect tools so data flows cleanly'], engagement: 'Project' },
      { title: 'Team & Workflow Structure', description: 'A clearer structure for who owns what, so work does not fall through the cracks.', responsibilities: ['Clarify roles and responsibilities', 'Define handoffs and decision rights', 'Set routines that keep work moving'], engagement: 'Advisory' },
    ],
  },
  {
    slug: 'analytics-insights',
    title: 'Analytics & Performance',
    short: 'The numbers that actually matter, tracked clearly, so decisions are based on data instead of guesswork.',
    examples: 'KPI dashboards, tracking setup, reporting cadence, performance reviews',
    intro:
      'You cannot grow what you cannot see. We help you decide which numbers matter, set up clean tracking and dashboards, and build a reporting rhythm so you always know what is working and what to change.',
    caveat: 'We help you measure and interpret performance. Tracking accuracy depends on correct setup and the data your tools and platforms provide.',
    icon: ic.analytics,
    roles: [
      { title: 'KPI & Metrics Definition', description: 'A short list of the numbers that actually reflect the health of your business.', responsibilities: ['Choose the few metrics that matter', 'Tie each metric to a goal', 'Set targets and healthy ranges'], engagement: 'Project' },
      { title: 'Dashboards & Tracking', description: 'Clean dashboards and tracking so your key numbers live in one trustworthy place.', responsibilities: ['Set up tracking and data sources', 'Build clear, readable dashboards', 'Check accuracy before you rely on it'], engagement: 'Project' },
      { title: 'Reporting Cadence', description: 'A simple, regular reporting rhythm so the whole team sees the same picture.', responsibilities: ['Design weekly or monthly reports', 'Highlight what changed and why', 'Keep reporting light and useful'], engagement: 'Ongoing advisory' },
      { title: 'Performance Reviews', description: 'Regular reviews that turn the numbers into clear decisions and next moves.', responsibilities: ['Review results against targets', 'Find what to double down on or stop', 'Agree the next set of priorities'], engagement: 'Ongoing advisory' },
    ],
  },
  {
    slug: 'digital-ecommerce',
    title: 'Digital & E-commerce Growth',
    short: 'Help turning your website and online store into a channel that converts and grows.',
    examples: 'Website and funnel review, conversion, store operations, retention',
    intro:
      'Your website and store should be your hardest-working growth channel. We review the full journey from first click to repeat purchase and help you fix the leaks, lift conversion, and build the systems that keep online revenue growing.',
    caveat: 'We advise on and help improve your digital presence and store. We do not guarantee a specific conversion rate or revenue outcome, which depend on traffic, offer, and execution.',
    icon: ic.digital,
    roles: [
      { title: 'Website & Funnel Review', description: 'A clear read on where your site and funnel lose people, and what to fix first.', responsibilities: ['Walk the full visitor journey', 'Find friction and drop-off points', 'Prioritize the highest-impact fixes'], engagement: 'Project' },
      { title: 'Conversion Improvement', description: 'Focused changes to turn more of your existing traffic into customers.', responsibilities: ['Sharpen pages, offers, and calls to action', 'Plan and prioritize tests', 'Measure the lift from each change'], engagement: 'Advisory or hands-on' },
      { title: 'Store Operations', description: 'Smoother store operations so growth does not create chaos behind the scenes.', responsibilities: ['Review orders, catalog, and workflows', 'Tighten the operational back end', 'Document how the store should run'], engagement: 'Project' },
      { title: 'Retention & Repeat Revenue', description: 'A plan to keep customers coming back and lift the value of each one.', responsibilities: ['Map the post-purchase experience', 'Plan email, loyalty, and win-back', 'Focus on repeat purchase and value'], engagement: 'Project or ongoing' },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
