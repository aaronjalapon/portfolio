import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="section-title">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className={`section-subtitle mt-4 ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
