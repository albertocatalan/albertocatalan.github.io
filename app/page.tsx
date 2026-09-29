import { AwsCertifications } from '@/components/portfolio/aws-certifications'
import { ContactFooter } from '@/components/portfolio/contact-footer'
import { EducationLanguages } from '@/components/portfolio/education-languages'
import { ExperienceTimeline } from '@/components/portfolio/experience-timeline'
import { Hero } from '@/components/portfolio/hero'
import { SiteNav } from '@/components/portfolio/site-nav'
import { TechStack } from '@/components/portfolio/tech-stack'
import { TrainingGrid } from '@/components/portfolio/training-grid'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ExperienceTimeline />
        <AwsCertifications />
        <TrainingGrid />
        <TechStack />
        <EducationLanguages />
      </main>
      <ContactFooter />
    </>
  )
}
