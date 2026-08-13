// app/industries/[slug]/IndustryPageClient.jsx (Client Component)
'use client';

import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ChevronDown, ChevronUp } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Reusable Animation Components ---
const FadeInSection = ({ children, delay = 0, className = '' }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ScaleOnHover = ({ children, className = '' }) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.03 }}
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.div>
);

// --- Accordion Component ---
const AccordionItem = ({ question, answer, isOpen, onToggle, id }) => {
  return (
    <motion.div
      initial={false}
      className="bg-white rounded-2xl shadow-sm border border-primary/10 overflow-hidden"
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        id={`faq-question-${id}`}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
      >
        <span className="text-lg font-bold text-primary-dark">{question}</span>
        <span className="ml-4 flex-shrink-0" aria-hidden="true">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-primary" />
          ) : (
            <ChevronDown className="w-5 h-5 text-primary" />
          )}
        </span>
      </button>
      <motion.div
        id={`faq-answer-${id}`}
        role="region"
        aria-labelledby={`faq-question-${id}`}
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-4 text-primary-dark/70">{answer}</div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Client Component ---
export default function IndustryPageClient({ data }) {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    if (heroRef.current) {
      const ctx = gsap.context(() => {
        gsap.from('.hero-title', {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
          clearProps: 'all'
        });
        gsap.from('.hero-subtitle', {
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.4,
          ease: 'power3.out',
          clearProps: 'all'
        });
        gsap.from('.hero-cta', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.8,
          ease: 'power3.out',
          clearProps: 'all'
        });
        gsap.from('.video-container', {
          scale: 0.95,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: 'power2.out',
          clearProps: 'all'
        });
      }, heroRef);

      return () => ctx.revert();
    }
  }, [data]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log('Autoplay prevented:', e));
    }
  }, [data]);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faq.items.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.meta.title,
    "description": data.meta.description,
    "provider": {
      "@type": "Organization",
      "name": "WebNirmit"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industry Solutions",
      "itemListElement": data.howWeHelp.items.map((item, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.title,
          "description": item.desc
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
      </Head>

      <main className="bg-background text-primary-dark font-sans overflow-x-hidden">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

        {/* --- HERO SECTION --- */}
        <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
          <div className="video-container absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              aria-label="Background video demonstrating industry expertise"
            >
              <source src={data.hero.video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6 text-white">
                <h1
                  className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <span class="text-primary">${data.hero.title.highlight}</span> & 
                      <span class="text-accent">${data.hero.title.highlight2}</span>
                      <br />
                      <span class="text-white">${data.hero.title.rest}</span>
                    `,
                  }}
                />
                <p className="hero-subtitle text-lg md:text-xl text-white/90 max-w-lg">
                  {data.hero.subtitle}
                </p>
                <div className="hero-cta flex flex-wrap gap-4 pt-4">
                  <Link
                    href={data.hero.cta.primary.link}
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-primary-dark transform hover:-translate-y-1"
                  >
                    {data.hero.cta.primary.text}
                  </Link>
                  <Link
                    href={data.hero.cta.secondary.link}
                    className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    {data.hero.cta.secondary.text}
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </section>

        {/* --- CHALLENGES --- */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-4"
                dangerouslySetInnerHTML={{ __html: data.challenges.title }}
              />
              <p className="text-center text-primary-dark/70 max-w-2xl mx-auto mb-16">
                {data.challenges.description}
              </p>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.challenges.items.map((item, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <ScaleOnHover className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10 h-full">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h3>
                    <p className="text-primary-dark/70">{item.desc}</p>
                  </ScaleOnHover>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- HOW WE HELP --- */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-4"
                dangerouslySetInnerHTML={{ __html: data.howWeHelp.title }}
              />
              <p className="text-center text-primary-dark/70 max-w-2xl mx-auto mb-16">
                {data.howWeHelp.description}
              </p>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.howWeHelp.items.map((item, idx) => (
                <FadeInSection key={idx} delay={idx * 0.08}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10 h-full flex flex-col">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h3>
                    <p className="text-primary-dark/70 flex-1">{item.desc}</p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary-dark/80 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE --- */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-4"
                dangerouslySetInnerHTML={{ __html: data.whyChoose.title }}
              />
            </FadeInSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {data.whyChoose.items.map((item, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
                    <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                    <p className="text-primary-dark/70">{item.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS --- */}
        <section id="process" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                dangerouslySetInnerHTML={{ __html: data.process.title }}
              />
            </FadeInSection>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              {data.process.steps.map((step, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1} className="flex-1">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10 text-center">
                    <div className="text-4xl font-bold text-primary/20 mb-2">{step.num}</div>
                    <h3 className="text-xl font-bold text-primary-dark">{step.title}</h3>
                    <p className="text-primary-dark/70 text-sm mt-2">{step.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- IDEAL FOR --- */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7E30E1]/5 via-[#E26EE5]/5 to-[#7E30E1]/5"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#E26EE5]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#7E30E1]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#49108B]/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-sm font-semibold text-[#7E30E1] bg-[#7E30E1]/10 px-4 py-1.5 rounded-full mb-4"
              >
                Who Is This For?
              </motion.span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#49108B] mb-4 leading-tight">
                {data.idealFor.title}
                {/* <span className="block text-[#7E30E1] mt-1">Ideal For</span> */}
              </h2>

              <p className="text-base sm:text-lg text-[#49108B]/70 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
                Built for brands who demand excellence. Whether you're scaling your D2C empire or managing enterprise retail operations.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.05 }}
              viewport={{ once: true }}
            >
              {data.idealFor.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.04,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <span
                    className={`
                      relative
                      inline-flex 
                      items-center 
                      px-4 sm:px-5 md:px-7 
                      py-2 sm:py-2.5 md:py-3 
                      text-[11px] sm:text-xs md:text-base 
                      font-semibold 
                      text-[#49108B]
                      bg-white
                      rounded-full 
                      shadow-sm
                      border-2 border-[#7E30E1]/10
                      transition-all 
                      duration-300
                      hover:border-[#7E30E1]/30
                      hover:shadow-[0_8px_30px_rgba(126,48,225,0.12)]
                      hover:bg-gradient-to-br
                      hover:from-[#F3F8FF]
                      hover:to-white
                      cursor-default
                      before:absolute
                      before:inset-0
                      before:rounded-full
                      before:bg-gradient-to-br
                      before:from-[#7E30E1]/0
                      before:to-[#E26EE5]/0
                      before:transition-all
                      before:duration-300
                      hover:before:from-[#7E30E1]/5
                      hover:before:to-[#E26EE5]/5
                    `}
                  >
                    <span
                      className={`
                        absolute 
                        -top-1 -right-1 
                        w-2 h-2 
                        rounded-full 
                        bg-[#7E30E1]
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        shadow-lg
                        shadow-[#7E30E1]/30
                      `}
                    ></span>

                    <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[#7E30E1] text-[10px] sm:text-xs opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        ✦
                      </span>
                      {item}
                    </span>
                  </span>
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 sm:mt-12 md:mt-14 h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-[#7E30E1]/30 to-transparent rounded-full"
            ></motion.div>
          </div>

          <style jsx>{`
            @keyframes blob {
              0% {
                transform: translate(0px, 0px) scale(1);
              }
              33% {
                transform: translate(30px, -50px) scale(1.1);
              }
              66% {
                transform: translate(-20px, 20px) scale(0.9);
              }
              100% {
                transform: translate(0px, 0px) scale(1);
              }
            }
            .animate-blob {
              animation: blob 7s infinite;
            }
            .animation-delay-2000 {
              animation-delay: 2s;
            }
            .animation-delay-4000 {
              animation-delay: 4s;
            }
          `}</style>
        </section>

        {/* --- FAQ - Accordion --- */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <h2
                className="text-3xl md:text-4xl font-bold text-center mb-12"
                dangerouslySetInnerHTML={{ __html: data.faq.title }}
              />
            </FadeInSection>
            <div className="space-y-3">
              {data.faq.items.map((faq, idx) => (
                <FadeInSection key={idx} delay={idx * 0.08}>
                  <AccordionItem
                    id={idx}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openAccordion === idx}
                    onToggle={() => toggleAccordion(idx)}
                  />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2
                className="text-3xl md:text-5xl font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: data.cta.title }}
              />
              <p className="text-lg text-primary-dark/80 max-w-2xl mx-auto mt-4">{data.cta.description}</p>
              <div className="mt-8">
                <Link
                  href={data.cta.button.link}
                  className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-primary-dark transform hover:-translate-y-1"
                >
                  {data.cta.button.text}
                </Link>
                <p className="mt-4 text-sm text-primary-dark/60">{data.cta.subtext}</p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* <footer className="py-6 text-center text-primary-dark/50 text-sm border-t border-primary/10">
          {data.footer}
        </footer> */}
      </main>
    </>
  );
}
