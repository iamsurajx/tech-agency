'use client'
import React from 'react';
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

type TrustedLogo = {
  name: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Patel",
    role: "Founder",
    company: "DataFlow (SaaS Analytics)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format",
    quote: "They shipped our MVP in 11 days. We raised $500k the next month. No MVP development agency has moved this fast for us.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO",
    company: "GlowCo (D2C Beauty)",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format",
    quote: "Fixed price meant no surprises. The headless site loads in 0.8s and our conversion is up 3x. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Ethan Chen",
    role: "CTO",
    company: "LaunchPad (US Startup)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format",
    quote: "Finally an offshore software team that codes like Silicon Valley. AI features worked day one. We're keeping them for v2.",
    rating: 5,
  },
];

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

export function Testimonials() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebNirmit",
    "review": testimonials.map((t) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": "5" },
      "reviewBody": t.quote,
      "publisher": { "@type": "Organization", "name": t.company }
    }))
  };

  return (
    <section id="testimonials" className="bg-white py-20 md:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-[1200px] text-center md:mb-16">
          <span className="mb-4 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#E26EE5]" />
            <span className="text- font-medium uppercase tracking-wider text-[#7E30E1]">Client Reviews</span>
            <span className="h-px w-8 bg-[#E26EE5]" />
          </span>
          <h2 className="text-[clamp(1.875rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[#49108B]">
            Founders who shipped their MVPs with us
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-[24px] border border-[#7E30E1]/10 bg-[#F3F8FF]/50 p-7">
              <div className="mb-4 flex gap-1">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#E26EE5] text-[#E26EE5]" />
                ))}
              </div>
              <p className="mb-6 text- leading-relaxed text-[#49108B]/80">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-[24px] bg-[#7E30E1]/10">
                  <Image src={t.image} alt={`Review by ${t.name}, ${t.role} at ${t.company}`} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <div className="text- font-semibold text-[#49108B]">{t.name}</div>
                  <div className="text- text-[#49108B]/60">{t.role} • {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}