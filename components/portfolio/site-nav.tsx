import { profile } from '@/lib/portfolio-data'

const links = [
  { href: '#experience', label: 'experience' },
  { href: '#certifications', label: 'certs' },
  { href: '#stack', label: 'stack' },
  { href: '#contact', label: 'contact' },
]

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-cyan">~/</span>
          {profile.initials.toLowerCase()}
          <span className="text-aws">.cloud</span>
        </a>
        <ul className="flex items-center gap-1 font-mono text-xs sm:gap-2 sm:text-sm">
          {links.map((link) => (
            <li key={link.href} className={link.label === 'certs' || link.label === 'stack' ? 'hidden sm:block' : ''}>
              <a
                href={link.href}
                className="rounded-md px-2.5 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-cyan"
              >
                ./{link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
