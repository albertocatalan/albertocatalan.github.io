import { Boxes, Cloud, Code2, GitBranch, Radar } from 'lucide-react'
import { techStack } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const icons = [Cloud, Code2, Boxes, GitBranch, Radar]

export function TechStack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        id="stack-title"
        index="04"
        command="terraform state list"
        title="Technical Stack Matrix"
        description="The tools I rely on to provision, ship, and observe production systems."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {techStack.map((group, i) => {
          const Icon = icons[i % icons.length]
          const isAws = i % 2 === 1
          return (
            <Reveal key={group.category} delay={i * 70} className={cn(i === 0 && 'lg:col-span-2')}>
              <article className="glass h-full rounded-2xl p-6 transition-colors duration-300 hover:border-cyan/30">
                <div className="flex items-center gap-3">
                  <span
                    className={cn(
                      'grid size-10 place-items-center rounded-lg border',
                      isAws ? 'border-aws/40 bg-aws/10 text-aws' : 'border-cyan/40 bg-cyan/10 text-cyan',
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-mono text-base font-semibold">{group.category}</h3>
                    <p className="font-mono text-[11px] text-muted-foreground">module.{group.path.replace('/', '.')}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={cn(
                        'cursor-default rounded-md border border-border bg-background/50 px-2.5 py-1 font-mono text-xs text-foreground/85 transition-all duration-200',
                        isAws
                          ? 'hover:border-aws/60 hover:text-aws hover:shadow-[0_0_16px_-4px_var(--aws)]'
                          : 'hover:border-cyan/60 hover:text-cyan hover:shadow-[0_0_16px_-4px_var(--cyan)]',
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
