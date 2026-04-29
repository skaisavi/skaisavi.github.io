'use client'

import { useEffect, useRef, useState, ElementType } from 'react'

interface RevealProps {
  children: React.ReactNode
  as?: ElementType
  delay?: number
  className?: string
  [key: string]: unknown
}

export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setTimeout(() => setVisible(true), delay)
        observer.unobserve(entry.target)
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const TagEl = Tag as React.ElementType
  return (
    <TagEl
      ref={ref}
      className={`reveal${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`}
      {...rest}
    >
      {children}
    </TagEl>
  )
}
