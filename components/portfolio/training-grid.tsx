import { ArrowUpRight } from 'lucide-react'
import { trainings } from '@/lib/portfolio-data'
import { BrandIcon } from './brand-icon'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

export function TrainingGrid() {
  return (
    <section aria-labelledby="training-title" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionHeading
        id="training-title"
        index="03"
        command="ls ./training --verified"
        title="Specialized Training & Accreditations"
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainings.map((t, i) => (
          <Reveal as="li" key={t.name} delay={i * 60}>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group flex h-full items-start gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-[0_0_30px_-14px_var(--cyan)]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-border bg-[#0d1322]">
                <BrandIcon src={t.logo} alt={`${t.issuer} logo`} className="size-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-pretty font-medium leading-snug">{t.name}</span>
                <span className="mt-1 block font-mono text-xs text-muted-foreground">
                  {t.issuer} · {t.date}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-cyan">
                  verify
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
