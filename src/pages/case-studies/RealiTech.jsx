import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, ArrowRight, Calendar, Users, Github, ExternalLink,
  Home, MessageSquare, FileCheck, Building2, Users2, Workflow
} from 'lucide-react'

const techStack = [
  { name: 'Node.js', category: 'Backend' },
  { name: 'Conversational AI', category: 'Chatbot' },
  { name: 'React', category: 'Frontend' },
  { name: 'User Profiling', category: 'Logic' },
  { name: 'API Integration', category: 'Services' },
  { name: 'Figma', category: 'Design' },
]

const modules = [
  {
    icon: Building2,
    title: 'DevTrackr',
    description: 'Construction progress tracking and milestone management for developers'
  },
  {
    icon: Users2,
    title: 'RealtyConnect',
    description: 'Agent and developer contact routing and communication platform'
  },
  {
    icon: Home,
    title: 'BuySmart PH',
    description: 'Buyer-assistant chatbot with loan pre-qualification and document guidance'
  },
  {
    icon: FileCheck,
    title: 'Post-Sale Platform',
    description: 'Post-purchase tracking, documentation, and homeowner services'
  },
]

const chatbotFeatures = [
  'Loan pre-qualification guidance',
  'Document checklist generation',
  'User profiling & matching',
  'Financing options comparison',
  'Agent/developer routing',
  'Construction progress updates',
]

const metrics = [
  { label: 'Pre-qual Time', value: 'X%', description: 'Reduction in guidance time' },
  { label: 'User Confidence', value: 'Y%', description: 'Higher next-step clarity' },
  { label: 'Sprint Duration', value: '1 Week', description: 'Prototype completion' },
]

export default function CaseStudyRealiTech() {
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
                <Home size={16} />
                PropTech / Product
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                RealiTech
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                Proptech Ecosystem & Buyer Assistant Chatbot
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  Sprint Lead / Product Owner
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  2025 — Present
                </span>
              </div>

              {/* TL;DR */}
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl mb-8">
                <p className="text-gray-300">
                  <strong className="text-white">TL;DR:</strong> Multi-solution proptech ecosystem 
                  (DevTrackr, RealtyConnect, BuySmart PH, Post-Sale Platform) featuring a buyer-assistant 
                  chatbot to guide homebuyers through financing and document processes.
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
                  Demo Video
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
                <span className="text-gray-600 text-lg">Chatbot Demo Screenshot</span>
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
                Homebuyers struggle with fragmented processes, unclear loan pre-qualification 
                requirements, and complex post-sale construction tracking. The traditional 
                homebuying journey involves multiple disconnected systems, confusing documentation 
                requirements, and a lack of guidance on financing options — leading to delays, 
                frustration, and abandoned purchases.
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
                I led a one-week sprint to prototype the buyer-assistant chatbot and buyer profiling 
                logic. The assistant helps users pre-qualify for loans, check required documents, and 
                receive updates on construction progress. Beyond the chatbot, I helped shape the product 
                roadmap and integrated buyer-profiling outputs to match user financing options.
              </p>
            </motion.div>

            {/* Modules */}
            <h3 className="text-xl font-semibold text-white mb-6 mt-12">Platform Modules</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                    <module.icon size={24} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{module.title}</h3>
                  <p className="text-gray-400">{module.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Features */}
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
                  <MessageSquare size={24} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Chatbot <span className="gradient-text">Features</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {chatbotFeatures.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center gap-3 p-4 bg-dark-700 rounded-xl"
                  >
                    <Workflow size={18} className="text-primary flex-shrink-0" />
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
                  <strong>Note:</strong> Replace X% and Y% with actual user testing results 
                  and pilot metrics as they become available.
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
                  Led sprint to prototype a buyer-assistant chatbot that guides users through loan pre-qualification and documentation
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Coordinated product roadmap and integrations across four RealiTech modules
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elevator Pitch */}
      <section className="section-padding bg-gradient-to-br from-blue-500/10 via-dark-800 to-dark-900">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Elevator Pitch</h2>
            <blockquote className="text-xl text-gray-300 italic leading-relaxed">
              "RealiTech is an end-to-end proptech ecosystem. I led the chatbot sprint that helps 
              buyers pre-qualify loans, track documents, and get construction updates—reducing 
              friction in homebuying."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              to="/projects/mindspace" 
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              Previous: Mindspace
            </Link>
            <Link 
              to="/projects" 
              className="btn-primary gap-2"
            >
              All Projects
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
