export default function TimelineItem({ item, isLast }) {
  const { title, organization, period, description, type } = item

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-600 transition-colors" />
      )}
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 ${
        type === 'work' 
          ? 'border-primary bg-primary/20' 
        : type === 'volunteer' 
            ? 'border-primary bg-primary/20' 
            : 'border-primary bg-primary/20'
      }`} />

      {/* Content */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <span className="text-sm text-gray-500">{period}</span>
        </div>
        <p className="text-primary font-medium text-sm mb-3">{organization}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  )
}
