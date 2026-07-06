import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle2,
  Cpu,
  ExternalLink,
  Github,
  Layers,
  ShieldCheck,
  Users,
} from 'lucide-react'
import SEO from '../../components/SEO'
import { caseStudyProjects, getProjectBySlug } from '../../data/projects'

const visualThemes = {
  amber: {
    panel: 'from-white/70 via-neutral-200/45 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
    badge: 'bg-black/10 text-gray-900 dark:bg-white/15 dark:text-white',
  },
  emerald: {
    panel: 'from-white/70 via-neutral-200/45 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
    badge: 'bg-black/10 text-gray-900 dark:bg-white/15 dark:text-white',
  },
  indigo: {
    panel: 'from-white/70 via-neutral-200/45 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
    badge: 'bg-black/10 text-gray-900 dark:bg-white/15 dark:text-white',
  },
  sky: {
    panel: 'from-white/70 via-neutral-200/45 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
    badge: 'bg-black/10 text-gray-900 dark:bg-white/15 dark:text-white',
  },
  violet: {
    panel: 'from-white/70 via-neutral-200/45 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
    badge: 'bg-black/10 text-gray-900 dark:bg-white/15 dark:text-white',
  },
}

const highlightIcons = [Cpu, Layers, BarChart3, ShieldCheck]
const themedSection = 'section-padding bg-transparent'

export default function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project?.caseStudy || project.caseStudy.template !== 'generic') {
    return <Navigate to="/projects" replace />
  }

  const caseStudy = project.caseStudy
  const theme = visualThemes[project.visual?.theme] || visualThemes.sky
  const currentIndex = caseStudyProjects.findIndex((item) => item.slug === project.slug)
  const previousProject = currentIndex > 0 ? caseStudyProjects[currentIndex - 1] : null
  const nextProject = currentIndex >= 0 && currentIndex < caseStudyProjects.length - 1
    ? caseStudyProjects[currentIndex + 1]
    : null

  return (
    <>
      <SEO
        title={`${project.title} - Case Study`}
        description={caseStudy.seoDescription || project.tagline}
        image={project.image || '/og-preview.png'}
        url={project.caseStudyPath}
        type="article"
      />

      <div className="pt-20">
        <section className={themedSection}>
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={18} />
                Back to Projects
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium mb-6 ${theme.badge}`}>
                  <CheckCircle2 size={16} />
                  {caseStudy.eyebrow || project.category}
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {caseStudy.title}
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  {caseStudy.subtitle}
                </p>

                <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <Users size={18} className="text-primary" />
                    {project.role}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    {project.timeline}
                  </span>
                </div>

                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg mb-8">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">TL;DR:</strong> {caseStudy.overview}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary gap-2"
                    >
                      <Github size={18} />
                      View Repository
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline gap-2"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`relative min-h-[320px] overflow-hidden rounded-lg border border-white/60 dark:border-white/15 bg-gradient-to-br ${theme.panel}`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full min-h-[320px] w-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-white/40 dark:bg-black/20" />
                    <div className="relative h-full min-h-[320px] flex flex-col justify-between p-8">
                      <div>
                    <span className="inline-flex px-3 py-1 rounded-lg bg-white/70 dark:bg-white/10 text-xs font-semibold text-gray-700 dark:text-gray-200 border border-white/50 dark:border-white/10">
                          {project.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-7xl md:text-8xl font-black text-gray-900/10 dark:text-white/10 mb-4">
                          {project.visual?.label || project.title.slice(0, 2).toUpperCase()}
                        </p>
                        <p className="text-gray-700 dark:text-gray-200 text-lg max-w-md">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                {project.image && project.status && (
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex px-3 py-1 rounded-lg bg-black/75 dark:bg-white/15 text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-lg">
                      {project.status}
                    </span>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className={themedSection}>
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                ['The Challenge', caseStudy.problem],
                ['What I Built', caseStudy.solution],
                ['My Contribution', caseStudy.contribution],
              ].map(([title, description], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {caseStudy.detailSections?.length > 0 && (
          <section className={themedSection}>
            <div className="section-container">
              <div className="grid lg:grid-cols-3 gap-6">
                {caseStudy.detailSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-panel rounded-lg p-6"
                  >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {section.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={themedSection}>
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="section-title">
                <span className="gradient-text">Technical Highlights</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.highlights.map((highlight, index) => {
                const HighlightIcon = highlightIcons[index % highlightIcons.length]

                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card"
                  >
                    <HighlightIcon className="text-primary mb-4" size={28} />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className={themedSection}>
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Snapshot
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {caseStudy.outcomes.map((outcome) => (
                    <div key={outcome.label} className="glass-panel rounded-lg p-5">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{outcome.label}</p>
                      <p className="text-2xl font-bold text-primary mb-2">{outcome.value}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{outcome.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={themedSection}>
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {previousProject ? (
                <Link to={previousProject.caseStudyPath} className="btn-outline gap-2">
                  <ArrowLeft size={18} />
                  {previousProject.title}
                </Link>
              ) : (
                <span />
              )}

              {nextProject ? (
                <Link to={nextProject.caseStudyPath} className="btn-primary gap-2">
                  {nextProject.title}
                  <ArrowRight size={18} />
                </Link>
              ) : (
                <Link to="/projects" className="btn-primary gap-2">
                  All Projects
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
