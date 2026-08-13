"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// shadcn/ui and custom components (Ensure these paths match your project structure)
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {SectionHeader} from "@/components/shared/SectionHeader"; // <-- Update this path according to your project

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type ProcessStep = {
  id: string;
  title: string;
  days: string;
  description: string;
  tags: string[];
};

const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discovery & Strategy",
    days: "Days 1-2",
    description: "We dive deep into your vision, competitors, and users. Together, we define the core features that will make your MVP stand out and validate your product-market fit.",
    tags: ["User Stories", "Wireframes", "Tech Stack", "Timeline"],
  },
  {
    id: "02",
    title: "Design & Prototype",
    days: "Days 3-5",
    description: "Our designers craft pixel-perfect interfaces with your brand identity. We create interactive prototypes so you can see and feel the product before any code is written.",
    tags: ["UI/UX Design", "Interactive Prototype", "Design System", "Brand Guidelines"],
  },
  {
    id: "03",
    title: "Development & AI Integration",
    days: "Days 6-11",
    description: "Senior engineers build your MVP with enterprise-grade code. We integrate AI features, APIs, and ensure your product is scalable, secure, and production-ready.",
    tags: ["Production Code", "AI Features", "API Integration", "Database Setup"],
  },
  {
    id: "04",
    title: "Testing & Launch",
    days: "Days 12-14",
    description: "Rigorous QA testing ensures a bug-free experience. We handle the deployment and assist with the launch strategy to get your MVP to market smoothly.",
    tags: ["QA Testing", "Deployment", "Performance", "Launch Strategy"],
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  // GSAP Animation for the vertical scroll line
  useGSAP(() => {
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // Animation starts when the top of the container hits the center of the viewport
          end: "bottom center", // Animation ends when the bottom of the container hits the center
          scrub: 1, // Smooth scrubbing effect
        },
      }
    );
  }, { scope: containerRef });

  return (
    // Changed bg-background to bg-white
    <section id="process" className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section using SectionHeader component */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl px-4 md:px-6 mb-20"
        >
          <SectionHeader
            eyebrow="Our Process"
            title="Agile MVP Development Process"
            description="How we go from idea to production code in exactly 14 days. No mystery, no delays."
            centered
          />
        </motion.div>

        {/* Timeline Section */}
        <div className="relative" ref={containerRef}>
          
          {/* Background Vertical Line */}
          <div className="absolute left-[27px] md:left-[39px] top-[28px] bottom-[28px] w-[2px] bg-primary/10 z-0"></div>
          
          {/* Animated Progress Vertical Line (GSAP Controls this) */}
          <div 
            ref={lineRef}
            className="absolute left-[27px] md:left-[39px] top-[28px] w-[2px] bg-primary z-0 origin-top"
          >
             {/* The small moving circle at the bottom of the line - changed border-background to border-white */}
             <div className="absolute bottom-[-4px] left-[-5px] w-3 h-3 bg-primary rounded-full border-2 border-white box-content shadow-[0_0_0_4px_rgba(126,48,225,0.15)]"></div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-16 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0.2, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px -20% 0px" }} // Trigger settings
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex gap-6 md:gap-12 group"
              >
                {/* Step Number Node */}
                <div className="shrink-0 flex flex-col items-center">
                  <motion.div 
                    // Changed background color animation to #ffffff (pure white)
                    initial={{ backgroundColor: "#ffffff", borderColor: "rgba(126, 48, 225, 0.15)", color: "rgba(73, 16, 139, 0.4)" }}
                    whileInView={{ backgroundColor: "#ffffff", borderColor: "#7E30E1", color: "#7E30E1" }}
                    viewport={{ once: false, margin: "-10% 0px -20% 0px" }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="w-14 h-14 md:w-20 md:h-14 rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold border-2 shadow-sm"
                  >
                    {step.id}
                  </motion.div>
                </div>

                {/* Content Card (shadcn UI) - Changed bg-background to bg-white */}
                <Card className="flex-1 rounded-3xl bg-white border-primary/10 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30 group-hover:shadow-primary/10">
                  <CardContent className="p-6 md:p-8">
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-primary-dark">
                        {step.title}
                      </h3>
                      <Badge variant="secondary" className="text-primary bg-primary/10 hover:bg-primary/20 border-none font-semibold px-3 py-1">
                        {step.days}
                      </Badge>
                    </div>

                    <p className="text-primary-dark/70 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Framer Motion Staggered Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {step.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.3, delay: tagIndex * 0.1 }} // Stagger effect
                        >
                          <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-primary/20 text-primary-dark/80 bg-primary/5 font-normal hover:bg-primary/10">
                            {/* Checkmark uses the new Accent color */}
                            <span className="text-accent">✓</span>
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// // shadcn/ui components (Ensure these paths match your project structure)
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// // Register GSAP Plugin
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, useGSAP);
// }

// type ProcessStep = {
//   id: string;
//   title: string;
//   days: string;
//   description: string;
//   tags: string[];
// };

// const processSteps: ProcessStep[] = [
//   {
//     id: "01",
//     title: "Discovery & Strategy",
//     days: "Days 1-2",
//     description: "We dive deep into your vision, competitors, and users. Together, we define the core features that will make your MVP stand out and validate your product-market fit.",
//     tags: ["User Stories", "Wireframes", "Tech Stack", "Timeline"],
//   },
//   {
//     id: "02",
//     title: "Design & Prototype",
//     days: "Days 3-5",
//     description: "Our designers craft pixel-perfect interfaces with your brand identity. We create interactive prototypes so you can see and feel the product before any code is written.",
//     tags: ["UI/UX Design", "Interactive Prototype", "Design System", "Brand Guidelines"],
//   },
//   {
//     id: "03",
//     title: "Development & AI Integration",
//     days: "Days 6-11",
//     description: "Senior engineers build your MVP with enterprise-grade code. We integrate AI features, APIs, and ensure your product is scalable, secure, and production-ready.",
//     tags: ["Production Code", "AI Features", "API Integration", "Database Setup"],
//   },
//   {
//     id: "04",
//     title: "Testing & Launch",
//     days: "Days 12-14",
//     description: "Rigorous QA testing ensures a bug-free experience. We handle the deployment and assist with the launch strategy to get your MVP to market smoothly.",
//     tags: ["QA Testing", "Deployment", "Performance", "Launch Strategy"],
//   },
// ];

// export default function Process() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const lineRef = useRef<HTMLDivElement>(null);

//   // GSAP Animation for the vertical scroll line
//   useGSAP(() => {
//     gsap.fromTo(
//       lineRef.current,
//       { height: "0%" },
//       {
//         height: "100%",
//         ease: "none",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top center", // Animation starts when the top of the container hits the center of the viewport
//           end: "bottom center", // Animation ends when the bottom of the container hits the center
//           scrub: 1, // Smooth scrubbing effect
//         },
//       }
//     );
//   }, { scope: containerRef });

//   return (
//     <section className="min-h-screen bg-background py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Header Section (Animated with Framer Motion) */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20 flex flex-col items-center"
//         >
//           <Badge variant="secondary" className="mb-6 text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-4 py-1.5 rounded-full border-none">
//             Our Process
//           </Badge>
//           <h1 className="text-2xl md:text-2xl font-bold text-primary-dark mb-6 tracking-tight">
//             Agile MVP Development Process
//           </h1>
//           <p className="text-lg text-primary-dark/70 max-w-2xl mx-auto">
//             How we go from idea to production code in exactly 14 days. No mystery, no delays.
//           </p>
//         </motion.div>

//         {/* Timeline Section */}
//         <div className="relative" ref={containerRef}>
          
//           {/* Background Vertical Line */}
//           <div className="absolute left-[27px] md:left-[39px] top-[28px] bottom-[28px] w-[2px] bg-primary/10 z-0"></div>
          
//           {/* Animated Progress Vertical Line (GSAP Controls this) */}
//           <div 
//             ref={lineRef}
//             className="absolute left-[27px] md:left-[39px] top-[28px] w-[2px] bg-primary z-0 origin-top"
//           >
//              {/* The small moving circle at the bottom of the line */}
//              <div className="absolute bottom-[-4px] left-[-5px] w-3 h-3 bg-primary rounded-full border-2 border-background box-content shadow-[0_0_0_4px_rgba(126,48,225,0.15)]"></div>
//           </div>

//           {/* Steps */}
//           <div className="flex flex-col gap-16 relative z-10">
//             {processSteps.map((step, index) => (
//               <motion.div
//                 key={step.id}
//                 initial={{ opacity: 0.2, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: false, margin: "-10% 0px -20% 0px" }} // Trigger settings
//                 transition={{ duration: 0.6, ease: "easeOut" }}
//                 className="flex gap-6 md:gap-12 group"
//               >
//                 {/* Step Number Node */}
//                 <div className="shrink-0 flex flex-col items-center">
//                   <motion.div 
//                     initial={{ backgroundColor: "#F3F8FF", borderColor: "rgba(126, 48, 225, 0.15)", color: "rgba(73, 16, 139, 0.4)" }}
//                     whileInView={{ backgroundColor: "#F3F8FF", borderColor: "#7E30E1", color: "#7E30E1" }}
//                     viewport={{ once: false, margin: "-10% 0px -20% 0px" }}
//                     transition={{ duration: 0.4, delay: 0.1 }}
//                     className="w-14 h-14 md:w-20 md:h-14 rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold border-2 shadow-sm"
//                   >
//                     {step.id}
//                   </motion.div>
//                 </div>

//                 {/* Content Card (shadcn UI) */}
//                 <Card className="flex-1 rounded-3xl bg-background border-primary/10 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/30 group-hover:shadow-primary/10">
//                   <CardContent className="p-6 md:p-8">
                    
//                     <div className="flex flex-wrap items-center gap-4 mb-4">
//                       <h3 className="text-xl md:text-2xl font-bold text-primary-dark">
//                         {step.title}
//                       </h3>
//                       <Badge variant="secondary" className="text-primary bg-primary/10 hover:bg-primary/20 border-none font-semibold px-3 py-1">
//                         {step.days}
//                       </Badge>
//                     </div>

//                     <p className="text-primary-dark/70 mb-6 leading-relaxed">
//                       {step.description}
//                     </p>

//                     {/* Framer Motion Staggered Tags */}
//                     <div className="flex flex-wrap gap-2 md:gap-3">
//                       {step.tags.map((tag, tagIndex) => (
//                         <motion.div
//                           key={tagIndex}
//                           initial={{ opacity: 0, scale: 0.9 }}
//                           whileInView={{ opacity: 1, scale: 1 }}
//                           viewport={{ once: false }}
//                           transition={{ duration: 0.3, delay: tagIndex * 0.1 }} // Stagger effect
//                         >
//                           <Badge variant="outline" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border-primary/20 text-primary-dark/80 bg-primary/5 font-normal hover:bg-primary/10">
//                             {/* Checkmark uses the new Accent color */}
//                             <span className="text-accent">✓</span>
//                             {tag}
//                           </Badge>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
