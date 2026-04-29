'use client'

import { useRef, MouseEvent } from 'react'
import type { Project } from '@/data'
import Reveal from './Reveal'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 15L15 5M15 5H7M15 5v8" />
    </svg>
  )
}

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const cardRef = useRef<HTMLElement>(null)

  const onMouseMove = (e: MouseEvent<HTMLElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transition = 'transform 0.12s ease, box-shadow 0.4s ease'
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-8px)`
  }

  const onMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease'
    card.style.transform = 'perspective(800px) rotateY(0) rotateX(0) translateY(0)'
  }

  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <article ref={cardRef} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
        <div className="card-media" style={{ background: project.gradient }}>
          <span className="card-tag">{project.tag}</span>
          <p className="card-media-title">{project.title}</p>
        </div>
        <div className="card-body">
          <div className="card-header">
            <h3>{project.title}</h3>
            <a
              href={project.href}
              className="card-arrow"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}`}
            >
              <ArrowIcon />
            </a>
          </div>
          <p className="card-problem">
            <strong>Problem:</strong> {project.problem}
          </p>
          <p>{project.description}</p>
          <div className="card-tech">
            {project.tech.map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}
