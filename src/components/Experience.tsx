import Reveal from './Reveal'
import { EXPERIENCE, type TimelineItem } from '@/data'

function TimelineCard({ item, delay = 0 }: { item: TimelineItem; delay?: number }) {
  return (
    <Reveal className="timeline-item" delay={delay}>
      <div className="timeline-card">
        <div className="tl-header">
          <div className="tl-title-group">
            <h3 className="tl-role">{item.role}</h3>
            <p className="tl-company">{item.company}</p>
          </div>
          <div className="tl-meta-right">
            <span className="tl-date">{item.period}</span>
            <span className={`tl-badge ${item.badge}`}>{item.badgeLabel}</span>
          </div>
        </div>
        <p className="tl-desc">{item.description}</p>
        <div className="tl-tags">
          {item.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <Reveal as="span" className="section-tag">Experience</Reveal>
        <Reveal as="h2" className="section-title">Where I&apos;ve been.</Reveal>
        <div className="timeline">
          {EXPERIENCE.map((item, i) => (
            <TimelineCard key={item.role} item={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
