import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Users } from 'lucide-react'

export default function ProjectCard({ project }) {
  const { title, slug, tagline, role, timeline, tags, image, featured } = project

  return (
    <Link 
      to={`/projects/${slug}`}
      className={`group card card-hover block overflow-hidden ${featured ? 'lg:col-span-2' : ''}`}
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
        <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          View Case Study
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  )
}
