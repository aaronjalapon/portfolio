export default function SkillBadge({ name, icon: Icon, level }) {
  return (
    <div className="flex items-center gap-3 p-4 glass rounded-xl hover:border-primary/30 dark:hover:border-primary/30 transition-all">
      {Icon && <Icon size={20} className="text-primary flex-shrink-0" />}
      <div className="flex-grow">
        <span className="text-sm font-medium text-gray-900 dark:text-white">{name}</span>
        {level && (
          <div className="mt-1.5 h-1.5 bg-white/20 dark:bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
              style={{ width: `${level}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
