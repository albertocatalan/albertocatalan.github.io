import { GraduationCap, Languages } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const languages = [
  { name: 'English', level: 'Proficient (C2)', value: 100 },
  { name: 'Spanish', level: 'Native', value: 100 },
]

export function EducationLanguages() {
  return (
    <section aria-labelledby="edu-title" className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <SectionHeading id="edu-title" index="05" command="cat /etc/profile" title="Education & Languages" />
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="glass h-full rounded-2xl p-6 md:p-8">
            <span className="grid size-10 place-items-center rounded-lg border border-cyan/40 bg-cyan/10 text-cyan">
              <GraduationCap className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-mono text-lg font-semibold">{"Bachelor's Degree"}</h3>
            <p className="text-muted-foreground">Computer Science / Engineering</p>
            <p className="mt-4 font-medium">Universidad de Sonora (UNISON)</p>
            <p className="font-mono text-xs text-muted-foreground">2014 – 2023 · Hermosillo, Sonora</p>
          </article>
        </Reveal>
        <Reveal delay={100}>
          <article className="glass h-full rounded-2xl p-6 md:p-8">
            <span className="grid size-10 place-items-center rounded-lg border border-aws/40 bg-aws/10 text-aws">
              <Languages className="size-5" aria-hidden />
            </span>
            <ul className="mt-5 space-y-5">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono font-semibold">{lang.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                  <div
                    className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary"
                    role="img"
                    aria-label={`${lang.name}: ${lang.level}`}
                  >
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan to-aws" style={{ width: `${lang.value}%` }} />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
