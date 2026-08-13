"use client"

import { useEffect } from "react"
import { Hero } from "@/components/sections/Hero"
import { TrustedBy } from "@/components/sections/TrustedBy"
import { Services } from "@/components/sections/Services"
import { WhyChoose } from "@/components/sections/WhyChoose"
import Process from "@/components/sections/Process"
import { Technologies } from "@/components/sections/Technologies"
import { Portfolio } from "@/components/sections/Portfolio"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { CTABanner } from "@/components/sections/CTABanner"
import { Contact } from "@/components/sections/Contact"
import { initScrollAnimations } from "@/lib/animations"

export default function Home() {
  useEffect(() => {
    initScrollAnimations()
  }, [])

  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyChoose />
      <Process />
      <Technologies />
      <Portfolio />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Contact />
    </>
  )
}
