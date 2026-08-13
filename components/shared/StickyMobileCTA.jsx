"use client"

import { Phone } from "lucide-react"
import { siteConfig } from "@/data/site-config"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#7E30E1]/10 bg-white/80 backdrop-blur-xl md:hidden"
          // SEO/A11y: Screen readers ko batane ke liye ki ye ek navigation/action area hai
          role="region" 
          aria-label="Quick Contact Options"
        >
          <div className="grid grid-cols-2 gap-2 p-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20WebNirmit,%20I%20want%20to%20build%20an%20MVP`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-medium text-white active:scale-95 transition-transform"
              // SEO/A11y: Screen reader ke liye description
              aria-label="Chat with WebNirmit on WhatsApp"
              // Conversion Tracking: Google Analytics custom events ke liye data attributes
              data-umami-event="WhatsApp Contact Click" 
              data-event-category="Lead Generation"
              data-event-action="Click WhatsApp Sticky"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0012.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 005.8 1.48h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.49-8.43zM12.09 21.8h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.83 9.83 0 01-1.5-5.26c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 016.98 2.9 9.8 9.8 0 012.9 6.98c0 5.45-4.44 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#7E30E1] px-4 py-3.5 text-sm font-medium text-white active:scale-95 transition-transform"
              // SEO/A11y: Navigation context
              aria-label="Jump to Contact Form to get a quote"
              // Conversion Tracking
              data-umami-event="Get Quote Click"
              data-event-category="Lead Generation"
              data-event-action="Click Get Quote Sticky"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Get Quote
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


// "use client"

// import { Phone } from "lucide-react"
// import { siteConfig } from "@/data/site-config"
// import { motion, AnimatePresence } from "framer-motion"
// import { useState, useEffect } from "react"

// export function StickyMobileCTA() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 600) {
//         setIsVisible(true)
//       } else {
//         setIsVisible(false)
//       }
//     }

//     window.addEventListener("scroll", toggleVisibility)
//     return () => window.removeEventListener("scroll", toggleVisibility)
//   }, [])

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 100, opacity: 0 }}
//           className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#7E30E1]/10 bg-white/80 backdrop-blur-xl md:hidden"
//         >
//           <div className="grid grid-cols-2 gap-2 p-3">
//             <a
//               href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20WebNirmit,%20I%20want%20to%20build%20an%20MVP`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-medium text-white active:scale-95 transition-transform"
//             >
//               <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//                 <path d="M20.52 3.48A11.86 11.86 0 0012.08 0C5.5 0 .16 5.34.16 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.28-1.65a11.9 11.9 0 005.8 1.48h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.49-8.43zM12.09 21.8h-.01a9.86 9.86 0 01-5.03-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.83 9.83 0 01-1.5-5.26c0-5.45 4.43-9.88 9.88-9.88a9.8 9.8 0 016.98 2.9 9.8 9.8 0 012.9 6.98c0 5.45-4.44 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
//               </svg>
//               WhatsApp
//             </a>
//             <a
//               href="#contact"
//               className="flex items-center justify-center gap-2 rounded-xl bg-[#7E30E1] px-4 py-3.5 text-sm font-medium text-white active:scale-95 transition-transform"
//             >
//               <Phone className="h-4 w-4" />
//               Get Quote
//             </a>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }