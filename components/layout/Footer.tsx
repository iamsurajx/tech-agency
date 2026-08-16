"use client";

import * as React from "react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Globe,
  Cloud,
  Smartphone,
  Activity,
  MessageCircle,
  Mail,
  MapPin,
  ArrowRight
} from "lucide-react";

// ============ DATA START ============
export const siteConfig = {
  name: "WebNirmit",
  url: "https://webnirmit.netlify.app/",
  contact: {
    email: "webnirmit@zohomail.com",
    phone: "+91 62877 13871",
    whatsapp: "916287713871",
    calendly: "https://cal.com/webnirmit/discovery",
  },
}
// ============ DATA END ============

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" } // TypeScript is 'ease' par hi error de raha tha
  }
};

export function Footer() {
  const currentYear: number = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const footeras = {
    services: [
      { label: "EdTech", href: "/industries/edtech", icon: <Globe className="w-4 h-4" /> },
      { label: "SaaS Development", href: "/industries/saas", icon: <Cloud className="w-4 h-4" /> },
      { label: "D2C & E-Commerce", href: "/industries/d2c", icon: <Smartphone className="w-4 h-4" /> },
      { label: "HealthTech", href: "/industries/healthtech", icon: <Activity className="w-4 h-4" /> },
    ],
    company: [
      { label: "Our Process", href: "/#process" },
      { label: "Portfolio", href: "/#portfolio" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  // Replaced Lucide brand imports with inline SVGs to fix the missing export error
  const socialIcons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>,
      label: "Twitter",
      href: "#"
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
      label: "aedIn",
      href: "#"
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2.5 7.1c.3-1.1 1.2-2 2.3-2.3 2-.5 7.2-.5 7.2-.5s5.2 0 7.2.5c1.1.3 2 1.2 2.3 2.3.5 1.9.5 5.9.5 5.9s0 4-.5 5.9c-.3 1.1-1.2 2-2.3 2.3-2 .5-7.2.5-7.2.5s-5.2 0-7.2-.5c-1.1-.3-2-1.2-2.3-2.3-.5-1.9-.5-5.9-.5-5.9s0-4 .5-5.9z" /><path d="m10 15 5-3-5-3v6z" /></svg>,
      label: "YouTube",
      href: "#"
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>,
      label: "GitHub",
      href: "#"
    },
  ];

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-[#7E30E1]/10 overflow-hidden pt-20">

      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7E30E1]/50 to-transparent opacity-60"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#7E30E1]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#E26EE5]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-12 sm:pb-16">
        <div className="grid gap-12 sm:gap-10 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">

          {/* Column 1: Brand & Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="/" className="inline-flex items-center gap-3 mb-6 group outline-none">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7E30E1] to-[#E26EE5] blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7E30E1] to-[#49108B] text-white shadow-lg transition-transform duration-500 group-hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M4 4l4 16 4-10 4 10 4-16" />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Web<span className="text-[#7E30E1]">Nirmit</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-gray-400 mb-8">
              AI-native product studio. We ship fixed-price, production-ready MVPs in 14 days for SaaS founders and D2C brands.
            </p>

            <div className="flex flex-wrap gap-3">
              {['14-Day Delivery', 'Fixed Price', 'AI-Powered'].map((badge, i) => (
                <span key={badge} className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                  <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${i === 0 ? 'bg-[#7E30E1]' : i === 1 ? 'bg-[#E26EE5]' : 'bg-[#49108B]'}`}></span>
                  {badge}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-8">
              {socialIcons.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIcon(idx)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-[#7E30E1] hover:border-[#7E30E1] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  {social.icon}
                  {hoveredIcon === idx && (
                    <motion.span
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 text-xs font-medium text-white bg-[#7E30E1] px-2.5 py-1 rounded-md shadow-xl whitespace-nowrap"
                    >
                      {social.label}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#7E30E1]"></div>
                    </motion.span>
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-gray-100 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#7E30E1] rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-4">
              {footeras.services.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <a href={item.href} className="group flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-[#E26EE5] transition-all duration-300">
                    <span className="text-[#7E30E1] opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-gray-100 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#7E30E1] rounded-full"></span>
              Company
            </h4>
            <ul className="space-y-4 mb-8">
              {footeras.company.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <a href={item.href} className="text-sm font-medium text-gray-400 hover:text-[#E26EE5] transition-all duration-300 hover:translate-x-1 inline-block">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <ul className="space-y-3">
              {footeras.legal.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <a href={item.href} className="text-xs font-medium text-gray-500 hover:text-gray-300 transition-colors">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7E30E1]/10 rounded-full blur-2xl group-hover:bg-[#7E30E1]/20 transition-colors duration-500"></div>

              <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-gray-100 flex items-center gap-2 relative z-10">
                <span className="w-4 h-[2px] bg-[#7E30E1] rounded-full"></span>
                Get in Touch
              </h4>

              <ul className="space-y-5 relative z-10">
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                    {/* <MessageCircle className="w-4 h-4" /> */}
                    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-500 mb-0.5">WhatsApp</p>
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white font-semibold transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7E30E1]/10 text-[#7E30E1] border border-[#7E30E1]/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-500 mb-0.5">Email</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-300 hover:text-white font-semibold break-all transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-gray-400 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-500 mb-0.5">Location</p>
                    <span className="text-sm text-gray-300 font-semibold">Delhi, India</span>
                  </div>
                </li>
              </ul>

              <a href="#contact" className="mt-8 relative z-10 w-full group/btn inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#7E30E1] text-white text-sm font-semibold rounded-xl hover:bg-[#6A25C2] shadow-lg shadow-[#7E30E1]/25 transition-all">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8"
        >
          <p className="text-xs font-medium text-gray-500">© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
              Built with <span className="text-gray-300">Next.js 15</span>
            </span>
            <span className="text-xs font-medium text-gray-500 flex items-center gap-1.5">
              Deployed on <span className="text-gray-300">Vercel</span>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

