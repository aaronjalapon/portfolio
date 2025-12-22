import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft, ArrowRight, Calendar, Users, Github, ExternalLink, Download,
  Database, Cloud, Cpu, Bell, BarChart3, Leaf
} from 'lucide-react'

const techStack = [
  { name: 'Python', category: 'Backend' },
  { name: 'MQTT', category: 'IoT Protocol' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'scikit-learn', category: 'ML' },
  { name: 'React', category: 'Frontend' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'REST API', category: 'Integration' },
  { name: 'SMS Gateway', category: 'Notifications' },
]

const highlights = [
  {
    icon: Database,
    title: 'Data Ingestion',
    description: 'MQTT broker → ETL pipeline → time-series DB for multi-parameter soil data'
  },
  {
    icon: BarChart3,
    title: 'ML Models',
    description: 'Feature engineering from soil time-series, supervised learning for NPK depletion rates'
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Containerized model services with REST API for dashboard integration'
  },
  {
    icon: Bell,
    title: 'SMS Alerts',
    description: 'Real-time notifications for low-bandwidth users without smartphones'
  },
]

const metrics = [
  { label: 'Fertilizer Reduction', value: '20-30%', description: 'Reduced application in pilot farms' },
  { label: 'Cost Savings', value: '15-25%', description: 'Decreased input cost for partners' },
  { label: 'Response Time', value: '24-48 hours', description: 'Down from weeks for nutrient issues' },
]

export default function CaseStudyTanUM() {
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
                <Leaf size={16} />
                AgriTech / IoT
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                TanUM Nanotech Solutions
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                Smart Soil Monitoring & Nano Fertilizer Optimization
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <Users size={18} className="text-primary" />
                  Software & ML Lead
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  September 2025
                </span>
              </div>

              {/* TL;DR */}
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-xl mb-8">
                <p className="text-gray-300">
                  <strong className="text-white">TL;DR:</strong> IoT + cloud + ML system that monitors 
                  soil (NPK, pH, moisture, EC, temperature) in real time and gives automated fertilizer 
                  recommendations to reduce waste and improve yields.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/aaronjalapon/tanum" target="_blank" rel="noopener noreferrer" className="btn-primary gap-2">
                  <Github size={18} />
                  View Repository
                </a>
                <a href="https://tanum.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-outline gap-2">
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
              <div className="aspect-video bg-dark-700 rounded-2xl border border-white/10 overflow-hidden">
                <img 
                  src="/public/tanum.png" 
                  alt="TanUM Dashboard Screenshot"
                  className="w-full h-full object-cover"
                />
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
                Smallholder farmers and cooperatives often over-apply fertilizer because they lack 
                timely, actionable soil data. This causes unnecessary expense and soil degradation. 
                Traditional soil testing is expensive, time-consuming, and doesn't provide the 
                real-time insights farmers need to make informed decisions about fertilizer 
                application timing and quantities.
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
                I designed and implemented the cloud ingestion and ML pipeline for TanUM. Field devices 
                stream multi-parameter soil data to a cloud broker (MQTT/HTTP). I built data cleaning 
                and storage in a time-series store, then developed ML models that analyze nutrient trends 
                and recommend optimized fertilizer mixes and timings. Recommendations are delivered via 
                a web dashboard and SMS alerts so farmers without smartphones can still receive guidance.
              </p>
            </motion.div>

            {/* Technical Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                System <span className="gradient-text">Architecture</span>
              </h2>
              
              {/* Architecture Diagram Placeholder */}
              <div className="aspect-[16/9] bg-dark-700 rounded-2xl border border-white/10 flex items-center justify-center mb-8">
                <div className="text-center">
                  <Cpu size={48} className="text-gray-600 mx-auto mb-4" />
                  <span className="text-gray-600">Architecture Diagram</span>
                  <p className="text-gray-500 text-sm mt-2">
                    Sensor → MQTT → Cloud → ML → Dashboard/SMS
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
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
      <section className="section-padding bg-dark-800">
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Bullets */}
      <section className="section-padding">
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
                  Designed and implemented a cloud-based ingestion and visualization platform for IoT soil sensors
                </li>
                <li className="flex items-start gap-4 text-gray-300">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Built and deployed ML models that generate automated fertilizer recommendations integrated into a web dashboard and SMS alert system
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elevator Pitch */}
      <section className="section-padding bg-gradient-to-br from-green-500/10 via-dark-800 to-dark-900">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Elevator Pitch</h2>
            <blockquote className="text-xl text-gray-300 italic leading-relaxed">
              "TanUM uses low-cost soil sensors and ML to recommend precise fertilizer mixes and timing. 
              Farmers get SMS alerts and a dashboard so they can spend less on inputs, reduce soil damage, 
              and increase yields."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link 
              to="/projects" 
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              All Projects
            </Link>
            <Link 
              to="/projects/mindspace" 
              className="btn-primary gap-2"
            >
              Next: Mindspace
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
