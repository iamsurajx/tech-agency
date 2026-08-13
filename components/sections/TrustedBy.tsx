'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Zap, ChevronRight, Star, Rocket } from "lucide-react"

type TrustedLogo = {
  name: string;
  logo: string;
}

const trustedLogos: TrustedLogo[] = [
  { name: "LearnUpXgrowth", logo: "LUXG" },
  { name: "AiStartupHub", logo: "ASH" },
  { name: "GreenEnergyTech", logo: "GET" },
  { name: "TransportSaas", logo: "TS" },
  { name: "InnovateStar", logo: "InStar" },
  { name: "GrowthXCorn", logo: "GXC" },
  { name: "Medical App", logo: "MedPro" },
  { name: "Food App", logo: "Resto" },
];

export function TrustedBy() {
  const logos = [...trustedLogos,...trustedLogos,...trustedLogos,...trustedLogos];
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id='trust' ref={sectionRef} className="relative overflow-hidden bg-[#FAFAFA] py-16 md:py-20 border-y border-[#7E30E1]/10">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-[14px] bg-[#7E30E1]/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-[14px] bg-[#E26EE5]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-[14px] bg-[#7E30E1]/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(126, 48, 225, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(126, 48, 225, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <motion.div style={{ opacity, scale }} className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="mb-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-[14px] border border-[#7E30E1]/20 bg-white/50 px-4 py-2 backdrop-blur-sm mb-4">
              <Sparkles className="h-4 w-4 text-[#E26EE5]" />
              <span className="text- font-medium text-[#49108B]/70">Trusted by innovators</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-[14px] bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-[14px] bg-green-400" />
              </span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text- md:text- font-bold text-[#49108B]">
              Trusted by founders building the
              <br />
              <span className="bg-gradient-to-r from-[#7E30E1] to-[#E26EE5] bg-clip-text text-transparent">
                next wave of innovation
              </span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-3 text- text-[#49108B]/50">
              Join 100+ startups that shipped their MVP with WebNirmit
            </motion.p>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w- bg-gradient-to-r from-[#FAFAFA] to-transparent md:w-" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w- bg-gradient-to-l from-[#FAFAFA] to-transparent md:w-" />

          <motion.div className="flex gap-8 md:gap-12 lg:gap-16" animate={{ x: ["0%", "-25%"] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" } }}>
            {logos.map((logo, i) => (
              <motion.div key={`${logo.name}-${i}`} className="group flex shrink-0 items-center gap-4" whileHover={{ scale: 1.05 }}>
                <div className="relative">
                  <div className="absolute inset-0 rounded-[14px] bg-gradient-to-r from-[#7E30E1]/20 to-[#E26EE5]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#7E30E1]/10 to-[#E26EE5]/10 text-[#7E30E1] ring-1 ring-[#7E30E1]/20 group-hover:ring-[#7E30E1]/40">
                    <span className="text- font-bold">{logo.logo}</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="whitespace-nowrap text- font-medium text-[#49108B]/80 group-hover:text-[#49108B]">{logo.name}</span>
                  <span className="text- text-[#49108B]/30">• Trusted Partner</span>
                </div>
                <ChevronRight className="h-3 w-3 text-[#7E30E1]/20 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mx-auto max-w-[1200px] px-4 md:px-6 mt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "100+", label: "Startups launched", icon: <Rocket className="h-4 w-4" /> },
              { value: "47", label: "MVPs shipped", icon: <Zap className="h-4 w-4" /> },
              { value: "14", label: "Days to launch", icon: <Star className="h-4 w-4" /> },
              { value: "100%", label: "Satisfaction rate", icon: <Sparkles className="h-4 w-4" /> },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }} className="group relative overflow-hidden rounded-[14px] border border-[#7E30E1]/10 bg-white/50 p-4 text-center backdrop-blur-sm hover:border-[#7E30E1]/30 hover:bg-white/80">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7E30E1]/5 to-[#E26EE5]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text- md:text- font-bold text-[#49108B]">{stat.value}</div>
                  <div className="text- text-[#49108B]/50 mt-1">{stat.label}</div>
                  <span className="absolute -right-2 -top-2 text-[#7E30E1]/20 group-hover:text-[#7E30E1]/40">{stat.icon}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}