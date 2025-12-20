import { ArrowRight, Calendar, Users, ExternalLink, Github } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const { title, slug, tagline, role, timeline, tags, image, featured, link, github } = project
  const navigate = useNavigate()

  const openDemo = (e, url) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(url, '_blank')
  }

  return (
    <div 
      className={`group card card-hover block overflow-hidden cursor-pointer ${featured ? 'lg:col-span-2' : ''}`}
      onClick={() => navigate(`/projects/${slug}`)}
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 -mx-6 -mt-6 mb-6 overflow-hidden bg-dark-600">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600">
            <span className="text-6xl font-bold opacity-20">{title[0]}</span>
          </div>
        )}
        {featured && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
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
              className="px-2 py-1 bg-dark-600 text-gray-400 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
            View Case Study
            <ArrowRight size={16} />
          </span>
          
          {link && (
            <button
              type="button"
              onClick={(e) => openDemo(e, link)}
              className="inline-flex items-center gap-1 text-gray-400 text-sm hover:text-primary transition-colors z-10"
              title="Live Demo"
            >
              <ExternalLink size={14} />
              Demo
            </button>
          )}
          
          {github && (
            <button
              type="button"
              onClick={(e) => openDemo(e, github)}
              className="inline-flex items-center gap-1 text-gray-400 text-sm hover:text-primary transition-colors z-10"
              title="GitHub Repository"
            >
              <Github size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
