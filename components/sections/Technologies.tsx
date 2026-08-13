"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button"; // <-- shadcn Button import kiya gaya hai

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// ============ DATA + ICONS ============
type Tech = {
  name: string;
  logo: React.ReactNode;
};

type TechnologiesData = {
  frontend: Tech[];
  backend: Tech[];
  mobile: Tech[];
  ai: Tech[];
};

// Custom SVGs sized for button look (w-5 h-5)
const Icons = {
  Nextjs: <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L39.3 54H25.4v38.9h12V67.8l52.5 73.1c-8 4.5-17.2 7.1-25.9 7.1-35.3 0-64-28.7-64-64S28.7 0 64 0s64 28.7 64 64c0 11.2-2.9 21.7-7.9 30.8L83.8 40.5h14.7v49h-12V52.7l30.3 42.1C124 85 128 74.8 128 64c0-35.3-28.7-64-64-64z"/></svg>,
  React: <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-current"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>,
  TS: <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current"><path d="M1.5 63.91v62.5h125v-125H1.5v62.5z" fill="#3178c6"/><path d="M72.25 99.47c-7.81 0-14.86-2.28-21.14-6.84l6.5-9.35c5.36 3.9 11.21 5.85 17.55 5.85 3.58 0 6.34-.81 8.29-2.44 1.95-1.63 2.93-3.74 2.93-6.34 0-1.95-.73-3.66-2.2-5.12-1.46-1.46-4.39-2.93-8.78-4.39l-4.55-1.46c-6.83-2.28-11.78-5.2-14.87-8.78-3.09-3.58-4.63-8.13-4.63-13.65 0-6.18 2.28-11.22 6.83-15.12 4.55-3.9 10.4-5.85 17.55-5.85 6.5 0 12.68 1.79 18.53 5.36l-5.85 9.43c-4.88-2.93-9.92-4.39-15.12-4.39-3.41 0-5.85.81-7.31 2.44-1.46 1.63-2.2 3.41-2.2 5.36 0 1.95.81 3.58 2.44 4.88 1.63 1.3 4.88 2.76 9.75 4.39l4.55 1.46c6.67 2.11 11.38 5.04 14.14 8.78 2.76 3.74 4.14 8.45 4.14 14.14 0 6.5-2.28 11.78-6.83 15.85-4.55 4.06-11.13 6.09-19.75 6.09zM19.11 44.57h16.25v53.64h12.19V44.57h16.25v-10.4H19.11v10.4z" fill="#fff"/></svg>,
  Tailwind: <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current"><path d="M32 64c0-17.6 14.4-32 32-32s32 14.4 32 32-14.4 32-32 32-32-14.4-32-32zm-16 0c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z" fill="#06B6D4"/></svg>,
  Python: <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current"><path d="M63.8 2.9c-28.7 0-27.1 12.4-27.1 12.4v13.2h27.6v4h-35c0 0-18.7-2.1-18.7 27.6s15.9 28.5 15.9 28.5h8v-12.7c0-15.6 13.1-18.3 13.1-18.3h18.3s12.4-1.1 12.4-12.2V16.3S81.2 2.9 63.8 2.9zm-13.8 9.3c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3z" fill="#3776AB"/><path d="M64.2 125.1c28.7 0 27.1-12.4 27.1-12.4v-13.2H63.7v-4h35c0 0 18.7 2.1 18.7-27.6S101.5 39.4 101.5 39.4h-8v12.7c0 15.6-13.1 18.3-13.1 18.3H62.1s-12.4 1.1-12.4 12.2v29.1s-3 13.4 14.5 13.4zm13.8-9.3c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z" fill="#FFD43B"/></svg>,
  GenericDB: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  AI: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  Code: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
};

const technologies: TechnologiesData = {
  frontend: [
    { name: "Next.js", logo: Icons.Nextjs },
    { name: "React", logo: Icons.React },
    { name: "TypeScript", logo: Icons.TS },
    { name: "Tailwind", logo: Icons.Tailwind },
  ],
  backend: [
    { name: "Node.js", logo: Icons.Code },
    { name: "Python", logo: Icons.Python },
    { name: "PostgreSQL", logo: Icons.GenericDB },
    { name: "Supabase", logo: Icons.Code },
  ],
  mobile: [
    { name: "React Native", logo: Icons.React },
    { name: "Expo", logo: Icons.Code },
    { name: "Flutter", logo: Icons.Code },
  ],
  ai: [
    { name: "OpenAI", logo: Icons.AI },
    { name: "LangChain", logo: Icons.Code },
    { name: "Pinecone", logo: Icons.GenericDB },
    { name: "Vercel AI", logo: Icons.Nextjs },
  ],
};

export function Technologies() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const allTech: Tech[] = [
    ...technologies.frontend,
    ...technologies.backend,
    ...technologies.mobile,
    ...technologies.ai,
  ];

  const techSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Development Technology Stack",
    description: "The modern technologies, frameworks, and programming languages we use to build scalable MVPs and SaaS platforms.",
    itemListElement: allTech.map((tech, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tech.name,
    })),
  };

  // GSAP Container Parallax
  useGSAP(() => {
    gsap.to(containerRef.current, {
      y: 20,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="tech-stack" className="relative bg-background py-20 md:py-28 overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techSchema) }} />
      
      <div ref={containerRef} className="mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Scalable Tech Stack for MVP Development"
          description="We engineer using enterprise-grade frameworks. No experimental tools on your dime."
          centered
        />
        
        <div className="mx-auto max-w-4xl mt-16">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-5">
            {allTech.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                whileHover={{ y: -3, scale: 1.02 }}
                // THE GRADIENT BORDER WRAPPER
                // Maine aapke theme colors (primary aur accent) ko gradient mein mix kiya hai jisse yeh aur cohesive lagega
                className="w-full h-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary via-accent to-[#1ABCFE] p-[1px] shadow-sm hover:shadow-md transition-shadow group"
              >
                {/* THE SHADCN BUTTON */}
                <Button 
                  variant="ghost"
                  className="w-full h-full bg-white hover:bg-background text-primary-dark cursor-pointer rounded-[7px] flex items-center justify-start gap-3 px-4 py-6 border-none"
                >
                  <div 
                    className="flex items-center justify-center text-primary transition-transform duration-300 group-hover:scale-110 group-hover:text-accent" 
                    aria-hidden="true"
                  >
                    {tech.logo}
                  </div>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    {tech.name}
                  </span>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}