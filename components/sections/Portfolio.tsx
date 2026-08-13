'use client'
import React from 'react';
import { SectionHeader } from "@/components/shared/SectionHeader"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  result: string;
  tech: string[];
  description: string;
  link: string;
  featured: boolean;
}

const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "B2B SaaS Analytics Dashboard",
    category: "SaaS Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    result: "+40% user activation",
    tech: ["Next.js", "Supabase", "AI"],
    description: "Real-time analytics platform for early-stage SaaS startups. Built and deployed in 12 days.",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Headless D2C Beauty Store",
    category: "E-commerce Development",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format",
    result: "3.2x conversion rate",
    tech: ["Next.js", "Shopify", "Stripe"],
    description: "Custom high-performance storefront for a D2C brand. Mobile-first UI.",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Writing Assistant",
    category: "AI Software Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
    result: "10k users in 30 days",
    tech: ["Next.js", "OpenAI", "Vercel AI"],
    description: "Generative AI tool for marketing teams. MVP launched in exactly 14 days.",
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Fintech Investment Mobile App",
    category: "Mobile App Development",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format",
    result: "4.8 App Store rating",
    tech: ["React Native", "Node.js"],
    description: "Secure investment tracking cross-platform app for the Indian market.",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "B2B SME Marketplace",
    category: "Custom Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format",
    result: "₹2Cr GMV first quarter",
    tech: ["Next.js", "PostgreSQL"],
    description: "Scalable two-sided vendor marketplace handling real-time transactions.",
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "HIPAA HealthTech Platform",
    category: "Healthcare SaaS",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format",
    result: "HIPAA compliant in 14 days",
    tech: ["Next.js", "Python", "AI"],
    description: "Secure patient management system featuring an automated AI scribe.",
    link: "#",
    featured: false,
  },
];

export function Portfolio() {
  const featured = portfolio.filter((p) => p.featured)

  return (
    <section id="portfolio" className="bg-[#F5F5F7] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">

        {/* CENTERED HEADER */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <SectionHeader
            eyebrow="Work"
            title="Featured MVP Case Studies"
            description="Real SaaS products, real revenue results. All shipped in under 14 days."
            centered={true}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }} className="group relative overflow-hidden rounded-[24px] border border-[#7E30E1]/10 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3F8FF]">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#49108B]/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text- font-medium text-[#49108B] backdrop-blur">{project.result}</div>
              </div>
              <div className="p-6">
                <h4 className="mb-1 text- font-medium uppercase tracking-wider text-[#7E30E1]">{project.category}</h4>
                <h3 className="mb-2 text- font-semibold text-[#49108B]">{project.title}</h3>
                <p className="mb-4 text- leading-relaxed text-[#49108B]/65">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => <span key={t} className="rounded-md bg-[#F5F5F7] px-2 py-1 text- font-medium text-[#49108B]/70">{t}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/portfolio" className="inline-flex items-center gap-1.5 rounded-full bg-[#49108B] px-6 py-3 text- font-medium text-white">
            See All Works <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}