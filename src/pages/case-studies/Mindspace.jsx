import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, ArrowRight, Calendar, Users, Github, ExternalLink,
  Shield, Heart, Search, Phone, Layout, Accessibility
} from 'lucide-react'

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Component Library', category: 'UI' },
  { name: 'Accessible Forms', category: 'A11y' },
  { name: 'Lazy Loading', category: 'Performance' },
  { name: 'Responsive Design', category: 'UX' },
  { name: 'CSS Modules', category: 'Styling' },
]

const features = [
  {
    icon: Search,
    title: 'Resource Discovery',
    description: 'Search and filtering for mental health resources and self-help content'
  },
  {
    icon: Heart,
    title: 'Guided Meditations',
    description: 'Step-by-step meditation flows with progress tracking and session completion'
  },
  {
    icon: Users,
    title: 'Peer Support',
    description: 'Moderated community threads for safe, anonymous peer interactions'
  },
  {
    icon: Phone,
    title: 'Crisis Integration',
    description: 'Quick-access crisis hotline modal and immediate help resources'
  },
]

const accessibilityFeatures = [
  'WCAG 2.1 AA compliant',
  'Keyboard navigation',
  'Screen reader friendly',
  'High contrast mode',
  'Focus indicators',
  'Alt text for all media',
]

const metrics = [
  { label: 'Session Completion', value: 'X%', description: 'Improvement after UI updates' },
  { label: 'Time-to-Resource', value: 'Y%', description: 'Reduction in search time' },
  { label: 'Privacy Score', value: 'A+', description: 'No public PII exposure' },
]

export default function CaseStudyMindspace() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-6">
                <Heart size={16} />
                Mental Health / UX
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Mindspace
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                Student Mental Health Support Platform
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  Front-end Developer
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  2024
                </span>
              </div>

              {/* TL;DR */}
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl mb-8">
                <p className="text-gray-300">
                  <strong className="text-white">TL;DR:</strong> Front-end developer for Mindspace — 
                  a secure, accessible platform offering self-help resources, guided meditations, 
                  moderated peer support, and crisis integration for students.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-primary gap-2">
                  <Github size={18} />
                  View Repository
                </a>
                <a href="#" className="btn-outline gap-2">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-dark-700 rounded-2xl border border-white/10 flex items-center justify-center">
                <span className="text-gray-600 text-lg">UI Screenshot</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The <span className="gradient-text">Problem</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Students face significant stress and limited access to mental-health resources. 
                Stigma surrounding mental health and concerns about privacy create substantial 
                barriers to help-seeking behavior. Many students don't know where to turn for 
                support, and existing resources are often difficult to navigate or don't feel 
                safe for those seeking help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                The <span className="gradient-text">Solution</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I built the responsive front-end UI for Mindspace's resource library, meditation flows, 
                and community support features. Focus areas were accessibility, privacy-first UI design 
                (no public PII), and intuitive flows for seeking immediate help (crisis hotline integration). 
                I translated mental-health advisor research into screens and interactions, and implemented 
                responsive components compatible with mobile and low-bandwidth contexts.
              </p>
            </motion.div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {features.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Accessibility size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Accessibility <span className="gradient-text">First</span>
                </h2>
              </div>
              
              <p className="text-gray-300 mb-8">
                Given the sensitive nature of mental health support, accessibility was paramount. 
                The platform was designed to be usable by everyone, regardless of ability.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {accessibilityFeatures.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-dark-700 rounded-xl"
                  >
                    <Shield size={18} className="text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Tech <span className="gradient-text">Stack</span>
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span 
                    key={tech.name}
                    className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg text-sm"
                  >
                    {tech.name}
                    <span className="text-gray-500 ml-2">({tech.category})</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Impact & <span className="gradient-text">Metrics</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card text-center"
                  >
                    <p className="text-4xl font-bold gradient-text mb-2">{metric.value}</p>
                    <p className="text-white font-medium mb-1">{metric.label}</p>
                    <p className="text-gray-500 text-sm">{metric.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="card bg-yellow-500/10 border-yellow-500/20">
                <p className="text-yellow-300 text-sm">
                  <strong>Note:</strong> Replace X% and Y% with actual user engagement and usability 
                  test metrics as they become available.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Bullets */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Resume <span className="gradient-text">Highlights</span>
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-gray-300">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Built responsive, privacy-forward front-end UI for a student mental-health platform; implemented resource discovery and crisis support flows
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Collaborated with mental-health professionals to translate clinical guidance into usable interfaces
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elevator Pitch */}
      <section className="section-padding bg-gradient-to-br from-purple-500/10 via-dark-800 to-dark-900">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Elevator Pitch</h2>
            <blockquote className="text-xl text-gray-300 italic leading-relaxed">
              "Mindspace is a privacy-first student mental health app that bundles guided meditations, 
              curated resources, and moderated peer support—designed to make help-seeking safe and accessible."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              to="/projects/tanum" 
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              Previous: TanUM
            </Link>
            <Link 
              to="/projects/realitech" 
              className="btn-primary gap-2"
            >
              Next: RealiTech
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
