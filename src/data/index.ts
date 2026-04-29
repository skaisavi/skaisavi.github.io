export interface NavLink {
  href: string
  label: string
}

export interface Project {
  id: string
  title: string
  tag: string
  gradient: string
  problem: string
  description: string
  tech: string[]
  href: string
}

export interface TimelineItem {
  role: string
  company: string
  period: string
  badge: 'current' | 'edu'
  badgeLabel: string
  description: string
  tags: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
  variant?: 'default' | 'accent' | 'large'
}

export interface NowItem {
  label: string
  value: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const TYPEWRITER_PHRASES: string[] = [
  'beautiful interfaces.',
  'seamless experiences.',
  'modern web apps.',
  'things people love.',
]

export const PROJECTS: Project[] = [
  {
    id: 'autodrive',
    title: 'AutoDrive',
    tag: 'Marketplace',
    gradient: 'linear-gradient(135deg, #0d1117 0%, #1a1f3c 60%, #0f2167 100%)',
    problem: 'Car buyers wasted hours across fragmented sites with no price transparency or trust signals.',
    description:
      'Built a full UK car marketplace from scratch — real-time search, HPI checks, price history charts, and part-exchange calculator. Designed and shipped solo as a single-page app.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    href: 'https://skaisavi.github.io/autodrive',
  },
  {
    id: 'project-two',
    title: 'Your Next Project',
    tag: 'Coming soon',
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #1f0a2e 60%, #3d0066 100%)',
    problem: 'Describe the real user problem your project solved.',
    description:
      'Replace with your actual project. What did you build, what was your specific role, and what was the measurable outcome?',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    href: '#',
  },
  {
    id: 'project-three',
    title: 'Another Great Project',
    tag: 'Design system',
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0a2010 60%, #003322 100%)',
    problem: 'Describe the problem this project addressed.',
    description:
      'A third showcase piece. Replace with a real project — ideally one that shows range: a different domain, stack, or scale from the others.',
    tech: ['TypeScript', 'Vue', 'Figma'],
    href: '#',
  },
]

export const EXPERIENCE: TimelineItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Codewave Limited · Full-time',
    period: '2024 — Present',
    badge: 'current',
    badgeLabel: 'Current',
    description:
      'Building and maintaining client-facing websites across a range of industries. Led UI redesigns focused on smoother interactions and visual polish — turning existing sites into modern, responsive experiences that clients were genuinely proud of.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    role: 'BTEC Level 3 Extended Diploma in IT',
    company: 'West Herts College · Watford · DDM',
    period: '2022 — 2024',
    badge: 'edu',
    badgeLabel: 'Education',
    description:
      'Graduated with Distinction, Distinction, Merit. Covered web development, software design, networking, and database fundamentals — with a strong focus on building and deploying real-world projects throughout.',
    tags: ['Web Development', 'Software Design', 'Databases', 'Networking'],
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue', 'TypeScript'],
    variant: 'large',
  },
  { title: 'Styling', items: ['Tailwind', 'SCSS', 'CSS Animations', 'Responsive Design'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'] },
  { title: 'Tools', items: ['Git & GitHub', 'Figma', 'VS Code', 'Vite'], variant: 'accent' },
  { title: 'Principles', items: ['Accessibility', 'Performance', 'SEO', 'UI/UX Design'] },
]

export const NOW_ITEMS: NowItem[] = [
  { label: 'Learning', value: 'Next.js & React Server Components' },
  { label: 'Building', value: 'This portfolio' },
  { label: 'Reading', value: "You Don't Know JS" },
]
