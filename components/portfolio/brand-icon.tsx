import { cn } from '@/lib/utils'

export function BrandIcon({ src, alt = '', className }: { src: string; alt?: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={cn('size-5 object-contain brightness-0 invert', className)} />
  )
}
