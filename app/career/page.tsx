"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

// Mock data for current openings
const openings = [
  {
    id: "frontend-dev",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We are looking for an experienced developer to build smooth, animated interfaces using Next.js, React 19, and GSAP."
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Delhi, India (Hybrid)",
    type: "Full-time",
    description: "Shape the visual identity of our products. Experience with Base UI and accessible component design is a huge plus."
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Contract",
    description: "Help us scale our infrastructure, optimize CI/CD pipelines, and manage our cloud architecture deployments."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 120 }
  }
};

export default function CareerPage() {
  return (
    <main className="min-h-screen pb-20">
      
      {/* 
        HERO SECTION: Full-width Image at the top 
      */}
      <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[65vh] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          // Using a high-quality placeholder image for the team/office vibe
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop" 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient to blend the image bottom with the page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F3F8FF] via-transparent to-transparent opacity-80" />
      </div>

      {/* 
        HERO TEXT: Floating card overlapping the image 
      */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 -mt-24 md:-mt-32 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl p-8 md:p-12 lg:p-16 rounded-3xl shadow-xl border border-primary/10 text-center"
        >
          <h1 className="max-w-3xl mx-auto mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-primary-dark text-balance">
            Build something amazing today
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-primary-dark/70">
            Join a passionate team of creators and engineers. We are always looking for talented individuals to help us push boundaries and build scalable architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#openings" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded-xl bg-primary hover:bg-primary-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              View Openings
              <ArrowRight className="w-5 h-5 ml-2 -mr-1" />
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-primary-dark bg-white border-2 border-primary/10 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              About Our Culture
            </a>
          </div>
        </motion.div>
      </section>

      {/* 
        OPENINGS SECTION 
      */}
      <div id="openings" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 space-y-8 scroll-mt-24">
        <div className="flex items-center justify-between border-b border-primary/10 pb-4">
          <h2 className="text-2xl font-bold text-primary-dark">Current Openings</h2>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
            {openings.length} Positions
          </span>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {openings.map((job) => (
            <motion.div 
              key={job.id} 
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-primary/10 hover:border-accent flex flex-col group"
            >
              <div className="mb-4">
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  {job.department}
                </span>
                <h3 className="text-xl font-bold text-primary-dark mt-1 group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
              </div>

              <p className="text-primary-dark/70 text-sm mb-6 flex-grow">
                {job.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-primary-dark/60">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-primary-dark/60">
                  <Briefcase className="w-4 h-4 mr-2 text-primary" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-primary-dark/60">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Flexible Hours
                </div>
              </div>

              <Link 
                href={`/career/${job.id}`}
                className="mt-auto w-full inline-flex items-center justify-center bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary-dark transition-colors group-hover:shadow-md"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Fallback for no openings / general application */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center"
        >
          <h3 className="text-xl font-bold text-primary-dark mb-2">Don't see a fit?</h3>
          <p className="text-primary-dark/70 mb-4 max-w-lg mx-auto">
            We are always eager to meet talented people. Send us your resume and we will keep you in mind for future roles.
          </p>
          <a href="mailto:hello@example.com" className="text-primary font-semibold hover:text-accent underline underline-offset-4">
            Send an open application
          </a>
        </motion.div>
      </div>
      
    </main>
  );
}