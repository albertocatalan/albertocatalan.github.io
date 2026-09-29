import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { BrandIcon } from './brand-icon'
import { CopyButton } from './copy-button'
import { Reveal } from './reveal'

export function ContactFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="tech-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 size-[40rem] -translate-x-1/2 rounded-full bg-aws/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center md:py-32">
        <Reveal>
          <p className="font-mono text-xs text-cyan">
            <span className="text-muted-foreground">06 /</span> ssh hello@catalan.cloud
          </p>
          <h2 id="contact-title" className="mt-4 text-balance font-mono text-4xl font-bold tracking-tight md:text-5xl">
            {"Let's Build Something "}
            <span className="bg-gradient-to-r from-cyan to-aws bg-clip-text text-transparent">Resilient</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Available for DevOps, Cloud Platform, and Site Reliability roles worldwide (Remote).
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          <div className="glass flex flex-col gap-3 rounded-xl p-5 sm:col-span-3 sm:flex-row sm:items-center">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-cyan/40 bg-cyan/10 text-cyan">
              <Mail className="size-5" aria-hidden />
            </span>
            <a href={`mailto:${profile.email}`} className="flex-1 break-all font-mono text-sm transition-colors hover:text-cyan sm:text-base">
              {profile.email}
            </a>
            <CopyButton value={profile.email} label="Copy email" className="w-fit" />
          </div>
          <a
            href={profile.phoneHref}
            className="glass flex items-center gap-3 rounded-xl p-5 transition-colors hover:border-cyan/40"
          >
            <Phone className="size-5 shrink-0 text-cyan" aria-hidden />
            <span className="font-mono text-sm">{profile.phoneDisplay}</span>
          </a>
          <div className="glass flex items-center gap-3 rounded-xl p-5">
            <MapPin className="size-5 shrink-0 text-aws" aria-hidden />
            <span className="text-sm">{profile.location}</span>
          </div>
          <div className="flex gap-3">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex flex-1 items-center justify-center gap-2 rounded-xl p-5 font-mono text-sm transition-colors hover:border-cyan/40"
            >
              <BrandIcon src="/logos/linkedin.svg" className="size-4" />
              <span className="sr-only sm:not-sr-only lg:not-sr-only">LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex flex-1 items-center justify-center gap-2 rounded-xl p-5 font-mono text-sm transition-colors hover:border-cyan/40"
            >
              <BrandIcon src="/logos/github.svg" className="size-4" />
              <span className="sr-only sm:not-sr-only lg:not-sr-only">GitHub</span>
            </a>
          </div>
        </Reveal>

        <p className="mt-16 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name} · deployed with zero downtime
        </p>
      </div>
    </footer>
  )
}
