'use client'
import React from 'react';
import { motion } from "framer-motion"

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="h-px w-8 bg-[#E26EE5]" />
          <span className="text-xs font-medium uppercase tracking-wider text-[#7E30E1]">{eyebrow}</span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(1.875rem,4vw,3rem)] font-semibold tracking-tight text-[#49108B] leading-[1.1]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg text-[#49108B]/70 leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}