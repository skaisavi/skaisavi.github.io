'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { SKILL_GROUPS, NOW_ITEMS, type SkillGroup } from '@/data'

const pillContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const pillItem = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 500, damping: 28 },
  },
}

function BentoCell({ group, index }: { group: SkillGroup; index: number }) {
  const variantClass =
    group.variant === 'large' ? 'bento-cell large' :
    group.variant === 'accent' ? 'bento-cell accent-cell' :
    'bento-cell'

  return (
    <Reveal className={variantClass} delay={index * 50}>
      <h3>{group.title}</h3>
      <motion.div
        className="pills"
        variants={pillContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {group.items.map(item => (
          <motion.span key={item} variants={pillItem}>{item}</motion.span>
        ))}
      </motion.div>
    </Reveal>
  )
}

function NowCell() {
  return (
    <Reveal className="bento-cell now-cell">
      <h3>Right now ✦</h3>
      <motion.div
        className="now-list"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {NOW_ITEMS.map(({ label, value }) => (
          <motion.div
            className="now-item"
            key={label}
            variants={{
              hidden: { opacity: 0, x: -12 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 400, damping: 28 } },
            }}
          >
            <span className="now-label">{label}</span>
            <span className="now-value">{value}</span>
          </motion.div>
        ))}
      </motion.div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <Reveal as="span" className="section-tag">Expertise</Reveal>
        <Reveal as="h2" className="section-title">Tools of my craft.</Reveal>
        <div className="bento">
          {SKILL_GROUPS.map((group, i) => (
            <BentoCell key={group.title} group={group} index={i} />
          ))}
          <NowCell />
        </div>
      </div>
    </section>
  )
}
