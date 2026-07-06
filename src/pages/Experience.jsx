import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Download, ArrowRight, Briefcase, GraduationCap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import TimelineItem from '../components/TimelineItem'
import { Timeline } from '../components/ui/timeline'
import SEO from '../components/SEO'

const volunteerExperiences = [
  {
    title: 'Campus Torchbearer & Ambassador',
    organization: 'Wadhwani Foundation Philippines',
    period: 'Nov 2024 — Present',
    description: 'Representing and promoting entrepreneurship and innovation initiatives on campus, connecting students with resources and opportunities from Wadhwani Foundation.',
    type: 'volunteer',
  },
  {
    title: 'Programs Committee Member',
    organization: 'Google Developer Group - Davao',
    period: 'Apr 2025 — Dec 2025',
    description: 'Handled the program flow of community events from registration to execution, ensuring smooth event operations and engaging attendee experiences.',
    type: 'volunteer',
  },
  {
    title: 'Community Events Management Committee',
    organization: 'Davao Startup Week',
    period: 'Jul 2025 — Sep 2025',
    description: 'Contributed to organizing and managing community events during Davao Startup Week, supporting the local startup ecosystem.',
    type: 'volunteer',
  },
  {
    title: 'Communications Committee Member',
    organization: 'DurianPy - Davao Python User Group',
    period: 'Jul 2025 — Oct 2025',
    description: 'Managed communications and outreach for the local Python community, helping promote events and engage with members.',
    type: 'volunteer',
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
    category: 'IQueue',
    bullets: [
      'Built full-stack passenger and operator flows for an AI smart boarding platform',
      'Integrated forecasting, seat assignment, and signed QR boarding validation services',
      'Connected multilingual passenger support with evidence-aware demo workflows',
    ]
  },
  {
    category: 'Banana Grading System',
    bullets: [
      'Trained Faster R-CNN detector for banana localization in RGB images',
      'Built VGG16 transfer-learning classifiers for maturity, quality, size, and view',
      'Shipped a Streamlit grading interface with confidence scores and visual results',
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
  {
    category: 'podcastman',
    bullets: [
      'Built article ingestion for URL, raw text, and Markdown sources',
      'Orchestrated RAG and LangGraph stages for grounded two-host podcast scripts',
      'Implemented TTS synthesis, audio assembly, tests, and deployment scripts',
    ]
  },
  {
    category: 'Crop Price Prediction',
    bullets: [
      'Engineered time-aware market, crop, seasonal, and lag features for forecasting',
      'Compared Random Forest and XGBoost with chronological validation and TimeSeriesSplit',
      'Built a Streamlit dashboard with predictions, confidence intervals, and Plotly charts',
    ]
  },
]

const projectMilestones = {
  2026: [
    {
      title: 'IQueue',
      period: 'May-Jun 2026',
      role: 'Full-stack Developer / AI-ML Systems Developer',
      description: 'Built major full-stack and AI system pieces for smart bus boarding: forecasting services, seat assignment, signed QR validation, passenger/operator flows, and demo workflow.',
    },
    {
      title: 'AirFlow Sim',
      period: 'Apr-May 2026',
      role: 'Solo Developer / Simulation Engineer',
      description: 'Built a real-time HVAC airflow simulator with a FastAPI solver, WebSocket streaming, React visualization dashboard, validation tests, and Docker setup.',
    },
    {
      title: 'podcastman',
      period: 'Feb-Mar 2026',
      role: 'Full-stack AI Engineer / Solo Developer',
      description: 'Built a blog-to-podcast system with source ingestion, RAG, LangGraph orchestration, Google Cloud TTS synthesis, audio assembly, tests, and deployment scripts.',
    },
    {
      title: 'Banana Grading System',
      period: 'Jan-Mar 2026',
      role: 'Sole Developer / ML Engineer',
      description: 'Built a Streamlit computer-vision workflow that detects banana regions, crops them automatically, and grades maturity, quality, size, and view with PyTorch models.',
    },
  ],
  2025: [
    {
      title: 'TanUM Nanotech Solutions',
      period: 'Aug 2025 - Present',
      role: 'Software & ML Lead',
      description: 'Designed cloud ingestion, data cleaning, time-series storage, ML recommendation logic, dashboard integration, and low-bandwidth SMS alerts for IoT soil monitoring.',
    },
    {
      title: 'RealiTech',
      period: 'Aug-Sep 2025',
      role: 'Sprint Lead / Product Owner',
      description: 'Led a compressed proptech sprint, shaped the product roadmap, prototyped buyer-assistant chatbot flows, and integrated buyer-profiling logic for financing guidance.',
    },
    {
      title: 'Crop Price Prediction (Senegal)',
      period: 'Nov-Dec 2025',
      role: 'Machine Learning Engineer / Full-Stack Data App Developer',
      description: 'Handled data analysis, time-aware feature engineering, model training, evaluation, serialization, and a Streamlit forecasting interface for staple crop prices.',
    },
    {
      title: 'Flappy Bird Physics Demo',
      period: 'Nov-Dec 2025',
      role: 'Flutter/Game Developer',
      description: 'Built gameplay, UI, and physics systems for a Flutter game that teaches gravity through planetary motion, live physics readouts, quizzes, and persistent progress.',
    },
    {
      title: 'Mindspace',
      period: 'Jan-Mar 2025',
      role: 'Front-end Developer',
      description: 'Built a responsive, privacy-forward mental-health interface with resource discovery, guided meditation flows, moderated peer support, and crisis help entry points.',
    },
    {
      title: 'TanimPro',
      period: 'Jan 2025',
      role: 'Developer',
      description: 'Contributed to a climate-smart agriculture platform focused on weather forecasts, farming recommendations, API integration, and data visualization.',
    },
  ],
  2024: [
    {
      title: 'GoalBuddy',
      period: 'Nov 2024',
      role: 'Full-stack Developer',
      description: 'Built a productivity app concept for goal tracking, habit formation, personalized insights, and social accountability using a React, Node.js, and MongoDB stack.',
    },
  ],
}

function TimelineCard({ item, type = 'project' }) {
  const Icon = type === 'education' ? GraduationCap : Briefcase
  const iconClass = 'text-primary'
  const iconBgClass = 'bg-primary/10'
  const roleClass = 'text-primary'

  return (
    <div className="card">
      <div className="flex items-start gap-3">
        <div className={`p-2 ${iconBgClass} rounded-lg`}>
          <Icon className={iconClass} size={20} />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <span className="text-sm text-gray-500">{item.period}</span>
          </div>
          <p className={`${roleClass} font-medium text-sm mb-3`}>{item.role}</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

const renderProjectMilestones = (items) => (
  <div className="space-y-6">
    {items.map((item) => (
      <TimelineCard key={item.title} item={item} />
    ))}
  </div>
)

const timelineData = [
  {
    title: '2026',
    content: renderProjectMilestones(projectMilestones[2026]),
  },
  {
    title: '2025',
    content: renderProjectMilestones(projectMilestones[2025]),
  },
  {
    title: '2024',
    content: renderProjectMilestones(projectMilestones[2024]),
  },
  {
    title: '2023',
    content: (
      <TimelineCard
        type="education"
        item={{
          title: 'BS Computer Science',
          period: '2023 — Present',
          role: 'University',
          description: 'Pursuing a Bachelor of Science in Computer Science with focus on AI/ML, software engineering, and product development.',
        }}
      />
    ),
  },
]

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Project milestones and experience timeline of Aaron Jalapon — Software & ML Lead at TanUM, builder of IQueue, RealiTech, Mindspace, and more."
        url="/experience"
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
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Career Journey
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & <span className="gradient-text">Timeline</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
              My project-building journey across software development, machine learning, simulation, and product leadership.
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
            subtitle="Key projects and milestones from my portfolio."
          />

          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Volunteer & Community */}
      <section className="section-padding transition-colors duration-300">
        <div className="section-container">
          <SectionHeader 
            title="Volunteer & Community"
            subtitle="Contributing to tech communities and organizations."
          />

          <div className="max-w-3xl mx-auto">
            {volunteerExperiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TimelineItem 
                  item={item} 
                  isLast={index === volunteerExperiences.length - 1}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Highlights */}
      <section className="section-padding">
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
                    <li key={bulletIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm">
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
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Top 3 — Preliminary Round</h3>
                  <p className="text-primary font-medium">Proptech Hackestate Hackathon</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">July 30, 2025</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>Project:</strong> RealiTech
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Selected among the Top 3 teams during the preliminary round for presenting a scalable proptech solution focused on homebuyer assistance and process automation.
              </p>
            </motion.div>

            {/* Proptech Hackestate - Finals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card border-l-4 border-primary"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Best UX Award & Top 5 Finalist — Finals</h3>
                  <p className="text-primary font-medium">Proptech Hackestate Hackathon</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">August 27, 2025</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>Project:</strong> RealiTech @ Grand Regal Hotel & Casino
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  Awarded Best User Experience (UX) for intuitive design, clarity of buyer journey, and effective chatbot-guided workflows
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
              className="card border-l-4 border-primary"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">First Runner-Up</h3>
                  <p className="text-primary font-medium">Innovation Olympics 3.0</p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">September 2–3, 2025</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <strong>Project:</strong> TanUM Nanotech Solutions @ University of the Philippines Los Baños
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Achieved First Runner-Up for presenting a high-impact, innovation-driven solution evaluated on feasibility, innovation, and societal impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding transition-colors duration-300">
        <div className="section-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center glass-panel p-10 md:p-16 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
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
    </>
  )
}
