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
  comingSoon?: boolean
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
    href: 'https://autodrive-delta.vercel.app',
  },
  {
    id: 'prime-steak',
    title: 'Prime Steak & Grill',
    tag: 'Restaurant',
    gradient: 'linear-gradient(135deg, #1a0800 0%, #3d1200 60%, #7c2d00 100%)',
    problem: 'Restaurants needed a slick online presence that converts visitors into diners without friction.',
    description:
      'Designed and built a full restaurant website for Prime Steak & Grill — featuring a visual menu, atmosphere showcase, and smooth user experience. Shipped as a fast React single-page app.',
    tech: ['React', 'CSS3', 'JavaScript'],
    href: 'https://prime-react-green.vercel.app',
  },
  {
    id: 'debeselis',
    title: 'Debeselis',
    tag: 'Banking App',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1a3a6b 60%, #7ba7e8 100%)',
    problem: 'Mobile banking UIs are cluttered and impersonal — users want something clean, modern, and actually pleasant to open.',
    description:
      'Built a cloud banking platform — animated login, OTP flow, dashboard with balance cards, and transaction history. Designed and shipped as a React SPA with Framer Motion animations and a sky-blue visual identity.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    href: 'https://debeselis-app.vercel.app/login',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    tag: 'UI Design',
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b2e4b 55%, #1e3a6e 100%)',
    problem: 'Teams needed a dashboard that surfaces key metrics at a glance without cognitive overload.',
    description:
      'A clean, minimal SaaS dashboard designed in Figma — analytics overview, sidebar navigation, data cards, and chart components, all built around a calm visual hierarchy.',
    tech: ['Figma', 'UI Design', 'Data Viz'],
    href: 'https://remix-read-74222076.figma.site/',
  },
  {
    id: 'lumiere',
    title: 'Lumière',
    tag: 'UI Design',
    gradient: 'linear-gradient(135deg, #1a0e2e 0%, #3b1f6b 55%, #7c4dbe 100%)',
    problem: 'Wanted to explore an elegant, light-driven visual language far from typical dark-mode defaults.',
    description:
      'A refined UI design project centred on atmosphere and light — warm gradients, considered typography, and an identity that feels more editorial than app-like.',
    tech: ['Figma', 'UI Design', 'Branding'],
    href: 'https://twirl-clever-74917925.figma.site/',
  },
  {
    id: 'coming-soon',
    title: 'Coming Soon',
    tag: 'UI Design',
    gradient: 'linear-gradient(135deg, #0e0c18 0%, #1a1630 55%, #251f42 100%)',
    problem: '',
    description: 'Something new is in the works. Check back soon.',
    tech: [],
    href: '#',
    comingSoon: true,
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
