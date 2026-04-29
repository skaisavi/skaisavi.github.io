'use client'

import { useEffect, useRef } from 'react'
import Reveal from './Reveal'
import { SKILL_GROUPS, NOW_ITEMS, type SkillGroup } from '@/data'

function BentoCell({ group, index }: { group: SkillGroup; index: number }) {
  const cellRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cell = cellRef.current
    if (!cell) return

    const pills = cell.querySelectorAll<HTMLSpanElement>('.pills span')
    pills.forEach((pill, pi) => {
      pill.style.opacity = '0'
      pill.style.transform = 'translateY(10px)'
      pill.style.transition = `opacity 0.4s ${index * 60 + pi * 40}ms, transform 0.4s ${index * 60 + pi * 40}ms`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        pills.forEach(pill => {
          pill.style.opacity = '1'
          pill.style.transform = 'translateY(0)'
        })
        observer.unobserve(entry.target)
      },
      { threshold: 0.2 },
    )
    observer.observe(cell)
    return () => observer.disconnect()
  }, [index])

  const variantClass =
    group.variant === 'large' ? 'bento-cell large' :
    group.variant === 'accent' ? 'bento-cell accent-cell' :
    'bento-cell'

  return (
    <div className={variantClass} ref={cellRef}>
      <h3>{group.title}</h3>
      <div className="pills">
        {group.items.map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  )
}

function NowCell() {
  const cellRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cell = cellRef.current
    if (!cell) return

    const items = cell.querySelectorAll<HTMLDivElement>('.now-item')
    items.forEach((item, i) => {
      item.style.opacity = '0'
      item.style.transform = 'translateX(-12px)'
      item.style.transition = `opacity 0.5s ${i * 100}ms, transform 0.5s ${i * 100}ms`
    })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        items.forEach(item => {
          item.style.opacity = '1'
          item.style.transform = 'translateX(0)'
        })
        observer.unobserve(entry.target)
      },
      { threshold: 0.3 },
    )
    observer.observe(cell)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bento-cell now-cell" ref={cellRef}>
      <h3>Right now ✦</h3>
      <div className="now-list">
        {NOW_ITEMS.map(({ label, value }) => (
          <div className="now-item" key={label}>
            <span className="now-label">{label}</span>
            <span className="now-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <Reveal as="span" className="section-tag">Expertise</Reveal>
        <Reveal as="h2" className="section-title">Tools of my craft.</Reveal>
        <Reveal className="bento">
          {SKILL_GROUPS.map((group, i) => (
            <BentoCell key={group.title} group={group} index={i} />
          ))}
          <NowCell />
        </Reveal>
      </div>
    </section>
  )
}
