'use client'
import React from 'react';
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

type CaseStudy = {
  id: number;
  client: string;
  slug: string;
  seoCategory: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  imageAlt: string;
  testimonial: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    client: "DataFlow",
    slug: "b2b-saas-mvp-development-dataflow",
    seoCategory: "SaaS MVP Development",
    title: "B2B SaaS MVP Development: From Idea to $500k Pre-Seed in 6 Weeks",
    challenge: "A SaaS founder needed a scalable analytics MVP to pitch investors, but traditional software agencies quoted 3-6 months with unpredictable hourly billing.",
    solution: "Engineered a production-ready Next.js web application with real-time analytics, Stripe billing integration, and AI-driven insights in just 11 days.",
    results: ["11 days to MVP launch","$500k pre-seed raised","40% user activation rate","Zero downtime enterprise launch"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format",
    imageAlt: "Next.js B2B SaaS analytics dashboard showing real-time user data",
    testimonial: "WebNirmit shipped our SaaS MVP in 11 days. The technical architecture was flawless, helping us raise $500k the very next month.",
  },
  {
    id: 2,
    client: "GlowCo",
    slug: "headless-commerce-nextjs-shopify-glowco",
    seoCategory: "Headless E-Commerce",
    title: "Headless Commerce Development: 3.2x Conversion Boost for D2C Brand",
    challenge: "A scaling D2C brand's monolithic Shopify theme was sluggish and hurting sales. They needed a high-performance, custom storefront to elevate their brand.",
    solution: "Developed a custom Next.js headless e-commerce frontend powered by a Shopify backend, delivering sub-second load times and a premium mobile UX.",
    results: ["3.2x conversion rate increase","0.8s core web vitals load time","68% boost in mobile revenue","Built and deployed in 14 days"],
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&auto=format",
    imageAlt: "Mobile-optimized headless Shopify storefront built with Next.js",
    testimonial: "The fixed-price contract meant no surprises. The speed of our new headless Next.js store is unbelievable. Worth every rupee.",
  },
  {
    id: 3,
    client: "MediTrack",
    slug: "healthcare-app-development-hipaa-compliant",
    seoCategory: "Healthcare Tech",
    title: "Healthcare App Development: HIPAA-Compliant Patient Portal in 3 Weeks",
    challenge: "A healthcare startup required a highly secure patient dashboard. Regulatory compliance and data security complexities were causing massive launch delays.",
    solution: "Built a secure medical web app using Next.js Auth, encrypted database storage, and automated audit logs. Passed third-party security audits on the first try.",
    results: ["21 days to production launch","100% HIPAA compliant software","5k initial patients onboarded","99.99% system uptime"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format",
    imageAlt: "Secure HIPAA-compliant healthcare patient portal interface",
    testimonial: "Other dev agencies said 3 months minimum. WebNirmit delivered a fully compliant healthcare MVP in 3 weeks without cutting corners.",
  },
  {
    id: 4,
    client: "EcoCart",
    slug: "ai-automation-software-ecommerce-operations",
    seoCategory: "AI Integration",
    title: "AI Automation Software: Saving $200k/Year on E-commerce Operations",
    challenge: "Manual order processing and customer support required 4 full-time staff, making scaling impossible and drastically reducing profit margins.",
    solution: "Deployed a custom AI software agent that autonomously categorizes complex orders, processes routine refunds, and predicts inventory requirements.",
    results: ["$200k annual operational savings","90% reduction in manual tasks","2-week AI integration timeline","Complete ROI in exactly 3 months"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format",
    imageAlt: "Custom AI agent automation dashboard for e-commerce order management",
    testimonial: "The AI automation paid for itself in 3 months. We should have hired an AI product studio years ago.",
  },
  {
    id: 5,
    client: "LearnFast",
    slug: "edtech-platform-development-user-growth",
    seoCategory: "EdTech Platform",
    title: "EdTech Web App Development: 5x User Growth via Mobile Optimization",
    challenge: "Slow server response times and a clunky user interface were causing a 60% bounce rate for mobile users on an established learning platform.",
    solution: "Executed a complete Next.js replatforming strategy, introducing offline PWA support, edge caching, and gamified user learning paths.",
    results: ["5x user base growth post-launch","32% improvement in user retention","45ms time-to-interactive speed","Scaled to 40k daily active users"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format",
    imageAlt: "Mobile-first EdTech learning application with gamified UI",
    testimonial: "Students actually enjoy using our platform now. This web app modernization was a game-changer for our business model.",
  },
  {
    id: 6,
    client: "FinDash",
    slug: "enterprise-fintech-mvp-soc2-compliant",
    seoCategory: "FinTech MVP",
    title: "Enterprise FinTech MVP: Reaching $2.1M ARR in 8 Months",
    challenge: "A promising FinTech tool was losing lucrative enterprise B2B deals due to a lack of enterprise-grade security features and slow data rendering.",
    solution: "Architected a scalable Next.js enterprise application featuring SAML SSO integration, real-time financial data syncing, and strict SOC2 compliance.",
    results: ["$2.1M Annual Recurring Revenue (ARR)","Closed 15 new enterprise clients","Fully SOC2 compliant architecture","Live deployment in just 5 weeks"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format",
    imageAlt: "Enterprise financial dashboard showing real-time revenue analytics",
    testimonial: "WebNirmit understood enterprise security protocols from day one. Finally, an MVP dev agency that gets B2B SaaS requirements.",
  },
  {
    id: 7,
    client: "PetMate",
    slug: "custom-booking-software-local-business",
    seoCategory: "Custom Software",
    title: "Custom Booking Software: Capturing $50k/Month in Lost Revenue",
    challenge: "A busy pet grooming franchise was losing 30% of potential clients to unanswered phone calls. They desperately needed an automated online booking system.",
    solution: "Engineered a full-stack booking web application with bi-directional calendar sync, automated SMS reminders, and integrated Stripe payment processing.",
    results: ["7 days from idea to live launch","$50k in new monthly digital bookings","85% reduction in missed appointments","4.9 star customer satisfaction rating"],
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&auto=format",
    imageAlt: "Custom online booking web application on a smartphone",
    testimonial: "We finally stopped losing customers to busy signals. Hiring this agency was the best technical investment we made this year.",
  },
  {
    id: 8,
    client: "BuildFlow",
    slug: "fixed-price-mvp-agency-construction-saas",
    seoCategory: "B2B Software",
    title: "Fixed-Price MVP Agency: Slashing Development Costs by 70%",
    challenge: "A construction tech startup burned $80k on unreliable freelance developers, suffering from severe scope creep, delayed timelines, and broken code.",
    solution: "Took over the project under a strict fixed-price contract, delivering a complete MVP featuring robust project tracking, dynamic estimates, and a secure client portal.",
    results: ["$80k saved compared to original scope","Delivered flawlessly in 6 weeks","120 contractors successfully onboarded","Zero scope creep or hidden fees"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format",
    imageAlt: "Construction project management SaaS dashboard on a laptop",
    testimonial: "Fixed price, clear technical deliverables, and actually on time. WebNirmit are absolute miracle workers for non-technical founders.",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-[#F3F8FF] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mb-12 md:mb-16">
          <span className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#E26EE5]" />
            <span className="text- font-medium uppercase tracking-wider text-[#7E30E1]">Case Studies</span>
          </span>
          <h2 className="max-w-[1200px] text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[#49108B]">
            How founders ship faster with us
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study, i) => (
            <motion.div key={study.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group overflow-hidden rounded-[24px] border border-[#7E30E1]/10 bg-white">
              <div className="relative aspect-[16/9] overflow-hidden bg-[#49108B]/5">
                <Image src={study.image} alt={study.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
              <div className="p-7 md:p-8">
                <div className="mb-2 text- font-medium text-[#7E30E1]">{study.client}</div>
                <h3 className="mb-3 text- font-semibold leading-snug text-[#49108B]">{study.title}</h3>
                <p className="mb-6 text- leading-relaxed text-[#49108B]/70">{study.challenge}</p>
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {study.results.map(r => (
                    <div key={r} className="rounded-[24px] bg-[#F3F8FF] px-3 py-2.5 text- font-medium text-[#49108B]">{r}</div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-[#7E30E1]/10 pt-5">
                  <p className="text- italic text-[#49108B]/60">"{study.testimonial}"</p>
                  <ArrowRight className="h-4 w-4 text-[#7E30E1] transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}