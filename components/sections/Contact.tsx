"use client"

import React, { useState } from "react"
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

// ============ DATA MERGED HERE ============
const siteConfig = {
  contact: {
    email: "webnirmit@zohomail.com",
    phone: "+91 62877 13871",
    whatsapp: "916287713871",
  }
}

// ============ BUTTON MERGED HERE ============
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline"; size?: "default" | "lg" }>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E30E1] disabled:opacity-50 active:scale-[0.98]",
          variant === "default" && "bg-[#7E30E1] text-white hover:bg-[#49108B] hover:shadow-lg hover:shadow-[#7E30E1]/20",
          variant === "outline" && "border-2 border-[#7E30E1]/20 bg-white text-[#49108B] hover:border-[#7E30E1]/50 hover:bg-[#F3F8FF]",
          size === "default" && "h-10 px-4 py-2",
          size === "lg" && "h-12 px-8 text-base",
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

type FormData = { name: string; email: string; company: string; budget: string; message: string; }
type Status = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", company: "", budget: "", message: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")
    try {
      const res = await fetch("https://formsubmit.co/ajax/webnirmit@zohomail.com", {
        method: "POST",
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Lead: ${formData.name} - ${formData.company || 'N/A'}`,
          _captcha: "false",
          _template: "table",
        })
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setFormData({ name: "", email: "", company: "", budget: "", message: "" })
    } catch {
      setStatus("error")
      setErrorMessage("Failed to send. Please email us at webnirmit@zohomail.com")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

 const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F3F8FF] py-24 md:py-32 font-sans">
      {/* Background Decorative Blur */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E26EE5]/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#7E30E1]/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          
          {/* Left Column: Text & Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10% 0px" }}
          >
            <motion.span variants={itemVariants} className="mb-6 inline-flex items-center gap-4">
              <span className="h-[2px] w-8 bg-[#E26EE5]" />
              <span className="text-sm font-bold uppercase tracking-widest text-[#7E30E1]">Contact Us</span>
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#49108B]">
              Let&apos;s build your MVP
            </motion.h2>
            
            <motion.p variants={itemVariants} className="mt-6 max-w-lg text-lg leading-relaxed text-[#49108B]/70">
              Tell us about your idea. We&apos;ll reply within 2 hours with next steps and a fixed price. No obligations.
            </motion.p>

            <motion.div variants={containerVariants} className="mt-12 space-y-6">
              
              {/* Email */}
              <motion.a variants={itemVariants} whileHover={{ x: 5 }} href={`mailto:${siteConfig.contact.email}`} className="group flex items-center gap-5 p-2 -ml-2 rounded-xl transition-colors hover:bg-white/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7E30E1] shadow-sm ring-1 ring-[#7E30E1]/10 transition-all duration-300 group-hover:bg-[#7E30E1] group-hover:text-white group-hover:shadow-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#49108B]/60 mb-0.5">Email</div>
                  <div className="text-lg font-semibold text-[#49108B] transition-colors group-hover:text-[#7E30E1]">{siteConfig.contact.email}</div>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a variants={itemVariants} whileHover={{ x: 5 }} href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-2 -ml-2 rounded-xl transition-colors hover:bg-white/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7E30E1] shadow-sm ring-1 ring-[#7E30E1]/10 transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-md">
           {/* WhatsApp SVG - Validated */}
<svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
</svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#49108B]/60 mb-0.5">WhatsApp</div>
                  <div className="text-lg font-semibold text-[#49108B] transition-colors group-hover:text-[#7E30E1]">+91 62877 13871</div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a variants={itemVariants} whileHover={{ x: 5 }} href={`tel:${siteConfig.contact.phone}`} className="group flex items-center gap-5 p-2 -ml-2 rounded-xl transition-colors hover:bg-white/50">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7E30E1] shadow-sm ring-1 ring-[#7E30E1]/10 transition-all duration-300 group-hover:bg-[#7E30E1] group-hover:text-white group-hover:shadow-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#49108B]/60 mb-0.5">Phone</div>
                  <div className="text-lg font-semibold text-[#49108B] transition-colors group-hover:text-[#7E30E1]">{siteConfig.contact.phone}</div>
                </div>
              </motion.a>

            </motion.div>
          </motion.div>

          {/* Right Column: Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Gradient Border Wrapper */}
            <div className="rounded-[2rem] bg-gradient-to-br from-[#7E30E1]/30 via-white/50 to-[#E26EE5]/30 p-[1px] shadow-[0_20px_60px_-15px_rgba(73,16,139,0.15)]">
              <div className="rounded-[calc(2rem-1px)] bg-white p-8 md:p-10 relative overflow-hidden">
                
                {/* Form Status Content */}
                {status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7E30E1]/10 text-[#7E30E1]">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-[#49108B]">Message Sent!</h3>
                    <p className="text-base text-[#49108B]/70 max-w-xs mx-auto">Thank you for reaching out. We will review your details and reply within 2 hours.</p>
                    <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8">Send another message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#49108B]">Name <span className="text-[#E26EE5]">*</span></label>
                        <input id="name" name="name" required value={formData.name} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#49108B]">Email <span className="text-[#E26EE5]">*</span></label>
                        <input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#49108B]">Company</label>
                        <input id="company" name="company" value={formData.company} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10" placeholder="Your startup" />
                      </div>
                      <div>
                        <label htmlFor="budget" className="mb-2 block text-sm font-semibold text-[#49108B]">Budget</label>
                        <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10 cursor-pointer">
                          <option value="" disabled className="text-gray-400">Select range</option>
                          <option value="₹1L - ₹3L">₹1L - ₹3L</option>
                          <option value="₹3L - ₹6L">₹3L - ₹6L</option>
                          <option value="₹6L+">₹6L+</option>
                          <option value="$5k - $15k">$5k - $15k</option>
                          <option value="$15k+">$15k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#49108B]">Project details <span className="text-[#E26EE5]">*</span></label>
                      <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 py-3 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10 resize-none" placeholder="Tell us about your MVP idea, timeline, and must-have features..." />
                    </div>

                    {status === "error" && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    <Button type="submit" disabled={status === "loading"} className="w-full rounded-xl" size="lg">
                      {status === "loading" ? (
                        <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Details...</>
                      ) : (
                        <>Send Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </Button>

                    <p className="text-center text-sm font-medium text-[#49108B]/50 mt-4">
                      We reply within 2 hours • No spam ever
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

// 'use client'

// import React, { useState } from "react"
// import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
// import { motion } from "framer-motion"
// import { cn } from "@/lib/utils"

// // ============ DATA MERGED HERE ============
// const siteConfig = {
//   contact: {
//     email: "webnirmit@zohomail.com",
//     phone: "+91 62877 13871",
//     whatsapp: "916287713871",
//   }
// }

// // ============ BUTTON MERGED HERE ============
// const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline"; size?: "default" | "lg" }>(
//   ({ className, variant = "default", size = "default", ...props }, ref) => {
//     return (
//       <button
//         ref={ref}
//         className={cn(
//           "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7E30E1] disabled:opacity-50 active:scale-[0.98]",
//           variant === "default" && "bg-[#7E30E1] text-white hover:bg-[#49108B] hover:shadow-lg hover:shadow-[#7E30E1]/20",
//           variant === "outline" && "border-2 border-[#7E30E1]/20 bg-white text-[#49108B] hover:border-[#7E30E1]/50 hover:bg-[#F3F8FF]",
//           size === "default" && "h-10 px-4 py-2",
//           size === "lg" && "h-12 px-8 text-base",
//           className
//         )}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// type FormData = { name: string; email: string; company: string; budget: string; message: string; }
// type Status = "idle" | "loading" | "success" | "error"

// export function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "", email: "", company: "", budget: "", message: "",
//   })
//   const [status, setStatus] = useState<Status>("idle")
//   const [errorMessage, setErrorMessage] = useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setStatus("loading")
//     setErrorMessage("")
//     try {
//       const res = await fetch("https://formsubmit.co/ajax/webnirmit@zohomail.com", {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           company: formData.company,
//           budget: formData.budget,
//           message: formData.message,
//           _subject: `New Lead: ${formData.name} - ${formData.company}`,
//           _captcha: "false",
//           _template: "table",
//         })
//       })
//       if (!res.ok) throw new Error("Failed")
//       setStatus("success")
//       setFormData({ name: "", email: "", company: "", budget: "", message: "" })
//     } catch {
//       setStatus("error")
//       setErrorMessage("Failed to send. Please email us at webnirmit@zohomail.com")
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
//   }

//   return (
//     <section id="contact" className="relative overflow-hidden bg-[#F3F8FF] py-24 md:py-32 font-sans">
//       {/* Background Decorative Blur */}
//       <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E26EE5]/10 blur-[100px] pointer-events-none" />
//       <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#7E30E1]/10 blur-[100px] pointer-events-none" />

//       <div className="relative mx-auto max-w-[1200px] px-4 md:px-6">
//         <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          
//           {/* Left Column: Text & Contact Info */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-10% 0px" }}
//           >
//             <motion.span variants={itemVariants} className="mb-6 inline-flex items-center gap-4">
//               <span className="h-[2px] w-8 bg-[#E26EE5]" />
//               <span className="text-sm font-bold uppercase tracking-widest text-[#7E30E1]">Contact Us</span>
//             </motion.span>
            
//             <motion.h2 variants={itemVariants} className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#49108B]">
//               Let's build your MVP
//             </motion.h2>
            
//             <motion.p variants={itemVariants} className="mt-6 max-w-lg text-lg leading-relaxed text-[#49108B]/70">
//               Tell us about your idea. We'll reply within 2 hours with next steps and a fixed price. No obligations.
//             </motion.p>

//             <motion.div variants={containerVariants} className="mt-12 space-y-6">
              
//               {/* Email */}
//               <motion.a variants={itemVariants} whileHover={{ x: 5 }} href={`mailto:${siteConfig.contact.email}`} className="group flex items-center gap-5 p-2 -ml-2 rounded-xl transition-colors hover:bg-white/50">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7E30E1] shadow-sm ring-1 ring-[#7E30E1]/10 transition-all duration-300 group-hover:bg-[#7E30E1] group-hover:text-white group-hover:shadow-md">
//                   <Mail className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <div className="text-sm font-medium text-[#49108B]/60 mb-0.5">Email</div>
//                   <div className="text-lg font-semibold text-[#49108B] transition-colors group-hover:text-[#7E30E1]">{siteConfig.contact.email}</div>
//                 </div>
//               </motion.a>

//               {/* WhatsApp */}
//               <motion.a variants={itemVariants} whileHover={{ x: 5 }} href={`https://wa.me/${siteConfig.contact.whatsapp}`} target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-2 -ml-2 rounded-xl transition-colors hover:bg-white/50">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7E30E1] shadow-sm ring-1 ring-[#7E30E1]/10 transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-white group-hover:shadow-md">
//                   <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.86 0 0012.08 0C5.5 0.16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 005.8 1.48h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.49-8.43zM12.09 21.8h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.83 9.83 0 01-1.5-5.26c0-5.45 4.43-9.88 9.88-9.88a9.8 0 016.98 2.9 9.8 9.8 0 012.9 6.98c0 5.45-4.44 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" /></svg>
//                 </div>
//                 <div>
//                   <div className="text-sm font-medium text-[#49108B]/60 mb-0.5">WhatsApp</div>
//                   <div className="text-lg font-semibold text-[#49108B] transition-colors group-hover:text-[#7E30E1]">+91 62877 13871</div>
//                 </div>
//               </motion.a>

//               {/* Phone */}
//               <motion.a variants={itemVariants} whileHover={{ x: 5 }} href={`tel:${siteConfig.contact.phone}`} className="group flex items-center gap-5 p-2 -ml-2 rounded-xl transition-colors hover:bg-white/50">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#7E30E1] shadow-sm ring-1 ring-[#7E30E1]/10 transition-all duration-300 group-hover:bg-[#7E30E1] group-hover:text-white group-hover:shadow-md">
//                   <Phone className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <div className="text-sm font-medium text-[#49108B]/60 mb-0.5">Phone</div>
//                   <div className="text-lg font-semibold text-[#49108B] transition-colors group-hover:text-[#7E30E1]">{siteConfig.contact.phone}</div>
//                 </div>
//               </motion.a>

//             </motion.div>
//           </motion.div>

//           {/* Right Column: Form Container */}
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-10% 0px" }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative"
//           >
//             {/* Gradient Border Wrapper */}
//             <div className="rounded-[2rem] bg-gradient-to-br from-[#7E30E1]/30 via-white/50 to-[#E26EE5]/30 p-[1px] shadow-[0_20px_60px_-15px_rgba(73,16,139,0.15)]">
//               <div className="rounded-[calc(2rem-1px)] bg-white p-8 md:p-10 relative overflow-hidden">
                
//                 {/* Form Status Content */}
//                 {status === "success" ? (
//                   <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
//                     <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7E30E1]/10 text-[#7E30E1]">
//                       <CheckCircle2 className="h-10 w-10" />
//                     </div>
//                     <h3 className="mb-3 text-2xl font-bold text-[#49108B]">Message Sent!</h3>
//                     <p className="text-base text-[#49108B]/70 max-w-xs mx-auto">Thank you for reaching out. We will review your details and reply within 2 hours.</p>
//                     <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8">Send another message</Button>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
//                     <div className="grid gap-6 sm:grid-cols-2">
//                       <div>
//                         <label className="mb-2 block text-sm font-semibold text-[#49108B]">Name <span className="text-[#E26EE5]">*</span></label>
//                         <input name="name" required value={formData.name} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10" placeholder="John Doe" />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-sm font-semibold text-[#49108B]">Email <span className="text-[#E26EE5]">*</span></label>
//                         <input type="email" name="email" required value={formData.email} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10" placeholder="john@company.com" />
//                       </div>
//                     </div>

//                     <div className="grid gap-6 sm:grid-cols-2">
//                       <div>
//                         <label className="mb-2 block text-sm font-semibold text-[#49108B]">Company</label>
//                         <input name="company" value={formData.company} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10" placeholder="Your startup" />
//                       </div>
//                       <div>
//                         <label className="mb-2 block text-sm font-semibold text-[#49108B]">Budget</label>
//                         <select name="budget" value={formData.budget} onChange={handleChange} className="h-12 w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 text-base text-[#49108B] outline-none transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10 cursor-pointer">
//                           <option value="" disabled className="text-gray-400">Select range</option>
//                           <option>₹1L - ₹3L</option>
//                           <option>₹3L - ₹6L</option>
//                           <option>₹6L+</option>
//                           <option>$5k - $15k</option>
//                           <option>$15k+</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="mb-2 block text-sm font-semibold text-[#49108B]">Project details <span className="text-[#E26EE5]">*</span></label>
//                       <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="w-full rounded-xl border border-[#7E30E1]/15 bg-[#F3F8FF]/50 px-4 py-3 text-base text-[#49108B] outline-none placeholder:text-[#49108B]/40 transition-all focus:border-[#7E30E1] focus:bg-white focus:ring-4 focus:ring-[#7E30E1]/10 resize-none" placeholder="Tell us about your MVP idea, timeline, and must-have features..." />
//                     </div>

//                     {status === "error" && (
//                       <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-3 rounded-xl bg-red-50 p-4 text-sm text-red-700 ring-1 ring-red-200">
//                         <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
//                         <span>{errorMessage}</span>
//                       </motion.div>
//                     )}

//                     <Button type="submit" disabled={status === "loading"} className="w-full rounded-xl" size="lg">
//                       {status === "loading" ? (
//                         <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Details...</>
//                       ) : (
//                         <>Send Message <Send className="ml-2 h-4 w-4" /></>
//                       )}
//                     </Button>

//                     <p className="text-center text-sm font-medium text-[#49108B]/50 mt-4">
//                       We reply within 2 hours • No spam ever
//                     </p>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </motion.div>
          
//         </div>
//       </div>
//     </section>
//   )
// }