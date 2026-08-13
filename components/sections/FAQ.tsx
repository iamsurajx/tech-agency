'use client'

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { cn } from "@/lib/utils"

// ============ CUSTOM ACCORDION - NO RADIX NEEDED ============
type AccordionContextType = {
  openValue: string | undefined;
  setOpenValue: (v: string | undefined) => void;
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null)
const AccordionItemContext = React.createContext<{ value: string; isOpen: boolean } | null>(null)

function Accordion({ children, collapsible = true, className, defaultValue }: any) {
  const [openValue, setOpenValue] = React.useState<string | undefined>(defaultValue)
  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue, collapsible }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

const AccordionItem = React.forwardRef<HTMLDivElement, { value: string; className?: string; children: React.ReactNode }>(
  ({ className, children, value, ...props }, ref) => {
    const ctx = React.useContext(AccordionContext)
    const isOpen = ctx?.openValue === value
    return (
      <AccordionItemContext.Provider value={{ value, isOpen }}>
        <div ref={ref} className={cn("border-b border-[#7E30E1]/15 overflow-hidden transition-colors hover:bg-[#F3F8FF]/50 px-2 sm:px-4", className)} {...props}>
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<HTMLButtonElement, { className?: string; children: React.ReactNode }>(
  ({ className, children, ...props }, ref) => {
    const accordionCtx = React.useContext(AccordionContext)
    const itemCtx = React.useContext(AccordionItemContext)
    const isOpen = itemCtx?.isOpen

    const handleClick = () => {
      if (!accordionCtx || !itemCtx) return
      if (accordionCtx.collapsible && isOpen) {
        accordionCtx.setOpenValue(undefined)
      } else {
        accordionCtx.setOpenValue(itemCtx.value)
      }
    }

    return (
      <div className="flex">
        <button
          ref={ref}
          onClick={handleClick}
          className={cn(
            "flex flex-1 items-center justify-between py-6 text-left font-semibold text-[#49108B] transition-all hover:text-[#7E30E1]",
            isOpen && "text-[#7E30E1]", // Highlight text when open
            className
          )}
          {...props}
        >
          <span className="pr-4 text-lg">{children}</span>
          <div className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3F8FF] transition-all duration-300",
            isOpen && "bg-[#7E30E1] text-white"
          )}>
            <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-300", isOpen && "rotate-180")} />
          </div>
        </button>
      </div>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<HTMLDivElement, { className?: string; children: React.ReactNode }>(
  ({ className, children, ...props }, ref) => {
    const itemCtx = React.useContext(AccordionItemContext)
    const isOpen = itemCtx?.isOpen

    return (
      <div
        ref={ref}
        className={cn(
          "grid overflow-hidden transition-all duration-300 ease-in-out",
          // The CSS Grid Trick for smooth height animation from 0 to auto
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
        {...props}
      >
        <div className="min-h-0">
          <div className={cn("pb-6 pt-0 text-base leading-relaxed text-[#49108B]/70 pr-12", className)}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

// ============ FAQ DATA ============
type FaqItem = { id: string; question: string; answer: string; }

const faqs: FaqItem[] = [
  {
    id: "faq-14-day-mvp",
    question: "How do you build and launch a custom SaaS MVP in just 14 days?",
    answer: "We don't start from scratch. We use our proprietary Next.js production starter kit, deploy a senior-only engineering team, and strictly lock the scope on Day 1. There are no 'meetings about meetings'. You get daily deployment builds, rapid iteration, and a production-ready application in two weeks.",
  },
  {
    id: "faq-fixed-price-model",
    question: "What exactly is included in your fixed-price MVP development model?",
    answer: "Everything required to launch: UX/UI design, full-stack development, cloud deployment, and 30 days of post-launch support. We define your exact MVP scope during the discovery phase. If you want to add features later, we quote them separately—meaning zero scope creep and no unexpected hourly billing.",
  },
  {
    id: "faq-ai-integration",
    question: "Do your MVP development services include AI integration by default?",
    answer: "Yes. Every competitive SaaS needs AI in 2026. As an AI-native product studio, we include foundational AI integrations—such as LLM chat interfaces, data summarization, or basic automated workflows—in our base MVP. Complex, autonomous AI agents are scoped separately.",
  },
  {
    id: "faq-global-clients",
    question: "Do you work with startup founders in the US, UK, or EU?",
    answer: "Absolutely. Over 40% of our clients are based in the US and Europe. We align with your timezone for critical strategy calls and use async Slack channels for daily technical updates. All code, database schemas, and documentation are written in flawless English for a clean handover.",
  },
  {
    id: "faq-ip-ownership",
    question: "Who owns the intellectual property (IP) and source code of the application?",
    answer: "You do. 100%. Unlike some dev shops that hold code hostage, we push directly to your company's GitHub repository from Day 1 of the sprint. There are no forced licensing fees and no vendor lock-in. It is your custom software and your IP.",
  },
  {
    id: "faq-post-launch-support",
    question: "Do you provide post-launch maintenance and support after the MVP is live?",
    answer: "Yes, 30 days of critical bug fixes are included for free. After your successful launch, most founders transition to our monthly retainer model to build new features, scale their infrastructure, and support early users. Or, you can take your clean code and hire your own in-house team—your choice.",
  },
];

// ============ MAIN FAQ ============
export function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <section id="faq" className="bg-white py-24 md:py-32 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionHeader 
            eyebrow="FAQ" 
            title="Questions founders ask" 
            description="Transparent answers. No sales speak." 
            centered 
          />
        </motion.div>

        {/* Animated Accordion List */}
        <Accordion collapsible className="w-full">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            >
              <AccordionItem value={`item-${i}`}>
                <AccordionTrigger>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
        
      </div>
    </section>
  )
}