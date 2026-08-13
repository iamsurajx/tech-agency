'use client'

import React from 'react';
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// ============ BUTTON UI MERGED HERE ============
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string; size?: string; asChild?: boolean }>(
  ({ className, variant = "default", size = "default", asChild, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:opacity-50 active:scale-[0.98]",
          variant === "default" && "bg-[#7E30E1] text-white hover:bg-[#6A25C2] shadow-lg shadow-[#7E30E1]/25",
          size === "default" && "h-10 px-5",
          size === "lg" && "h-12 px-8 text-base",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = "Button"

// ============ CTABUTTON MERGED HERE ============
type CTAButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: string;
  size?: string;
  className?: string;
}

export function CTAButton({ children, href = "#contact", variant = "default", size = "default", className = "" }: CTAButtonProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      const offset = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }

  // Anchor tag with Button styles (Fixes Invalid HTML of <a> inside <button>)
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <a
        href={href}
        onClick={scrollToSection}
        className={cn(
          "group inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:opacity-50",
          variant === "default" && "bg-white text-[#49108B] hover:bg-gray-50 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20",
          size === "default" && "h-10 px-5",
          size === "lg" && "h-14 px-8 text-base",
          className
        )}
      >
        {children}
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
      </a>
    </motion.div>
  )
}

// ============ MAIN BANNER ============
export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#49108B] to-[#2B0955] py-20 md:py-28 scroll-mt-20 border-y border-white/5">
      
      {/* Background Ambient Glows (Glassmorphism Effect) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center Giant Glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E26EE5]/15 blur-[120px]" />
        {/* Top Right Glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#7E30E1]/30 blur-[100px]" />
        {/* Bottom Left Glow */}
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#7E30E1]/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-sm">
            Ready to ship your MVP in <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E26EE5] to-[#FF9BF0]">14 days?</span>
          </h2>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/75 font-medium">
            Book a 15-min discovery call. We'll scope your MVP and give you a fixed price on the call. No commitments.
          </p>
          
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
            <CTAButton href="#contact" size="lg" className="w-full sm:w-auto">
              Start Your Project
            </CTAButton>
            
            <a 
              href="#process" 
              onClick={(e) => { 
                e.preventDefault(); 
                const el = document.getElementById("process");
                if (el) {
                  const offset = el.getBoundingClientRect().top + window.scrollY - 90;
                  window.scrollTo({ top: offset, behavior: "smooth" });
                }
              }} 
              className="group flex items-center gap-2 text-base font-semibold text-white/70 hover:text-white transition-colors cursor-pointer py-2"
            >
              See how it works
              <span className="block h-px w-0 bg-white transition-all duration-300 group-hover:w-4"></span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}