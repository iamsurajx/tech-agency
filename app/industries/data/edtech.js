// data/industries/edtech.js

export const edtechData = {
  slug: 'edtech',

  meta: {
    // SEO Tweak: Targeted "Custom Software" and "LMS Development Agency"
    title: 'Custom EdTech Software & LMS Development Agency | WebNirmit',
    description:
      'Hire a senior engineering team to build scalable custom LMS platforms, AI tutors, and EdTech mobile apps. Launch your production-ready MVP in 14 days.',
  },

  hero: {
    title: {
      highlight: 'Custom EdTech',
      highlight2: 'Software',
      rest: 'Development Agency',
    },
    subtitle:
      'We engineer high-performance Learning Management Systems (LMS), AI-driven education platforms, and cross-platform mobile apps that drive student retention and scale seamlessly.',
    cta: {
      primary: {
        text: 'Discuss Your EdTech App →',
        link: '/contact',
      },
      secondary: {
        text: 'View Tech Stack',
        link: '#process',
      },
    },
    video: {
      src: 'https://www.pexels.com/download/video/7989532/',
    },
  },

  challenges: {
    title: 'EdTech Challenges <span class="text-primary">We Solve</span>',
    description:
      'Scaling an EdTech product requires more than just video hosting. Founders struggle with high churn rates, complex cloud architectures, and strict data privacy compliance.',

    items: [
      {
        title: 'High Churn & Low Completion Rates',
        desc:
          'Boring, clunky interfaces kill motivation. Without gamification and intuitive UX, students abandon courses before finishing them.',
      },
      {
        title: 'Server Crashes During Peak Loads',
        desc:
          'Monolithic architectures fail when thousands of students log in simultaneously for live classes or timed assessments.',
      },
      {
        title: 'Rigid, Outdated LMS Templates',
        desc:
          'Off-the-shelf LMS platforms restrict your business model. You need multi-tenant architectures for B2B sales that generic tools cannot support.',
      },
      {
        title: 'Data Privacy & Compliance Risks',
        desc:
          'Handling student data without proper encryption exposes your platform to massive legal risks under FERPA, COPPA, and GDPR.',
      },
      {
        title: 'Leaky Subscription Funnels',
        desc:
          'Poorly integrated payment gateways and messy subscription management systems cause high involuntary churn and lost revenue.',
      },
      {
        title: 'Lack of Actionable Learning Analytics',
        desc:
          'Without real-time dashboards tracking watch time, quiz scores, and drop-off points, educators cannot intervene to help struggling students.',
      },
    ],
  },

  howWeHelp: {
    title:
      'How <span class="text-accent">WebNirmit</span> Engineers Learning at Scale',

    description:
      'We combine enterprise-grade Next.js architectures with AI integrations to build learning products that scale to millions of users without technical debt.',

    items: [
      {
        title: 'Custom LMS Development',
        desc:
          'Break free from rigid templates. We build custom, multi-tenant Learning Management Systems tailored to your exact pedagogy and B2B/B2C business model.',
        tags: [
          'Multi-Tenant Architecture',
          'SCORM / xAPI Support',
          'White-Label Portals',
          'Custom Gradebooks',
          'Interactive Dashboards',
        ],
      },

      {
        title: 'Rapid EdTech MVP Development',
        desc:
          'Go from idea to investor-ready product in exactly 14 days. We build robust core features that allow you to validate your market and raise capital fast.',
        tags: [
          'Next.js Web Apps',
          'React Native Mobile',
          'Vercel Deployment',
          'Supabase / PostgreSQL',
          'Fixed-Price Sprints',
        ],
      },

      {
        title: 'AI Tutors & LLM Integration',
        desc:
          'Embed the power of OpenAI and Claude into your platform. We build RAG pipelines for instant document Q&A, automated grading, and personalized AI tutoring.',
        tags: [
          'Conversational AI Tutors',
          'Automated Essay Grading',
          'RAG Pipelines',
          'Personalized Syllabuses',
          'Vector Search',
        ],
      },

      {
        title: 'Live Video & WebRTC Integration',
        desc:
          'Seamlessly integrate low-latency live streaming and virtual classrooms directly into your platform without relying on clunky third-party links.',
        tags: [
          'WebRTC Live Classes',
          'Zoom API Integration',
          'Mux Video Hosting',
          'In-browser Screen Sharing',
          'Interactive Chat',
        ],
      },

      {
        title: 'B2B & B2C Monetization Systems',
        desc:
          'Implement enterprise-grade billing architectures capable of handling complex B2B seat-licensing, B2C subscriptions, and global tax compliance.',
        tags: [
          'Stripe Connect',
          'Seat-Based Licensing',
          'Tiered Subscriptions',
          'Global Payment Gateways',
          'Automated Invoicing',
        ],
      },

      {
        title: 'Learner-Centric UX & Gamification',
        desc:
          'We design high-fidelity Figma interfaces that utilize gamification loops, progress tracking, and accessible (WCAG compliant) UI to boost retention.',
        tags: [
          'Gamification Loops',
          'WCAG Accessibility',
          'Mobile-First UX',
          'Achievement Badges',
          'Figma Design Systems',
        ],
      },
    ],
  },

  whyChoose: {
    title:
      'Why EdTech Startups <span class="text-primary">Choose WebNirmit</span>',

    items: [
      {
        title: '14-Day Production MVPs',
        desc:
          'We don’t spend months in planning purgatory. We define the scope, lock the price, and ship a production-ready EdTech MVP in two weeks.',
      },
      {
        title: 'Zero Technical Debt',
        desc:
          'We build on modern, enterprise-grade stacks (Next.js, Node.js, AWS/Vercel) so your platform won’t crash when your user base explodes.',
      },
      {
        title: 'Compliance-First Engineering',
        desc:
          'We architect databases with strict row-level security and encryption to ensure your platform meets FERPA, COPPA, and GDPR requirements.',
      },
      {
        title: 'Direct Founder Access',
        desc:
          'You talk directly to the senior engineers building your platform. No account managers, no offshore communication delays.',
      },
      {
        title: '100% IP Ownership',
        desc:
          'We push code directly to your GitHub repository from Day 1. No vendor lock-in, no licensing fees. It is your proprietary technology.',
      },
    ],
  },

  process: {
    title: 'Our <span class="text-accent">Agile EdTech</span> Process',

    steps: [
      {
        num: '01',
        title: 'Technical Scoping & Architecture',
        desc:
          'We define the core user journeys, select the optimal database schema, and lock in the fixed-price contract.',
      },
      {
        num: '02',
        title: 'UX/UI & Learner Journey Design',
        desc:
          'We create interactive Figma prototypes, ensuring the platform is intuitive for both students and instructors before coding begins.',
      },
      {
        num: '03',
        title: 'Full-Stack Sprints',
        desc:
          'Our senior engineers build the frontend and backend simultaneously, providing you with daily staging links to test progress.',
      },
      {
        num: '04',
        title: 'Security & QA Testing',
        desc:
          'Rigorous load testing and security audits to ensure video streams, payment gateways, and data privacy protocols are flawless.',
      },
      {
        num: '05',
        title: 'Deployment & Scaling Support',
        desc:
          'We launch your application on scalable cloud infrastructure, hand over the codebase, and provide 30 days of immediate bug support.',
      },
    ],
  },

  idealFor: {
    title: 'Who We Build For',

    items: [
      'Seed-Stage EdTech Startups',
      'Enterprise Corporate Training Platforms',
      'Test-Prep & Certification Companies',
      'Creator-Led Course Academies',
      'Language Learning Applications',
      'AI-Powered Education Tools',
      'B2B SaaS Learning Platforms',
      'Bootcamps & Cohort-Based Courses',
    ],
  },

  faq: {
    title: 'Frequently Asked <span class="text-primary">Questions</span>',

    items: [
      {
        q: 'How much does it cost to build a custom LMS or EdTech platform?',
        a: 'Unlike agencies that bill hourly and suffer from scope creep, we operate on a fixed-price model. After scoping your core features during discovery, we give you a locked price. You never pay a penny more for the agreed scope.',
      },
      {
        q: 'Are the platforms you build FERPA and COPPA compliant?',
        a: 'Yes. Data privacy is critical in EdTech. We implement strict Row-Level Security (RLS) in databases like PostgreSQL/Supabase, encrypt sensitive data in transit and at rest, and ensure compliance with US and EU education privacy laws.',
      },
      {
        q: 'Can you integrate live video classes (like Zoom) into the platform?',
        a: 'Absolutely. We regularly integrate the Zoom API, Mux, or WebRTC for native, in-browser live streaming, allowing students to join classes directly from your dashboard without external links.',
      },
      {
        q: 'Can you build interactive SCORM-compliant course modules?',
        a: 'Yes, we can build custom LMS architectures capable of hosting, tracking, and reporting on standard SCORM and xAPI packages, ensuring compatibility with corporate training standards.',
      },
      {
        q: 'We need to launch fast to show investors. Can you really build an MVP in 14 days?',
        a: 'Yes. By utilizing our proprietary Next.js starter kits, pre-built auth/billing modules, and a dedicated team of senior engineers, we strip away the fluff and deliver a functional, investor-ready MVP in exactly two weeks.',
      },
    ],
  },

  cta: {
    title:
      'Ready To Engineer Your <br /> <span class="text-primary">EdTech Empire?</span>',

    description:
      'Stop wrestling with rigid LMS templates and slow development agencies. Partner with WebNirmit to build a custom, scalable EdTech platform that your students and investors will love.',

    button: {
      text: "Book Your Technical Scoping Call",
      link: '/contact',
    },

    subtext:
      'Fixed-price contracts. Production-ready code. Delivered in 14 days.',
  },

  footer:
    '© 2026 WebNirmit — Custom EdTech Software Development. All rights reserved.',
};
