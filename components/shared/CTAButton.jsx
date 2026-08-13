"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTAButton({ children, href = "#contact", variant = "default", size = "default", className = "", ...props }) {
  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
      <Button
        asChild
        variant={variant}
        size={size}
        className={className}
        {...props}
      >
        <a href={href} className="group">
          {children}
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
        </a>
      </Button>
    </motion.div>
  )
}
