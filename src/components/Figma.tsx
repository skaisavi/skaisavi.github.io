import Reveal from './Reveal'
import FigmaCard from './FigmaCard'
import { FIGMA_DESIGNS } from '@/data'

export default function Figma() {
  return (
    <section className="figma" id="figma">
      <div className="container">
        <Reveal as="span" className="section-tag">Design Portfolio</Reveal>
        <Reveal as="h2" className="section-title">Figma Designs & Prototypes.</Reveal>
      </div>
      <div className="projects-grid-wrap">
        <div className="projects-grid">
          {FIGMA_DESIGNS.map((design, i) => (
            <FigmaCard key={design.id} design={design} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
