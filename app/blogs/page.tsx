'use client'

import React from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion" // <-- FIX 1: Added 'Variants' here
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react"
import { allBlogs } from "@/content/blogs" // <-- Data centralized location se aa raha hai

// ============ ANIMATION VARIANTS ============
// FIX 2: Added ': Variants' type to both objects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function BlogsPage() {
  return (
    <main className="relative min-h-screen bg-[#F3F8FF] pt-32 pb-24 overflow-hidden font-sans">
      
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-[#E26EE5]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-[#7E30E1]/15 blur-[100px] pointer-events-none" />
      <div className="absolute top-80 -right-40 h-80 w-80 rounded-full bg-[#49108B]/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#7E30E1]/20 shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#E26EE5]" />
            <span className="text-sm font-semibold text-[#49108B]">Insights & Updates</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-[#49108B] mb-6"
          >
            Thoughts on building <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E30E1] to-[#E26EE5]">better products.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-[#49108B]/70 leading-relaxed"
          >
            Discover strategies, tech insights, and actionable guides for SaaS founders and D2C brands. We share exactly how we build and scale.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {allBlogs.map((post) => (
            <motion.article 
              key={post.slug} 
              variants={cardVariants}
              className="group flex flex-col bg-white rounded-[2rem] border border-[#7E30E1]/10 overflow-hidden hover:shadow-2xl hover:shadow-[#7E30E1]/15 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Blog Image Placeholder (Gradient) */}
              <Link href={`/blogs/${post.slug}`} className="relative h-56 w-full overflow-hidden block">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.imageGradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/30 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Blog Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs font-medium text-[#49108B]/50 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{post.displayDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/blogs/${post.slug}`} className="block mb-3 outline-none">
                  <h3 className="text-xl font-bold text-[#49108B] leading-snug group-hover:text-[#7E30E1] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-[#49108B]/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link 
                  href={`/blogs/${post.slug}`} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#7E30E1] mt-auto hover:text-[#49108B] transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </main>
  )
}

// 'use client'

// import React from "react"
// import Link from "next/link"
// import { motion } from "framer-motion"
// import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react"
// import { allBlogs } from "@/content/blogs" // <-- Data centralized location se aa raha hai

// // ============ ANIMATION VARIANTS ============
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//   }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
// }

// export default function BlogsPage() {
//   return (
//     <main className="relative min-h-screen bg-[#F3F8FF] pt-32 pb-24 overflow-hidden font-sans">
      
//       {/* Background Decorative Blurs */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[800px] rounded-full bg-[#E26EE5]/10 blur-[120px] pointer-events-none" />
//       <div className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-[#7E30E1]/15 blur-[100px] pointer-events-none" />
//       <div className="absolute top-80 -right-40 h-80 w-80 rounded-full bg-[#49108B]/10 blur-[100px] pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
//         {/* Page Header */}
//         <div className="mx-auto max-w-2xl text-center mb-16 md:mb-24">
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#7E30E1]/20 shadow-sm mb-6"
//           >
//             <Sparkles className="w-4 h-4 text-[#E26EE5]" />
//             <span className="text-sm font-semibold text-[#49108B]">Insights & Updates</span>
//           </motion.div>
          
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-tight tracking-tight text-[#49108B] mb-6"
//           >
//             Thoughts on building <br className="hidden sm:block"/>
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E30E1] to-[#E26EE5]">better products.</span>
//           </motion.h1>
          
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-lg text-[#49108B]/70 leading-relaxed"
//           >
//             Discover strategies, tech insights, and actionable guides for SaaS founders and D2C brands. We share exactly how we build and scale.
//           </motion.p>
//         </div>

//         {/* Blog Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {allBlogs.map((post) => (
//             <motion.article 
//               key={post.slug} 
//               variants={cardVariants}
//               className="group flex flex-col bg-white rounded-[2rem] border border-[#7E30E1]/10 overflow-hidden hover:shadow-2xl hover:shadow-[#7E30E1]/15 transition-all duration-500 hover:-translate-y-2"
//             >
//               {/* Blog Image Placeholder (Gradient) */}
//               <Link href={`/blogs/${post.slug}`} className="relative h-56 w-full overflow-hidden block">
//                 <div className={`absolute inset-0 bg-gradient-to-br ${post.imageGradient} opacity-90 transition-transform duration-700 group-hover:scale-105`} />
//                 <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/30 shadow-sm">
//                     {post.category}
//                   </span>
//                 </div>
//               </Link>

//               {/* Blog Content */}
//               <div className="flex flex-col flex-1 p-6 sm:p-8">
                
//                 {/* Meta Information */}
//                 <div className="flex items-center gap-4 text-xs font-medium text-[#49108B]/50 mb-4">
//                   <div className="flex items-center gap-1.5">
//                     <Calendar className="w-4 h-4" />
//                     <span>{post.displayDate}</span>
//                   </div>
//                   <div className="flex items-center gap-1.5">
//                     <Clock className="w-4 h-4" />
//                     <span>{post.readTime}</span>
//                   </div>
//                 </div>

//                 {/* Title */}
//                 <Link href={`/blogs/${post.slug}`} className="block mb-3 outline-none">
//                   <h3 className="text-xl font-bold text-[#49108B] leading-snug group-hover:text-[#7E30E1] transition-colors line-clamp-2">
//                     {post.title}
//                   </h3>
//                 </Link>

//                 {/* Excerpt */}
//                 <p className="text-[#49108B]/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
//                   {post.excerpt}
//                 </p>

//                 {/* Read More Link */}
//                 <Link 
//                   href={`/blogs/${post.slug}`} 
//                   className="inline-flex items-center gap-2 text-sm font-bold text-[#7E30E1] mt-auto hover:text-[#49108B] transition-colors"
//                 >
//                   Read Article
//                   <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//                 </Link>
                
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//       </div>
//     </main>
//   )
// }