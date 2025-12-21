import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

const featuredProjects = [
  {
    title: 'TanUM Nanotech Solutions',
    slug: 'tanum',
    tagline: 'IoT + ML system for real-time soil monitoring and data-driven fertilizer recommendations that reduces waste and improves yields.',
    role: 'Software & ML Lead',
    timeline: 'Jan 2025 — Present',
    tags: ['Python', 'IoT', 'Machine Learning', 'MQTT', 'React', 'Time-Series'],
    featured: true,
    image: '/tanum.png',
    link: 'https://tanum.vercel.app/',
    github: 'https://github.com/aaronjalapon/tanum',
  },
  {
    title: 'Mindspace',
    slug: 'mindspace',
    tagline: 'Privacy-first student mental health platform with guided meditations, curated resources, and moderated peer support.',
    role: 'Front-end Developer',
    timeline: '2024',
    tags: ['React', 'Accessibility', 'UX Design', 'Privacy-first'],
    featured: true,
    image: '/mindspace.png',
    link: 'https://mindspace.infinityfreeapp.com/?i=1',
    github: 'https://github.com/aaronjalapon/mindspace',
  },
  {
    title: 'RealiTech',
    slug: 'realitech',
    tagline: 'End-to-end proptech ecosystem featuring a buyer-assistant chatbot to guide homebuyers through financing and documents.',
    role: 'Sprint Lead / Product Owner',
    timeline: '2025 — Present',
    tags: ['Node.js', 'Chatbot', 'Product Management', 'UX'],
    featured: true,
    image: '/realitech.png',
    link: 'https://um-realitech-hackestate-1ed69.web.app/',
    github: 'https://github.com/aaronjalapon/realitech',
  },
]

const otherProjects = [
  {
    title: 'GoalBuddy',
    slug: 'goalbuddy',
    tagline: 'Goal tracking and habit formation app with personalized insights and social accountability features.',
    role: 'Full-stack Developer',
    timeline: '2024',
    tags: ['React', 'Node.js', 'MongoDB'],
    featured: false,
    image: '/goalbuddy-preview.png',
  },
  {
    title: 'Agriklima',
    slug: 'agriklima',
    tagline: 'Climate-smart agriculture platform providing weather forecasts and farming recommendations.',
    role: 'Developer',
    timeline: '2024',
    tags: ['Python', 'API Integration', 'Data Viz'],
    featured: false,
    image: '/agriklima-preview.png',
  },
]

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              My Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Spotlighting TanUM Nanotech Solutions, Mindspace, and RealiTech — 
              IoT + ML + front-end engineering projects that solve real problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Deep-dive case studies into my most impactful work."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <SectionHeader 
            title="Other Projects"
            subtitle="Additional work showcasing my range of skills and interests."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-hover"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.tagline}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-dark-600 text-gray-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{project.role}</span>
                  <span>{project.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to See More?
            </h2>
            <p className="text-gray-400 mb-8">
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
  )
}
