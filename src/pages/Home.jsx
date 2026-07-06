import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'
import { spotlightProjects } from '../data/projects'
import { socialLinks } from '../data/socials'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Aaron Jalapon Arquillano — Software & ML Engineer building user-first web apps and AI systems. Portfolio featuring TanUM, IQueue, Banana Grading, and Mindspace projects."
        url="/"
      />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        <div className="section-container relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Software & ML Engineer
              </span>
              
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                  <span className="gradient-text">Aaron Jalapon Arquillano</span>
                </h1>
              </div>
              
              <TextGenerateEffect 
                words="Product-minded Developer"
                className="text-xl mb-4"
                duration={0.3}
              />
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
                I design user-first web apps and AI systems that solve real problems — 
                from sustainable farming to mental health and property tech.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/projects" className="btn-primary gap-2">
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <a href="/resume.pdf" target="_blank" className="btn-outline gap-2">
                  <Download size={18} />
                  Download Résumé
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass-button rounded-lg text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-black/20 dark:from-white/20 dark:to-white/5 rounded-full blur-2xl opacity-60" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/70 dark:border-white/20 shadow-2xl shadow-black/20">
                  <img 
                    src="/profile-light.png" 
                    alt="Aaron Jalapon Arquillano"
                    className="w-full h-full object-cover dark:hidden"
                  />
                  <img 
                    src="/profile-dark.png" 
                    alt="Aaron Jalapon Arquillano"
                    className="w-full h-full object-cover hidden dark:block"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <a href="#featured" className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="section-padding transition-colors duration-300">
        <div className="section-container">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Spotlight on selected case studies, with the full searchable project library one click away."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {spotlightProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects" className="btn-outline gap-2">
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">
                <span className="gradient-text">About Me</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                I'm Aaron Jalapon Arquillano, a BS Computer Science student and product-minded developer 
                focused on AI/ML-driven solutions and user-centered front ends. I build software 
                that bridges technical innovation and real-world impact — examples include 
                <span className="text-primary"> TanUM</span> (smart soil & fertilizer optimization), 
                <span className="text-primary"> Banana Grading</span> (computer-vision quality inspection),
                <span className="text-primary"> IQueue</span> (AI-powered smart boarding), and
                <span className="text-primary"> Mindspace</span> (student mental-health UI).
                I'm passionate about sustainable tech, practical ML, and shipping polished, 
                maintainable code.
              </p>
              <Link to="/about" className="btn-primary gap-2">
                Learn More About Me
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding transition-colors duration-300">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center glass-panel p-10 md:p-16 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Interested in working together? I'm always open to discussing new projects, 
              creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <a href="/resume.pdf" target="_blank" className="btn-outline gap-2">
                <Download size={18} />
                Download Résumé
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
