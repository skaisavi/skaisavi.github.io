import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { PROJECTS } from '@/data'

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="container">
        <Reveal as="span" className="section-tag">Selected work</Reveal>
        <Reveal as="h2" className="section-title">Projects I&apos;m proud of.</Reveal>
      </div>
      <div className="projects-grid-wrap">
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
