'use client'

import { motion } from 'framer-motion'
import { ElementType } from 'react'

interface RevealProps {
  children: React.ReactNode
  as?: ElementType
  delay?: number
  className?: string
  [key: string]: unknown
}

const variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }: RevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motion.create(Tag as any)
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: 'spring',
        stiffness: 380,
        damping: 26,
        delay: delay / 1000,
      }}
      variants={variants}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
