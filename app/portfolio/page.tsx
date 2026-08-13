'use client';

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============ DATA MERGED HERE ============
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
    category: "SAAS DEVELOPMENT",
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
    category: "E-COMMERCE DEVELOPMENT",
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
    category: "AI SOFTWARE INTEGRATION",
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
    category: "MOBILE APP DEVELOPMENT",
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
    category: "CUSTOM WEB APP",
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
    category: "HEALTHCARE SAAS",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format",
    result: "HIPAA compliant in 14 days",
    tech: ["Next.js", "Python", "AI"],
    description: "Secure patient management system featuring an automated AI scribe.",
    link: "#",
    featured: false,
  },
];

// Badge inline
const Badge = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) => (
  <div className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", className)} {...props}>
    {children}
  </div>
);

export default function PortfolioPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const heroLines = containerRef.current?.querySelectorAll(".hero-line");
      if (heroLines && heroLines.length > 0) {
        gsap.fromTo(heroLines, { y: 110, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 });
      }
      const cards = containerRef.current?.querySelectorAll(".portfolio-card");
      const gridWrap = containerRef.current?.querySelector(".grid-wrap");
      if (cards && cards.length > 0 && gridWrap) {
        gsap.fromTo(cards, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: gridWrap, start: "top 75%" },
        });
      }
    }, containerRef);
    return () => { ctx.revert(); ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Graph Grid (Light Gray) */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #F0F0F0 1px, transparent 1px), linear-gradient(to bottom, #F0F0F0 1px, transparent 1px)`, 
          backgroundSize: "4rem 4rem" 
        }} 
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
        
        {/* Header Section */}
        <div className="hero-line flex items-center gap-2 mb-6">
          <Badge className="bg-white border-[#7E30E1]/20 text-[#7E30E1] px-4 py-1.5 rounded-full font-bold tracking-[0.1em] text-[11px] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> SELECTED WORKS 2022-2024
          </Badge>
        </div>
        
        <div className="overflow-hidden mb-6">
          <h1 className="hero-line text-6xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.85] tracking-tighter text-[#5B10C6]">
            <span className="block">The Art of</span>
            <span className="block">Digital Creation.</span>
          </h1>
        </div>
        
        <p className="hero-line max-w-2xl text-base md:text-[17px] leading-relaxed font-medium text-[#7A6D9B]">
          All MVPs, SaaS products and web apps we shipped. Real products, real revenue, built in 14 days.
        </p>

        {/* Portfolio Grid */}
        <div className="grid-wrap mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => (
            <motion.div 
              key={project.id} 
              className="portfolio-card group relative overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-[#7E30E1]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 shadow-sm flex flex-col"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-50">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 100vw, 33vw" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B10C6]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Center Icon */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm scale-0 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-[#5B10C6]" />
                </div>

                {/* Top Right Result Badge */}
                <div className="absolute right-3 top-3">
                  <Badge className="bg-white text-[#333333] border-gray-200 rounded-full px-3 py-1.5 text-[10px] font-bold shadow-sm">
                    {project.result}
                  </Badge>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#9B88E5]">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#49108B] group-hover:text-[#5B10C6] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#7A6D9B]">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}