// data/industries/fintech.js

export const fintechData = {
  slug: 'fintech',

  meta: {
    // SEO Tweak: Targeted "Software Development Agency" and "FinTech MVP"
    title: 'Custom FinTech Software Development Agency | WebNirmit',
    description:
      'Build secure, scalable FinTech MVPs in 14 days. We engineer PCI-compliant custom financial apps, digital wallets, and payment gateways for modern startups.',
  },

  hero: {
    title: {
      highlight: 'Custom FinTech',
      highlight2: 'Software',
      rest: 'Development Agency',
    },

    subtitle:
      'We engineer bank-grade, compliant FinTech MVPs, payment architectures, and digital banking platforms. Launch your secure financial web or mobile app in just 14 days.',

    cta: {
      primary: {
        text: 'Discuss Your FinTech App →',
        link: '/contact',
      },
      secondary: {
        text: 'View Security & Process',
        link: '#process',
      },
    },

    video: {
      src: 'https://www.pexels.com/download/video/32388715/',
    },
  },

  challenges: {
    title: 'FinTech Challenges <span class="text-primary">We Solve</span>',

    description:
      'Financial applications require zero-margin-for-error engineering. Startups struggle to balance rapid market launch with strict regulatory compliance and absolute data security.',

    items: [
      {
        title: 'High-Friction KYC/AML Onboarding',
        desc:
          'Lengthy identity verification processes create drop-offs. You need seamless, API-driven onboarding that satisfies regulators without frustrating users.',
      },
      {
        title: 'PCI-DSS & Data Breach Risks',
        desc:
          'Handling sensitive financial data requires end-to-end encryption and robust infrastructure to prevent devastating security breaches.',
      },
      {
        title: 'High-Concurrency Transaction Failures',
        desc:
          'When market volatility hits, monolithic architectures crash. You need scalable cloud infrastructure to process thousands of transactions per second.',
      },
      {
        title: 'Clunky Legacy API Integrations',
        desc:
          'Connecting to outdated banking mainframes or third-party financial institutions often results in slow data syncing and broken user experiences.',
      },
      {
        title: 'Complex Regulatory Compliance',
        desc:
          'Expanding globally means adapting to varying financial regulations, requiring flexible, region-aware technical architectures.',
      },
      {
        title: 'Poor Mobile Banking UX',
        desc:
          'Users expect their finance apps to be as intuitive as social media. Clunky dashboards destroy trust and drive users to competitors.',
      },
    ],
  },

  howWeHelp: {
    title:
      'How <span class="text-accent">WebNirmit</span> Engineers Digital Finance',

    description:
      'We build secure, enterprise-grade Next.js and React Native financial platforms that bypass technical debt and accelerate your time-to-market.',

    items: [
      {
        title: 'FinTech MVP Development',
        desc:
          'Launch a functional, investor-ready financial product in 14 days. We build the core transaction engines and secure user flows to validate your model fast.',

        tags: [
          '14-Day MVPs',
          'Next.js Dashboards',
          'React Native Apps',
          'Vercel Deployment',
          'PostgreSQL / Supabase',
        ],
      },

      {
        title: 'Digital Wallets & Neobanking',
        desc:
          'Engineer seamless consumer and B2B banking experiences featuring ledger systems, virtual cards, and real-time balance syncing.',

        tags: [
          'Ledger Architecture',
          'Plaid Integration',
          'Virtual Card APIs',
          'Account Management',
          'Real-time WebSockets',
        ],
      },

      {
        title: 'Custom Payment Gateways',
        desc:
          'Architect robust payment processing systems supporting ACH, wire transfers, cross-border payments, and complex subscription billing.',

        tags: [
          'Stripe Connect',
          'ACH Transfers',
          'Cross-Border APIs',
          'Escrow Systems',
          'Recurring Billing',
        ],
      },

      {
        title: 'Bank-Grade Security Architecture',
        desc:
          'We implement enterprise security protocols by default, preparing your application for SOC2 compliance and seamless security audits.',

        tags: [
          'End-to-End Encryption',
          'Row-Level Security (RLS)',
          'Role-Based Access (RBAC)',
          'Tokenization',
          'Audit Logging',
        ],
      },

      {
        title: 'AI-Powered Fraud & Analytics',
        desc:
          'Integrate intelligent algorithms to detect anomalous transactions, automate customer support, and provide predictive wealth analytics.',

        tags: [
          'Fraud Detection Pipelines',
          'LLM Financial Assistants',
          'Predictive Analytics',
          'Automated KYC',
          'Risk Monitoring',
        ],
      },

      {
        title: 'Open Banking API Integrations',
        desc:
          'Unify your financial data. We specialize in connecting your app securely to open banking networks and legacy financial institutions.',

        tags: [
          'Plaid / Dwolla',
          'Visa / Mastercard APIs',
          'Core Banking Sync',
          'Accounting APIs',
          'Webhooks',
        ],
      },
    ],
  },

  whyChoose: {
    title:
      'Why FinTech Founders <span class="text-primary">Choose WebNirmit</span>',

    items: [
      {
        title: '14-Day Investor-Ready MVPs',
        desc:
          'We stop talking and start coding. Using our proprietary financial starter kits, we deliver production-ready MVPs in two weeks, fixed-price.',
      },

      {
        title: 'Zero-Compromise Security',
        desc:
          'We architect applications with strict data isolation, encryption at rest and in transit, and robust authentication (MFA/Biometrics).',
      },

      {
        title: 'Silicon Valley Caliber Engineering',
        desc:
          'Your app is built by senior engineers who understand distributed systems, database ACID compliance, and scalable cloud architectures.',
      },

      {
        title: 'Flawless Financial UX',
        desc:
          'We design high-fidelity Figma prototypes that translate complex financial data into beautiful, intuitive, and trustworthy user interfaces.',
      },

      {
        title: '100% IP & Code Ownership',
        desc:
          'No vendor lock-in. We build on your AWS or Vercel infrastructure and push directly to your GitHub. You own the financial engine we build.',
      },
    ],
  },

  process: {
    title: 'Our <span class="text-accent">Agile FinTech</span> Process',

    steps: [
      {
        num: '01',
        title: 'Architecture & Compliance Scoping',
        desc:
          'We map out the data flow, select compliant API providers (e.g., Stripe, Plaid), and lock down a fixed-price technical scope.',
      },
      {
        num: '02',
        title: 'High-Fidelity UX Prototyping',
        desc:
          'We design pixel-perfect, accessible user journeys focused on building trust during onboarding and transactions.',
      },
      {
        num: '03',
        title: 'Secure Sprint Development',
        desc:
          'Senior developers build your Next.js/React Native app with daily staging updates, implementing strict Row-Level Security from Day 1.',
      },
      {
        num: '04',
        title: 'Penetration & Load Testing',
        desc:
          'We run automated tests to simulate high transaction volumes and audit the codebase for vulnerabilities before any money moves.',
      },
      {
        num: '05',
        title: 'Deployment & Scaling Support',
        desc:
          'We deploy to secure cloud infrastructure, handle the technical handover, and provide 30 days of active bug support post-launch.',
      },
    ],
  },

  idealFor: {
    title: 'Who We Build For',

    items: [
      'Pre-Seed & Seed FinTech Startups',
      'Neobanks & Digital Wallets',
      'Payment & Remittance Platforms',
      'Wealth Management & Robo-Advisors',
      'P2P Lending & Crowdfunding Apps',
      'InsurTech Platforms',
      'B2B Financial SaaS Companies',
      'PropTech & Real Estate Investment',
    ],
  },

  faq: {
    title: 'Frequently Asked <span class="text-primary">Questions</span>',

    items: [
      {
        q: 'Are the FinTech applications you build PCI-DSS and SOC2 compliant ready?',
        a: 'Yes. While final certification depends on your internal company processes, we build the technical foundation for compliance. This includes data tokenization, encrypted databases, strict Role-Based Access Control (RBAC), and comprehensive audit logging.',
      },
      {
        q: 'Can you integrate open banking APIs like Plaid, Stripe, or Dwolla?',
        a: 'Absolutely. We have extensive experience integrating Plaid for account linking, Stripe Connect for complex multi-party payments, and Dwolla for ACH transfers to create seamless financial ecosystems.',
      },
      {
        q: 'How do you guarantee security while building an MVP in just 14 days?',
        a: 'We do not reinvent the wheel. We leverage enterprise-grade, highly secure frameworks (Next.js, Supabase/PostgreSQL) and established auth providers. This allows us to focus entirely on your unique business logic without compromising foundational security.',
      },
      {
        q: 'Do you build both web dashboards and mobile banking apps?',
        a: 'Yes. We typically build administrative and B2B platforms using Next.js, and consumer-facing mobile applications using React Native for native iOS and Android performance.',
      },
      {
        q: 'What happens if we need to scale the app for thousands of concurrent users?',
        a: 'We architect our applications using scalable, serverless cloud infrastructure (Vercel, AWS). When your app goes viral or experiences transaction spikes, the infrastructure automatically scales to handle the load without crashing.',
      },
    ],
  },

  cta: {
    title:
      'Ready To Engineer The Future Of <br /> <span class="text-primary">Digital Finance?</span>',

    description:
      'Stop risking your startup\'s reputation on slow, insecure development agencies. Partner with WebNirmit to build a scalable, bank-grade FinTech platform in a fraction of the time.',

    button: {
      text: "Book Your Technical Scoping Call",
      link: '/contact',
    },

    subtext:
      'Fixed-price contracts. Bank-grade security. Delivered in 14 days.',
  },

  footer:
    '© 2026 WebNirmit — Custom FinTech Software Development. All rights reserved.',
};

// // data/industries/fintech.js

// export const fintechData = {
//   slug: 'fintech',

//   meta: {
//     title: 'FinTech Solutions | WebNirmit',
//     description:
//       'Building secure, scalable, and modern financial technology products for the next generation of digital finance.',
//   },

//   hero: {
//     title: {
//       highlight: 'FinTech',
//       highlight2: 'Digital Finance',
//       rest: 'Built for Trust & Scale',
//     },

//     subtitle:
//       'We help FinTech startups, financial institutions, and digital finance platforms build secure products that simplify transactions, improve customer experiences, and accelerate growth.',

//     cta: {
//       primary: {
//         text: 'Start Your Project →',
//         link: '/contact',
//       },
//       secondary: {
//         text: 'Our Process',
//         link: '#process',
//       },
//     },

//     video: {
//       src: 'https://www.pexels.com/download/video/32388715/',
//     },
//   },

//   challenges: {
//     title: 'Challenges <span class="text-primary">We Help Solve</span>',

//     description:
//       'Modern financial products must balance security, compliance, performance, and user experience while operating in an increasingly competitive market.',

//     items: [
//       {
//         title: 'Complex User Onboarding',
//         desc:
//           'Lengthy onboarding and verification processes often create friction and reduce customer acquisition.',
//       },
//       {
//         title: 'Security & Fraud Risks',
//         desc:
//           'Financial platforms must continuously protect users, transactions, and sensitive financial data.',
//       },
//       {
//         title: 'Legacy Financial Systems',
//         desc:
//           'Outdated infrastructure slows innovation and makes scaling difficult.',
//       },
//       {
//         title: 'Customer Trust Challenges',
//         desc:
//           'Users expect seamless experiences while demanding transparency and reliability.',
//       },
//       {
//         title: 'Compliance Complexity',
//         desc:
//           'Regulatory requirements add operational and technical challenges for growing FinTech businesses.',
//       },
//       {
//         title: 'Scaling Transaction Infrastructure',
//         desc:
//           'Growing platforms need architectures capable of handling increasing transaction volumes without compromise.',
//       },
//     ],
//   },

//   howWeHelp: {
//     title:
//       'How <span class="text-accent">WebNirmit</span> Helps FinTech Companies Grow',

//     description:
//       'We build secure and scalable financial technology solutions that improve user experiences and support business growth.',

//     items: [
//       {
//         title: 'FinTech Product Development',
//         desc:
//           'Build modern financial platforms designed for security, reliability, and long-term scalability.',

//         tags: [
//           'Digital Platforms',
//           'Customer Portals',
//           'Financial Dashboards',
//           'Admin Systems',
//           'Transaction Platforms',
//         ],
//       },

//       {
//         title: 'Digital Banking Experiences',
//         desc:
//           'Create intuitive customer experiences for digital banking and financial services.',

//         tags: [
//           'Account Management',
//           'Transaction History',
//           'Customer Dashboards',
//           'Digital Experiences',
//           'User Portals',
//         ],
//       },

//       {
//         title: 'Payment & Transaction Systems',
//         desc:
//           'Build secure systems that support seamless transactions and financial operations.',

//         tags: [
//           'Payment Processing',
//           'Subscriptions',
//           'Recurring Billing',
//           'Wallet Systems',
//           'Financial Operations',
//         ],
//       },

//       {
//         title: 'FinTech UX Design',
//         desc:
//           'Design user experiences that increase trust, simplify workflows, and improve adoption.',
//       },

//       {
//         title: 'AI-Powered Financial Solutions',
//         desc:
//           'Leverage AI to automate operations, improve customer support, and generate actionable insights.',

//         tags: [
//           'AI Assistants',
//           'Fraud Detection',
//           'Predictive Analytics',
//           'Risk Monitoring',
//           'Automation',
//         ],
//       },

//       {
//         title: 'Financial Integrations',
//         desc:
//           'Connect your platform with banking, payment, analytics, and third-party financial services.',

//         tags: [
//           'Payment Gateways',
//           'Banking APIs',
//           'CRM Systems',
//           'Analytics Tools',
//           'Third-Party APIs',
//         ],
//       },
//     ],
//   },

//   whyChoose: {
//     title:
//       'Why FinTech Companies <span class="text-primary">Choose WebNirmit</span>',

//     items: [
//       {
//         title: 'Security-First Approach',
//         desc:
//           'Security is considered at every stage of design, development, and deployment.',
//       },

//       {
//         title: 'Built For Trust',
//         desc:
//           'We create experiences that improve customer confidence and long-term adoption.',
//       },

//       {
//         title: 'Scalable Infrastructure',
//         desc:
//           'Our solutions are designed to handle increasing users, transactions, and business growth.',
//       },

//       {
//         title: 'Product-Led Thinking',
//         desc:
//           'We focus on creating financial products that deliver measurable business outcomes.',
//       },

//       {
//         title: 'Long-Term Partnership',
//         desc:
//           'We continue supporting platforms through optimization, expansion, and future innovation.',
//       },
//     ],
//   },

//   process: {
//     title: 'Our <span class="text-accent">Process</span>',

//     steps: [
//       {
//         num: '01',
//         title: 'Discovery',
//         desc:
//           'We understand your business model, users, compliance requirements, and market opportunities.',
//       },
//       {
//         num: '02',
//         title: 'Strategy',
//         desc:
//           'We define architecture, workflows, security considerations, and product priorities.',
//       },
//       {
//         num: '03',
//         title: 'Design',
//         desc:
//           'We create intuitive financial experiences focused on trust and usability.',
//       },
//       {
//         num: '04',
//         title: 'Development',
//         desc:
//           'Our engineers build secure, scalable, and high-performance financial platforms.',
//       },
//       {
//         num: '05',
//         title: 'Launch & Scale',
//         desc:
//           'We optimize performance, improve adoption, and support future growth initiatives.',
//       },
//     ],
//   },

//   idealFor: {
//     title: 'Ideal For',

//     items: [
//       'FinTech Startups',
//       'Digital Banking Platforms',
//       'Payment Companies',
//       'Wealth Management Platforms',
//       'Lending Platforms',
//       'Insurance Technology Companies',
//       'Investment Platforms',
//       'Financial SaaS Businesses',
//     ],
//   },

//   faq: {
//     title: 'Frequently Asked <span class="text-primary">Questions</span>',

//     items: [
//       {
//         q: 'Can you build FinTech products from scratch?',
//         a: 'Yes. We handle product strategy, design, development, deployment, and ongoing support.',
//       },
//       {
//         q: 'Do you develop payment and transaction systems?',
//         a: 'Yes. We build secure payment experiences and transaction-focused digital products.',
//       },
//       {
//         q: 'Can you integrate banking and financial APIs?',
//         a: 'Absolutely. We integrate payment gateways, banking services, analytics tools, and third-party financial systems.',
//       },
//       {
//         q: 'Do you build mobile financial applications?',
//         a: 'Yes. We develop responsive web and mobile-first financial experiences.',
//       },
//       {
//         q: 'Do you provide ongoing maintenance and support?',
//         a: 'Yes. We offer optimization, maintenance, security updates, and long-term product support.',
//       },
//     ],
//   },

//   cta: {
//     title:
//       'Ready To Build The Future Of <br /> <span class="text-primary">Finance?</span>',

//     description:
//       'Whether you are launching a FinTech startup, modernizing financial services, or creating the next generation of digital finance products, WebNirmit helps transform ambitious ideas into secure and scalable solutions.',

//     button: {
//       text: "Let's Discuss Your FinTech Vision",
//       link: '/contact',
//     },

//     subtext:
//       'Build financial products users trust.',
//   },

//   footer:
//     '© 2025 WebNirmit — FinTech Solutions. All rights reserved.',
// };

