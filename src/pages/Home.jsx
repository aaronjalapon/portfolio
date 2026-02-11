import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram, ChevronDown } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import SEO from '../components/SEO'
import InteractiveHeroBg from '../components/InteractiveHeroBg'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'
import { image } from 'framer-motion/client'

const featuredProjects = [
  {
    title: 'TanUM Nanotech Solutions',
    slug: 'tanum',
    tagline: 'IoT + ML system for real-time soil monitoring and data-driven fertilizer recommendations that reduces waste and improves yields.',
    role: 'Software & ML Lead',
    timeline: 'Jan 2025 — Present',
    tags: ['Python', 'Machine Learning', 'React'],
    featured: true,
    image: '/tanum.png',
    link: 'https://tanum.vercel.app/',
    github: 'https://github.com/aaronjalapon/TanUM_NanoTechSolutions',
  },
  {
    title: 'Mindspace',
    slug: 'mindspace',
    tagline: 'Privacy-first student mental health platform with guided meditations, curated resources, and moderated peer support.',
    role: 'Front-end Developer',
    timeline: '2024',
    tags: ['Javascript', 'Accessibility', 'UX Design'],
    featured: true,
    image: '/mindspace.png',
    link: 'https://mindspace.infinityfreeapp.com/?i=1',
    github: 'https://github.com/aaronjalapon/Mental_Health_Support_Site',
  },
  {
    title: 'RealiTech',
    slug: 'realitech',
    tagline: 'End-to-end proptech ecosystem featuring a buyer-assistant chatbot to guide homebuyers through financing and documents.',
    role: 'Sprint Lead / Product Owner',
    timeline: '2025 — Present',
    tags: ['Node.js', 'Chatbot', 'Product Management'],
    featured: true,
    image: '/realitech.png',
    link: 'https://um-realitech-hackestate-1ed69.web.app/',
    github: 'https://github.com/aaronjalapon/UM-RealiTech-Frontend-RealEstate',
  },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aaron-jalapon-5aba74290/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/aaronjalapon', label: 'GitHub' },
  { icon: Twitter, href: 'https://x.com/Itisaaron18', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/aeyrown18/', label: 'Instagram' },
]

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Aaron Jalapon — Software & ML Engineer building user-first web apps and AI systems. Portfolio featuring TanUM, Mindspace, and RealiTech projects."
        url="/"
      />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <InteractiveHeroBg />
        
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
                  <span className="text-white">Hi, I'm </span>
                  <span className="gradient-text">Aaron Jalapon</span>
                </h1>
              </div>
              
              <TextGenerateEffect 
                words="Product-minded Developer"
                className="text-xl mb-4"
                duration={0.3}
              />
              
              <p className="text-gray-400 text-lg mb-8 max-w-xl">
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
                    className="p-3 bg-dark-700 rounded-xl text-gray-400 hover:text-primary hover:bg-dark-600 transition-all hover:scale-110"
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-500 rounded-full blur-2xl opacity-30" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30">
                  <img 
                    src="/fb.jpeg" 
                    alt="Aaron Jalapon"
                    className="w-full h-full object-cover"
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
            <a href="#featured" className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" className="section-padding bg-dark-800">
        <div className="section-container">
          <SectionHeader 
            title="Featured Projects"
            subtitle="Spotlight on TanUM Nanotech Solutions, Mindspace, and RealiTech — my most impactful work in Web, ML, and product development."
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
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm Aaron Jalapon, a BS Computer Science student and product-minded developer 
                focused on AI/ML-driven solutions and user-centered front ends. I build software 
                that bridges technical innovation and real-world impact — examples include 
                <span className="text-primary"> TanUM</span> (smart soil & fertilizer optimization), 
                <span className="text-primary"> Mindspace</span> (student mental-health UI), and 
                <span className="text-primary"> RealiTech</span> (proptech ecosystem). 
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
      <section className="section-padding bg-gradient-to-br from-primary/10 via-dark-800 to-dark-900">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h2>
            <p className="text-gray-400 text-lg mb-8">
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
