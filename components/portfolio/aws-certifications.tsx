import { BadgeCheck, ExternalLink } from 'lucide-react'
import { awsCertifications } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { BrandIcon } from './brand-icon'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

function CertBadge({ code, level, tone }: { code: string; level: string; tone: 'cyan' | 'aws' }) {
  return (
    <div className="relative shrink-0">
      <div aria-hidden className={cn('absolute inset-2 rounded-full blur-2xl', tone === 'cyan' ? 'bg-cyan/30' : 'bg-aws/30')} />
      <div
        className={cn(
          'hexagon relative grid size-32 place-items-center p-[3px]',
          tone === 'cyan' ? 'bg-gradient-to-b from-cyan to-cyan/30' : 'bg-gradient-to-b from-aws to-aws/30',
        )}
      >
        <div className="hexagon flex size-full flex-col items-center justify-center gap-1 bg-[#0d1322]">
          <BrandIcon src="/logos/aws.svg" className="h-5 w-9" />
          <span className="font-mono text-xl font-bold">{code}</span>
          <span className={cn('font-mono text-[9px] uppercase tracking-[0.2em]', tone === 'cyan' ? 'text-cyan' : 'text-aws')}>
            {level}
          </span>
        </div>
      </div>
    </div>
  )
}

export function AwsCertifications() {
  return (
    <section id="certifications" aria-labelledby="certs-title" className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        id="certs-title"
        index="02"
        command="aws iam list-credentials --verified"
        title="Official AWS Certifications"
        description="Industry-recognized credentials, independently verifiable through Credly."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {awsCertifications.map((cert, i) => (
          <Reveal key={cert.code} delay={i * 100}>
            <article
              className={cn(
                'glass group relative flex h-full flex-col gap-6 overflow-hidden rounded-2xl p-6 transition-all duration-300 sm:flex-row sm:items-center md:p-8',
                cert.tone === 'cyan'
                  ? 'hover:border-cyan/50 hover:shadow-[0_0_40px_-12px_var(--cyan)]'
                  : 'hover:border-aws/50 hover:shadow-[0_0_40px_-12px_var(--aws)]',
              )}
            >
              <CertBadge code={cert.code} level={cert.level} tone={cert.tone} />
              <div className="flex flex-1 flex-col">
                <p className="flex items-center gap-1.5 font-mono text-xs text-emerald-400">
                  <BadgeCheck className="size-4" aria-hidden />
                  {cert.validity}
                </p>
                <h3 className="mt-2 text-balance font-mono text-xl font-semibold leading-snug">{cert.fullName}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Amazon Web Services (AWS)</p>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'mt-5 inline-flex w-fit items-center gap-2 rounded-lg border px-4 py-2 font-mono text-sm font-medium transition-colors',
                    cert.tone === 'cyan'
                      ? 'border-cyan/40 text-cyan hover:bg-cyan/10'
                      : 'border-aws/40 text-aws hover:bg-aws/10',
                  )}
                >
                  Verify on Credly
                  <ExternalLink className="size-3.5" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
