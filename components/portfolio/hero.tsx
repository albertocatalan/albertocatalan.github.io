import Image from 'next/image'
import { ArrowDown, Mail, MapPin, Send } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { BrandIcon } from './brand-icon'
import { Reveal } from './reveal'

function Avatar() {
  return (
    <div className="relative shrink-0">
      <div aria-hidden className="absolute -inset-3 rounded-full bg-cyan/20 blur-2xl" />
      <div className="hexagon relative grid size-28 place-items-center bg-gradient-to-br from-cyan to-aws p-[3px] sm:size-36">
        <div className="hexagon relative size-full overflow-hidden bg-[#0d1322]">
          <Image
            src="/images/profile.jpg"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 640px) 144px, 112px"
            className="object-cover"
          />
        </div>
      </div>
      <span className="absolute bottom-2 right-1 flex items-center gap-1 rounded-full border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-emerald-400">
        <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
        online
      </span>
    </div>
  )
}

const quickLinks = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: <Mail className="size-4" aria-hidden /> },
  { href: profile.linkedin, label: 'LinkedIn', icon: <BrandIcon src="/logos/linkedin.svg" className="size-4" />, external: true },
  { href: profile.github, label: 'GitHub', icon: <BrandIcon src="/logos/github.svg" className="size-4" />, external: true },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div aria-hidden className="tech-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-40 size-[28rem] rounded-full bg-aws/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal delay={80} className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
          <Avatar />
          <div>
            <h1 id="hero-title" className="text-balance font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 font-mono text-base text-cyan sm:text-lg">
              <span className="text-muted-foreground">{'// '}</span>
              {profile.title}
            </p>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {profile.subheading}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-6px_var(--cyan)] transition-transform hover:-translate-y-0.5"
          >
            Explore Experience & Architecture
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-aws/40 bg-aws/5 px-5 py-3 font-mono text-sm font-semibold text-aws transition-colors hover:bg-aws/15"
          >
            <Send className="size-4" aria-hidden />
            Get in Touch
          </a>
        </Reveal>

        <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-2">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="glass inline-flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-cyan/50 hover:text-foreground"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
          <span className="glass inline-flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs text-muted-foreground">
            <MapPin className="size-4 text-aws" aria-hidden />
            {profile.location}
            <span className="text-emerald-400">— {profile.availability}</span>
          </span>
        </Reveal>
      </div>
    </section>
  )
}
