'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/components/commons/animations'
import { Card } from '@/components/commons/ui/Card'
import { Eyebrow, SectionBand } from '@/components/commons/ui/Design'
import type { TechCopy } from '@/content/tech'
import { publicPath } from '@/lib/paths'

const label = 'text-xs font-semibold uppercase tracking-[0.18em] text-mode-accent'

export function TechProjects({ copy }: { copy: TechCopy }) {
  const labels = copy.projectLabels

  return (
    <SectionBand id="work">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-90px' }}>
        <motion.div variants={fadeUp}><Eyebrow>{copy.projectsEyebrow}</Eyebrow></motion.div>
        <div className="mt-7 space-y-6">
          {copy.projects.map((project) => (
            <motion.div key={project.gif} variants={fadeUp}>
              <Card variant="glass" padding="lg" className="rounded-xl">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                  <div>
                    <p className="text-xs font-medium text-text-secondary">{project.meta}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-7 text-text-primary">{project.title}</h3>
                    <p className="mt-3 text-base leading-7 text-mode-accent">{project.tagline}</p>
                    <p className={`mt-6 ${label}`}>{labels.context}</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{project.context}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="rounded-full bg-mode-accent-soft px-3 py-1 text-xs text-text-primary">{tag}</span>)}
                    </div>
                  </div>
                  <a href={publicPath(project.gif)} target="_blank" rel="noreferrer" aria-label={labels.openGif} title={labels.openGif} className="block overflow-hidden rounded-xl border border-mode-ring bg-white">
                    <img src={publicPath(project.gif)} alt={project.title} width={1000} height={556} loading="lazy" className="h-auto w-full" />
                  </a>
                </div>
                <div className="mt-8 grid gap-8 border-t border-mode-ring pt-7 md:grid-cols-3">
                  <div>
                    <p className={label}>{labels.did}</p>
                    <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-text-primary">
                      {project.did.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className={label}>{project.pointsLabel}</p>
                    <ol className="mt-3 space-y-4">
                      {project.points.map(([title, body]) => (
                        <li key={title}>
                          <p className="text-sm font-semibold leading-6 text-text-primary">{title}</p>
                          <p className="mt-1 text-sm leading-6 text-text-secondary">{body}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <p className={label}>{labels.impact}</p>
                    <p className="mt-3 text-sm leading-6 text-text-primary">{project.impact}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionBand>
  )
}
