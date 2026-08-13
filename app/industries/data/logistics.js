// data/industries/logistics.js

export const logisticsData = {
  slug: 'logistics',

  meta: {
    // SEO Tweak: Targeted "Custom Logistics Software" & "Development Agency"
    title: 'Custom Logistics & Supply Chain Software Development Agency | WebNirmit',
    description:
      'Hire a senior engineering team to build scalable logistics software, fleet management dashboards, and last-mile delivery apps. Launch your MVP in 14 days.',
  },

  hero: {
    title: {
      highlight: 'Custom Logistics',
      highlight2: 'Software',
      rest: 'Development Agency',
    },

    subtitle:
      'We engineer high-performance Transportation Management Systems (TMS), fleet tracking dashboards, and scalable supply chain applications. Ship your custom logistics software in just 14 days.',

    cta: {
      primary: {
        text: 'Discuss Your Logistics App →',
        link: '/contact',
      },
      secondary: {
        text: 'View Tech Stack',
        link: '#process',
      },
    },

    video: {
      src: 'https://www.pexels.com/download/video/4292901/',
    },
  },

  challenges: {
    title: 'Supply Chain Challenges <span class="text-primary">We Solve</span>',

    description:
      'Modern logistics operations cannot rely on spreadsheets and outdated legacy software. Founders and operations directors struggle with fragmented data, inefficient routing, and zero real-time visibility.',

    items: [
      {
        title: 'Zero Real-Time Visibility',
        desc:
          'Blind spots in the supply chain frustrate customers and delay operations. You need real-time GPS tracking and automated milestone updates.',
      },
      {
        title: 'Spreadsheet-Based Operations',
        desc:
          'Relying on manual data entry and Excel sheets for dispatching leads to human error, massive overhead, and bottlenecks as your fleet scales.',
      },
      {
        title: 'Inefficient Last-Mile Routing',
        desc:
          'Without dynamic algorithmic route optimization, your fleet wastes fuel and man-hours, destroying profit margins in the most expensive leg of delivery.',
      },
      {
        title: 'Fragmented Telematics & IoT Data',
        desc:
          'Hardware sensors (ELDs, GPS trackers, temperature monitors) generate massive data, but without a centralized dashboard, the data is useless.',
      },
      {
        title: 'Poor Third-Party System Integration',
        desc:
          'Your Warehouse Management System (WMS), ERP, and accounting software operate in silos. You need custom EDI and API bridges to unify your data.',
      },
      {
        title: 'Driver Churn & Poor App UX',
        desc:
          'Clunky, battery-draining mobile apps frustrate drivers. If the driver app isn’t frictionless, adoption drops and operational errors skyrocket.',
      },
    ],
  },

  howWeHelp: {
    title:
      'How <span class="text-accent">WebNirmit</span> Engineers Logistics Scale',

    description:
      'We build scalable, cloud-native logistics platforms using Next.js and React Native, replacing legacy software with high-performance operational engines.',

    items: [
      {
        title: 'Custom TMS & Dispatch Dashboards',
        desc:
          'We engineer custom Transportation Management Systems (TMS) that automate dispatching, load matching, and carrier management from a single pane of glass.',

        tags: [
          'Next.js Dashboards',
          'Automated Dispatch',
          'Load Board APIs',
          'Carrier Portals',
          'Freight Matching',
        ],
      },

      {
        title: 'Real-Time Fleet Management & IoT',
        desc:
          'Ingest and visualize real-time telematics data. We build platforms that track vehicle health, driver behavior, and HOS compliance instantly.',

        tags: [
          'Telematics Integration',
          'ELD Compliance',
          'Asset Tracking',
          'Geofencing',
          'IoT Sensor Dashboards',
        ],
      },

      {
        title: 'Driver & Last-Mile Delivery Apps',
        desc:
          'We develop intuitive, offline-capable React Native mobile apps for drivers featuring proof-of-delivery (ePOD), barcode scanning, and turn-by-turn routing.',

        tags: [
          'React Native Mobile',
          'Proof of Delivery (ePOD)',
          'Barcode / QR Scanning',
          'Offline Mode',
          'In-App Navigation',
        ],
      },

      {
        title: 'Algorithmic Route Optimization',
        desc:
          'Integrate mapping APIs (Google Maps, Mapbox) and custom algorithms to calculate the most cost-effective routes based on traffic, weather, and delivery windows.',

        tags: [
          'Mapbox / Google Maps API',
          'Dynamic Routing',
          'Multi-Stop Optimization',
          'ETA Calculations',
          'Fuel Management',
        ],
      },

      {
        title: 'Enterprise ERP & WMS Integrations',
        desc:
          'Break down data silos. We architect custom API and EDI integrations to seamlessly connect your custom software with NetSuite, SAP, and legacy WMS platforms.',

        tags: [
          'NetSuite / SAP APIs',
          'EDI Integrations',
          'Inventory Syncing',
          'Order Management',
          'Accounting Sync',
        ],
      },

      {
        title: 'Customer Visibility Portals',
        desc:
          'Reduce support calls by 80%. We build secure, white-labeled web portals where your clients can book shipments, view invoices, and track freight in real-time.',

        tags: [
          'White-Label Portals',
          'Automated Quoting',
          'Real-time Tracking Links',
          'Automated Invoicing',
          'Role-Based Access (RBAC)',
        ],
      },
    ],
  },

  whyChoose: {
    title:
      'Why Logistics Directors <span class="text-primary">Choose WebNirmit</span>',

    items: [
      {
        title: '14-Day Production-Ready MVPs',
        desc:
          'Supply chains move fast; so do we. We define the technical scope, lock the fixed price, and deliver functional logistics software in exactly two weeks.',
      },

      {
        title: 'Heavy-Data Architecture',
        desc:
          'Logistics generates millions of data points daily. We build on highly scalable PostgreSQL/Supabase databases ensuring your system never lags during peak operations.',
      },

      {
        title: 'Cross-Platform Mobile Expertise',
        desc:
          'We build driver apps using React Native, meaning you get high-performance iOS and Android applications from a single, easily maintainable codebase.',
      },

      {
        title: 'Deep API Integration Knowledge',
        desc:
          'We don’t just build UIs; we excel at the backend plumbing required to make mapping APIs, telematics hardware, and legacy ERPs talk to each other securely.',
      },

      {
        title: '100% IP & Codebase Ownership',
        desc:
          'Stop renting expensive SaaS that doesn’t quite fit your workflows. We build custom software on your cloud infrastructure. You own the code forever.',
      },
    ],
  },

  process: {
    title: 'Our <span class="text-accent">Agile Logistics</span> Process',

    steps: [
      {
        num: '01',
        title: 'Workflow Scoping & Architecture',
        desc:
          'We map your operational bottlenecks, select the right mapping and telematics APIs, and lock down a fixed-price contract.',
      },
      {
        num: '02',
        title: 'UX/UI & Dispatch Design',
        desc:
          'We design high-fidelity Figma prototypes focusing on high-contrast, data-dense dashboards for dispatchers and dead-simple UIs for drivers.',
      },
      {
        num: '03',
        title: 'Full-Stack Sprint Development',
        desc:
          'Senior engineers build your Next.js web portal and React Native mobile app concurrently, giving you daily staging links to test progress.',
      },
      {
        num: '04',
        title: 'Load Testing & API QA',
        desc:
          'Rigorous automated testing to ensure GPS tracking updates instantly, routes calculate correctly, and the database handles high concurrency.',
      },
      {
        num: '05',
        title: 'Deployment & Fleet Rollout',
        desc:
          'We deploy to scalable cloud infrastructure (AWS/Vercel), hand over the GitHub repository, and provide 30 days of active bug support.',
      },
    ],
  },

  idealFor: {
    title: 'Who We Build For',

    items: [
      'Freight Brokerages & 3PLs',
      'Last-Mile Delivery Startups',
      'Trucking & Fleet Operators',
      'Warehousing & Fulfillment Centers',
      'Supply Chain Visibility Platforms',
      'Moving & Relocation Companies',
      'Courier & On-Demand Delivery',
      'Cold Chain Logistics Providers',
    ],
  },

  faq: {
    title: 'Frequently Asked <span class="text-primary">Questions</span>',

    items: [
      {
        q: 'Can you integrate our custom software with our ELD and telematics hardware?',
        a: 'Yes. We frequently integrate with leading telematics and ELD providers (like Samsara, KeepTruckin/Motive, and Geotab) via their APIs to pull real-time GPS, HOS, and vehicle diagnostic data directly into your custom dashboard.',
      },
      {
        q: 'Do you build native mobile apps for our drivers?',
        a: 'Yes. We build driver-facing applications using React Native. This allows us to deliver high-performance apps for both iOS and Android simultaneously, complete with offline capabilities, background location tracking, and camera access for Proof of Delivery (ePOD).',
      },
      {
        q: 'How do you handle complex route optimization?',
        a: 'We leverage enterprise mapping APIs like Google Maps, Mapbox, or specialized routing engines. We architect the backend to calculate the most efficient multi-stop routes considering traffic, time windows, and vehicle capacity.',
      },
      {
        q: 'Can you connect our custom app to legacy EDI systems?',
        a: 'Absolutely. Many supply chains still rely on Electronic Data Interchange (EDI). We build custom middleware and API bridges that translate modern JSON/REST data into standard EDI formats (like 204s and 214s) to communicate with your enterprise partners.',
      },
      {
        q: 'How can you possibly build a logistics MVP in just 14 days?',
        a: 'We use proprietary Next.js and Supabase starter kits equipped with pre-built auth, role-based access, and database structures. This allows our senior engineers to bypass repetitive setup and focus entirely on building your unique dispatching and tracking workflows.',
      },
    ],
  },

  cta: {
    title:
      'Ready To Engineer Your <br /> <span class="text-primary">Logistics Operations?</span>',

    description:
      'Stop running a modern supply chain on spreadsheets and off-the-shelf software. Partner with WebNirmit to build a custom, highly scalable logistics platform that drives efficiency and profit margins.',

    button: {
      text: "Book Your Technical Scoping Call",
      link: '/contact',
    },

    subtext:
      'Fixed-price contracts. Production-ready code. Delivered in 14 days.',
  },

  footer:
    '© 2026 WebNirmit — Custom Logistics Software Development. All rights reserved.',
};

// // data/industries/logistics.js

// export const logisticsData = {
//   slug: 'logistics',

//   meta: {
//     title: 'Logistics & Supply Chain Solutions | WebNirmit',
//     description:
//       'Building modern logistics and supply chain platforms that improve visibility, efficiency, and operational scalability.',
//   },

//   hero: {
//     title: {
//       highlight: 'Logistics',
//       highlight2: 'Supply Chain',
//       rest: 'Built for Efficiency',
//     },

//     subtitle:
//       'We help logistics companies, transportation providers, and supply chain businesses build digital platforms that streamline operations, improve visibility, and drive growth.',

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
//       src: 'https://www.pexels.com/download/video/4292901/',
//     },
//   },

//   challenges: {
//     title: 'Challenges <span class="text-primary">We Help Solve</span>',

//     description:
//       'Modern logistics operations require real-time visibility, operational efficiency, and seamless coordination across complex supply chains.',

//     items: [
//       {
//         title: 'Limited Shipment Visibility',
//         desc:
//           'Lack of real-time tracking creates uncertainty for both businesses and customers.',
//       },
//       {
//         title: 'Manual Operations',
//         desc:
//           'Paper-based processes and repetitive workflows reduce efficiency and increase operational costs.',
//       },
//       {
//         title: 'Fleet Management Complexity',
//         desc:
//           'Managing vehicles, drivers, schedules, and routes becomes increasingly difficult as operations scale.',
//       },
//       {
//         title: 'Disconnected Systems',
//         desc:
//           'Transportation, inventory, CRM, and reporting systems often operate in silos.',
//       },
//       {
//         title: 'Inefficient Route Planning',
//         desc:
//           'Poor route optimization can increase fuel costs, delays, and delivery inefficiencies.',
//       },
//       {
//         title: 'Scaling Operations',
//         desc:
//           'Growing logistics businesses require platforms capable of handling increasing shipments and operational complexity.',
//       },
//     ],
//   },

//   howWeHelp: {
//     title:
//       'How <span class="text-accent">WebNirmit</span> Helps Logistics Companies Grow',

//     description:
//       'We build logistics technology solutions that improve operational efficiency, visibility, and customer experience.',

//     items: [
//       {
//         title: 'Logistics Platform Development',
//         desc:
//           'Build scalable logistics platforms designed to support modern transportation and supply chain operations.',

//         tags: [
//           'Operations Dashboards',
//           'Customer Portals',
//           'Admin Systems',
//           'Logistics Platforms',
//           'Supply Chain Solutions',
//         ],
//       },

//       {
//         title: 'Fleet Management Systems',
//         desc:
//           'Monitor vehicles, drivers, maintenance schedules, and operational performance from a centralized platform.',

//         tags: [
//           'Fleet Tracking',
//           'Driver Management',
//           'Vehicle Monitoring',
//           'Maintenance Tracking',
//           'Performance Insights',
//         ],
//       },

//       {
//         title: 'Shipment Tracking Solutions',
//         desc:
//           'Provide customers and teams with real-time shipment visibility and delivery updates.',

//         tags: [
//           'Real-Time Tracking',
//           'Delivery Updates',
//           'Notifications',
//           'Tracking Dashboards',
//           'Status Monitoring',
//         ],
//       },

//       {
//         title: 'Supply Chain Automation',
//         desc:
//           'Automate repetitive workflows and improve operational efficiency across the supply chain.',

//         tags: [
//           'Workflow Automation',
//           'Order Processing',
//           'Inventory Updates',
//           'Operational Efficiency',
//           'Reporting',
//         ],
//       },

//       {
//         title: 'AI-Powered Logistics Solutions',
//         desc:
//           'Leverage AI to optimize operations, predict demand, and improve delivery performance.',

//         tags: [
//           'Route Optimization',
//           'Demand Forecasting',
//           'Predictive Analytics',
//           'Operational Insights',
//           'Automation',
//         ],
//       },

//       {
//         title: 'System Integrations',
//         desc:
//           'Connect logistics operations with essential business systems and third-party services.',

//         tags: [
//           'ERP Integrations',
//           'CRM Platforms',
//           'Inventory Systems',
//           'Analytics Tools',
//           'Third-Party APIs',
//         ],
//       },
//     ],
//   },

//   whyChoose: {
//     title:
//       'Why Logistics Companies <span class="text-primary">Choose WebNirmit</span>',

//     items: [
//       {
//         title: 'Operational Excellence',
//         desc:
//           'We focus on improving efficiency, reducing bottlenecks, and streamlining logistics workflows.',
//       },

//       {
//         title: 'Built For Scale',
//         desc:
//           'Our platforms support increasing shipments, users, and operational demands.',
//       },

//       {
//         title: 'Real-Time Visibility',
//         desc:
//           'We create systems that provide actionable insights across logistics operations.',
//       },

//       {
//         title: 'Automation-Driven Growth',
//         desc:
//           'Automation reduces manual work and enables teams to focus on high-value activities.',
//       },

//       {
//         title: 'Long-Term Partnership',
//         desc:
//           'We continue supporting logistics businesses through optimization and future growth initiatives.',
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
//           'We analyze your logistics workflows, operational challenges, and business objectives.',
//       },
//       {
//         num: '02',
//         title: 'Strategy',
//         desc:
//           'We define system architecture, integrations, and operational priorities.',
//       },
//       {
//         num: '03',
//         title: 'Design',
//         desc:
//           'We create intuitive interfaces for operations teams, drivers, and customers.',
//       },
//       {
//         num: '04',
//         title: 'Development',
//         desc:
//           'Our engineers build secure, scalable, and high-performance logistics solutions.',
//       },
//       {
//         num: '05',
//         title: 'Launch & Optimize',
//         desc:
//           'We monitor performance, improve workflows, and support long-term operational growth.',
//       },
//     ],
//   },

//   idealFor: {
//     title: 'Ideal For',

//     items: [
//       'Logistics Companies',
//       'Transportation Providers',
//       'Supply Chain Businesses',
//       'Freight Companies',
//       'Fleet Operators',
//       'Warehousing Businesses',
//       'Last-Mile Delivery Platforms',
//       'Distribution Networks',
//     ],
//   },

//   faq: {
//     title: 'Frequently Asked <span class="text-primary">Questions</span>',

//     items: [
//       {
//         q: 'Can you build custom logistics platforms?',
//         a: 'Yes. We design and develop logistics systems tailored to your operational requirements.',
//       },
//       {
//         q: 'Do you develop fleet management solutions?',
//         a: 'Yes. We build platforms for fleet tracking, driver management, and operational monitoring.',
//       },
//       {
//         q: 'Can you integrate tracking and ERP systems?',
//         a: 'Absolutely. We integrate logistics platforms with ERP systems, CRMs, inventory tools, and third-party services.',
//       },
//       {
//         q: 'Do you build customer shipment tracking portals?',
//         a: 'Yes. We create real-time shipment tracking experiences for customers and operations teams.',
//       },
//       {
//         q: 'Do you provide ongoing support?',
//         a: 'Yes. We offer maintenance, optimization, and long-term platform support.',
//       },
//     ],
//   },

//   cta: {
//     title:
//       'Ready To Modernize Your <br /> <span class="text-primary">Logistics Operations?</span>',

//     description:
//       'Whether you are optimizing fleet operations, improving shipment visibility, or building the next generation of logistics technology, WebNirmit helps create solutions that scale with your business.',

//     button: {
//       text: "Let's Discuss Your Logistics Platform",
//       link: '/contact',
//     },

//     subtext:
//       'Build logistics systems that move as fast as your business.',
//   },

//   footer:
//     '© 2025 WebNirmit — Logistics & Supply Chain Solutions. All rights reserved.',
// };

