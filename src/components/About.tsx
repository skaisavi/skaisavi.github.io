'use client'

import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(entry.target)
        const startTime = performance.now()
        let rafId: number

        const step = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) rafId = requestAnimationFrame(step)
          else setCount(target)
        }

        rafId = requestAnimationFrame(step)
        return () => cancelAnimationFrame(rafId)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, count }
}

function CountStat({ target, label }: { target: number; label: string }) {
  const { ref, count } = useCountUp(target)
  return (
    <div className="mini-stat">
      <div className="mini-num-row">
        <span className="mini-num" ref={ref}>{count}</span>
        <span className="mini-plus">+</span>
      </div>
      <span className="mini-label">{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal as="span" className="section-tag">About me</Reveal>
        <div className="about-grid">
          <Reveal className="about-visual">
            <div className="about-card">
              <div className="availability-badge">
                <span className="pulse-dot" />
                Available for work
              </div>
              <div className="about-card-stat">
                <CountStat target={2} label="Years exp." />
                <div className="mini-divider" />
                <CountStat target={5} label="Projects" />
              </div>
            </div>
          </Reveal>

          <Reveal className="about-text">
            <h2 className="section-title">
              Building experiences that feel <em>effortless</em>.
            </h2>
            <p>
              I&apos;m a frontend developer based in the UK, specialising in building modern web
              applications that are both beautiful and functional. I care deeply about the details —
              from pixel-perfect layouts to silky-smooth animations.
            </p>
            <p>
              I believe great software is invisible; it simply works the way users expect, delights
              them when they don&apos;t, and never gets in the way.
            </p>
            <a href="mailto:skaiste.savitri@gmail.com" className="inline-link">
              Let&apos;s talk →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
