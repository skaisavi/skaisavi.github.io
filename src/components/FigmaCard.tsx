'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { FigmaDesign } from '@/data'
import Reveal from './Reveal'

function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M14 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
      <path d="M15 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M6 13a3 3 0 0 0-3 3v1h2v-1a1 1 0 0 1 1-1h1v-2H6z" />
      <path d="M19 13v2h-2v-2a1 1 0 0 1 1-1h1v-2h-1a3 3 0 0 0-3 3v1h2v-1a1 1 0 0 1 1-1z" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 15L15 5M15 5H7M15 5v8" />
    </svg>
  )
}

const springConfig = { stiffness: 600, damping: 40, mass: 0.5 }

export default function FigmaCard({ design, delay = 0 }: { design: FigmaDesign; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, springConfig)
  const y = useSpring(rawY, springConfig)
  const rotateY = useTransform(x, [-0.5, 0.5], ['-7deg', '7deg'])
  const rotateX = useTransform(y, [-0.5, 0.5], ['7deg', '-7deg'])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const onMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateY, rotateX, transformPerspective: 900, height: '100%' }}
      >
        <div className="card-media" style={{ background: design.gradient }}>
          <span className="card-tag figma-tag">
            <FigmaIcon />
            {design.category}
          </span>
          <p className="card-media-title">{design.title}</p>
        </div>
        <div className="card-body">
          <div className="card-header">
            <h3>{design.title}</h3>
            <a
              href={design.href}
              className="card-arrow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${design.title}`}
            >
              <ArrowIcon />
            </a>
          </div>
          <p>{design.description}</p>
          <div className="card-tech">
            <span>Figma</span>
            <span>UI/UX</span>
            <span>Design</span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}
