"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

// ============ DATA START ============
export const siteConfig = {
  name: "WebNirmit",
  contact: {
    phone: "+91 62877 13871",
    whatsapp: "916287713871",
  },
}

export const navigation = [
  { name: "Services", href: "/#services" }, 
  { name: "Industries", href: "#industries", isDropdown: true },
  { name: "Process", href: "/#process" }, 
  { name: "Work", href: "/#portfolio" }, 
  { name: "FAQ", href: "/#faq" }, 
  { name: "Contact", href: "/#contact" }, 
  { name: "Blogs", href: "/blogs" },
  { name: "Career", href: "/career" }, 
]

const industries = [
  { name: "SaaS & B2B", href: "/industries/saas" },
  { name: "D2C & E-commerce", href: "/industries/d2c" },
  { name: "Healthtech", href: "/industries/healthtech" },
  { name: "Edtech", href: "/industries/edtech" },
  { name: "Fintech", href: "/industries/fintech" },
  { name: "Logistics", href: "/industries/logistics" },
]
// ============ DATA END ============

export function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState<boolean>(false)
  
  const headerRef = useRef<HTMLElement>(null)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // GSAP Initial Mount Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".gsap-nav-item",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out", delay: 0.1 }
      )
    }, headerRef)
    return () => ctx.revert()
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [isMobileOpen])

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 inset-x-0 z-50 w-full flex flex-col transition-all duration-500 ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl border-b border-[#7E30E1]/15 shadow-sm" 
            : "bg-transparent"
        }`}
      >
        {/* ============ Top Announcement Banner (Shows ONLY on Scroll) ============ */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-[#5B10C6] text-white"
            >
              <div className="flex items-center justify-center py-2.5 px-4 text-sm font-medium gap-2 text-center">
                <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-[#D5C6F5]"></span>
                <span>Launch your MVP in 14 days — 2 slots left for August</span>
                <a 
                  href="#contact" 
                  className="font-bold underline underline-offset-2 hover:text-[#D5C6F5] transition-colors flex items-center gap-1 ml-1"
                >
                  Book now <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============ Main Navigation ============ */}
        <div className={`transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
            
            {/* Logo */}
            <a href="/" className="gsap-nav-item flex items-center gap-3 group outline-none">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7E30E1] to-[#49108B] text-white shadow-lg shadow-[#7E30E1]/20 transition-transform group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M4 4l4 16 4-10 4 10 4-16" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#49108B]">
                {siteConfig.name}
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => {
                if (item.isDropdown) {
                  return (
                    <div
                      key={item.name}
                      className="gsap-nav-item relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1.5 text-sm font-semibold text-[#49108B]/80 hover:text-[#7E30E1] transition-colors py-2 outline-none">
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-[#7E30E1]' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute left-1/2 top-full mt-2 w-64 -translate-x-1/2 rounded-2xl border border-gray-100 bg-white/95 backdrop-blur-xl p-3 shadow-2xl shadow-[#49108B]/10 ring-1 ring-[#7E30E1]/5"
                          >
                            <div className="grid gap-1">
                              {industries.map((ind) => (
                                <a 
                                  key={ind.name} 
                                  href={ind.href} 
                                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:bg-[#F3F8FF] hover:text-[#7E30E1] transition-all"
                                >
                                  {ind.name}
                                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                </a>
                              ))}
                              
                              <div className="my-1 h-px bg-gray-100" />
                              <a 
                                href="/industries" 
                                className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-[#7E30E1] hover:bg-[#7E30E1]/10 transition-all"
                              >
                                See All Industries
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }
                return (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    className="gsap-nav-item text-sm font-semibold text-[#49108B]/80 hover:text-[#7E30E1] transition-colors py-2"
                  >
                    {item.name}
                  </a>
                )
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20WebNirmit`}
                target="_blank"
                rel="noopener noreferrer"
                className="gsap-nav-item hidden items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-sm font-semibold text-[#0c7332] hover:bg-[#25D366]/20 transition-colors sm:flex"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                +91 62877-13871
              </a>
              
              <a 
                href="/#contact" 
                className="gsap-nav-item hidden lg:inline-flex h-10 items-center justify-center rounded-xl bg-[#7E30E1] px-6 text-sm font-semibold text-white shadow-lg shadow-[#7E30E1]/30 hover:bg-[#49108B] hover:-translate-y-0.5 transition-all"
              >
                Start Project
              </a>

              <button 
                onClick={() => setIsMobileOpen(true)} 
                className="gsap-nav-item lg:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-[#49108B] hover:bg-gray-100 transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Remains Unchanged) */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsMobileOpen(false)} 
              className="fixed inset-0 z-[60] bg-[#49108B]/40 backdrop-blur-sm lg:hidden" 
            />
            
            <motion.div 
              initial={{ x: "100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "100%" }} 
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-[70] h-[100dvh] w-[85%] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <span className="font-bold text-lg text-[#49108B]">Navigation</span>
                <button 
                  onClick={() => setIsMobileOpen(false)} 
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.isDropdown ? (
                        <div>
                          <button 
                            onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)}
                            className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-[#49108B]/90 hover:bg-[#F3F8FF] transition-colors"
                          >
                            {item.name}
                            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileIndustryOpen ? 'rotate-180 text-[#7E30E1]' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {mobileIndustryOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col pl-4 py-2 gap-1 border-l-2 border-gray-100 ml-4 mt-1">
                                  {industries.map((ind) => (
                                    <a 
                                      key={ind.name} 
                                      href={ind.href} 
                                      onClick={() => setIsMobileOpen(false)}
                                      className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-[#7E30E1] transition-colors"
                                    >
                                      {ind.name}
                                    </a>
                                  ))}
                                  <div className="my-1 mx-4 h-px bg-gray-100" />
                                  <a 
                                    href="/industries" 
                                    onClick={() => setIsMobileOpen(false)}
                                    className="rounded-lg px-4 py-2.5 text-sm font-semibold text-[#7E30E1] hover:bg-[#7E30E1]/10 transition-colors"
                                  >
                                    See All Industries
                                  </a>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <a 
                          href={item.href} 
                          onClick={() => setIsMobileOpen(false)} 
                          className="flex w-full rounded-xl px-4 py-3.5 text-base font-semibold text-[#49108B]/90 hover:bg-[#F3F8FF] transition-colors"
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50/50">
                <a 
                  href="/#contact" 
                  onClick={() => setIsMobileOpen(false)}
                  className="flex w-full h-12 items-center justify-center rounded-xl bg-[#7E30E1] text-base font-semibold text-white shadow-lg shadow-[#7E30E1]/30 active:scale-95 transition-all"
                >
                  Start Project
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
