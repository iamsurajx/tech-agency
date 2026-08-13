'use client'
import React from 'react';
import { Code2, Smartphone, Sparkles, Palette, Rocket, Wrench, Brain } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/SectionHeader"

// ============ DATA + CODE EK JAGAH ============
type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  outcome: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Next.js Website Development",
    description: "High-performance B2B marketing sites built with Next.js. We guarantee 95+ Core Web Vitals to maximize your technical SEO and organic reach.",
    outcome: "Convert enterprise traffic, not just impress them",
  },
  {
    icon: Rocket,
    title: "Custom Web App Development",
    description: "Complex B2B dashboards, internal operational tools, and secure client portals. Architected with scalable cloud infrastructure from day one.",
    outcome: "Production-ready enterprise software, not a prototype",
  },
  {
    icon: Sparkles,
    title: "SaaS MVP Development",
    description: "End-to-end SaaS application builds complete with secure Auth, Stripe billing, and user analytics. We engineer platforms ready for Series A scaling.",
    outcome: "Ship your revenue-ready v1 in just 14 days",
  },
  {
    icon: Smartphone,
    title: "React Native Mobile Apps",
    description: "Cross-platform mobile application development for iOS and Android. Experience native performance powered by a single, easily maintainable codebase.",
    outcome: "Launch on the App Store & Google Play simultaneously",
  },
  {
    icon: Palette,
    title: "SaaS UI/UX Design",
    description: "High-fidelity Figma design systems inspired by industry leaders like Linear and Stripe. We craft conversion-focused, premium user interfaces.",
    outcome: "Premium UX that commands higher subscription pricing",
  },
  {
    icon: Brain,
    title: "AI Software Integration",
    description: "Embed custom LLMs (OpenAI/Claude), autonomous agents, and RAG pipelines directly into your existing product infrastructure and workflows.",
    outcome: "Proprietary AI features your users will actually pay for",
  },
  {
    icon: Wrench,
    title: "App Maintenance & Scaling",
    description: "Continuous code improvements, server monitoring, and monthly feature sprints. We act as your dedicated, fractional engineering team.",
    outcome: "Scale continuously with zero technical debt",
  },
];

export function Services() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": { "@type": "Organization", "name": "WebNirmit" }
      }
    })),
  };

  return (
    <section id="services" className="bg-[#F3F8FF] py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="mx-auto max-w-300 px-4 md:px-6">
        <SectionHeader
          eyebrow="Services"
          title="End-to-End Software Development Services"
          description="From idea to App Store. One team, fixed price, no handoffs."
          centered
        />
        <div className="gsap-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                className="group relative overflow-hidden rounded-[24px] border border-[#7E30E1]/10 bg-white p-"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-full rounded-[24px] bg-white p-7">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F8FF] text-[#7E30E1] transition-colors group-hover:bg-[#7E30E1] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-[17px] font-semibold text-[#49108B]">{service.title}</h3>
                  <p className="mb-3 text-[14px] leading-relaxed text-[#49108B]/65">{service.description}</p>
                  <p className="text-[13px] font-medium text-[#7E30E1]">{service.outcome}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}