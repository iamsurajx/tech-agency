'use client'

import React from 'react';
import { motion } from "framer-motion"

type WhyChooseItem = {
  id: string;
  title: string;
  description: string;
}

const whyChooseUs: WhyChooseItem[] = [
  {
    id: "01",
    title: "Rapid MVP Development",
    description: "Not 3 months. We sprint from idea to production MVP in 14 days with a senior-only engineering team.",
  },
  {
    id: "02",
    title: "AI-Native Software",
    description: "Every project includes AI features by default — integrating LLM chats, autonomous agents, and workflows.",
  },
  {
    id: "03",
    title: "Fixed-Price Contracts",
    description: "No hourly billing. Your scope is locked, the price is locked, ensuring zero financial surprises.",
  },
  {
    id: "04",
    title: "Direct Founder Access",
    description: "Talk directly to senior developers building your product. No account managers, no communication delays.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#49108B] py-20 text-white md:py-32 font-sans">
      
      {/* Background Subtle Glow/Blur (Top Right) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-[#E26EE5]/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <span className="mb-6 inline-flex items-center gap-4">
            <span className="h-[2px] w-8 bg-[#E26EE5]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#E26EE5]">Why WebNirmit</span>
          </span>
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight">
            Built for founders who ship
          </h2>
        </div>

        {/* 4-Column Grid */}
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: i * 0.1 }} 
              className="group flex flex-col"
            >
              {/* Huge Faded Number */}
              <div className="mb-6 text-[5rem] md:text-[6rem] font-bold leading-none tracking-tighter text-white/10 transition-colors duration-300 group-hover:text-white/20">
                {item.id}
              </div>
              
              {/* Card Title */}
              <h3 className="mb-4 text-xl font-bold text-white">
                {item.title}
              </h3>
              
              {/* Card Description */}
              <p className="text-base leading-relaxed text-white/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}