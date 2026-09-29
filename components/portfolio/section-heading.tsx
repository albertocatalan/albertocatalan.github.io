import { Reveal } from './reveal'

export function SectionHeading({
  index,
  command,
  title,
  description,
  id,
}: {
  index: string
  command: string
  title: string
  description?: string
  id: string
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-mono text-xs tracking-wider text-cyan">
        <span className="text-muted-foreground">{index} /</span> {command}
      </p>
      <h2 id={id} className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </Reveal>
  )
}
