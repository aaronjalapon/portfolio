import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import SEO from '../components/SEO'
import { allProjects } from '../data/projects'

const allFilterValue = 'All'

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(allFilterValue)
  const [selectedTechnology, setSelectedTechnology] = useState(allFilterValue)

  const categories = useMemo(() => (
    [allFilterValue, ...new Set(allProjects.map((project) => project.category))]
  ), [])

  const technologies = useMemo(() => (
    [
      allFilterValue,
      ...new Set(allProjects.flatMap((project) => project.tags || [])),
    ].sort((a, b) => {
      if (a === allFilterValue) return -1
      if (b === allFilterValue) return 1
      return a.localeCompare(b)
    })
  ), [])

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return allProjects.filter((project) => {
      const searchableText = [
        project.title,
        project.tagline,
        project.role,
        project.timeline,
        project.category,
        project.status,
        ...(project.tags || []),
      ].join(' ').toLowerCase()

      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch)
      const matchesCategory = selectedCategory === allFilterValue || project.category === selectedCategory
      const matchesTechnology = selectedTechnology === allFilterValue || project.tags?.includes(selectedTechnology)

      return matchesSearch && matchesCategory && matchesTechnology
    })
  }, [searchTerm, selectedCategory, selectedTechnology])

  const hasActiveFilters = searchTerm || selectedCategory !== allFilterValue || selectedTechnology !== allFilterValue

  const resetFilters = () => {
    setSearchTerm('')
    setSelectedCategory(allFilterValue)
    setSelectedTechnology(allFilterValue)
  }

  return (
    <>
      <SEO
        title="Projects"
        description="Featured software, AI, ML, IoT, simulation, and web projects by Aaron Jalapon, including TanUM, Mindspace, RealiTech, AirFlow Sim, IQueue, podcastman, and more."
        url="/projects"
      />
      <div className="pt-20">
        {/* Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium mb-6">
                My Work
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Project <span className="gradient-text">Library</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Software, AI, ML, IoT, simulation, and product work collected into one searchable project library.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="section-container">
            <SectionHeader
              title="Featured Projects"
              subtitle="Deep-dive case studies and project cards from my most impactful work."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-lg p-4 md:p-6 mb-10"
            >
              <div className="grid gap-4 lg:grid-cols-3">
                <label className="lg:col-span-2">
                  <span className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                    Search
                  </span>
                  <span className="relative block">
                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      className="w-full pl-11 pr-4 py-3 glass rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Search by title, role, category, or tech"
                    />
                  </span>
                </label>

                <label>
                  <span className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                    Technology
                  </span>
                  <select
                    value={selectedTechnology}
                    onChange={(event) => setSelectedTechnology(event.target.value)}
                    className="w-full px-4 py-3 glass rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    {technologies.map((technology) => (
                      <option key={technology} value={technology}>
                        {technology === allFilterValue ? 'All technologies' : technology}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-5" aria-label="Project categories">
                <span className="inline-flex items-center gap-2 mr-1 text-sm text-gray-500 dark:text-gray-400">
                  <SlidersHorizontal size={16} />
                  Category
                </span>
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={selectedCategory === category}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white/30 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-white/20'
                    }`}
                  >
                    {category === allFilterValue ? 'All categories' : category}
                  </button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-5 pt-5 border-t border-gray-200/50 dark:border-white/10">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredProjects.length} of {allProjects.length} featured projects
                </p>
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <X size={16} />
                    Reset filters
                  </button>
                )}
              </div>
            </motion.div>

            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  No projects match those filters
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try a broader search or clear the active filters.
                </p>
                <button type="button" onClick={resetFilters} className="btn-primary gap-2">
                  <X size={18} />
                  Reset filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* GitHub CTA */}
        <section className="section-padding">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Want to See More?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Check out my GitHub for more projects, code samples, and open-source contributions.
              </p>
              <a
                href="https://github.com/aaronjalapon"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View GitHub Profile
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
