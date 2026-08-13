// data/industries/saas.js

export const saasData = {
  slug: 'saas',

  meta: {
    // SEO Tweak: Targeted "B2B SaaS", "MVP", and "Development Agency"
    title: 'B2B SaaS MVP Development Agency | Custom Software | WebNirmit',
    description:
      'Hire a senior engineering team to build scalable, multi-tenant B2B SaaS applications. Launch your custom SaaS MVP with AI integrations and Stripe billing in just 14 days.',
  },

  hero: {
    title: {
      highlight: 'B2B SaaS MVP',
      highlight2: 'Software',
      rest: 'Development Agency',
    },
    subtitle:
      'Stop burning runway on bloated development cycles. We engineer secure, multi-tenant SaaS platforms with enterprise-grade Next.js architecture. Launch your revenue-ready MVP in 14 days.',
    cta: {
      primary: {
        text: 'Discuss Your SaaS MVP →',
        link: '/contact',
      },
      secondary: {
        text: 'View Tech Stack',
        link: '#process',
      },
    },
    video: {
      src: 'https://www.pexels.com/download/video/6558517/', 
    },
  },

  challenges: {
    title: 'SaaS Scaling Challenges <span class="text-primary">We Solve</span>',
    description:
      "Great ideas die in development hell. Founders constantly struggle to balance rapid market validation with the technical foundation required to scale beyond the first 100 users.",

    items: [
      {
        title: 'Bloated Timelines & High Burn Rate',
        desc: 'Traditional agencies take 4-6 months to ship a basic v1. By the time you launch, your runway is depleted and the market has shifted.',
      },
      {
        title: 'Messy Multi-Tenant Architectures',
        desc: 'If user data isn’t isolated properly from Day 1, scaling B2B accounts becomes a security nightmare and prevents SOC2 compliance.',
      },
      {
        title: 'High Churn & Clunky Onboarding',
        desc: 'Users expect a frictionless Product-Led Growth (PLG) experience. Confusing UX and slow dashboard load times lead directly to churn.',
      },
      {
        title: 'Complex Stripe & Billing Logic',
        desc: 'Implementing tiered subscriptions, usage-based billing, and prorated upgrades correctly is notoriously difficult and delays launches.',
      },
      {
        title: 'Crippling Technical Debt',
        desc: 'Offshore dev shops often use outdated stacks and spaghetti code. When it’s time to scale or raise a Series A, you have to rewrite everything.',
      },
      {
        title: 'Disconnected API Ecosystems',
        desc: 'Modern B2B SaaS relies on seamless integrations with Salesforce, Slack, and OAuth providers. Broken webhooks destroy user trust.',
      },
    ],
  },

  howWeHelp: {
    title: 'How <span class="text-accent">WebNirmit</span> Engineers SaaS Scale',
    description:
      'We don’t just write code; we build revenue engines. Our team utilizes modern Next.js and Supabase architectures to build software that scales effortlessly from MVP to Enterprise.',

    items: [
      {
        title: '14-Day SaaS MVP Development',
        desc: 'We bypass the fluff. We scope the core features needed to validate your market and deliver a production-ready, fully functional MVP in exactly two weeks.',
        tags: [
          '14-Day Sprints',
          'Next.js Framework',
          'React Server Components',
          'Vercel Edge Deployment',
          'Fixed-Price Contracts',
        ],
      },
      {
        title: 'Secure Multi-Tenant Architecture',
        desc: 'We architect databases with strict Row-Level Security (RLS) and organization/team management, ensuring enterprise-grade B2B data isolation.',
        tags: [
          'PostgreSQL / Supabase',
          'Row-Level Security (RLS)',
          'RBAC / Permissions',
          'B2B Team Management',
          'SOC2 Readiness',
        ],
      },
      {
        title: 'Automated Billing & Subscriptions',
        desc: 'We integrate seamless payment gateways to handle recurring revenue, trial periods, seat-based licensing, and usage-based pricing models.',
        tags: [
          'Stripe Billing API',
          'Seat-Based Pricing',
          'Usage-Based Metering',
          'Automated Invoicing',
          'MRR / ARR Analytics',
        ],
      },
      {
        title: 'AI Copilots & LLM Integration',
        desc: 'Differentiate your SaaS. We embed custom AI agents, document chat (RAG), and automated workflows directly into your product.',
        tags: [
          'OpenAI / Anthropic APIs',
          'RAG Data Pipelines',
          'Vector Databases',
          'AI Workflow Automation',
          'Prompt Engineering',
        ],
      },
      {
        title: 'High-Performance UI/UX Dashboards',
        desc: 'We design high-fidelity Figma interfaces optimized for Product-Led Growth (PLG), ensuring sub-second load times and frictionless onboarding.',
        tags: [
          'Figma Design Systems',
          'Dashboard Analytics',
          'PLG Onboarding',
          'Dark/Light Modes',
          'Core Web Vitals',
        ],
      },
      {
        title: 'Enterprise API & Webhook Integrations',
        desc: 'Make your SaaS indispensable by integrating it directly into your customers\' existing workflows via robust, secure APIs.',
        tags: [
          'OAuth 2.0 / SAML SSO',
          'Salesforce / HubSpot',
          'Slack / Teams Bots',
          'Custom REST/GraphQL APIs',
          'Webhook Processing',
        ],
      },
    ],
  },

  whyChoose: {
    title: 'Why B2B SaaS Founders <span class="text-primary">Choose WebNirmit</span>',
    items: [
      {
        title: 'Fixed-Price, 14-Day Delivery',
        desc: 'No hourly billing traps or scope creep. We define your MVP, lock the price, and ship investor-ready software in two weeks.',
      },
      {
        title: 'Zero Technical Debt',
        desc: 'We build on the exact same modern tech stack (Next.js, Tailwind, Postgres) used by unicorns like Vercel and Linear.',
      },
      {
        title: 'Direct Senior Developer Access',
        desc: 'You work directly with the senior engineers architecting your platform. No account managers, no lost translation.',
      },
      {
        title: 'Built for Enterprise Scale',
        desc: 'From Day 1, your database is structured to handle thousands of concurrent users and complex organizational hierarchies securely.',
      },
      {
        title: '100% IP & Code Ownership',
        desc: 'We don’t hold your code hostage. We deploy to your AWS/Vercel accounts and push to your GitHub. You own everything.',
      },
    ],
  },

  process: {
    title: 'Our <span class="text-accent">Agile SaaS</span> Process',
    steps: [
      { num: '01', title: 'Technical Scoping', desc: 'We define the database schema, map the core PLG user journey, and lock down the fixed-price contract.' },
      { num: '02', title: 'UX/UI Prototyping', desc: 'We design high-fidelity Figma dashboards, ensuring the data visualization and onboarding flow are frictionless.' },
      { num: '03', title: 'Full-Stack Sprints', desc: 'Our engineers build the Next.js frontend and PostgreSQL backend simultaneously, providing daily staging links.' },
      { num: '04', title: 'QA & Stripe Testing', desc: 'Rigorous testing of multi-tenant security, API rate limits, and Stripe webhook logic to ensure flawless billing.' },
      { num: '05', title: 'Launch & Handover', desc: 'We deploy to production, hand over the GitHub repository, and provide 30 days of active bug support.' },
    ],
  },

  idealFor: {
    title: 'Who We Build For',
    items: [
      'Pre-Seed & Seed B2B SaaS Startups',
      'AI & Machine Learning Software',
      'Enterprise Workflow Automation',
      'Internal Operational Tools',
      'Vertical SaaS Platforms',
      'FinTech & InsurTech SaaS',
      'Data Analytics Dashboards',
      'Subscription Marketplace Platforms',
    ],
  },

  faq: {
    title: 'Frequently Asked <span class="text-primary">Questions</span>',
    items: [
      { q: 'How can you possibly build a scalable SaaS MVP in just 14 days?', a: 'We leverage proprietary, enterprise-tested Next.js starter kits that already have multi-tenant auth, Stripe billing, and database schemas configured. This allows our senior engineers to spend 100% of the 14 days building your unique core features.' },
      { q: 'How do you handle multi-tenant data security?', a: 'We implement strict Row-Level Security (RLS) at the PostgreSQL database level. This guarantees that user data is cryptographically isolated by organization/team, which is a hard requirement for B2B enterprise sales and SOC2 compliance.' },
      { q: 'Can you integrate complex billing models like usage-based or per-seat pricing?', a: 'Absolutely. We deeply integrate Stripe Billing and Stripe Checkout to handle complex recurring revenue models, prorated upgrades/downgrades, trial periods, and automated invoicing.' },
      { q: 'What happens after the 14-day MVP launch?', a: 'We provide 30 days of free bug-fix support. After that, most founders retain us on a fractional engineering basis to build out their v2 roadmap, integrate user feedback, and scale infrastructure as revenue grows.' },
      { q: 'Do we own the source code?', a: 'Yes. 100%. We push all code directly to your company’s GitHub repository from Day 1 and deploy it to your own Vercel or AWS hosting environments. There is no vendor lock-in.' },
    ],
  },

  cta: {
    title: 'Ready To Build Your <br /> <span class="text-primary">B2B SaaS Empire?</span>',
    description:
      "Stop wasting months dealing with unreliable freelancers and bloated agencies. Partner with WebNirmit to engineer a highly scalable, revenue-ready SaaS platform in a fraction of the time.",
    button: { text: "Book Your Technical Scoping Call", link: '/contact' },
    subtext: "Fixed-price contracts. Production-ready code. Delivered in 14 days.",
  },

  footer: '© 2026 WebNirmit — Custom B2B SaaS Development. All rights reserved.',
};
