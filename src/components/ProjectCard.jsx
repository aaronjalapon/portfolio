import { ArrowRight, Calendar, Users, ExternalLink, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const visualThemes = {
  amber: 'from-white/70 via-neutral-200/50 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
  emerald: 'from-white/70 via-neutral-200/50 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
  green: 'from-white/70 via-neutral-200/50 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
  indigo: 'from-white/70 via-neutral-200/50 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
  rose: 'from-white/70 via-neutral-200/50 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
  sky: 'from-white/70 via-neutral-200/50 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
  violet: 'from-white/70 via-neutral-200/50 to-black/10 dark:from-white/20 dark:via-white/10 dark:to-black/40',
}

export default function ProjectCard({ project }) {
  const {
    title,
    tagline,
    role,
    timeline,
    tags,
    image,
    link,
    github,
    category,
    status,
    visual,
    caseStudyPath,
  } = project
  const navigate = useNavigate()

  const hasCaseStudy = Boolean(caseStudyPath)
  const visualClass = visualThemes[visual?.theme] || visualThemes.sky

  const openLink = (e, url) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(url, '_blank')
  }

  const handleCardClick = () => {
    if (hasCaseStudy) {
      navigate(caseStudyPath)
    }
  }

  const openCaseStudy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigate(caseStudyPath)
  }

  return (
    <article
      className={`group card card-hover h-full flex flex-col overflow-hidden ${hasCaseStudy ? 'cursor-pointer' : ''}`}
      onClick={handleCardClick}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 -mx-6 -mt-6 mb-6 overflow-hidden bg-neutral-100 dark:bg-dark-900 border-b border-white/50 dark:border-white/10">
        {image ? (
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            width={400}
            height={224}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${visualClass} flex flex-col items-center justify-center text-center px-6`}>
            <span className="text-5xl md:text-6xl font-black text-gray-900/20 dark:text-white/20 mb-3">
              {visual?.label || title.slice(0, 2).toUpperCase()}
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {category}
            </span>
          </div>
        )}
        {category && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-black/75 dark:bg-white/15 text-white text-xs font-semibold rounded-lg backdrop-blur-md border border-white/30 shadow-lg">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {tagline}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
          {role && (
            <span className="flex items-center gap-1">
              <Users size={14} />
              {role}
            </span>
          )}
          {timeline && (
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {timeline}
            </span>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.slice(0, 4).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 text-xs rounded border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-neutral-200/70 dark:border-white/10">
          {hasCaseStudy && (
            <button
              type="button"
              onClick={openCaseStudy}
              className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all"
            >
              View Case Study
              <ArrowRight size={16} />
            </button>
          )}

          {!hasCaseStudy && status && (
            <span className="inline-flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
              {status}
            </span>
          )}
          
          {link && (
            <button
              type="button"
              onClick={(e) => openLink(e, link)}
              className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors z-10"
              title="Live Demo"
              aria-label={`Open ${title} live demo`}
            >
              <ExternalLink size={14} />
              Demo
            </button>
          )}
          
          {github && (
            <button
              type="button"
              onClick={(e) => openLink(e, github)}
              className="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors z-10"
              title="GitHub Repository"
              aria-label={`Open ${title} GitHub repository`}
            >
              <Github size={14} />
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
