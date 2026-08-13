// data/industries/healthtech.js

export const healthtechData = {
  slug: 'healthtech',

  meta: {
    // SEO Tweak: Targeted "HIPAA-Compliant", "Software Development Agency"
    title: 'HIPAA-Compliant HealthTech Software Development Agency | WebNirmit',
    description:
      'Hire a senior engineering team to build secure, HIPAA-compliant HealthTech MVPs, telemedicine apps, and custom EHR integrations. Launch in 14 days.',
  },

  hero: {
    title: {
      highlight: 'Custom HealthTech',
      highlight2: 'Software',
      rest: 'Development Agency',
    },

    subtitle:
      'We engineer HIPAA-compliant telemedicine platforms, remote patient monitoring apps, and secure healthcare MVPs. Launch your scalable digital health product in just 14 days.',

    cta: {
      primary: {
        text: 'Discuss Your HealthTech App →',
        link: '/contact',
      },
      secondary: {
        text: 'View Tech & Compliance',
        link: '#process',
      },
    },

    video: {
      src: 'https://www.pexels.com/download/video/30593273/',
    },
  },

  challenges: {
    title: 'HealthTech Challenges <span class="text-primary">We Solve</span>',

    description:
      'Building for healthcare requires zero margins for error. Founders struggle to balance rapid product launches with strict HIPAA compliance, data interoperability, and accessible design.',

    items: [
      {
        title: 'HIPAA & PHI Security Risks',
        desc:
          'Mishandling Protected Health Information (PHI) leads to massive fines. You need an architecture built with end-to-end encryption and strict audit logging from Day 1.',
      },
      {
        title: 'Fragmented EHR/EMR Silos',
        desc:
          'Healthcare data is notoriously disconnected. Lack of interoperability with legacy systems (Epic, Cerner) creates operational bottlenecks and poor patient experiences.',
      },
      {
        title: 'Clunky Telehealth Experiences',
        desc:
          'Dropped video calls and confusing UI lead to missed appointments. Patients and doctors require seamless, low-latency communication portals.',
      },
      {
        title: 'Slow Time-to-Market',
        desc:
          'Traditional development agencies get bogged down by healthcare regulations, taking 6+ months just to launch a basic MVP. You need to move faster.',
      },
      {
        title: 'Non-Compliant Data Architectures',
        desc:
          'Consumer-grade databases cannot be used for medical data. Your platform requires Business Associate Agreements (BAAs) and dedicated, secure cloud environments.',
      },
      {
        title: 'Poor Digital Accessibility',
        desc:
          'If your health app isn’t WCAG compliant, you alienate elderly patients and users with disabilities, reducing adoption and treatment adherence.',
      },
    ],
  },

  howWeHelp: {
    title:
      'How <span class="text-accent">WebNirmit</span> Engineers Digital Healthcare',

    description:
      'We build secure, enterprise-grade Next.js and React Native healthcare platforms that bypass technical debt and accelerate your time-to-market.',

    items: [
      {
        title: 'HIPAA-Compliant MVP Development',
        desc:
          'Launch an investor-ready HealthTech product in 14 days. We build the core clinical workflows and secure data pipelines to validate your model fast.',

        tags: [
          '14-Day MVPs',
          'Next.js Web Apps',
          'React Native Mobile',
          'Supabase / PostgreSQL',
          'HIPAA Infrastructure',
        ],
      },

      {
        title: 'Telemedicine & RPM Platforms',
        desc:
          'Engineer robust virtual care platforms featuring WebRTC live video, secure messaging, and Remote Patient Monitoring (RPM) IoT integrations.',

        tags: [
          'WebRTC Video APIs',
          'Zoom Healthcare API',
          'Remote Patient Monitoring',
          'Wearable Integrations',
          'Secure Chat (E2EE)',
        ],
      },

      {
        title: 'EHR/EMR & FHIR Integrations',
        desc:
          'Break down data silos. We build custom API bridges to integrate your app seamlessly with Epic, Cerner, Athenahealth, and standard HL7/FHIR protocols.',

        tags: [
          'HL7 / FHIR Standards',
          'Epic / Cerner APIs',
          'e-Prescribing (eRx)',
          'Lab Integrations',
          'Data Interoperability',
        ],
      },

      {
        title: 'Patient Portals & Digital Front Doors',
        desc:
          'Design WCAG-accessible, frictionless mobile and web experiences that empower patients to book appointments, view lab results, and manage billing.',

        tags: [
          'WCAG Accessibility',
          'Mobile-First UX',
          'Online Scheduling',
          'Medical Billing APIs',
          'Patient Onboarding',
        ],
      },

      {
        title: 'AI Medical Scribes & Analytics',
        desc:
          'Embed intelligent, HIPAA-compliant LLMs to automate clinical note-taking, summarize patient histories, and provide predictive care analytics.',

        tags: [
          'Voice-to-Text Scribes',
          'Clinical NLP',
          'Predictive Analytics',
          'Automated Triage',
          'HIPAA-Compliant LLMs',
        ],
      },

      {
        title: 'Clinical Workflow Automation',
        desc:
          'Reduce provider burnout by automating repetitive administrative tasks, from insurance eligibility verification to automated follow-up scheduling.',

        tags: [
          'Insurance Verification',
          'Revenue Cycle APIs',
          'Staff Dashboards',
          'Automated Reminders',
          'Custom CRMs',
        ],
      },
    ],
  },

  whyChoose: {
    title:
      'Why HealthTech Founders <span class="text-primary">Choose WebNirmit</span>',

    items: [
      {
        title: '14-Day Investor-Ready MVPs',
        desc:
          'We stop talking and start coding. Using our proprietary healthcare starter kits, we deliver production-ready MVPs in two weeks, fixed-price.',
      },

      {
        title: 'Compliance-First Engineering',
        desc:
          'Security isn’t an afterthought. We implement Row-Level Security (RLS), AES-256 encryption, and comprehensive audit logs required for HIPAA and SOC2.',
      },

      {
        title: 'Silicon Valley Caliber Developers',
        desc:
          'Your medical app is built by senior engineers who deeply understand distributed systems, HL7/FHIR interoperability, and scalable cloud architectures.',
      },

      {
        title: 'Accessible & Empathetic UX',
        desc:
          'We design high-fidelity Figma prototypes focused on WCAG accessibility, ensuring your app is intuitive for patients of all ages and technical abilities.',
      },

      {
        title: '100% IP & Code Ownership',
        desc:
          'No vendor lock-in. We build on your dedicated, BAA-covered AWS or Vercel infrastructure and push directly to your GitHub. You own the technology.',
      },
    ],
  },

  process: {
    title: 'Our <span class="text-accent">Agile HealthTech</span> Process',

    steps: [
      {
        num: '01',
        title: 'Architecture & Compliance Scoping',
        desc:
          'We map clinical workflows, define the PHI data architecture, select BAA-compliant cloud providers, and lock the fixed-price scope.',
      },
      {
        num: '02',
        title: 'High-Fidelity UX Prototyping',
        desc:
          'We design pixel-perfect, accessible user journeys focused on building patient trust and minimizing provider click-fatigue.',
      },
      {
        num: '03',
        title: 'Secure Sprint Development',
        desc:
          'Senior developers build your Next.js/React Native app with daily staging updates, implementing strict data encryption from Day 1.',
      },
      {
        num: '04',
        title: 'Penetration Testing & QA',
        desc:
          'We run automated tests to simulate high traffic loads and audit the codebase for security vulnerabilities to ensure compliance readiness.',
      },
      {
        num: '05',
        title: 'Deployment & Scaling Support',
        desc:
          'We deploy to a secure, HIPAA-compliant cloud environment, execute the technical handover, and provide 30 days of active bug support.',
      },
    ],
  },

  idealFor: {
    title: 'Who We Build For',

    items: [
      'Pre-Seed & Seed HealthTech Startups',
      'Telemedicine & Virtual Care Clinics',
      'Remote Patient Monitoring (RPM) Providers',
      'Digital Therapeutics (DTx) Companies',
      'Mental Health & Therapy Platforms',
      'Healthcare SaaS & Workflow Tools',
      'MedTech & Wearable Integrations',
      'Women’s Health & FemTech Startups',
    ],
  },

  faq: {
    title: 'Frequently Asked <span class="text-primary">Questions</span>',

    items: [
      {
        q: 'Are the healthcare applications you build HIPAA compliant?',
        a: 'Yes. We build the technical foundation required for HIPAA compliance. This includes implementing AES-256 encryption at rest and TLS in transit, setting up strict Role-Based Access Control (RBAC), comprehensive audit logging, and deploying on BAA-covered cloud infrastructure.',
      },
      {
        q: 'Can you integrate our app with major EHR/EMR systems like Epic or Cerner?',
        a: 'Absolutely. We specialize in healthcare interoperability. We can build custom API bridges using modern FHIR and HL7 standards to securely sync patient data, scheduling, and clinical notes between your app and legacy EHR systems.',
      },
      {
        q: 'How do you build a secure HealthTech MVP in just 14 days?',
        a: 'We leverage proprietary, pre-audited Next.js and Supabase starter kits that already have secure authentication and database architectures in place. This allows our senior team to focus 100% of the 14-day sprint on building your unique clinical workflows and business logic.',
      },
      {
        q: 'Do you build custom telemedicine video features?',
        a: 'Yes. We integrate secure, low-latency video streaming APIs (like WebRTC, Twilio Video, or Zoom’s Healthcare API) directly into your platform, ensuring telehealth sessions are seamless, recorded (if required), and fully encrypted.',
      },
      {
        q: 'Do you build native mobile apps for patients?',
        a: 'Yes. We frequently build provider-facing administrative dashboards on the web using Next.js, and patient-facing mobile applications using React Native to ensure high performance on both iOS and Android devices.',
      },
    ],
  },

  cta: {
    title:
      'Ready To Engineer The Future Of <br /> <span class="text-primary">Digital Healthcare?</span>',

    description:
      'Stop risking your startup\'s compliance on slow, generic development agencies. Partner with WebNirmit to build a secure, scalable HealthTech platform in a fraction of the time.',

    button: {
      text: "Book Your Technical Scoping Call",
      link: '/contact',
    },

    subtext:
      'Fixed-price contracts. HIPAA-compliant architecture. Delivered in 14 days.',
  },

  footer:
    '© 2026 WebNirmit — Custom HealthTech Software Development. All rights reserved.',
};