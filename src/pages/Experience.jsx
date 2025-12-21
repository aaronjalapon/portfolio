import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, ArrowRight, Briefcase, GraduationCap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import TimelineItem from '../components/TimelineItem'

const experiences = [
  {
    title: 'Software & ML Lead',
    organization: 'TanUM Nanotech Solutions',
    period: 'Jan 2025 — Present',
    description: 'Designed and implemented cloud-based ingestion and visualization platform for IoT soil sensors. Built and deployed ML models that generate automated fertilizer recommendations integrated into a web dashboard and SMS alert system.',
    type: 'work',
  },
  {
    title: 'Sprint Lead / Product Owner',
    organization: 'RealiTech',
    period: '2025 — Present',
    description: 'Led sprint to prototype a buyer-assistant chatbot that guides users through loan pre-qualification and documentation. Coordinated product roadmap and integrations across four RealiTech modules.',
    type: 'work',
  },
  {
    title: 'Front-end Developer',
    organization: 'Mindspace',
    period: '2024',
    description: 'Built responsive, privacy-forward front-end UI for a student mental-health platform; implemented resource discovery and crisis support flows. Collaborated with mental-health professionals to translate clinical guidance into usable interfaces.',
    type: 'work',
  },
  {
    title: 'BS Computer Science',
    organization: 'University',
    period: '2021 — Present',
    description: 'Pursuing a Bachelor of Science in Computer Science with focus on AI/ML, software engineering, and product development.',
    type: 'education',
  },
]

const resumeHighlights = [
  {
    category: 'TanUM Nanotech',
    bullets: [
      'Designed and implemented a cloud-based ingestion and visualization platform for IoT soil sensors',
      'Built and deployed ML models that generate automated fertilizer recommendations',
      'Integrated web dashboard and SMS alert system for real-time farmer notifications',
    ]
  },
  {
    category: 'Mindspace',
    bullets: [
      'Built responsive, privacy-forward front-end UI for student mental-health platform',
      'Implemented resource discovery, guided meditations, and crisis support flows',
      'Collaborated with mental-health professionals on clinical UX patterns',
    ]
  },
  {
    category: 'RealiTech',
    bullets: [
      'Led sprint to prototype buyer-assistant chatbot for loan pre-qualification',
      'Coordinated product roadmap across four proptech modules',
      'Designed user profiling and document checklist generation features',
    ]
  },
]

export default function Experience() {
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
              Career Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience & <span className="gradient-text">Timeline</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              My professional journey in software development, machine learning, and product leadership.
            </p>
            <a href="/resume.pdf" target="_blank" className="btn-primary gap-2">
              <Download size={18} />
              Download Full Résumé
            </a>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader 
            title="Timeline"
            subtitle="Key roles and milestones in my career."
          />

          <div className="max-w-3xl mx-auto">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineItem 
                  item={item} 
                  isLast={index === experiences.length - 1}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Highlights */}
      <section className="section-padding bg-dark-800">
        <div className="section-container">
          <SectionHeader 
            title="Resume Highlights"
            subtitle="Key accomplishments from my featured projects."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {resumeHighlights.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{section.category}</h3>
                <ul className="space-y-3">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader 
            title="Awards & Recognition"
            subtitle="Achievements and acknowledgments from competitions and hackathons."
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Proptech Hackestate - Preliminary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card border-l-4 border-primary"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Top 3 — Preliminary Round</h3>
                  <p className="text-primary font-medium">Proptech Hackestate Hackathon</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">July 30, 2025</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>Project:</strong> RealiTech
              </p>
              <p className="text-gray-400">
                Selected among the Top 3 teams during the preliminary round for presenting a scalable proptech solution focused on homebuyer assistance and process automation.
              </p>
            </motion.div>

            {/* Proptech Hackestate - Finals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card border-l-4 border-yellow-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Best UX Award & Top 5 Finalist — Finals</h3>
                  <p className="text-yellow-500 font-medium">Proptech Hackestate Hackathon</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">August 27, 2025</span>
              </div>
              <p className="text-gray-300 mb-3">
                <strong>Project:</strong> RealiTech @ Grand Regal Hotel & Casino
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                  Awarded Best User Experience (UX) for intuitive design, clarity of buyer journey, and effective chatbot-guided workflows
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                  Recognized as a Top 5 Finalist among competing proptech teams nationwide
                </li>
              </ul>
            </motion.div>

            {/* Innovation Olympics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card border-l-4 border-blue-400"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">First Runner-Up</h3>
                  <p className="text-blue-400 font-medium">Innovation Olympics 3.0</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">September 2–3, 2025</span>
              </div>
              <p className="text-gray-300 mb-3">
                University of the Philippines Los Baños
              </p>
              <p className="text-gray-400">
                Achieved First Runner-Up for presenting a high-impact, innovation-driven solution evaluated on feasibility, innovation, and societal impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-dark-800 to-dark-900">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-400 mb-8">
              Interested in my experience? Let's discuss how I can contribute to your team or project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary gap-2">
                Contact Me
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
    </div>
  )
}
