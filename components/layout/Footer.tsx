"use client";

import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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

  // Replaced Lucide brand imports with inline SVGs to fix the missing export error
  const socialIcons = [
    { 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>, 
      label: "Twitter", 
      href: "#" 
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>, 
      label: "aedIn", 
      href: "#" 
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2.5 7.1c.3-1.1 1.2-2 2.3-2.3 2-.5 7.2-.5 7.2-.5s5.2 0 7.2.5c1.1.3 2 1.2 2.3 2.3.5 1.9.5 5.9.5 5.9s0 4-.5 5.9c-.3 1.1-1.2 2-2.3 2.3-2 .5-7.2.5-7.2.5s-5.2 0-7.2-.5c-1.1-.3-2-1.2-2.3-2.3-.5-1.9-.5-5.9-.5-5.9s0-4 .5-5.9z"/><path d="m10 15 5-3-5-3v6z"/></svg>, 
      label: "YouTube", 
      href: "#" 
    },
    { 
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>, 
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
                    <MessageCircle className="w-4 h-4" />
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
                    <span className="text-sm text-gray-300 font-semibold">Patna, Bihar, India</span>
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


// "use client";

// import * as React from "react";
// import { useState } from "react";
// import a from "next/a";
// import { motion } from "framer-motion";

// // ============ DATA START (Header wala hi data use kiya) ============
// export const siteConfig = {
//   name: "WebNirmit",
//   url: "https://webnirmit.netlify.app/",
//   contact: {
//     email: "webnirmit@zohomail.com",
//     phone: "+91 62877 13871",
//     whatsapp: "916287713871",
//     calendly: "https://cal.com/webnirmit/discovery",
//   },
// }
// // ============ DATA END ============

// type Footera = {
//   label: string;
//   href: string;
//   icon?: string;
// };

// type Footeras = {
//   services: Footera[];
//   company: Footera[];
//   legal: Footera[];
// };

// type SocialIcon = {
//   icon: string;
//   label: string;
//   href: string;
// };

// export function Footer() {
//   const currentYear: number = new Date().getFullYear();
//   const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

//   const footeras: Footeras = {
//     services: [
//       { label: "EdTech", href: "/industries/edtech", icon: "🌐" },
//       { label: "SaaS Development", href: "/industries/saas", icon: "☁" },
//       { label: "D2C & E-Commerce", href: "/industries/d2c", icon: "📱" },
//       { label: "HealthTech", href: "/industries/healthtech", icon: "🤖" },
//     ],
//     company: [
//       { label: "Our Process", href: "#process" },
//       { label: "Portfolio", href: "#portfolio" },
//       { label: "FAQ", href: "#faq" },
//       { label: "Contact", href: "#contact" },
//     ],
//     legal: [
//       { label: "Privacy Policy", href: "#" },
//       { label: "Terms of Service", href: "#" },
//       { label: "Cookie Policy", href: "#" },
//     ],
//   };

//   const socialIcons: SocialIcon[] = [
//     { icon: "🐦", label: "Twitter", href: "#" },
//     { icon: "💼", label: "aedIn", href: "#" },
//     { icon: "📺", label: "YouTube", href: "#" },
//     { icon: "🐙", label: "GitHub", href: "#" },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-b from-[#0a0a0f] to-[#12121a] border-t border-[#7E30E1]/20 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#7E30E1]/5 via-transparent to-[#E26EE5]/5 pointer-events-none"></div>
//       <div className="absolute top-0 left-0 right-0 h- bg-gradient-to-r from-transparent via-[#7E30E1] to-transparent opacity-60 animate-pulse"></div>
//       <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7E30E1]/10 rounded-full blur-3xl"></div>
//       <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E26EE5]/10 rounded-full blur-3xl"></div>

//       <div className="relative mx-auto max-w- px-4 sm:px-6 py-16 sm:py-20 md:py-24">
//         <div className="grid gap-12 sm:gap-10 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="sm:col-span-2 lg:col-span-1"
//           >
//             <a href="/" className="inline-flex items-center gap-3 mb-5 group">
//               <div className="relative">
//                 <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#7E30E1] to-[#E26EE5] blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
//                 <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7E30E1] to-[#49108B] text-white font-bold text-lg shadow-lg shadow-[#7E30E1]/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
//                   W
//                 </div>
//                 </div>
//               <span className="text-xl font-bold text-white tracking-tight">
//                 Web<span className="text-[#7E30E1]">Nirmit</span>
//               </span>
//             </a>

//             <p className="max-w-sm text-sm leading-relaxed text-gray-400 mb-6">
//               AI-native product studio. We ship MVPs in 14 days for SaaS founders and D2C brands.
//             </p>

//             <div className="flex flex-wrap gap-2.5">
//               <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#7E30E1]/20">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#7E30E1] animate-pulse"></span>
//                 14-Day Delivery
//               </span>
//               <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#7E30E1]/20">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#E26EE5] animate-pulse"></span>
//                 Fixed Price
//               </span>
//               <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 bg-white/5 backdrop-blur-sm px-3.5 py-2 rounded-full border border-[#7E30E1]/20">
//                 <span className="w-1.5 h-1.5 rounded-full bg-[#49108B] animate-pulse"></span>
//                 AI-Powered
//               </span>
//             </div>

//             <div className="flex gap-2 mt-6">
//               {socialIcons.map((social, idx) => (
//                 <motion.a
//                   key={idx}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onMouseEnter={() => setHoveredIcon(idx)}
//                   onMouseLeave={() => setHoveredIcon(null)}
//                   className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-[#7E30E1]/20 text-gray-400 hover:text-[#7E30E1] hover:border-[#7E30E1]/40 transition-all duration-300"
//                   whileHover={{ y: -3 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 >
//                   <span className="text-base">{social.icon}</span>
//                   {hoveredIcon === idx && (
//                     <motion.span
//                       initial={{ opacity: 0, y: 5 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="absolute -bottom-8 text- font-medium text-gray-400 whitespace-nowrap"
//                     >
//                       {social.label}
//                     </motion.span>
//                   )}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
//             <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2">
//               <span className="w-6 h- bg-[#7E30E1]/30 rounded-full"></span>
//               Services
//             </h4>
//             <ul className="space-y-3">
//               {footeras.services.map((item) => (
//                 <li key={item.label}>
//                   <a href={item.href} className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#7E30E1] transition-all duration-300">
//                     <span className="text-base opacity-50 group-hover:opacity-100">{item.icon}</span>
//                     <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">{item.label}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
//             <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2">
//               <span className="w-6 h- bg-[#7E30E1]/30 rounded-full"></span>
//               Company
//             </h4>
//             <ul className="space-y-3">
//               {footeras.company.map((item) => (
//                 <li key={item.label}>
//                   <a href={item.href} className="text-sm text-gray-400 hover:text-[#7E30E1] transition-all duration-300 hover:translate-x-1 inline-block">
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//               {footeras.legal.map((item) => (
//                 <li key={item.label}>
//                   <a href={item.href} className="text-xs text-gray-500 hover:text-[#7E30E1] transition-all duration-300 hover:translate-x-1 inline-block">
//                     {item.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="sm:col-span-2 lg:col-span-1">
//             <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2">
//               <span className="w-6 h- bg-[#7E30E1]/30 rounded-full"></span>
//               Get in Touch
//             </h4>
//             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-[#7E30E1]/20">
//               <ul className="space-y-4">
//                 <li className="flex items-center gap-3 group">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">W</div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text- font-medium text-gray-500">WhatsApp</p>
//                     <a href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-[#25D366] font-medium">
//                       {siteConfig.contact.phone}
//                     </a>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7E30E1]/20 text-[#7E30E1]">E</div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text- font-medium text-gray-500">Email</p>
//                     <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-gray-300 hover:text-[#7E30E1] font-medium break-all">
//                       {siteConfig.contact.email}
//                     </a>
//                   </div>
//                 </li>
//                 <li className="flex items-center gap-3 group">
//                   <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E26EE5]/20 text-[#E26EE5]">L</div>
//                   <div className="flex-1 min-w-0">
//                     <p className="text- font-medium text-gray-500">Location</p>
//                     <span className="text-sm text-gray-300 font-medium">Patna, Bihar, India</span>
//                   </div>
//                 </li>
//               </ul>
//               <a href="#contact" className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#7E30E1] to-[#49108B] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-[#7E30E1]/30 transition-all">
//                 <span>Start Your Project</span>
//               </a>
//             </div>
//           </motion.div>
//         </div>

//         <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#7E30E1]/20 pt-8">
//           <p className="text-xs text-gray-500">© {currentYear} {siteConfig.name}. All rights reserved.</p>
//           <div className="flex items-center gap-4">
//             <span className="text- font-medium text-gray-500">Built with Next.js 15</span>
//             <span className="text- font-medium text-gray-500">Ships in 14 days</span>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }