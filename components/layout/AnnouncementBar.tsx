"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

// ============ DATA ============
export const siteConfig = {
  name: "WebNirmit",
  contact: {
    email: "webnirmit@zohomail.com",
    phone: "+91 62877 13871",
    whatsapp: "916287713871",
  },
}
// ============ DATA END ============

type Footera = { label: string; href: string; icon?: string };
type Footeras = { services: Footera[]; company: Footera[]; legal: Footera[] };
type SocialIcon = { icon: string; label: string; href: string };

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  const footeras: Footeras = {
    services: [
      { label: "EdTech", href: "/industries/edtech", icon: "🌐" },
      { label: "SaaS Development", href: "/industries/saas", icon: "☁" },
      { label: "D2C & E-Commerce", href: "/industries/d2c", icon: "📱" },
      { label: "HealthTech", href: "/industries/healthtech", icon: "🤖" },
    ],
    company: [
      { label: "Our Process", href: "#process" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  };

  const socialIcons: SocialIcon[] = [
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "💼", label: "aedIn", href: "#" },
    { icon: "📺", label: "YouTube", href: "#" },
    { icon: "🐙", label: "GitHub", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0f] to-[#12121a] border-t border-[#7E30E1]/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7E30E1]/5 via-transparent to-[#E26EE5]/5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h- bg-gradient-to-r from-transparent via-[#7E30E1] to-transparent opacity-60 animate-pulse"></div>

      <div className="relative mx-auto max-w- px-4 sm:px-6 py-16 md:py-24">
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7E30E1] to-[#E26EE5] blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7E30E1] to-[#49108B] text-white font-bold text-lg shadow-lg shadow-[#7E30E1]/30">
                  W
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Web<span className="text-[#7E30E1]">Nirmit</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-relaxed text-gray-400 mb-6">
              AI-native product studio. We ship MVPs in 14 days for SaaS founders and D2C brands.
            </p>

            <div className="flex gap-2 mt-6">
              {socialIcons.map((social, idx) => (
                <motion.a key={idx} href={social.href} onMouseEnter={() => setHoveredIcon(idx)} onMouseLeave={() => setHoveredIcon(null)} className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-[#7E30E1]/20 text-gray-400 hover:text-[#7E30E1]" whileHover={{ y: -3 }}>
                  <span>{social.icon}</span>
                  {hoveredIcon === idx && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute -bottom-8 text- text-gray-400 whitespace-nowrap">{social.label}</motion.span>}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">Services</h4>
            <ul className="space-y-3">
              {footeras.services.map((item) => (
                <li key={item.label}><a href={item.href} className="text-sm text-gray-400 hover:text-[#7E30E1]">{item.icon} {item.label}</a></li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">Company</h4>
            <ul className="space-y-3">
              {footeras.company.map((item) => <li key={item.label}><a href={item.href} className="text-sm text-gray-400 hover:text-[#7E30E1]">{item.label}</a></li>)}
              {footeras.legal.map((item) => <li key={item.label}><a href={item.href} className="text-xs text-gray-500 hover:text-[#7E30E1]">{item.label}</a></li>)}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="sm:col-span-2 lg:col-span-1">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">Get in Touch</h4>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-[#7E30E1]/20">
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">W</div><a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" className="text-sm text-gray-300">{siteConfig.contact.phone}</a></li>
                <li className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7E30E1]/20 text-[#7E30E1]">E</div><a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-300 break-all">{siteConfig.contact.email}</a></li>
              </ul>
              <a href="#contact" className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#7E30E1] to-[#49108B] text-white text-sm font-semibold rounded-xl">Start Your Project</a>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#7E30E1]/20 pt-8">
          <p className="text-xs text-gray-500">© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <span className="text- text-gray-500">Built with Next.js 15 • Ships in 14 days</span>
        </div>
      </div>
    </footer>
  );
}