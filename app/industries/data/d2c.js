// data/industries/d2c.js

export const d2cData = {
  slug: 'd2c',

  meta: {
    // SEO Tweak: Targeted "Headless E-commerce" and "Development Agency"
    title: 'Headless E-Commerce & D2C Web Development Agency | WebNirmit',
    description:
      'Scale your D2C brand with high-converting, lightning-fast Next.js e-commerce storefronts. We build custom headless Shopify and commerce platforms that drive revenue.',
  },

  hero: {
    title: {
      highlight: 'Headless D2C',
      highlight2: 'E-commerce',
      rest: 'Development',
    },
    subtitle:
      'Transform your Shopify or custom storefront into a high-converting revenue engine with our enterprise-grade headless web architecture.',
    cta: {
      primary: {
        text: 'Build Your Storefront →',
        link: '/contact',
      },
      secondary: {
        text: 'View Tech Stack',
        link: '#process',
      },
    },
    video: {
      src: 'https://www.pexels.com/download/video/7680111/',
    },
  },

  challenges: {
    title: 'E-Commerce Challenges <span class="text-primary">We Solve</span>',
    description:
      'Scaling D2C brands face immense pressure to lower Customer Acquisition Costs (CAC) while delivering sub-second, frictionless shopping experiences.',

    items: [
      {
        title: 'Sluggish Page Load Speeds',
        desc:
          'Traditional monolithic themes drag down Core Web Vitals. Every extra second of load time costs you up to 7% in lost conversions.',
      },
      {
        title: 'High Customer Acquisition Costs (CAC)',
        desc:
          'With ad costs rising, sending expensive traffic to a generic, low-converting storefront burns your marketing budget.',
      },
      {
        title: 'Clunky Mobile Shopping Experience',
        desc:
          'Over 70% of e-commerce traffic is mobile. Poor responsive design and clunky UI lead to massive mobile bounce rates.',
      },
      {
        title: 'Cart & Checkout Abandonment',
        desc:
          'Complex, multi-step checkouts and slow payment gateway routing cause high-intent buyers to abandon their carts.',
      },
      {
        title: 'Poor Customer Retention',
        desc:
          'Without personalized user accounts, subscription portals, and loyalty integrations, maximizing Lifetime Value (LTV) is impossible.',
      },
      {
        title: 'Disconnected API Ecosystems',
        desc:
          'Inventory, CRM, headless CMS, and 3PL fulfillment systems operating in silos create operational nightmares as you scale.',
      },
    ],
  },

  howWeHelp: {
    title:
      'How <span class="text-accent">WebNirmit</span> Scales D2C Brands',
    description:
      'We engineer conversion-optimized, headless web applications that give your brand total creative control and sub-second performance.',

    items: [
      {
        title: 'Headless Commerce & Next.js Stores',
        desc:
          'Decouple your frontend from your backend. We build lightning-fast Next.js storefronts powered by Shopify Plus, Swell, or custom backends.',
        tags: [
          'Headless Shopify',
          'Next.js Commerce',
          'Vercel Deployment',
          'Custom Storefronts',
          'Core Web Vitals',
        ],
      },

      {
        title: 'Conversion Rate Optimization (CRO)',
        desc:
          'Data-driven UX/UI design focused entirely on removing friction, building trust, and driving users directly to a seamless checkout.',
        tags: [
          'Frictionless Checkout',
          'Mobile-First UX',
          'A/B Testing',
          'Cart Optimization',
          'High-Fidelity Figma',
        ],
      },

      {
        title: 'Custom Subscription & LTV Platforms',
        desc:
          'Build predictable, recurring revenue with custom subscription portals, membership tiers, and seamless Stripe/Recharge integrations.',
        tags: [
          'Recharge APIs',
          'Stripe Billing',
          'Customer Portals',
          'Loyalty Programs',
          'Recurring Revenue',
        ],
      },

      {
        title: 'AI-Powered Product Discovery',
        desc:
          'Integrate intelligent search algorithms and LLM-powered shopping assistants to personalize product recommendations in real-time.',
        tags: [
          'Algolia Search',
          'AI Recommendations',
          'Vector Search',
          'Chatbot Assistants',
          'Dynamic Pricing',
        ],
      },

      {
        title: 'Enterprise API Integrations',
        desc:
          'We unify your tech stack, creating seamless data pipelines between your storefront, ERP, CRM, and fulfillment networks.',
        tags: [
          'Payment Gateways',
          'Salesforce/HubSpot',
          'ERP Syncing',
          '3PL Logistics',
          'Headless CMS (Sanity)',
        ],
      },

      {
        title: 'Advanced E-Commerce Analytics',
        desc:
          'Implement robust server-side tracking and custom analytics dashboards to monitor user behavior without compromising site speed.',
        tags: [
          'Server-Side GTM',
          'PostHog Analytics',
          'Funnel Tracking',
          'Attribution',
          'Revenue Dashboards',
        ],
      },
    ],
  },

  whyChoose: {
    title:
      'Why Scaling D2C Brands <span class="text-primary">Choose WebNirmit</span>',

    items: [
      {
        title: 'Sub-Second Performance',
        desc:
          'Our Next.js architecture guarantees top-tier Lighthouse scores, drastically improving your SEO rankings and reducing bounce rates.',
      },
      {
        title: 'Conversion-First Engineering',
        desc:
          'We don’t just write code; we engineer user journeys designed specifically to increase your Average Order Value (AOV) and conversion rate.',
      },
      {
        title: 'True Headless Flexibility',
        desc:
          'Break free from rigid Shopify themes. Design exactly what your brand needs without compromising on backend security or inventory management.',
      },
      {
        title: 'Fixed-Price Agile Delivery',
        desc:
          'No scope creep or hourly billing surprises. We scope the project, lock the price, and deliver production-ready code in rapid sprints.',
      },
      {
        title: 'Direct Senior Developer Access',
        desc:
          'Work directly with the engineers building your platform. No account managers, no communication bottlenecks.',
      },
    ],
  },

  process: {
    title: 'Our <span class="text-accent">E-Commerce Development</span> Process',

    steps: [
      {
        num: '01',
        title: 'Technical Discovery & Architecture',
        desc:
          'We map your API ecosystem, define the tech stack, and lock down the project scope and fixed pricing.',
      },
      {
        num: '02',
        title: 'UX/UI & Conversion Strategy',
        desc:
          'We design high-fidelity, mobile-first Figma prototypes focused entirely on frictionless shopping and brand aesthetics.',
      },
      {
        num: '03',
        title: 'Headless Frontend Development',
        desc:
          'Our senior engineers build the custom Next.js frontend, ensuring sub-second load times and flawless responsive design.',
      },
      {
        num: '04',
        title: 'Backend & API Integration',
        desc:
          'We connect your headless frontend to Shopify, payment gateways, CMS, and third-party fulfillment APIs securely.',
      },
      {
        num: '05',
        title: 'QA, Load Testing & Launch',
        desc:
          'Rigorous automated testing for traffic spikes, followed by a zero-downtime deployment to enterprise cloud infrastructure.',
      },
    ],
  },

  idealFor: {
    title: 'Ideal For',

    items: [
      'Scaling D2C Brands ($1M+ ARR)',
      'Enterprise Retail Businesses',
      'High-Volume Subscription Box Brands',
      'Luxury Fashion & Apparel',
      'Health, Beauty & Wellness Brands',
      'Brands Outgrowing Basic Shopify Themes',
      'Multi-Region E-Commerce Stores',
      'B2B Wholesale Portals',
    ],
  },

  faq: {
    title: 'Frequently Asked <span class="text-primary">Questions</span>',

    items: [
      {
        q: 'What is the difference between Headless Commerce and traditional Shopify?',
        a: 'Traditional Shopify ties your frontend design directly to its backend, limiting creative control and speed. Headless commerce decouples them, allowing us to build a custom, ultra-fast Next.js frontend while still using Shopify securely for checkout and inventory.',
      },
      {
        q: 'How does a custom Next.js storefront improve our SEO and conversion rates?',
        a: 'Next.js enables Server-Side Rendering (SSR) and static generation, meaning your pages load almost instantly. Google rewards fast sites with higher search rankings, and users are significantly less likely to bounce, directly increasing your conversion rates.',
      },
      {
        q: 'Can you migrate our existing WooCommerce or Magento store to a modern stack?',
        a: 'Yes. We handle complex data migrations, safely transferring your product catalogs, customer data, and order history to modern, scalable platforms like Shopify Plus or custom PostgreSQL databases.',
      },
      {
        q: 'Do you integrate complex third-party tools and ERPs?',
        a: 'Absolutely. We specialize in custom API integrations, connecting your storefront with headless CMS (like Sanity or Contentful), ERPs (NetSuite), CRMs (Salesforce), and custom 3PL logistics networks.',
      },
      {
        q: 'How long does it take to build a custom D2C e-commerce platform?',
        a: 'While basic MVPs take 14 days, a fully custom headless e-commerce build typically ranges from 4 to 8 weeks, depending on the complexity of API integrations and product catalog size. We lock this timeline during discovery.',
      },
    ],
  },

  cta: {
    title:
      'Ready To Engineer Your <br /> <span class="text-primary">D2C Growth Engine?</span>',

    description:
      'Stop losing revenue to slow load times and rigid templates. Partner with WebNirmit to build a scalable, headless e-commerce experience that converts traffic into lifelong customers.',

    button: {
      text: "Book Your Technical Scoping Call",
      link: '/contact',
    },

    subtext:
      'Fixed-price contracts. Production-ready code. Senior engineers.',
  },

  footer:
    '© 2026 WebNirmit — Headless D2C & E-commerce Solutions. All rights reserved.',
};

// // data/industries/d2c.js

// export const d2cData = {
//   slug: 'd2c',

//   meta: {
//     title: 'D2C & E-commerce Solutions | WebNirmit',
//     description:
//       'Building high-converting D2C and eCommerce experiences that drive sales, customer retention, and sustainable growth.',
//   },

//   hero: {
//   title: {
//   highlight: 'D2C',
//   highlight2: 'E-commerce',
//   rest: 'Growth Engines',
// },

// subtitle:
//   'Helping ambitious brands turn traffic into customers and customers into loyal advocates.'
//   ,
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
//       src: 'https://www.pexels.com/download/video/7680111/',
//     },
//   },

//   challenges: {
//     title: 'Challenges <span class="text-primary">We Help Solve</span>',
//     description:
//       'Modern eCommerce brands face increasing pressure to acquire customers efficiently while delivering exceptional shopping experiences.',

//     items: [
//       {
//         title: 'Low Conversion Rates',
//         desc:
//           'Traffic is expensive. Poor user experience and friction in the buying journey can significantly reduce revenue.',
//       },
//       {
//         title: 'High Customer Acquisition Costs',
//         desc:
//           'Paid advertising costs continue to rise, making it critical to maximize conversion and retention.',
//       },
//       {
//         title: 'Poor Mobile Shopping Experience',
//         desc:
//           'Most customers shop on mobile devices, yet many stores still struggle with usability and performance.',
//       },
//       {
//         title: 'Cart Abandonment',
//         desc:
//           'Complex checkout processes and trust issues often cause customers to leave before completing purchases.',
//       },
//       {
//         title: 'Customer Retention Challenges',
//         desc:
//           'Acquiring customers is only the beginning. Sustainable growth depends on repeat purchases and brand loyalty.',
//       },
//       {
//         title: 'Disconnected Commerce Ecosystems',
//         desc:
//           'Inventory, CRM, marketing, payments, analytics, and fulfillment systems often operate in silos.',
//       },
//     ],
//   },

//   howWeHelp: {
//     title:
//       'How <span class="text-accent">WebNirmit</span> Helps D2C Brands Grow',

//     description:
//       'We combine strategy, design, and engineering to create eCommerce experiences that increase revenue and strengthen customer relationships.',

//     items: [
//       {
//         title: 'Custom E-commerce Development',
//         desc:
//           'Build scalable eCommerce platforms designed for performance, growth, and exceptional customer experiences.',
//         tags: [
//           'Online Stores',
//           'Product Catalogs',
//           'Customer Accounts',
//           'Checkout Systems',
//           'Commerce Platforms',
//         ],
//       },

//       {
//         title: 'Conversion-Focused UX Design',
//         desc:
//           'Optimize every step of the customer journey to increase engagement, trust, and purchases.',
//         tags: [
//           'User Research',
//           'Checkout Optimization',
//           'Mobile Experience',
//           'Conversion Funnels',
//           'Customer Journeys',
//         ],
//       },

//       {
//         title: 'Subscription & Membership Platforms',
//         desc:
//           'Create recurring revenue models with subscription management and membership experiences.',
//         tags: [
//           'Subscriptions',
//           'Memberships',
//           'Recurring Billing',
//           'Customer Loyalty',
//           'Retention Systems',
//         ],
//       },

//       {
//         title: 'AI-Powered Commerce Solutions',
//         desc:
//           'Leverage AI to personalize shopping experiences and improve business performance.',
//         tags: [
//           'Product Recommendations',
//           'Customer Segmentation',
//           'AI Search',
//           'Shopping Assistants',
//           'Predictive Analytics',
//         ],
//       },

//       {
//         title: 'Commerce Integrations',
//         desc:
//           'Connect essential systems into a unified commerce ecosystem.',
//         tags: [
//           'Payment Gateways',
//           'CRM Platforms',
//           'ERP Systems',
//           'Shipping Providers',
//           'Marketing Tools',
//         ],
//       },

//       {
//         title: 'Analytics & Growth Optimization',
//         desc:
//           'Gain actionable insights into customer behavior and continuously improve conversion performance.',
//         tags: [
//           'Customer Analytics',
//           'Funnel Tracking',
//           'A/B Testing',
//           'Revenue Insights',
//           'Growth Reporting',
//         ],
//       },
//     ],
//   },

//   whyChoose: {
//     title:
//       'Why D2C Brands <span class="text-primary">Choose WebNirmit</span>',

//     items: [
//       {
//         title: 'Growth-Focused Execution',
//         desc:
//           'We focus on business outcomes such as conversions, retention, customer lifetime value, and revenue growth.',
//       },

//       {
//         title: 'Conversion-Driven Design',
//         desc:
//           'Every experience is designed to reduce friction and increase customer confidence.',
//       },

//       {
//         title: 'Built For Scale',
//         desc:
//           'Our platforms support growing product catalogs, increasing traffic, and evolving customer demands.',
//       },

//       {
//         title: 'Modern Commerce Architecture',
//         desc:
//           'We build flexible and future-ready systems that can adapt as your business grows.',
//       },

//       {
//         title: 'Long-Term Partnership',
//         desc:
//           'We continue supporting brands through optimization, experimentation, and growth initiatives.',
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
//           'We understand your brand, customers, business goals, and growth challenges.',
//       },
//       {
//         num: '02',
//         title: 'Strategy',
//         desc:
//           'We define conversion opportunities, customer journeys, and technical requirements.',
//       },
//       {
//         num: '03',
//         title: 'Design',
//         desc:
//           'We create engaging shopping experiences optimized for trust and conversions.',
//       },
//       {
//         num: '04',
//         title: 'Development',
//         desc:
//           'Our team builds secure, scalable, and high-performance commerce solutions.',
//       },
//       {
//         num: '05',
//         title: 'Launch & Optimize',
//         desc:
//           'We continuously monitor performance, improve conversion rates, and support long-term growth.',
//       },
//     ],
//   },

//   idealFor: {
//     title: 'Ideal For',

//     items: [
//       'D2C Brands',
//       'E-commerce Startups',
//       'Retail Businesses',
//       'Consumer Product Companies',
//       'Subscription Businesses',
//       'Fashion Brands',
//       'Beauty & Wellness Brands',
//       'Multi-Brand Marketplaces',
//     ],
//   },

//   faq: {
//     title: 'Frequently Asked <span class="text-primary">Questions</span>',

//     items: [
//       {
//         q: 'Can you build a custom eCommerce platform?',
//         a: 'Yes. We develop scalable custom commerce platforms tailored to your business model and growth goals.',
//       },
//       {
//         q: 'Do you work with Shopify and headless commerce?',
//         a: 'Yes. We build both traditional and headless commerce experiences depending on your requirements.',
//       },
//       {
//         q: 'Can you improve our conversion rates?',
//         a: 'Absolutely. We optimize customer journeys, checkout experiences, and mobile usability to improve conversions.',
//       },
//       {
//         q: 'Do you integrate payment and shipping providers?',
//         a: 'Yes. We integrate payment gateways, shipping providers, inventory systems, and third-party commerce tools.',
//       },
//       {
//         q: 'Do you provide ongoing support?',
//         a: 'Yes. We offer maintenance, optimization, analytics support, and continuous feature development.',
//       },
//     ],
//   },

//   cta: {
//     title:
//       'Ready To Scale Your <br /> <span class="text-primary">D2C Brand?</span>',

//     description:
//       'Whether you are launching a new eCommerce business, optimizing conversions, building a subscription platform, or scaling an established D2C brand, WebNirmit helps create digital experiences that drive measurable growth.',

//     button: {
//       text: "Let's Discuss Your Growth Goals",
//       link: '/contact',
//     },

//     subtext:
//       'Build commerce experiences customers love to buy from.',
//   },

//   footer:
//     '© 2025 WebNirmit — D2C & E-commerce Solutions. All rights reserved.',
// };
