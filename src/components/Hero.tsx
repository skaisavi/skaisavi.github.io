'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TYPEWRITER_PHRASES } from '@/data'

function useTypewriter(phrases: string[], started: boolean): string {
  const [text, setText] = useState('')

  useEffect(() => {
    if (!started) return
    let pi = 0, ci = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const phrase = phrases[pi]
      if (!deleting) {
        ci++
        setText(phrase.slice(0, ci))
        if (ci === phrase.length) {
          deleting = true
          timer = setTimeout(tick, 2000)
        } else {
          timer = setTimeout(tick, 55 + Math.random() * 40)
        }
      } else {
        ci--
        setText(phrase.slice(0, ci))
        if (ci === 0) {
          deleting = false
          pi = (pi + 1) % phrases.length
          timer = setTimeout(tick, 400)
        } else {
          timer = setTimeout(tick, 30 + Math.random() * 20)
        }
      }
    }

    tick()
    return () => clearTimeout(timer)
  }, [phrases, started])

  return text
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 480, damping: 28 },
  },
}

export default function Hero() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 250)
    return () => clearTimeout(timer)
  }, [])

  const typed = useTypewriter(TYPEWRITER_PHRASES, started)

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
        <motion.p className="hero-eyebrow" variants={item}>
          <span className="deco-star">✦</span> Hello, I&apos;m
        </motion.p>
        <motion.h1 className="hero-title" variants={item}>
          <span className="line">Skaiste</span>
          <span className="line gradient-text">Savitri.</span>
        </motion.h1>
        <motion.p className="hero-role" variants={item}>
          <span className="typed-wrap">
            <span className="typed">{typed}</span>
            <span className="caret">|</span>
          </span>
        </motion.p>
        <motion.p className="hero-desc" variants={item}>
          Frontend developer crafting seamless digital experiences with a keen eye for detail and a
          love for purposeful design.
        </motion.p>
        <motion.div className="hero-chips" variants={item}>
          <span className="hero-chip">📍 UK</span>
          <span className="hero-chip">✓ Open to remote</span>
          <span className="hero-chip">✓ Full-time &amp; freelance</span>
        </motion.div>
        <motion.div className="hero-cta" variants={item}>
          <a href="#work" className="btn btn-primary magnetic">View my work</a>
          <a href="cv.pdf" className="btn btn-ghost magnetic" download>Download CV ↓</a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <span>Scroll</span>
        <div className="scroll-line" />
      </motion.div>
    </section>
  )
}
