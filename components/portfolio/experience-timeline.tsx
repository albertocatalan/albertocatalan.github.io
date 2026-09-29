'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import { experiences, type Experience } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { BrandIcon } from './brand-icon'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

function CompanyMark({ exp }: { exp: Experience }) {
  const accent = exp.accent === 'aws' ? 'text-aws border-aws/40' : 'text-cyan border-cyan/40'
  if (exp.companyLogo) {
    return (
      <div className={cn('relative size-12 shrink-0 overflow-hidden rounded-xl border bg-[#0b0f1a]', accent)}>
        <Image src={exp.companyLogo} alt={`${exp.company} logo`} fill sizes="48px" className="object-contain" />
      </div>
    )
  }
  return (
    <div className={cn('grid size-12 shrink-0 place-items-center rounded-xl border bg-[#0d1322]', accent)}>
      {exp.logo ? (
        <BrandIcon src={exp.logo} alt={`${exp.company} logo`} className="h-4 w-9" />
      ) : (
        <span className="font-mono text-lg font-bold" aria-hidden>
          {exp.monogram}
        </span>
      )}
    </div>
  )
}

function ExperienceCard({ exp, index, open, onToggle }: { exp: Experience; index: number; open: boolean; onToggle: () => void }) {
  const panelId = `exp-panel-${index}`
  const isAws = exp.accent === 'aws'
  return (
    <li className="relative pl-10 md:pl-14">
      <span
        aria-hidden
        className={cn(
          'absolute left-[7px] top-7 size-3.5 rounded-full border-2 bg-background md:left-[15px]',
          isAws ? 'border-aws shadow-[0_0_14px_var(--aws)]' : 'border-cyan shadow-[0_0_14px_var(--cyan)]',
        )}
      />
      <Reveal delay={index * 60}>
        <article
          className={cn(
            'glass group rounded-2xl transition-all duration-300',
            open ? (isAws ? 'border-aws/40' : 'border-cyan/40') : 'hover:border-cyan/30',
          )}
        >
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-start gap-4 rounded-2xl p-5 text-left focus-visible:outline-2 focus-visible:outline-cyan md:p-6"
          >
            <CompanyMark exp={exp} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-mono text-lg font-semibold">
                  {exp.company}
                  <span className="text-muted-foreground"> | </span>
                  <span className={isAws ? 'text-aws' : 'text-cyan'}>{exp.role}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden />
                {exp.location}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Key technologies">
                {exp.tags.map((tag) => (
                  <li key={tag} className="rounded border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <ChevronDown
              aria-hidden
              className={cn('mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300', open && 'rotate-180 text-cyan')}
            />
          </button>

          <div
            id={panelId}
            className={cn('grid transition-[grid-template-rows] duration-500 ease-out', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
          >
            <div className="overflow-hidden">
              <ul className="grid gap-3 border-t border-border px-5 py-5 md:grid-cols-2 md:px-6">
                {exp.highlights.map((h) => (
                  <li key={h.title} className="rounded-xl border border-border bg-background/40 p-4">
                    <p className={cn('font-mono text-sm font-semibold', isAws ? 'text-aws' : 'text-cyan')}>
                      {'> '}
                      {h.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </Reveal>
    </li>
  )
}

export function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        id="experience-title"
        index="01"
        command="kubectl get deployments --all-namespaces"
        title="Professional Experience"
        description="Six years building, automating, and operating production infrastructure. Expand any node to inspect the details."
      />
      <ol className="relative space-y-6">
        <span aria-hidden className="absolute left-[13px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan/60 via-border to-aws/60 md:left-[21px]" />
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={exp.company}
            exp={exp}
            index={i}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </ol>
    </section>
  )
}
