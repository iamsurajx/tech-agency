"use client"; // Required for Next.js to use hooks and client-side animations

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link'; // 1. Import Link from Next.js

// Create a motion-enabled Link component
const MotionLink = motion(Link);

// Mocking Shadcn UI Card components with Tailwind CSS for portability
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`border border-[#E4DDF4] bg-white/80 backdrop-blur-sm text-card-foreground shadow-sm ${className}`} {...props} />
  )
)
Card.displayName = "Card"

// 2. Added 'slug' to each object for routing
const industries = [
  { title: "Saas", slug: "saas", desc: "Custom solutions, strategy & scaling for the saas ecosystem." },
  { title: "Edtech", slug: "edtech", desc: "Custom solutions, strategy & scaling for the edtech ecosystem." },
  { title: "D2c", slug: "d2c", desc: "Custom solutions, strategy & scaling for the d2c ecosystem." },
  { title: "Healthtech", slug: "healthtech", desc: "Custom solutions, strategy & scaling for the healthtech ecosystem." },
  { title: "Fintech", slug: "fintech", desc: "Custom solutions, strategy & scaling for the fintech ecosystem." },
  { title: "Logistics", slug: "logistics", desc: "Custom solutions, strategy & scaling for the logistics ecosystem." },
];

export default function IndustryGrowthPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from(".gsap-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });
      
      gsap.from(".gsap-card", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.6
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#FAFAFF] font-sans overflow-hidden flex flex-col items-center py-24 px-6 md:px-12"
    >
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-60" 
        style={{
          backgroundImage: `linear-gradient(to right, #E6E2F1 1px, transparent 1px), linear-gradient(to bottom, #E6E2F1 1px, transparent 1px)`,
          backgroundSize: `48px 48px`
        }} 
      />

      <div className="max-w-[1200px] w-full z-10 mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <p className="gsap-reveal text-[11px] font-bold tracking-[0.2em] text-[#6A23D2] uppercase mb-6">
            Industries We Serve • 6 Specializations
          </p>
          
          <h1 className="gsap-reveal text-6xl md:text-[6.5rem] font-black leading-[0.95] tracking-tight text-[#5B10C6] mb-8">
            The Art of <br />
            Industry Growth.
          </h1>
          
          <p className="gsap-reveal text-lg md:text-[1.1rem] text-[#685D8B] max-w-[600px] leading-relaxed font-medium">
            We build high-performance digital products for Fintech, Healthtech, SaaS, 
            D2C and more — blending your brand with enterprise-grade engineering.
          </p>
        </div>

        {/* Grid Section */}
        <Card className="gsap-reveal p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {industries.map((item, index) => (
              /* 3. Replaced motion.div with MotionLink and added href prop */
              <MotionLink 
                href={`/industries/${item.slug}`}
                key={index}
                initial="initial"
                whileHover="hover"
                className="gsap-card flex flex-col group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[1.75rem] font-black tracking-tight text-[#3A147C] group-hover:text-[#5B10C6] transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <motion.div 
                    variants={{
                      initial: { x: 0, backgroundColor: "rgba(255, 255, 255, 0)", color: "#B5A4D9" },
                      hover: { x: 5, backgroundColor: "#5B10C6", color: "#FFFFFF", borderColor: "#5B10C6" }
                    }}
                    className="w-8 h-8 rounded-full border border-[#D5C6F5] flex items-center justify-center transition-colors duration-300"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </motion.div>
                </div>
                
                <p className="text-[13px] text-[#7A6D9B] mb-8 leading-relaxed pr-4">
                  {item.desc}
                </p>
                
                <p className="text-[11px] font-bold tracking-[0.15em] text-[#6A23D2] uppercase mt-auto group-hover:tracking-[0.2em] transition-all duration-300">
                  Explore Industry
                </p>
              </MotionLink>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}