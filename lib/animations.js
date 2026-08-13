import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const initScrollAnimations = () => {
  if (typeof window === "undefined") return
  
  // Fade up elements
  gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
    gsap.fromTo(el, 
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    )
  })

  // Stagger cards
  gsap.utils.toArray(".gsap-stagger").forEach((container) => {
    // 1. Get the items
    const rawItems = container.querySelectorAll(".gsap-stagger-item")
    
    // 2. Bail out if there are no items to animate in this container
    if (!rawItems || rawItems.length === 0) return

    // 3. Convert NodeList to a standard Array for GSAP safety
    const items = gsap.utils.toArray(rawItems)

    gsap.fromTo(items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      }
    )
  })
}

// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// export const fadeUp = {
//   initial: { opacity: 0, y: 24 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
// }

// export const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// export const initScrollAnimations = () => {
//   if (typeof window === "undefined") return
  
//   // Fade up elements
//   gsap.utils.toArray(".gsap-fade-up").forEach((el) => {
//     gsap.fromTo(el, 
//       { opacity: 0, y: 40 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     )
//   })

//   // Stagger cards
//   gsap.utils.toArray(".gsap-stagger").forEach((container) => {
//     const items = container.querySelectorAll(".gsap-stagger-item")
//     gsap.fromTo(items,
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: container,
//           start: "top 80%",
//         },
//       }
//     )
//   })
// }
